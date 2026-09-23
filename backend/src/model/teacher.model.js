import mongoose from "mongoose";

const teacherSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "user",
      required: true,
      unique: true,
    },

    // Personal Info
    fullName: { type: String, required: true, trim: true },
    fatherName: { type: String, required: true, trim: true },
    cnic: { type: String, required: true, unique: true, trim: true },
    dateOfBirth: { type: Date, required: true },
    gender: { type: String, enum: ["male", "female"], required: true },
    phone: { type: String, required: true, trim: true },
    whatsapp: { type: String, trim: true },
    country: { type: String, required: true, trim: true },
    city: { type: String, required: true, trim: true },

    // Qualification
    qualification: { type: String, required: true },
    islamicQualification: { type: String, required: true },
    experience: { type: Number, default: 0 },
    about: { type: String, maxlength: 1000 },

    // Teaching Preferences
    subjects: {
      type: [String],
      enum: [
        "Nazra Quran", "Hifz", "Tajweed", "Tafseer",
        "Arabic", "Islamic Studies", "Namaz & Duas",
      ],
      required: true,
    },
    languages: {
      type: [String],
      enum: ["English", "Urdu", "Arabic", "Hindi", "Pashto"],
      required: true,
    },
    availableDays: { type: [String] },
    availableTime: {
      from: { type: String, default: "" },
      to: { type: String, default: "" },
    },
    expectedSalary: { type: Number, default: 0 },

    // Documents
    cnicFront: { type: String, required: true },
    cnicBack: { type: String, required: true },
    certificateImage: { type: String, default: "" },
    videoIntro: { type: String, default: "" },
    profileImage: { type: String, default: "" },

    // Status
    status: {
      type: String,
      enum: ["pending", "approved", "rejected"],
      default: "pending",
    },

    // Dashboard
    // isAvailable: { type: Boolean, default: true },
    // rating: { type: Number, default: 0, min: 0, max: 5 },
    // totalStudents: { type: Number, default: 0 },
    // totalEarnings: { type: Number, default: 0 },
  },
  { timestamps: true }
);

export default mongoose.model("teacher", teacherSchema);