// Basic Library import
const express = require("express");
const app = express();
const { readdirSync } = require("fs");

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

// Route Implement for multiple files
readdirSync("./src/routes").map((router) => {
  app.use("/api/v1", require(`./src/routes/${router}`));
});

// Undefined Route Implement
app.use("*", (req, res) => {
  return res.status(404).json({
    status: "fail",
    message: "Page not found",
  });
});

// Error-handling Middleware
app.use((err, req, res, next) => {
  const message = err.message ? err.message : "Server Error Occurred";
  const status = err.status ? err.status : 500;

  return res.status(status).json({
    status: "Error",
    message: message,
  });
});

module.exports = app;
