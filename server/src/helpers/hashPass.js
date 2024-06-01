const bcrypt = require("bcrypt");

exports.hashPassword = async (password) => {
  try {
    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(password, salt);
    return hash;
  } catch (err) {
    throw new Error("Error hashing password");
  }
};

exports.comparePassword = (password, hashedPassword) => {
  return bcrypt.compare(password, hashedPassword);
};
