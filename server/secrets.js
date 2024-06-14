// config
require("dotenv").config();

const ServerPort = process.env.SERVER_PORT;
const MongoDB_Atlas_Connection = process.env.MONGODB_ATLAS_CONNECTION;
const MongoDB_Connection_Port = process.env.MongoDB_Connection_PORT;
const jwtSecretKey = process.env.JWT_SECRET_KEY;
const jwtExpirationTime = process.env.JWT_EXPIRATION_TIME || "1d";

module.exports = {
  ServerPort,
  MongoDB_Atlas_Connection,
  MongoDB_Connection_Port,
  jwtSecretKey,
  jwtExpirationTime,
};
