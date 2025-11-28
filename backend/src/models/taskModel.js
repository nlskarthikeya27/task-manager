const { loadTasks, saveTasks } = require("../db");

function getAllTasks({ status, search }) {
  let tasks = loadTasks();

  if (status && status !== "all") {
    tasks = tasks.filter((t) => t.status === status);
  }

  if (search) {
    const term = search.toLowerCase();
    tasks = tasks.filter((t) => t.title.toLowerCase().includes(term));
  }

  // Sort by created_at desc
  tasks.sort((a, b) => new Date(b.created_at) - new Date(a.created_at));

  return tasks;
}

function getTaskById(id) {
  const tasks = loadTasks();
  return tasks.find((t) => t.id === id);
}

function createTask({ title, description, priority, dueDate }) {
  const tasks = loadTasks();
  const now = new Date().toISOString();

  // Simple ID strategy: 1 + max existing id (or 1 if none)
  const maxId = tasks.length ? Math.max(...tasks.map((t) => t.id)) : 0;

  const newTask = {
    id: maxId + 1,
    title,
    description: description || "",
    status: "pending",
    priority: priority || "medium",
    due_date: dueDate || null,
    created_at: now,
    updated_at: now,
  };

  tasks.push(newTask);
  saveTasks(tasks);
  return newTask;
}

function updateTask(id, { title, description, status, priority, dueDate }) {
  const tasks = loadTasks();
  const index = tasks.findIndex((t) => t.id === id);
  if (index === -1) return null;

  const existing = tasks[index];
  const now = new Date().toISOString();

  const updated = {
    ...existing,
    title: title ?? existing.title,
    description: description ?? existing.description,
    status: status ?? existing.status,
    priority: priority ?? existing.priority,
    due_date: dueDate ?? existing.due_date,
    updated_at: now,
  };

  tasks[index] = updated;
  saveTasks(tasks);

  return updated;
}

function deleteTask(id) {
  const tasks = loadTasks();
  const newTasks = tasks.filter((t) => t.id !== id);
  const deleted = newTasks.length !== tasks.length;

  if (deleted) {
    saveTasks(newTasks);
  }

  return deleted;
}

module.exports = {
  getAllTasks,
  getTaskById,
  createTask,
  updateTask,
  deleteTask,
};
