const userModel = require("../models/userModel");
const { createUser } = require("../services/userServices");

// create a new user
exports.register = async (req, res) => {
  try {
    const { username, fullName, email, password } = req.body;

    // check all fields are provided or not & validation
    if (!username || username.length > 12) {
      return res.json({
        error: "Username can be maximum 12 characters",
      });
    }
    if (!fullName) {
      return res.json({
        error: "Full Name is required",
      });
    }
    if (!email) {
      return res.json({
        error: "Email is required",
      });
    }
    if (!password.trim() || password.length < 6) {
      return res.json({
        error: "Password must be at least 6 characters long",
      });
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
    console.log(error);
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// login user
exports.login = async (req, res) => {
  const { email, password } = req.body;
  const user = await userModel.findOne({ email });
  const match = await comparePassword(password, user.password);
  if (!match) {
    return res.json({ error: "Invalid password" });
  }
  res.status(200).json({
    success: true,
    message: "Succesfully login",
    user,
  });
};
