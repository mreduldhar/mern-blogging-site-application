const jwt = require("jsonwebtoken");
const { jwtSecretKey } = require("../../secrets");
const userModel = require("../models/userModel");

exports.requireSignIn = (req, res, next) => {
  try {
    const token = req.headers.authorization;
    // console.log("token: ", token);
    if (!token) {
      throw new Error("No token provided");
    }
    jwt.verify(token, jwtSecretKey, async (err, decoded) => {
      if (err) {
        if (err.name === "TokenExpiredError") {
          return res.status(401).json({ error: "Token Expired" });
        } else {
          return res
            .status(401)
            .json({ error: "Failed to authenticate token" });
        }
      }
      //   console.log("Decoded User: ", decoded);
      const user = await userModel.findById(decoded._id);
    //   console.log("User from database: ", user);
      if (!user) {
        return res.status(404).json({ error: "User not found" });
      }
      req.user = user;
      next();
    });
  } catch (error) {
    // console.log("Unauthorized", error);
    return res.status(401).json({ error: "Unauthorized" });
  }
};
