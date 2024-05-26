const userModel = require("../models/userModel");
const { hashPassword, comparePassword } = require("../helpers/hashPass");

exports.createUser = async ({ username, fullName, email, password }) => {
  try {
    const hashedPassword = await hashPassword(password);

    return await userModel.create({
      username,
      fullName,
      email,
      password: hashedPassword,
    });
  } catch (error) {
    throw new Error('Failed to create user')
  }
};
