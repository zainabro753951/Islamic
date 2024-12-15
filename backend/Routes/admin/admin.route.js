import express from "express";
import bcyrpt from "bcryptjs";
const router = express.Router();
import { createTokenAndSaveCookie } from "../../jwt/generateToken.js";
import admin from "../../models/admin.model.js";

router.post("/login", async (req, res) => {
  console.log(req.body);
  const { email, password } = req.body;

  let adminProfile = await admin.findOne({ email });
  if (!adminProfile) {
    return res.json({
      adminNotFound: "You are not authorized for admin access.",
    });
  }
  let isMatch = await bcyrpt.compare(password, adminProfile.password);
  console.log(isMatch);

  if (!isMatch) {
    return res.json({ passwordIncorrect: "Invalid email or password" });
  }
  let token = createTokenAndSaveCookie(adminProfile._id, res);

  return res.json({
    admin: {
      _id: adminProfile._id,
      fullName: adminProfile.fullName,
      email: adminProfile.email,
    },
    token,
  });
});

export default router;
