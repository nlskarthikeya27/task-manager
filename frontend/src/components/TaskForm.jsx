import { useState } from "react";

export default function TaskForm({ onAdd }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [priority, setPriority] = useState("medium");
  const [dueDate, setDueDate] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim()) return;
    onAdd({ title, description, priority, dueDate });
    setTitle("");
    setDescription("");
    setPriority("medium");
    setDueDate("");
  };

  return (
    <form className="card" onSubmit={handleSubmit}>
      <h2>Add Task</h2>
      <div className="field">
        <label>Title *</label>
        <input
          type="text"
          value={title}
          placeholder="e.g., Complete ProU assignment"
          onChange={(e) => setTitle(e.target.value)}
          required
        />
      </div>
      <div className="field">
        <label>Description</label>
        <textarea
          value={description}
          placeholder="Add more details..."
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>
      <div className="row">
        <div className="field">
          <label>Priority</label>
          <select
            value={priority}
            onChange={(e) => setPriority(e.target.value)}
          >
            <option value="low">Low</option>
            <option value="medium">Medium</option>
            <option value="high">High</option>
          </select>
        </div>
        <div className="field">
          <label>Due date</label>
          <input
            type="date"
            value={dueDate}
            onChange={(e) => setDueDate(e.target.value)}
          />
        </div>
      </div>
      <button type="submit">Add Task</button>
    </form>
  );
}
