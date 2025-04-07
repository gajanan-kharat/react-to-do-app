const Todo = require("../models/ToDo");

const getTodos = async (req, res) => {
  try {
    const todos = await Todo.find({ isDeleted: { $ne: true } });
    res.json({ success: true, data: todos });
  } catch (err) {
    res.status(500).json({ message: "Error fetching todos" });
  }
};

const getTodoById = async (req, res) => {
  try {
    const task = await Todo.findById(req.params.id);
    if (!task) return res.status(404).json({ message: "Task not found" });
    res.json(task);
  } catch (err) {
    res.status(500).json({ message: "Error fetching task" });
  }
};

const createTodo = async (req, res) => {
  try {
    const { task, assignedTo } = req.body;
    if (!task || !assignedTo) {
      return res.status(400).json({ message: "All fields are required" });
    }
    const newTodo = new Todo({ task, assignedTo });
    await newTodo.save();

    res.status(201).json(newTodo);
  } catch (err) {
    res.status(500).json({ message: "Error adding task. Please try again" });
  }
};

const updateTodo = async (req, res) => {
  try {
    const { task, assignedTo, completed } = req.body;
    const updatedTask = await Todo.findByIdAndUpdate(
      req.params.id,
      { task, assignedTo, completed },
      { new: true }
    );
    if (!updatedTask)
      return res.status(404).json({ message: "Task not found" });
    res.json(updatedTask);
  } catch (err) {
    res.status(500).json({ message: "Error updating task" });
  }
};

const deleteTodo = async (req, res) => {
  try {
    const todo = await Todo.findByIdAndUpdate(
      req.params.id,
      { isDeleted: true, deletedAt: new Date() },
      { new: true }
    );
    if (!todo) {
      return res
        .status(404)
        .json({ success: false, message: "Task not found" });
    }
    res.json({
      success: true,
      message: "Task moved to recyclebin",
      data: todo,
    });
  } catch (err) {
    res.status(500).json({ message: "Error deleting task" });
  }
};
const getDeletedTodos = async (req, res) => {
  try {
    const todos = await Todo.find({ isDeleted: true }).sort({ deletedAt: -1 });
    res.json({ success: true, data: todos });
  } catch (err) {
    res
      .status(500)
      .json({ success: false, message: "Error fetching deleted todos" });
  }
};

const restoreTodo = async (req, res) => {
  try {
    const todo = await Todo.findByIdAndUpdate(
      req.params.id,
      { isDeleted: false, deletedAt: null },
      { new: true }
    );
    if (!todo) {
      return res
        .status(404)
        .json({ success: false, message: "Task not found" });
    }
    res.json({
      success: true,
      message: "Task restored successfully",
      data: todo,
    });
  } catch (err) {
    res.status(500), json({ success: false, message: "Error restoring task" });
  }
};

const deletePermanently = async (req, res) => {
  try {
    const todo = await Todo.findByIdAndDelete(req.params.id);
    if (!todo) {
      return res
        .status(404)
        .json({ success: false, message: "Task not found" });
    }
    res.json({ success: true, message: "Task permanently deleted" });
  } catch (err) {
    res
      .status(500)
      .json({ success: false, message: "Error deleting task permanently" });
  }
};
module.exports = {
  getDeletedTodos,
  deletePermanently,
  restoreTodo,
  getTodos,
  getTodoById,
  createTodo,
  updateTodo,
  deleteTodo,
};
