import jwt, { decode } from "jsonwebtoken";
import admin from "../models/admin.model";
import user from "../models/user.model.js";

const SecureRoute = async (req, res, next) => {
  try {
    const token = req.cookies.token;
    if (!token) {
      return res
        .status(401)
        .json({ message: "No token, authorization denied" });
    }
    let decoded;
    try {
      decoded = jwt.decode(token, process.env.JWT_TOKEN);
    } catch (error) {
      return res
        .status(401)
        .json({ message: "Token is invalid, authorization denied" });
    }

    // Fetch users
    let loginUser = await user
      .findOne({ _id: decoded.userId })
      .select("-password");
    if (!loginUser) {
      return res.status(401).json({ errorMessage: "User not found" });
    }
    req.user = loginUser;
    next();
  } catch (error) {
    console.log("error in adminSecure middleware" + error);
  }
};

export default SecureRoute;
