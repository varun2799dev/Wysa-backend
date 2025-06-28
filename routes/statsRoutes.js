const express = require("express");
const router = express.Router();
const auth = require("../middleware/auth");
const { getDropoffStats } = require("../controllers/statsController");

// @route    GET api/stats/dropoffs
// @desc     Get dropoff statistics
// @access   Private
router.get("/dropoffs", auth, getDropoffStats);

module.exports = router;
