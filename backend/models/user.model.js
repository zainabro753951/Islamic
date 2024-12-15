import mongoose from "mongoose";

let userSchema = new mongoose.Schema({
  fullName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  dob: {
    type: Date,
    required: true,
  },
  gender: {
    type: String,
    required: true,
  },
  phoneNum: {
    type: String,
    required: true,
  },
  userPic: {
    type: String,
  },
  password: {
    type: String,
    required: true,
  },
});

const user = mongoose.model("users", userSchema);

export default user;
