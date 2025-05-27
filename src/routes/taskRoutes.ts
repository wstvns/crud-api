import { Router } from 'express';
import {
  createTask,
  getAllTasks,
  getTaskById,
  updateTask,
  deleteTask,
} from '../controllers/taskController';

const router = Router();

// @route   POST /api/tasks
// @desc    Create a task
router.post('/', createTask);

// @route   GET /api/tasks
// @desc    Get all tasks
router.get('/', getAllTasks);

// @route   GET /api/tasks/:id
// @desc    Get a single task by ID
router.get('/:id', getTaskById);

// @route   PUT /api/tasks/:id
// @desc    Update a task
router.put('/:id', updateTask);

// @route   DELETE /api/tasks/:id
// @desc    Delete a task
router.delete('/:id', deleteTask);

export default router;

// dont mind the comments in the code, they are just so that I can fix it in my mind