const mongoose = require("mongoose");

const OnboardingSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  wakeUpTime: {
    type: String,
    required: true,
  },
  sleepHours: {
    type: Number,
  },
  completed: {
    type: Boolean,
    default: false,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Onboarding", OnboardingSchema);
