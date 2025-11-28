export default function FilterBar({ status, onStatusChange, search, onSearchChange }) {
  return (
    <div className="card filter-bar">
      <div className="field">
        <label>Status</label>
        <select
          value={status}
          onChange={(e) => onStatusChange(e.target.value)}
        >
          <option value="all">All</option>
          <option value="pending">Pending</option>
          <option value="in_progress">In progress</option>
          <option value="completed">Completed</option>
        </select>
      </div>
      <div className="field">
        <label>Search</label>
        <input
          type="text"
          value={search}
          placeholder="Search by title..."
          onChange={(e) => onSearchChange(e.target.value)}
        />
      </div>
    </div>
  );
}
