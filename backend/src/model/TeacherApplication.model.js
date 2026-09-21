import mongoose from "mongoose";

const teacherApplicationSchema = new mongoose.Schema(
  {
    fullName: {
      type: String,
      required: true,
      trim: true,
    },

    fatherName: {
      type: String,
      required: true,
      trim: true,
    },

    email: {
      type: String,
      required: true,
      trim: true,
      lowercase: true,
    },

    phone: {
      type: String,
      required: true,
      trim: true,
    },

    qualification: {
      type: String,
      default: "",
      trim: true,
    },

    specialization: {
      type: String,
      default: "",
      trim: true,
    },

    country: {
      type: String,
      default: "",
      trim: true,
    },

    experience: {
      type: String,
      default: "",
      trim: true,
    },

    introVideo: {
      type: String,
      default: "",
      trim: true,
    },

    languages: {
      type: [String],
      default: [],
    },

    courses: {
      type: [String],
      default: [],
    },

    gender: {
      type: String,
      default: "",
    },

    certificate: {
      type: String,
      default: "",
    },

    cnic: {
      type: String,
      default: "",
    },

    cv: {
      type: String,
      default: "",
    },

    about: {
      type: String,
      default: "",
    },
  },
  {
    timestamps: true,
  }
);



export default mongoose.model("TeacherApplication", teacherApplicationSchema);