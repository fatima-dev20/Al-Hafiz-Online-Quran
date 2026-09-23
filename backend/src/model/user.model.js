import mongoose from "mongoose";


const userSchema = new mongoose.Schema({
     name: {
          type: String,
          required: true,
          trim: true
     },
     email: {
          type: String,
          required: true,
          unique: true,
          trim: true
     },
     password: {
          type: String,
          required: true
     },
     role: {
          type: String,
          enum: ["admin", "user", "teacher"],
          default: "user"
     },
     otp: {
          type: String,
          default: null
     },
     isVerified: {
          type: Boolean,
          default: false
     },
     otpExpire: Date,
     resetPasswordToken: {
          type: String,
          default: null
     },
     resetPasswordExpire: {
          type: Date,
          default: null
     },
     profileImage: {
        type: String,
        default: ""
    },
    profileImagePublicId: {
    type: String,
    default: ""
},
}, {
     timestamps: true
}
)


export default mongoose.model("user", userSchema)