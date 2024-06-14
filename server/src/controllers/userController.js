const userModel = require("../models/userModel");
const { createUser } = require("../services/userServices");
const { comparePassword } = require("../helpers/hashPass");
const { CreateJWT } = require("../helpers/jsonWebToken");
const { jwtSecretKey, jwtExpirationTime } = require("../../secrets");
const mongoose = require("mongoose");

// create a new user
exports.register = async (req, res, next) => {
  try {
    const { username, fullName, email, password } = req.body;

    // validation
    if (!username) {
      throw new Error("Username is required");
    }
    if (username.length > 12) {
      throw new Error("Username can be maximum 12 characters");
    }
    if (!fullName) {
      throw new Error("Full Name is required");
    }
    if (!email) {
      throw new Error("Email is required");
    }
    if (!password) {
      throw new Error("Password is required");
    }
    if (password.length < 6) {
      throw new Error("Password must be at least 6 characters long");
    }

    // Check existing username
    const existingUsername = await userModel.findOne({ username });
    if (existingUsername) {
      throw new Error("Username is already taken");
    }
    // Check existing email
    const existingEmail = await userModel.findOne({ email });
    if (existingEmail) {
      throw new Error("Email is already taken");
    }

    // create a user
    const createdUser = await createUser({
      username,
      fullName,
      email,
      password,
    });

    return res.status(201).json({
      success: true,
      message: "New user created",
      user: {
        username: createdUser.username,
        email: createdUser.email,
      },
    });
  } catch (error) {
    next(error);
  }
};

// login user
exports.login = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    if (!email) {
      throw new Error("Email is required");
    }
    if (!password) {
      throw new Error("Password is required");
    }

    // Check existing user by email
    const user = await userModel.findOne({ email });
    // console.log("User: ", user);
    if (!user) {
      throw new Error("User not found");
    }

    // compare password
    const isMatch = await comparePassword(password, user.password);
    if (!isMatch) {
      throw new Error("Invalid Email or Password");
    }

    const payload = {
      _id: user._id,
      username: user.username,
      email: user.email,
    };

    // Generate JWT
    const token = CreateJWT(payload, jwtSecretKey, jwtExpirationTime);

    return res.status(200).json({
      status: "Success",
      message: "Login Successfully",
      token,
    });
  } catch (error) {
    next(error);
  }
};

// User Profile update
exports.profileUpdate = async (req, res, next) => {
  try {
    const reqBody = req.body;
    const userId = req.user._id;

    console.log("UserId: ", userId);

    // Update user profile
    const profile = await userModel.findOneAndUpdate(
      { _id: userId },
      { $set: reqBody },
      { new: true, upsert: false }
    );

    if (!profile) {
      throw new Error("User profile not found.");
    }

    return res.status(200).json({
      status: "Success",
      message: "User profile has been updated",
      user: profile,
    });
  } catch (error) {
    next(error);
  }
};
