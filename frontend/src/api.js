const BACKEND_URL = import.meta.env.VITE_BACKEND_URL || "http://localhost:3000";

export const getTodos = async () => {
  const response = await fetch(`${BACKEND_URL}/todos`);
  if (!response.ok) throw new Error("Failed to fetch tasks");
  const data = await response.json();
  return data.data || data;
};

export const getTodoById = async (id) => {
  const response = await fetch(`${BACKEND_URL}/todos/${id}`);
  if (!response.ok) throw new Error("Failed to fetch task");
  const data = await response.json();
  return data.data || data;
};

export const createTodo = async (task, assignedTo) => {
  console.log("Sending req:", JSON.stringify({ task, assignedTo }));
  try {
    const response = await fetch(`${BACKEND_URL}/todos`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ task, assignedTo }),
    });
    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || "Failed to add task");
    }
    const data = await response.json();
    return data.data || data;
  } catch (err) {
    console.error("API Error:", err);
    throw err;
  }
};

export const updateTodo = async (id, updatedTaskData) => {
  const response = await fetch(`${BACKEND_URL}/todos/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(updatedTaskData),
  });
  if (!response.ok) throw new Error("Failed to update task");
  const data = await response.json();
  return data.data || data;
};

export const deleteTodo = async (id) => {
  const response = await fetch(`${BACKEND_URL}/todos/${id}`, {
    method: "DELETE",
  });
  if (!response.ok) throw new Error("Failed to move task to recyclebin");
  const data = await response.json();
  return data.data || data;
};

export const getDeletedTodos = async () => {
  const response = await fetch(`${BACKEND_URL}/todos/recyclebin/all`);
  if (!response.ok) throw new Error("Failed to fetch deleted tasks");
  const data = await response.json();
  return data.data || data;
};

export const restoreTodo = async (id) => {
  const response = await fetch(`${BACKEND_URL}/todos/recyclebin/restore/${id}`, {
    method: "PATCH",
  });
  if (!response.ok) throw new Error("Failed to restore task");
  const data = await response.json();
  return data.data || data;
};

export const deletePermanently = async (id) => {
  const response = await fetch(`${BACKEND_URL}/todos/recyclebin/${id}`, {
    method: "DELETE",
  });
  if (!response.ok) throw new Error("Failed to permanently delete task");
  const data = await response.json();
  return data.data || data;
};
