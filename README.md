# Task Manager – ProU Technology Full-stack Assessment (Track 3)

This is a full-stack **Task Manager** web application built for the  
**ProU Technology – Track 3 (Full-stack Development)** online assessment.

It includes:

- ✅ Frontend: React (Vite)
- ✅ Backend: Node.js + Express
- ✅ Data storage: JSON file used as a simple persistent database
- ✅ API: RESTful endpoints for managing tasks (CRUD)

---

## Features

- Create tasks with:
  - Title (required)
  - Description (optional)
  - Priority (low / medium / high)
  - Due date (optional)
- View all tasks in a clean list
- Change task status:
  - `pending` → `in_progress` → `completed` → `pending` (cycles)
- Delete tasks
- Filter tasks by status (All / Pending / In progress / Completed)
- Search tasks by title
- Responsive, simple UI

---

## Tech Stack

### Frontend

- React (Vite)
- JavaScript
- CSS (custom styling, no UI library)

### Backend

- Node.js
- Express
- CORS, morgan (logging)
- Simple JSON file (`tasks-data.json`) used to store tasks

---

## Project Structure

```text
task-manager/
  backend/
    src/
      server.js
      db.js
      models/
        taskModel.js
      routes/
        taskRoutes.js
      middleware/
        errorHandler.js
    package.json
    .env              (optional, for PORT)
    tasks-data.json   (auto-created when tasks are added)

  frontend/
    src/
      main.jsx
      App.jsx
      api.js
      styles.css
      components/
        TaskForm.jsx
        FilterBar.jsx
        TaskItem.jsx
        TaskList.jsx
    vite.config.js
    package.json

  README.md
