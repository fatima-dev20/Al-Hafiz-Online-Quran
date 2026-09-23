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
app.use(cors({
    origin: process.env.FRONTEND_URL,
    methods: ["POST", "PUT", "DELETE", "GET"],
    credentials: true
}));
app.use(urlencoded({extended:true}))

app.use("/api/v1/user", authRoutes)
app.use("/api/v1/teacher", teacherRoutes);


app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`);

})