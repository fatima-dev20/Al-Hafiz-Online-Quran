import express, { urlencoded } from "express";
import cors from "cors";
import dotenv from "dotenv/config";
import db from "./src/config/db.js";
import authRoutes from "./src/routes/auth.routhes.js";
import cookieParser from "cookie-parser";
import teacherRoutes from "./src/routes/teacher.routes.js";


const app = express();

const PORT = process.env.PORT || 4000;
db();

app.use(express.json());
app.use(cookieParser());
const allowedOrigins = [
    "http://localhost:5173",
    "https://al-hafiz-online-quran.vercel.app",
    "https://al-hafiz-online-quran-git-main-fatima-s-projects-cba68d72.vercel.app"
];

app.use(cors({
    origin: allowedOrigins,
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    credentials: true
}));
app.use(urlencoded({extended:true}))

app.use("/api/v1/user", authRoutes)
app.use("/api/v1/teacher", teacherRoutes);

app.get("/", (req, res) => {
  res.json({
    success: true,
    message: "Al Hafiz Online Quran API",
    version: "1.0.0",
    status: "Running",
    endpoints: {
      user: "/api/v1/user",
      teacher: "/api/v1/teacher",
    },
     });
});


app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`);

})