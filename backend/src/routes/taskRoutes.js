const express = require("express");
const router = express.Router();
const Task = require("../models/taskModel");

// GET /api/tasks?status=...&search=...
router.get("/", (req, res, next) => {
  try {
    const { status = "all", search = "" } = req.query;
    const tasks = Task.getAllTasks({ status, search });
    res.json(tasks);
  } catch (err) {
    next(err);
  }
});

// GET /api/tasks/:id
router.get("/:id", (req, res, next) => {
  try {
    const task = Task.getTaskById(Number(req.params.id));
    if (!task) return res.status(404).json({ message: "Task not found" });
    res.json(task);
  } catch (err) {
    next(err);
  }
});

// POST /api/tasks
router.post("/", (req, res, next) => {
  try {
    const { title, description, priority, dueDate } = req.body;
    if (!title || title.trim() === "") {
      return res.status(400).json({ message: "Title is required" });
    }
    const newTask = Task.createTask({ title, description, priority, dueDate });
    res.status(201).json(newTask);
  } catch (err) {
    next(err);
  }
});

// PUT /api/tasks/:id
router.put("/:id", (req, res, next) => {
  try {
    const { title, description, status, priority, dueDate } = req.body;
    const updated = Task.updateTask(Number(req.params.id), {
      title,
      description,
      status,
      priority,
      dueDate,
    });
    if (!updated) return res.status(404).json({ message: "Task not found" });
    res.json(updated);
  } catch (err) {
    next(err);
  }
});

// DELETE /api/tasks/:id
router.delete("/:id", (req, res, next) => {
  try {
    const ok = Task.deleteTask(Number(req.params.id));
    if (!ok) return res.status(404).json({ message: "Task not found" });
    res.status(204).send();
  } catch (err) {
    next(err);
  }
});

module.exports = router;
