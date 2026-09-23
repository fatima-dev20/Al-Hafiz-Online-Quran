import teacherModel from "../model/teacher.model.js";
import userModel from "../model/user.model.js";
import cloudinary from "../config/cloudinary.js";


// ==================== APPLY AS TEACHER ====================
export const applyAsTeacher = async (req, res) => {
  try {
    const userId = req.user._id;

    const existing = await teacherModel.findOne({ user: userId });

    if (existing) {
      if (existing.status === "pending") {
        return res.status(400).json({
          success: false,
          message: "Your application is already pending",
        });
      }
      if (existing.status === "approved") {
        return res.status(400).json({
          success: false,
          message: "You are already an approved teacher",
        });
      }
      await teacherModel.findByIdAndDelete(existing._id);
    }

    const {
      fullName, fatherName, cnic, dateOfBirth, gender, phone, whatsapp,
      country, city, qualification, islamicQualification, experience,
      about, subjects, languages, availableDays,
      availableTimeFrom, availableTimeTo, expectedSalary,
    } = req.body;

    if (
      !fullName || !fatherName || !cnic || !dateOfBirth || !gender ||
      !phone || !country || !city || !qualification ||
      !islamicQualification || !subjects || !languages
    ) {
      return res.status(400).json({
        success: false,
        message: "Please fill all required fields",
      });
    }

    const cnicExists = await teacherModel.findOne({ cnic });
    if (cnicExists) {
      return res.status(409).json({
        success: false,
        message: "CNIC already registered",
      });
    }

    const cnicFront = req.files?.cnicFront?.[0]?.path;
    const cnicBack = req.files?.cnicBack?.[0]?.path;
    const certificateImage = req.files?.certificateImage?.[0]?.path;
    const videoIntro = req.files?.videoIntro?.[0]?.path;
    const profileImage = req.files?.profileImage?.[0]?.path;

    if (!cnicFront || !cnicBack) {
      return res.status(400).json({
        success: false,
        message: "CNIC front and back images are required",
      });
    }

    const newTeacher = await teacherModel.create({
      user: userId,
      fullName, fatherName, cnic, dateOfBirth, gender,
      phone,
      whatsapp: whatsapp || phone,
      country, city, qualification, islamicQualification,
      experience: Number(experience) || 0,
      about: about || "",
      subjects: Array.isArray(subjects) ? subjects : JSON.parse(subjects),
      languages: Array.isArray(languages) ? languages : JSON.parse(languages),
      availableDays: availableDays
        ? Array.isArray(availableDays) ? availableDays : JSON.parse(availableDays)
        : [],
      availableTime: {
        from: availableTimeFrom || "",
        to: availableTimeTo || "",
      },
      expectedSalary: Number(expectedSalary) || 0,
      cnicFront, cnicBack,
      certificateImage: certificateImage || "",
      videoIntro: videoIntro || "",
      profileImage: profileImage || "",
      status: "pending",
    });

    return res.status(201).json({
      success: true,
      message: "Application submitted. Please wait for approval.",
      teacher: newTeacher,
    });
  } catch (error) {
    console.log("APPLY TEACHER ERROR:", error);
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};


// ==================== GET MY APPLICATION ====================
export const getMyTeacherApplication = async (req, res) => {
  try {
    const application = await teacherModel.findOne({ user: req.user._id });

    if (!application) {
      return res.status(404).json({
        success: false,
        message: "No teacher application found",
      });
    }

    return res.status(200).json({
      success: true,
      application,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};


// ==================== UPDATE APPLICATION ====================
export const updateTeacherApplication = async (req, res) => {
  try {
    const application = await teacherModel.findOne({ user: req.user._id });

    if (!application) {
      return res.status(404).json({
        success: false,
        message: "Application not found",
      });
    }

    if (application.status === "approved") {
      return res.status(400).json({
        success: false,
        message: "Approved application cannot be updated",
      });
    }

    const allowed = [
      "fullName", "fatherName", "phone", "whatsapp", "country", "city",
      "qualification", "islamicQualification", "experience", "about",
      "subjects", "languages", "availableDays", "expectedSalary",
    ];

    allowed.forEach((field) => {
      if (req.body[field] !== undefined) {
        application[field] = req.body[field];
      }
    });

    if (req.body.availableTimeFrom || req.body.availableTimeTo) {
      application.availableTime = {
        from: req.body.availableTimeFrom || application.availableTime.from,
        to: req.body.availableTimeTo || application.availableTime.to,
      };
    }

    if (req.files?.cnicFront?.[0]?.path) application.cnicFront = req.files.cnicFront[0].path;
    if (req.files?.cnicBack?.[0]?.path) application.cnicBack = req.files.cnicBack[0].path;
    if (req.files?.certificateImage?.[0]?.path) application.certificateImage = req.files.certificateImage[0].path;
    if (req.files?.videoIntro?.[0]?.path) application.videoIntro = req.files.videoIntro[0].path;
    if (req.files?.profileImage?.[0]?.path) application.profileImage = req.files.profileImage[0].path;

    if (application.status === "rejected") {
      application.status = "pending";
      application.rejectionReason = "";
    }

    await application.save();

    return res.status(200).json({
      success: true,
      message: "Application updated successfully",
      application,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};


// ==================== ADMIN: GET ALL ====================
export const getAllTeacherApplications = async (req, res) => {
  try {
    const { status, page = 1, limit = 10, search = "" } = req.query;

    const query = {};
    if (status) query.status = status;

    if (search) {
      query.$or = [
        { fullName: { $regex: search, $options: "i" } },
        { cnic: { $regex: search, $options: "i" } },
        { phone: { $regex: search, $options: "i" } },
        { city: { $regex: search, $options: "i" } },
      ];
    }

    const skip = (Number(page) - 1) * Number(limit);

    const [applications, total] = await Promise.all([
      teacherModel
        .find(query)
        .populate("user", "name email profileImage isVerified")
        .sort({ createdAt: -1 })
        .skip(skip)
        .limit(Number(limit)),
      teacherModel.countDocuments(query),
    ]);

    return res.status(200).json({
      success: true,
      total,
      currentPage: Number(page),
      totalPages: Math.ceil(total / Number(limit)),
      applications,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};


// ==================== ADMIN: GET SINGLE ====================
export const getTeacherApplicationById = async (req, res) => {
  try {
    const application = await teacherModel
      .findById(req.params.id)
      .populate("user", "name email profileImage isVerified role");

    if (!application) {
      return res.status(404).json({
        success: false,
        message: "Application not found",
      });
    }

    return res.status(200).json({
      success: true,
      application,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};


// ==================== ADMIN: APPROVE ====================
export const approveTeacher = async (req, res) => {
  try {
    const application = await teacherModel.findById(req.params.id);

    if (!application) {
      return res.status(404).json({
        success: false,
        message: "Application not found",
      });
    }

    if (application.status === "approved") {
      return res.status(400).json({
        success: false,
        message: "Already approved",
      });
    }

    application.status = "approved";
    application.approvedAt = new Date();
    application.approvedBy = req.user._id;
    application.rejectionReason = "";
    await application.save();

    await userModel.findByIdAndUpdate(application.user, { role: "teacher" });

    return res.status(200).json({
      success: true,
      message: "Teacher approved successfully",
      application,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};


// ==================== ADMIN: REJECT ====================
export const rejectTeacher = async (req, res) => {
  try {
    const { reason } = req.body;

    if (!reason) {
      return res.status(400).json({
        success: false,
        message: "Rejection reason is required",
      });
    }

    const application = await teacherModel.findById(req.params.id);

    if (!application) {
      return res.status(404).json({
        success: false,
        message: "Application not found",
      });
    }

    application.status = "rejected";
    application.rejectionReason = reason;
    await application.save();

    await userModel.findByIdAndUpdate(application.user, { role: "user" });

    return res.status(200).json({
      success: true,
      message: "Application rejected",
      application,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};


// ==================== PUBLIC: APPROVED TEACHERS ====================
export const getAllApprovedTeachers = async (req, res) => {
  try {
    const { subject, language, page = 1, limit = 12 } = req.query;

    const query = { status: "approved", isAvailable: true };
    if (subject) query.subjects = subject;
    if (language) query.languages = language;

    const skip = (Number(page) - 1) * Number(limit);

    const [teachers, total] = await Promise.all([
      teacherModel
        .find(query)
        .populate("user", "name email profileImage")
        .sort({ rating: -1, approvedAt: -1 })
        .skip(skip)
        .limit(Number(limit)),
      teacherModel.countDocuments(query),
    ]);

    return res.status(200).json({
      success: true,
      total,
      currentPage: Number(page),
      totalPages: Math.ceil(total / Number(limit)),
      teachers,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};