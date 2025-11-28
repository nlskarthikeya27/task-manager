import TaskItem from "./TaskItem";

export default function TaskList({ tasks, onToggleStatus, onDelete }) {
  if (!tasks.length) {
    return <p className="empty">No tasks yet. Add one above!</p>;
  }

  return (
    <div className="task-list">
      {tasks.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          onToggleStatus={onToggleStatus}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
}
