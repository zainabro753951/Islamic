import jwt from "jsonwebtoken";

export const createTokenAndSaveCookie = (userId, res) => {
  try {
    const token = jwt.sign({ userId }, process.env.JWT_TOKEN, {
      expiresIn: "1d",
    });
    res.cookie("token", token, {
      httpOnly: false,
      sameSite: "Strict",
    });
    console.log("cookie set successfully");

    return token;
  } catch (error) {
    console.log("error in getTokenAndSaveCookie" + error);
  }
};
