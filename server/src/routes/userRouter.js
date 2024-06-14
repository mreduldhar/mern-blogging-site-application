const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const { requireSignIn } = require("../middlewares/authMiddleware");

// Create a new user
router.post('/register', userController.register);

// User login
router.post('/login', userController.login);

// User Profile update
router.put("/user/profileUpdate", requireSignIn, userController.profileUpdate)


module.exports = router;