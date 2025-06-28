const Dropoff = require("../models/Dropoff");

// Get dropoff statistics
exports.getDropoffStats = async (req, res) => {
  try {
    const stats = await Dropoff.aggregate([
      {
        $group: {
          _id: "$screen",
          count: { $sum: 1 },
        },
      },
    ]);

    res.json(stats);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
};
