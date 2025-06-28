const jwt = require("jsonwebtoken");
const { jwtSecret } = require("../config/jwt");
const User = require("../models/User");

module.exports = async function (req, res, next) {
  const authHeader = req.header("Authorization");

  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return res.status(401).json({ msg: "No token, authorization denied" });
  }

  const token = authHeader.split(" ")[1];

  try {
    const decoded = jwt.verify(token, jwtSecret);
    req.user = await User.findById(decoded.user.id).select("-password");
    next();
  } catch (err) {
    console.error(err);
    res.status(401).json({ msg: "Token is not valid" });
  }
};
