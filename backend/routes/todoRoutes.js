const express = require("express");
const router = express.Router();
const {
  getTodos,
  getTodoById,
  createTodo,
  updateTodo,
  deleteTodo,
  getDeletedTodos,
  restoreTodo,
  deletePermanently,
} = require("../controllers/todoController");

router.get("/", getTodos);
router.get("/:id", getTodoById);
router.post("/", createTodo);
router.put("/:id", updateTodo);
router.delete("/:id", deleteTodo);

router.get("/recyclebin/all", getDeletedTodos);
router.patch("/recyclebin/restore/:id", restoreTodo);
router.delete("/recyclebin/:id", deletePermanently);

module.exports = router;
