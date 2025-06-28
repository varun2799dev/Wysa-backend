const express = require("express");
const router = express.Router();
const auth = require("../middleware/auth");
const {
  recordWakeUpTime,
  recordSleepHours,
  trackDropoff,
} = require("../controllers/onboardingController");

// @route    POST api/onboarding/wake-up
// @desc     Record wake up time
// @access   Private
router.post("/wake-up", auth, recordWakeUpTime);

// @route    POST api/onboarding/sleep-hours
// @desc     Record sleep hours
// @access   Private
router.post("/sleep-hours", auth, recordSleepHours);

// @route    POST api/onboarding/dropoff
// @desc     Track user dropoff
// @access   Private
router.post("/dropoff", auth, trackDropoff);

module.exports = router;
