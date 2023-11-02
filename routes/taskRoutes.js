import express from "express";
import { allTasks, createTask, deleteTask, updateTask } from "../controllers/taskController.js";

const router = express.Router();

router.post("/add", createTask);
router.get("/", allTasks);
router.delete("/:id", deleteTask);
router.patch("/:id", updateTask);

export default router;
