require("dotenv").config();

const jwtSecret = process.env.JWT_SECRET;

if (!jwtSecret) {
  throw new Error("JWT_SECRET is not defined in environment variables");
}

module.exports = { jwtSecret };
