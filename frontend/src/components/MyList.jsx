import React from "react";
import "../styles/myList.css";
import { Link } from "react-router-dom";
import { handleToggleCompleted, handleDelete } from "../services/taskService";

export default function MyList({ tasks = [], setTasks }) {
  return (
    <div className="tasklist-container">
      <h1>My List</h1>
      {tasks.length === 0 ? (
        <h1 className="task-not-found">No Tasks Found</h1>
      ) : (
        <ol className="tasklist">
          {tasks.map((task) => (
            <li key={task._id} className="tasklist-item">
              <input
                id={`completed-${task._id}`}
                className="task-checkbox"
                type="checkbox"
                checked={task.completed}
                onChange={() =>
                  handleToggleCompleted(
                    task._id,
                    task.completed,
                    task.task,
                    task.assignedTo,
                    setTasks
                  )
                }
              />
              <span className="task-text">
                {task.task} (Assigned to: {task.assignedTo})
              </span>
              <button
                onClick={() => handleDelete(task._id, setTasks)}
                className="task-button delete-button"
              >
                Delete Task
              </button>
              <Link
                to={`/updateTask/${task._id}`}
                className="task-button update-button"
              >
                Update Task
              </Link>
            </li>
          ))}
        </ol>
      )}
    </div>
  );
}
