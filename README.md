# Task Manager – ProU Technology Full-stack Assessment (Track 3)

This is a full-stack **Task Manager** web application built as part of the  
**ProU Technology – Track 3 (Full-stack Development)** online assessment.

It demonstrates:

- A clean **React + Vite** frontend
- A **Node.js + Express** backend
- Simple persistent storage using a **JSON file** (acts like a small database)
- Complete CRUD APIs for managing tasks

---

## ✨ Features

- Create tasks with:
  - Title (required)
  - Description (optional)
  - Priority: `low`, `medium`, `high`
  - Due date (optional)
- View a list of all tasks with:
  - Status label
  - Priority badge
  - Due date
- Update task status:
  - `pending` → `in_progress` → `completed` → `pending` (cycle)
- Delete tasks
- Filter tasks by status:
  - All / Pending / In progress / Completed
- Search tasks by title
- Responsive UI with a simple, clean layout

---

## 🧰 Tech Stack

### Frontend

- **React** (with Vite)
- **JavaScript**
- **CSS** (custom styling)

### Backend

- **Node.js**
- **Express.js**
- **CORS**, **morgan** (logging)
- JSON file used as a lightweight “database”

---

## 📁 Project Structure

```text
task-manager/
  backend/
    src/
      server.js           # Express app entry point
      db.js               # File-based data access helper
      models/
        taskModel.js      # Task data model
      routes/
        taskRoutes.js     # Task API routes
      middleware/
        errorHandler.js   # Centralized error handling
    package.json
    tasks-data.json       # JSON file used as data storage (auto-created)

  frontend/
    src/
      main.jsx            # React entry
      App.jsx             # Main UI
      api.js              # API client to backend
      styles.css          # App styles
      components/
        TaskForm.jsx      # Form to create tasks
        FilterBar.jsx     # Status + search filters
        TaskItem.jsx      # Single task item UI
        TaskList.jsx      # List of tasks
    vite.config.js
    package.json

  screenshots/            # UI and terminal screenshots
    1sc.png
    2sc.png
    3sc.png
    4sc.png
    5sc.png

  README.md               # This documentation
  .gitignore
