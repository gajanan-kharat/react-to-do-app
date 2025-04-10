import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  fetchDeletedTasks,
  handleRestore,
  handlePermanentDelete,
} from "../services/taskService";
import "../styles/recyclebin.css";

export default function RecycleBin({ loadTasks }) {
  const [deletedTodos, setDeletedTodos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchDeletedTodos();
  }, []);

  const fetchDeletedTodos = async () => {
    try {
      const data = await fetchDeletedTasks();
      setDeletedTodos(data);
      setError(null);
    } catch (err) {
      console.error("Error fetching deleted todos:", err);
      setError("Failed to load deleted tasks");
    } finally {
      setLoading(false);
    }
  };

  const onRestore = async (id) => {
    try {
      const confirmed = window.confirm("Do you want to restore the task?");
      if (!confirmed) return;
      await handleRestore(id);
      setDeletedTodos((prev) => prev.filter((todo) => todo._id !== id));
      loadTasks();
    } catch (err) {
      console.error("Error restoring todos: ", err);
      setError("Failed to restore task");
    }
  };

  const onDeletePermanently = async (id) => {
    try {
      if (
        window.confirm("Are you sure you want to permanently delete this task?")
      ) {
        await handlePermanentDelete(id, setDeletedTodos);
        setDeletedTodos((prev) => prev.filter((todo) => todo.id !== id));
        loadTasks();
      }
    } catch (err) {
      console.error("Error deleting todos: ", err);
      setError("Failed to delete task");
    }
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div className="error">{error}</div>;

  return (
    <div className="recycle-bin-controller">
      <div className="recycle-bin-header">Recycle Bin</div>
      <div className="todo-list">
        {deletedTodos.map((todo) => (
          <div key={todo._id} className="todo-item">
            <div className="todo-content">
              <h3>{todo.task}</h3>
              <p>Assigned to : {todo.assignedTo}</p>
              <small>
                Deleted on: {new Date(todo.deletedAt).toLocaleString()}
              </small>
            </div>
            <div className="todo-actions">
              <button
                onClick={() => onRestore(todo._id)}
                className="restore-btn"
              >
                Restore
              </button>
              <button
                onClick={() => onDeletePermanently(todo._id)}
                className="delete-btn"
              >
                Delete Permanently
              </button>
            </div>
          </div>
        ))}
      </div>
      <Link to="/" className="back-btn">
        Back to Todos
      </Link>
    </div>
  );
}
