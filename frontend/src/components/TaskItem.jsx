export default function TaskItem({ task, onToggleStatus, onDelete }) {
  const handleStatusChange = () => {
    const nextStatus =
      task.status === "pending"
        ? "in_progress"
        : task.status === "in_progress"
        ? "completed"
        : "pending";
    onToggleStatus(task.id, nextStatus);
  };

  const formattedDueDate = task.due_date
    ? new Date(task.due_date).toLocaleDateString()
    : "No due date";

  return (
    <div className={`task-item card ${task.status}`}>
      <div className="task-main">
        <h3>
          {task.title}
          <span className={`badge priority-${task.priority}`}>
            {task.priority}
          </span>
        </h3>
        {task.description && <p className="description">{task.description}</p>}
        <div className="meta">
          <span>Due: {formattedDueDate}</span>
          <span>Status: {task.status.replace("_", " ")}</span>
        </div>
      </div>
      <div className="task-actions">
        <button type="button" onClick={handleStatusChange}>
          Next status
        </button>
        <button type="button" className="danger" onClick={() => onDelete(task.id)}>
          Delete
        </button>
      </div>
    </div>
  );
}
