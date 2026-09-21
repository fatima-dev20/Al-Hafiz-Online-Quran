import { Router } from 'express'
import { signup, login, logOut, userProfile, verifyOTP, resendOTP, updateProfile, forgotPassword, resetPassword, updateProfilePassword, updateProfileImage, removeProfileImage } from "../controllers/auth.controller.js";
import { authMiddleware } from '../middleware/auth.middleware.js';
import { upload } from '../middleware/upload.middleware.js';


const authRoutes = Router();


authRoutes.post("/signup", signup);
authRoutes.post("/verify-otp", verifyOTP);
authRoutes.post("/resend-otp", resendOTP);
authRoutes.post("/login", login);
authRoutes.post('/forgot-password', forgotPassword);
authRoutes.put('/reset-password/:token', resetPassword);
authRoutes.post("/logout", logOut);
authRoutes.get("/user-profile", authMiddleware, userProfile)
authRoutes.put("/user-profile",authMiddleware,upload.single("image"),updateProfileImage);
authRoutes.delete("/user-profile", authMiddleware, removeProfileImage);
authRoutes.put("/user-profile", authMiddleware, updateProfile);
authRoutes.put("/user-profile", authMiddleware, updateProfilePassword);


export default authRoutes;