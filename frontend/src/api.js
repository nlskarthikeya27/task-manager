// Always call the backend directly on localhost:4000
const BASE_URL = "http://localhost:4000";

async function handleResponse(res) {
  // If status is NOT 2xx (OK), we throw an error
  if (!res.ok) {
    const text = await res.text();
    let message = "Request failed";

    try {
      const data = JSON.parse(text);
      // If backend sent JSON like { "message": "Title is required" }
      message = data.message || message;
    } catch (_) {
      // If backend sent HTML or plain text, use that
      message = text || message;
    }

    // 👉 This is where the error comes from
    // Frontend catches this and shows message in red alert
    throw new Error(message);
  }

  // 204 No Content (DELETE)
  if (res.status === 204) return null;

  // Normal successful JSON
  return res.json();
}

export function fetchTasks({ status = "all", search = "" } = {}) {
  const params = new URLSearchParams();
  if (status && status !== "all") params.set("status", status);
  if (search) params.set("search", search);

  const url = params.toString()
    ? `${BASE_URL}/api/tasks?${params.toString()}`
    : `${BASE_URL}/api/tasks`;

  return fetch(url).then(handleResponse);
}

export function createTask(task) {
  return fetch(`${BASE_URL}/api/tasks`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(task),
  }).then(handleResponse);
}

export function updateTask(id, updates) {
  return fetch(`${BASE_URL}/api/tasks/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(updates),
  }).then(handleResponse);
}

export function deleteTask(id) {
  return fetch(`${BASE_URL}/api/tasks/${id}`, {
    method: "DELETE",
  }).then(handleResponse);
}
