import { getTodos, updateTodo, deleteTodo, createTodo, getDeletedTodo } from "../api";

export async function fetchTasks() {
  try {
    return await getTodos();
  } catch (error) {
    console.error("Error fetching tasks:", error);
    return [];
  }
}

export async function handleSubmit(
  e,
  taskName,
  assignedTo,
  setTasks,
  setTaskName,
  setAssignedTo
) {
  e.preventDefault();
  if (!taskName.trim() || !assignedTo.trim()) {
    alert("Both fields are required");
    return;
  }

  try {
    const newTask = await createTodo(taskName, assignedTo);
    if (!newTask) throw new Error("Failed to create new task");
    setTasks((prevTasks) => [...prevTasks, newTask]);
    setTaskName("");
    setAssignedTo("");
  } catch (err) {
    alert("Error adding task. Please try again.");
  }
}

export async function handleToggleCompleted(
  taskId,
  currentStatus,
  taskName,
  assignedTo,
  setTasks
) {
  try {
    await updateTodo(taskId, {
      task: taskName,
      assignedTo,
      completed: !currentStatus,
    });
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task._id === taskId ? { ...task, completed: !currentStatus } : task
      )
    );
  } catch (err) {
    console.error("Error updating task completion status: ", err);
  }
}

export async function handleDelete(taskId, setTasks) {
  try {
    await deleteTodo(taskId);
    setTasks((prevTasks) => prevTasks.filter((task) => task._id !== taskId));
  } catch (err) {
    console.error("Error deleting task: ", err);
  }
}
