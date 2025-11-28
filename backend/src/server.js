require("dotenv").config();
const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const taskRoutes = require("./routes/taskRoutes");
const errorHandler = require("./middleware/errorHandler");

const app = express();
const PORT = process.env.PORT || 4000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

// Health check
app.get("/", (req, res) => {
  res.json({ message: "Task Manager API is running" });
});

// Routes
app.use("/api/tasks", taskRoutes);

// Error handler
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT}`);
});
