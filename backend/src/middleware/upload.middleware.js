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