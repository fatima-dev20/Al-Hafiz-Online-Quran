import { Router } from "express";
import {
  applyAsTeacher,
  getMyTeacherApplication,
  updateTeacherApplication,
  getAllTeacherApplications,
  getTeacherApplicationById,
  approveTeacher,
  rejectTeacher,
  getAllApprovedTeachers,
} from "../controllers/teacher.controller.js";
// import { uploadTeacherDocs } from "../middleware/upload.middleware.js";
import { adminMiddleware, authMiddleware } from "../middleware/auth.middleware.js";
import { uploadTeacherDocs } from "../middleware/upload.middleware.js";

const teacherRoutes = Router();

// ===== PUBLIC =====
teacherRoutes.get("/public/all", getAllApprovedTeachers);

// ===== USER =====
teacherRoutes.post(
  "/apply",
  authMiddleware,
  uploadTeacherDocs.fields([
    { name: "cnicFront", maxCount: 1 },
    { name: "cnicBack", maxCount: 1 },
    { name: "certificateImage", maxCount: 1 },
    { name: "videoIntro", maxCount: 1 },
    { name: "profileImage", maxCount: 1 },
  ]),
  applyAsTeacher
);

teacherRoutes.get("/my-application", authMiddleware, getMyTeacherApplication);

teacherRoutes.put(
  "/update-application",
  authMiddleware,
  uploadTeacherDocs.fields([
    { name: "cnicFront", maxCount: 1 },
    { name: "cnicBack", maxCount: 1 },
    { name: "certificateImage", maxCount: 1 },
    { name: "videoIntro", maxCount: 1 },
    { name: "profileImage", maxCount: 1 },
  ]),
  updateTeacherApplication
);

// ===== ADMIN =====
teacherRoutes.get("/admin/all", authMiddleware, adminMiddleware, getAllTeacherApplications);
teacherRoutes.get("/admin/:id", authMiddleware, adminMiddleware, getTeacherApplicationById);
teacherRoutes.put("/admin/approve/:id", authMiddleware, adminMiddleware, approveTeacher);
teacherRoutes.put("/admin/reject/:id", authMiddleware, adminMiddleware, rejectTeacher);

export default teacherRoutes;