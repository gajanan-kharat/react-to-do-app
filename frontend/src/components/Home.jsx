import React, { useState, useEffect } from "react";
import "../styles/home.css";
import MyList from "./MyList";
import {
  handleSubmit
} from "../services/taskService";

export default function Home({tasks, setTasks}) {
  const [taskName, setTaskName] = useState("");
  const [assignedTo, setAssignedTo] = useState("");

  return (
    <div>
      <form
        onSubmit={(e) =>
          handleSubmit(
            e,
            taskName,
            assignedTo,
            setTasks,
            setTaskName,
            setAssignedTo
          )
        }
        className="task-form"
      >
        <label htmlFor="taskName">Task Name:- </label>
        <input
          id="taskName"
          type="text"
          value={taskName}
          onChange={(e) => setTaskName(e.target.value)}
          required
        />
        <label htmlFor="assignedTo">Assigned To:-</label>
        <input
          id="assignedTo"
          type="text"
          value={assignedTo}
          onChange={(e) => setAssignedTo(e.target.value)}
          required
        />
        <button type="submit">Add Task</button>
      </form>
      <MyList tasks={tasks} setTasks={setTasks} />
    </div>
  );
}
