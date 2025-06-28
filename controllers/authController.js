const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const User = require("../models/User");
const { jwtSecret } = require("../config/jwt");

// Register user
exports.register = async (req, res) => {
  const { nickname, password } = req.body;

  try {
    let user = await User.findOne({ nickname });

    if (user) {
      return res.status(400).json({ msg: "User already exists" });
    }

    user = new User({
      nickname,
      password,
    });

    await user.save();

    const payload = {
      user: {
        id: user.id,
      },
    };

    jwt.sign(payload, jwtSecret, { expiresIn: "5h" }, (err, token) => {
      if (err) throw err;
      res.json({ token });
    });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
};

// Login user
exports.login = async (req, res) => {
  const { nickname, password } = req.body;

  try {
    let user = await User.findOne({ nickname });

    if (!user) {
      return res.status(400).json({ msg: "Invalid credentials" });
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.status(400).json({ msg: "Invalid credentials" });
    }

    const payload = {
      user: {
        id: user.id,
      },
    };

    jwt.sign(payload, jwtSecret, { expiresIn: "5h" }, (err, token) => {
      if (err) throw err;
      res.json({ token });
    });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
};
