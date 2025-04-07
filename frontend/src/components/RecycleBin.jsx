import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  getDeletedTodos,
  restoreTodo,
  deletePermanently,
} from "../../../backend/controllers/recycleBinController";

export default function RecycleBin() {
  const [deletedTodos, setDeletedTodos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchDeletedTodos();
  }, []);

  const fetchDeletedTodos = async () => {
    try {
      const response = await getDeletedTodos();
      setDeletedTodos(response.data);
    } catch (err) {
      console.error("Error fetching deleted todos:", err);
    } finally {
      setLoading(false);
    }
  };

  const handleRestore = async (id) => {
    try {
      await restoreTodo(id);
      fetchDeletedTodos();
    } catch (err) {
      console.error("Error restoring todos: ", err);
    }
  };

  const handleDelete = async (id) => {
    try {
      await deletePermanently(id);
      fetchDeletedTodos();
    } catch (err) {
      console.error("Error deleting todos: ", err);
    }
  };

  if (loading) return <div>Loading...</div>;

  return (
    <div className="recycle-bin-controller">
      <h1>Recycle Bin</h1>
      <div className="todo-list">
        {deletedTodos.map((todo) => (
          <div key={todo.id} className="todo-item">
            <div className="todo-content">
              <h3>{todo.task}</h3>
              <p>Assigned to : {todo.assignedTo}</p>
              <small>
                Deleted on: {new Date(todo.deletedAt).toLocaleString()}
              </small>
            </div>
            <div className="todo-actions">
              <button
                onClick={() => handleRestore(todo.id)}
                className="restore-btn"
              >
                Restore
              </button>
              <button
                onClick={() => handleDelete(todo.id)}
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
