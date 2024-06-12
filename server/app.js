// Basic Library import
const express = require("express");
const app = express();
const path = require("path");

// api import
const router = require("./src/routes/api");

// Security Middleware library import
const cors = require("cors");
const helmet = require("helmet");
const hpp = require("hpp");
const morgan = require("morgan");
const mongoSanitize = require("express-mongo-sanitize");
const rateLimit = require("express-rate-limit");

// Security Middleware implement
app.use(cors());
app.use(helmet());
app.use(hpp());
app.use(morgan("dev"));
app.use(mongoSanitize());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Request rate limit
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 3000,
});
app.use(limiter);

// Route Implement
app.use("/api/v1", router);

// Undefined ROute Implement
app.use("*", (req, res) => {
  return res.status(404).json({
    status: "fail",
    message: "Not found",
  });
});

// Error-handling middleware
app.use((err, req, res, next) => {
  return res.status(err.status || 500).json({
    status: "Error",
    message: err.message,
  });
});

module.exports = app;
