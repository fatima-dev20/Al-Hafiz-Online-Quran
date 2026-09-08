import express, { urlencoded } from "express";
import cors from "cors";
import dotenv from "dotenv/config";
import db from "./src/config/db.js";
import authRoutes from "./src/routes/auth.routhes.js";
import cookieParser from "cookie-parser";


const app = express();

const PORT = process.env.PORT;
db();

app.use(express.json());
app.use(cookieParser());
app.use(cors({
    origin: "http://localhost:5173",
    methods: ["POST", "PUT", "DELETE", "GET"],
    credentials: true
}));
app.use(urlencoded({extended:true}))

app.use("/uploads", express.static("uploads"));
app.use("/api/v1/user", authRoutes)


app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`);

})