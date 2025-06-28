require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const socketio = require("socket.io");
const http = require("http");
const cors = require("cors");

// Connect to DB
const connectDB = require("./config/db");
connectDB();

// Routes
const authRoutes = require("./routes/authRoutes");
const onboardingRoutes = require("./routes/onboardingRoutes");
const statsRoutes = require("./routes/statsRoutes");

const app = express();
const server = http.createServer(app);
const io = socketio(server, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"],
  },
});

// Middleware
app.use(cors());
app.use(express.json());

// Socket.io connection
io.on("connection", (socket) => {
  console.log("New client connected");

  socket.on("disconnect", () => {
    console.log("Client disconnected");
  });
});

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/onboarding", onboardingRoutes);
app.use("/api/stats", statsRoutes);

const PORT = process.env.PORT || 5000;
server.listen(PORT, () => console.log(`Server running on port ${PORT}`));
