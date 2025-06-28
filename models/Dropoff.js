const mongoose = require("mongoose");

const DropoffSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  screen: {
    type: String,
    required: true,
    enum: ["wake-up", "sleep-hours", "completion"],
  },
  timestamp: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Dropoff", DropoffSchema);
