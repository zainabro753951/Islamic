import express, { urlencoded } from "express";
const app = express();
import dotenv from "dotenv";
import mongoose from "mongoose";
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

// Middleware to log request details
app.get("/", (req, res) => {
  console.log("GET request received at:", new Date());
  res.send("GET request received");
});

app.listen(port, () =>
  console.log(`listening on port http://localhost:${port}`)
);
