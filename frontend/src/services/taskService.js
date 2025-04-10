import {
  getTodos,
  updateTodo,
  deleteTodo,
  createTodo,
  getDeletedTodos,
  restoreTodo,
  deletePermanently,
} from "../api";

export async function fetchTasks(includeDeleted = false) {
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

export async function handleDelete(
  taskId,
  setTasks,
  loadTasks,
  showConfirm = true
) {
  try {
    if (showConfirm && !confirm("Move this task to recycle bin?")) return;
    await deleteTodo(taskId);
    if (loadTasks) {
      await loadTasks();
    } else {
      setTasks((prevTasks) => prevTasks.filter((task) => task._id !== taskId));
    }
  } catch (err) {
    console.error("Error moving task to recycle bin: ", err);
  }
}

export async function fetchDeletedTasks() {
  try {
    return await getDeletedTodos();
  } catch (err) {
    console.error("Error fetching deleted tasks: ", err);
    return [];
  }
}

export async function handleRestore(taskId, setDeletedTask) {
  try {
    await restoreTodo(taskId);
  } catch (err) {
    console.error("Error restoring task: ", err);
    alert("Failed to restore task");
  }
}

export async function handlePermanentDelete(taskId, setDeletedTask) {
  try {
    await deletePermanently(taskId);
    setDeletedTask((prev) => prev.filter((task) => task._id !== taskId));
  } catch (err) {
    console.error("Error permanently deleting task: ", err);
    alert("Failed to delete task permanently");
  }
}
