import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getTodoById, updateTodo } from "../api";
import "../styles/updateTask.css";

export default function UpdateTask({ setTasks }) {
  const { id } = useParams();
  const navigate = useNavigate();

  const [task, setTask] = useState({ task: "", assignedTo: "" });

  useEffect(() => {
    const fetchTask = async () => {
      try {
        const data = await getTodoById(id);
        setTask(data);
      } catch (error) {
        console.error("Error fetching task: ", error);
      }
    };
    fetchTask();
  }, [id]);

  const handleUpdate = async (e) => {
    e.preventDefault();
    const isConfirmed = window.confirm("Do you want to update the task?");

    if (!isConfirmed) return;
    try {
      const updatedTask = await updateTodo(id, {
        task: task.task,
        assignedTo: task.assignedTo,
      });

      setTasks((prevTasks) =>
        prevTasks.map((task) => (task._id === id ? updatedTask : task))
      );
      navigate("/todos", { state: { updated: true } });
    } catch (error) {
      console.error("Error updating task", error);
      alert(error.message);
    }
  };

  return (
    <form onSubmit={handleUpdate} className="update-task-form">
      <label htmlFor="taskName">Task Name:- </label>
      <input
        id="taskName"
        type="text"
        name="taskName"
        value={task.task}
        onChange={(e) => setTask({ ...task, task: e.target.value })}
        required
      />
      <label htmlFor="assignedTo">Assigned To:-</label>
      <input
        id="assignedTo"
        type="text"
        name="assignedTo"
        value={task.assignedTo}
        onChange={(e) => setTask({ ...task, assignedTo: e.target.value })}
        required
      />
      <button type="submit" className="update-btn">
        Update Task
      </button>
    </form>
  );
}
