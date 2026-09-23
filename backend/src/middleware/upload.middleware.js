import multer from "multer";
import { CloudinaryStorage } from "multer-storage-cloudinary";
import cloudinary from "../config/cloudinary.js";

const storage = new CloudinaryStorage({
    cloudinary,
    params: {
        folder: "quran-academy/profile-images",
        allowed_formats: ["jpg", "jpeg", "png"],
    },
});

export const upload = multer({
    storage,
    limits: {
        fileSize: 5 * 1024 * 1024,
    },
});



//  NAYA ADD KARO (Teacher Docs) 
const teacherStorage = new CloudinaryStorage({
    cloudinary,
    params: (req, file) => {
        let folder = "quran-academy/teachers/docs";
        let resourceType = "image";

        if (file.fieldname === "videoIntro") {
            folder = "quran-academy/teachers/videos";
            resourceType = "video";
        } else if (file.fieldname === "certificateImage") {
            folder = "quran-academy/teachers/certificates";
        } else if (file.fieldname.startsWith("cnic")) {
            folder = "quran-academy/teachers/cnic";
        } else if (file.fieldname === "profileImage") {
            folder = "quran-academy/teachers/profiles";
        }

        return {
            folder,
            resource_type: resourceType,
            allowed_formats:
                resourceType === "video"
                    ? ["mp4", "mov", "avi", "webm"]
                    : ["jpg", "jpeg", "png", "webp"],
        };
    },
});

export const uploadTeacherDocs = multer({
    storage: teacherStorage,
    limits: { fileSize: 50 * 1024 * 1024 }, // 50MB (video ke liye)
});