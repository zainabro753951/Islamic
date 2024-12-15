import express, { urlencoded } from "express";
import cors from "cors";
const app = express();
import dotenv from "dotenv";
import mongoose from "mongoose";
import admin from "./Routes/admin/admin.route.js";
import cookieParser, { signedCookie } from "cookie-parser";
dotenv.config();

// mongodb connection
try {
  mongoose.connect("mongodb://localhost:27017/Islamic");
} catch (error) {
  console.error("Error connecting to MongoDB:", error);
}

let port = process.env.PORT || 8080;

// Middleware to parse JSON request bodies

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({ origin: "http://localhost:2006/", credentials: true }));
app.use(cookieParser());

// Middleware to log request details
app.use("/api/admin", admin);

app.listen(port, () =>
  console.log(`listening on port http://localhost:${port}`)
);
