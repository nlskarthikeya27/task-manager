import { useEffect, useState } from "react";
import {
  fetchTasks,
  createTask,
  updateTask,
  deleteTask,
} from "./api";
import TaskForm from "./components/TaskForm";
import FilterBar from "./components/FilterBar";
import TaskList from "./components/TaskList";
import "./styles.css";

function App() {
  const [tasks, setTasks] = useState([]);
  const [statusFilter, setStatusFilter] = useState("all");
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const loadTasks = async () => {
    setLoading(true);
    setError("");
    try {
      const data = await fetchTasks({ status: statusFilter, search });
      setTasks(data);
    } catch (err) {
      setError(err.message || "Failed to load tasks");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadTasks();
  }, [statusFilter, search]);

  const handleAddTask = async (task) => {
    setError("");
    try {
      await createTask(task);
      await loadTasks();
    } catch (err) {
      setError(err.message || "Failed to add task");
    }
  };

  const handleToggleStatus = async (id, nextStatus) => {
    setError("");
    try {
      await updateTask(id, { status: nextStatus });
      await loadTasks();
    } catch (err) {
      setError(err.message || "Failed to update task");
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Delete this task?")) return;
    setError("");
    try {
      await deleteTask(id);
      await loadTasks();
    } catch (err) {
      setError(err.message || "Failed to delete task");
    }
  };

  return (
    <div className="app">
      <header>
        <h1>Task Manager</h1>
        <p className="subtitle">
          Simple full-stack app built for ProU Technology assessment (Track 3 – Full-stack Development).
        </p>
      </header>

      <main>
        <TaskForm onAdd={handleAddTask} />

        <FilterBar
          status={statusFilter}
          onStatusChange={setStatusFilter}
          search={search}
          onSearchChange={setSearch}
        />

        {error && <div className="alert">{error}</div>}

        {loading ? (
          <p>Loading tasks...</p>
        ) : (
          <TaskList
            tasks={tasks}
            onToggleStatus={handleToggleStatus}
            onDelete={handleDelete}
          />
        )}
      </main>

      <footer>
        <small>Built with React, Node.js, and a JSON file database.</small>
      </footer>
    </div>
  );
}

export default App;
