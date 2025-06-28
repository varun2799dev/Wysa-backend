const Onboarding = require("../models/Onboarding");
const Dropoff = require("../models/Dropoff");

// Record wake up time
exports.recordWakeUpTime = async (req, res) => {
  try {
    const { wakeUpTime } = req.body;

    const onboarding = new Onboarding({
      userId: req.user.id,
      wakeUpTime,
    });

    await onboarding.save();

    res.json(onboarding);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
};

// Record sleep hours
exports.recordSleepHours = async (req, res) => {
  try {
    const { sleepHours } = req.body;

    let onboarding = await Onboarding.findOne({ userId: req.user.id });

    if (!onboarding) {
      return res.status(400).json({ msg: "Please provide wake up time first" });
    }

    onboarding.sleepHours = sleepHours;
    onboarding.completed = true;

    await onboarding.save();

    res.json(onboarding);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
};

// Track dropoff
exports.trackDropoff = async (req, res) => {
  try {
    const { screen } = req.body;

    const dropoff = new Dropoff({
      userId: req.user.id,
      screen,
    });

    await dropoff.save();

    res.json({ msg: "Dropoff recorded" });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
};
