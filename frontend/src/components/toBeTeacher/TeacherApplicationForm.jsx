import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import { useApplyAsTeacherMutation } from "../../app/api/teacherApi";
import {
  FaUser, FaUserTie, FaEnvelope, FaPhoneAlt, FaGraduationCap,
  FaBookOpen, FaGlobe, FaClock, FaVideo, FaLanguage,
  FaFileUpload, FaUserCheck, FaArrowRight, FaShieldAlt,
  FaIdCard, FaCity, FaWhatsapp,
} from "react-icons/fa";

const TeacherApplicationForm = () => {
  const navigate = useNavigate();
  const [applyAsTeacher, { isLoading }] = useApplyAsTeacherMutation();

  const [formData, setFormData] = useState({
    fullName: "",
    fatherName: "",
    cnic: "",
    dateOfBirth: "",
    gender: "male",
    phone: "",
    whatsapp: "",
    country: "",
    city: "",
    qualification: "",
    islamicQualification: "",
    experience: "",
    about: "",
    expectedSalary: "",
    languages: [],
    subjects: [],
  });

  const [cnicFront, setCnicFront] = useState(null);
  const [cnicBack, setCnicBack] = useState(null);
  const [certificateImage, setCertificateImage] = useState(null);
  const [videoIntro, setVideoIntro] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleCheckbox = (e, field) => {
    const { value, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [field]: checked
        ? [...prev[field], value]
        : prev[field].filter((item) => item !== value),
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validation
    if (formData.subjects.length === 0) {
      toast.error("Please select at least one subject");
      return;
    }
    if (formData.languages.length === 0) {
      toast.error("Please select at least one language");
      return;
    }
    if (!cnicFront || !cnicBack) {
      toast.error("Please upload CNIC front and back");
      return;
    }

    // Build FormData
    const data = new FormData();

    // Text fields
    Object.keys(formData).forEach((key) => {
      if (Array.isArray(formData[key])) {
        data.append(key, JSON.stringify(formData[key]));
      } else {
        data.append(key, formData[key]);
      }
    });

    // Files
    data.append("cnicFront", cnicFront);
    data.append("cnicBack", cnicBack);
    if (certificateImage) data.append("certificateImage", certificateImage);
    if (videoIntro) data.append("videoIntro", videoIntro);

    try {
      await applyAsTeacher(data).unwrap();

      toast.success("Application submitted successfully! 🎉", {
        position: "top-right",
        autoClose: 3000,
        theme: "colored",
        style: {
          background: "#0a5c3a",
          color: "#fff",
          fontWeight: "600",
        },
      });

      // Reset form
      setFormData({
        fullName: "",
        fatherName: "",
        cnic: "",
        dateOfBirth: "",
        gender: "male",
        phone: "",
        whatsapp: "",
        country: "",
        city: "",
        qualification: "",
        islamicQualification: "",
        experience: "",
        about: "",
        expectedSalary: "",
        languages: [],
        subjects: [],
      });
      setCnicFront(null);
      setCnicBack(null);
      setCertificateImage(null);
      setVideoIntro(null);

      // Redirect to teacher-profile
      setTimeout(() => navigate("/teacher-profile"), 1500);
    } catch (error) {
      console.log("APPLY ERROR:", error);
      toast.error(error?.data?.message || "Something went wrong", {
        position: "top-right",
        autoClose: 3000,
        theme: "colored",
      });
    }
  };

  return (
    <section
      id="teacher-application-form"
      className="py-10 lg:py-16 bg-gradient-to-br from-[#f8f6f0] via-white to-[#eef7f2]"
    >
      <div className="max-w-5xl mx-auto px-6" data-aos="fade-up" data-aos-delay="100">
        {/* Heading */}
        <div className="text-center mb-12">
          <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-[#c9a050]/10 text-[#c9a050] font-semibold text-sm uppercase tracking-[3px] border border-[#c9a050]/20 mb-4">
            <span className="w-2 h-2 rounded-full bg-[#c9a050] animate-pulse"></span>
            Apply Now
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-[#0a5c3a]">
            Teacher <span className="text-[#c9a050]">Application</span>
          </h2>
          <div className="w-24 h-1 bg-[#c9a050] rounded-full mx-auto mt-4"></div>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Join our team of dedicated Quran teachers. Fill in the details below
            and our team will review your application.
          </p>
        </div>

        {/* Form Card */}
        <div className="bg-white shadow-2xl rounded-3xl p-8 md:p-10 border border-[#c9a050]/10">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Grid Top Fields */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {/* Full Name */}
              <div className="flex flex-col">
                <label className="mb-2 text-[#0a5c3a] font-medium text-sm flex items-center gap-2">
                  <FaUser className="text-[#c9a050]" />
                  Full Name <span className="text-[#c9a050]">*</span>
                </label>
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  placeholder="Enter your full name"
                  className="w-full px-5 py-3 border rounded-xl border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#c9a050] focus:border-transparent transition-all duration-300"
                  required
                />
              </div>

              {/* Father Name */}
              <div className="flex flex-col">
                <label className="mb-2 text-[#0a5c3a] font-medium text-sm flex items-center gap-2">
                  <FaUserTie className="text-[#c9a050]" />
                  Father Name <span className="text-[#c9a050]">*</span>
                </label>
                <input
                  type="text"
                  name="fatherName"
                  value={formData.fatherName}
                  onChange={handleChange}
                  placeholder="Enter your father's name"
                  className="w-full px-5 py-3 border rounded-xl border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#c9a050] focus:border-transparent transition-all duration-300"
                  required
                />
              </div>

              {/* CNIC */}
              <div className="flex flex-col">
                <label className="mb-2 text-[#0a5c3a] font-medium text-sm flex items-center gap-2">
                  <FaIdCard className="text-[#c9a050]" />
                  CNIC <span className="text-[#c9a050]">*</span>
                </label>
                <input
                  type="text"
                  name="cnic"
                  value={formData.cnic}
                  onChange={handleChange}
                  placeholder="35202-1234567-1"
                  className="w-full px-5 py-3 border rounded-xl border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#c9a050] focus:border-transparent transition-all duration-300"
                  required
                />
              </div>

              {/* Date of Birth */}
              <div className="flex flex-col">
                <label className="mb-2 text-[#0a5c3a] font-medium text-sm flex items-center gap-2">
                  <FaClock className="text-[#c9a050]" />
                  Date of Birth <span className="text-[#c9a050]">*</span>
                </label>
                <input
                  type="date"
                  name="dateOfBirth"
                  value={formData.dateOfBirth}
                  onChange={handleChange}
                  className="w-full px-5 py-3 border rounded-xl border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#c9a050] focus:border-transparent transition-all duration-300"
                  required
                />
              </div>

              {/* Gender */}
              <div className="flex flex-col">
                <label className="mb-2 text-[#0a5c3a] font-medium text-sm flex items-center gap-2">
                  <FaUserCheck className="text-[#c9a050]" />
                  Gender <span className="text-[#c9a050]">*</span>
                </label>
                <select
                  name="gender"
                  value={formData.gender}
                  onChange={handleChange}
                  className="w-full px-5 py-3 border rounded-xl border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#c9a050] focus:border-transparent transition-all duration-300"
                >
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                </select>
              </div>

              {/* Phone */}
              <div className="flex flex-col">
                <label className="mb-2 text-[#0a5c3a] font-medium text-sm flex items-center gap-2">
                  <FaPhoneAlt className="text-[#c9a050]" />
                  Phone <span className="text-[#c9a050]">*</span>
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+92 300 1234567"
                  className="w-full px-5 py-3 border rounded-xl border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#c9a050] focus:border-transparent transition-all duration-300"
                  required
                />
              </div>

              {/* WhatsApp */}
              <div className="flex flex-col">
                <label className="mb-2 text-[#0a5c3a] font-medium text-sm flex items-center gap-2">
                  <FaWhatsapp className="text-[#c9a050]" />
                  WhatsApp
                </label>
                <input
                  type="tel"
                  name="whatsapp"
                  value={formData.whatsapp}
                  onChange={handleChange}
                  placeholder="Optional"
                  className="w-full px-5 py-3 border rounded-xl border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#c9a050] focus:border-transparent transition-all duration-300"
                />
              </div>

              {/* Country */}
              <div className="flex flex-col">
                <label className="mb-2 text-[#0a5c3a] font-medium text-sm flex items-center gap-2">
                  <FaGlobe className="text-[#c9a050]" />
                  Country <span className="text-[#c9a050]">*</span>
                </label>
                <input
                  type="text"
                  name="country"
                  value={formData.country}
                  onChange={handleChange}
                  placeholder="Your country"
                  className="w-full px-5 py-3 border rounded-xl border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#c9a050] focus:border-transparent transition-all duration-300"
                  required
                />
              </div>

              {/* City */}
              <div className="flex flex-col">
                <label className="mb-2 text-[#0a5c3a] font-medium text-sm flex items-center gap-2">
                  <FaCity className="text-[#c9a050]" />
                  City <span className="text-[#c9a050]">*</span>
                </label>
                <input
                  type="text"
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                  placeholder="Your city"
                  className="w-full px-5 py-3 border rounded-xl border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#c9a050] focus:border-transparent transition-all duration-300"
                  required
                />
              </div>

              {/* Qualification */}
              <div className="flex flex-col">
                <label className="mb-2 text-[#0a5c3a] font-medium text-sm flex items-center gap-2">
                  <FaGraduationCap className="text-[#c9a050]" />
                  Qualification <span className="text-[#c9a050]">*</span>
                </label>
                <input
                  type="text"
                  name="qualification"
                  value={formData.qualification}
                  onChange={handleChange}
                  placeholder="BS Islamic Studies"
                  className="w-full px-5 py-3 border rounded-xl border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#c9a050] focus:border-transparent transition-all duration-300"
                  required
                />
              </div>

              {/* Islamic Qualification */}
              <div className="flex flex-col">
                <label className="mb-2 text-[#0a5c3a] font-medium text-sm flex items-center gap-2">
                  <FaBookOpen className="text-[#c9a050]" />
                  Islamic Qualification <span className="text-[#c9a050]">*</span>
                </label>
                <input
                  type="text"
                  name="islamicQualification"
                  value={formData.islamicQualification}
                  onChange={handleChange}
                  placeholder="Hafiz / Qari / Aalim"
                  className="w-full px-5 py-3 border rounded-xl border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#c9a050] focus:border-transparent transition-all duration-300"
                  required
                />
              </div>

              {/* Experience */}
              <div className="flex flex-col">
                <label className="mb-2 text-[#0a5c3a] font-medium text-sm flex items-center gap-2">
                  <FaClock className="text-[#c9a050]" />
                  Experience (years)
                </label>
                <input
                  type="number"
                  name="experience"
                  value={formData.experience}
                  onChange={handleChange}
                  placeholder="0"
                  className="w-full px-5 py-3 border rounded-xl border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#c9a050] focus:border-transparent transition-all duration-300"
                />
              </div>

              {/* Expected Salary */}
              <div className="flex flex-col">
                <label className="mb-2 text-[#0a5c3a] font-medium text-sm flex items-center gap-2">
                  <FaClock className="text-[#c9a050]" />
                  Expected Salary (PKR)
                </label>
                <input
                  type="number"
                  name="expectedSalary"
                  value={formData.expectedSalary}
                  onChange={handleChange}
                  placeholder="0"
                  className="w-full px-5 py-3 border rounded-xl border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#c9a050] focus:border-transparent transition-all duration-300"
                />
              </div>
            </div>

            {/* Languages */}
            <div>
              <label className="font-medium text-[#0a5c3a] text-sm mb-3 flex items-center gap-2">
                <FaLanguage className="text-[#c9a050]" />
                Languages You Speak <span className="text-[#c9a050]">*</span>
              </label>
              <div className="flex flex-wrap gap-4">
                {["English", "Urdu", "Hindi", "Arabic", "Pashto"].map((lang) => (
                  <label
                    key={lang}
                    className="flex items-center gap-2 text-gray-700 cursor-pointer hover:text-[#c9a050] transition-colors duration-300"
                  >
                    <input
                      type="checkbox"
                      value={lang}
                      checked={formData.languages.includes(lang)}
                      onChange={(e) => handleCheckbox(e, "languages")}
                      className="accent-[#c9a050] w-4 h-4"
                    />
                    {lang}
                  </label>
                ))}
              </div>
            </div>

            {/* Subjects */}
            <div>
              <label className="font-medium text-[#0a5c3a] text-sm mb-3 flex items-center gap-2">
                <FaBookOpen className="text-[#c9a050]" />
                Subjects You Can Teach <span className="text-[#c9a050]">*</span>
              </label>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
                {[
                  "Nazra Quran",
                  "Hifz",
                  "Tajweed",
                  "Tafseer",
                  "Arabic",
                  "Islamic Studies",
                  "Namaz & Duas",
                ].map((subject) => (
                  <label
                    key={subject}
                    className="flex items-center gap-2 text-gray-700 text-sm cursor-pointer hover:text-[#c9a050] transition-colors duration-300"
                  >
                    <input
                      type="checkbox"
                      value={subject}
                      checked={formData.subjects.includes(subject)}
                      onChange={(e) => handleCheckbox(e, "subjects")}
                      className="accent-[#c9a050] w-4 h-4"
                    />
                    {subject}
                  </label>
                ))}
              </div>
            </div>

            {/* File Uploads */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div className="flex flex-col">
                <label className="mb-2 text-[#0a5c3a] font-medium text-sm flex items-center gap-2">
                  <FaFileUpload className="text-[#c9a050]" />
                  CNIC Front <span className="text-[#c9a050]">*</span>
                </label>
                <input
                  type="file"
                  accept="image/*"
                  onChange={(e) => setCnicFront(e.target.files[0])}
                  required
                  className="w-full px-5 py-3 border rounded-xl border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#c9a050] file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-[#c9a050] file:text-white hover:file:bg-[#b8942e]"
                />
              </div>

              <div className="flex flex-col">
                <label className="mb-2 text-[#0a5c3a] font-medium text-sm flex items-center gap-2">
                  <FaFileUpload className="text-[#c9a050]" />
                  CNIC Back <span className="text-[#c9a050]">*</span>
                </label>
                <input
                  type="file"
                  accept="image/*"
                  onChange={(e) => setCnicBack(e.target.files[0])}
                  required
                  className="w-full px-5 py-3 border rounded-xl border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#c9a050] file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-[#c9a050] file:text-white hover:file:bg-[#b8942e]"
                />
              </div>

              <div className="flex flex-col">
                <label className="mb-2 text-[#0a5c3a] font-medium text-sm flex items-center gap-2">
                  <FaFileUpload className="text-[#c9a050]" />
                  Certificate (optional)
                </label>
                <input
                  type="file"
                  accept="image/*"
                  onChange={(e) => setCertificateImage(e.target.files[0])}
                  className="w-full px-5 py-3 border rounded-xl border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#c9a050] file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-[#c9a050] file:text-white hover:file:bg-[#b8942e]"
                />
              </div>

              <div className="flex flex-col">
                <label className="mb-2 text-[#0a5c3a] font-medium text-sm flex items-center gap-2">
                  <FaVideo className="text-[#c9a050]" />
                  Intro Video (optional, max 50MB)
                </label>
                <input
                  type="file"
                  accept="video/*"
                  onChange={(e) => setVideoIntro(e.target.files[0])}
                  className="w-full px-5 py-3 border rounded-xl border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#c9a050] file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-[#c9a050] file:text-white hover:file:bg-[#b8942e]"
                />
              </div>
            </div>

            {/* About */}
            <div>
              <label className="block mb-2 text-[#0a5c3a] font-medium text-sm">
                Write About Yourself
              </label>
              <textarea
                rows="5"
                name="about"
                value={formData.about}
                onChange={handleChange}
                placeholder="Describe your experience, goals, and personality..."
                className="w-full px-5 py-3 border rounded-xl border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#c9a050] focus:border-transparent transition-all duration-300 resize-none"
              />
            </div>

            {/* Submit */}
            <div className="flex justify-center">
              <button
                type="submit"
                disabled={isLoading}
                className="inline-flex items-center gap-3 bg-[#0a5c3a] hover:bg-[#c9a050] text-white px-10 py-3.5 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 group disabled:opacity-50"
              >
                {isLoading ? "Submitting..." : "Submit Application"}
                <FaArrowRight className="group-hover:translate-x-1 transition-transform duration-300" />
              </button>
            </div>

            {/* Security Note */}
            <div className="flex items-center justify-center gap-2 text-gray-400 text-xs mt-4">
              <FaShieldAlt className="text-[#c9a050]" />
              <span>Your information is 100% secure and confidential</span>
            </div>
          </form>
        </div>
      </div>

      <ToastContainer />
    </section>
  );
};

export default TeacherApplicationForm;