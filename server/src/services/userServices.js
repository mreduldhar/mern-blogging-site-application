const userModel = require("../models/userModel");
const { hashPassword, comparePassword } = require("../helpers/hashPass");

exports.createUser = async ({ username, fullName, email, password }) => {
  try {
    // check if user exist or not
    const existingEmail = await userModel.findOne({ email });
    if (existingEmail) {
      throw new Error("Email is taken");
    }

    const hashedPassword = await hashPassword(password);

    return await userModel.create({
      username,
      fullName,
      email,
      password: hashedPassword,
    });
  } catch (error) {
    // Only log the error and throw if it's not the specific user exists error
    if (error.message !== "Email is taken") {
      console.error("Error in createUser:", error.message);
      throw new Error("Failed to create user");
    }
    throw error; // Re-throw the specific error for handling in the controller
  }
};
