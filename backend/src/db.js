const fs = require("fs");
const path = require("path");

// We'll store tasks in a JSON file like a simple database
const dataFilePath = path.join(__dirname, "..", "tasks-data.json");

function loadTasks() {
  try {
    const raw = fs.readFileSync(dataFilePath, "utf-8");
    return JSON.parse(raw);
  } catch (err) {
    // If file doesn't exist yet, return empty list
    if (err.code === "ENOENT") {
      return [];
    }
    console.error("Error reading tasks data file:", err);
    return [];
  }
}

function saveTasks(tasks) {
  try {
    fs.writeFileSync(dataFilePath, JSON.stringify(tasks, null, 2), "utf-8");
  } catch (err) {
    console.error("Error writing tasks data file:", err);
  }
}

module.exports = {
  loadTasks,
  saveTasks,
};
