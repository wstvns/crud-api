import { Request, Response, NextFunction } from 'express';
import Task, { ITask } from '../models/Task';

// @desc    Create a task
// @route   POST /api/tasks
// @access  Public
export const createTask = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const { title, description, startDate, dueDate, status } = req.body;
    const task: ITask = new Task({
      title,
      description,
      startDate,
      dueDate,
      status,
    });
    const createdTask = await task.save();
    res.status(201).json(createdTask);
  } catch (error: any) {
    // Pass error to the next middleware (error handler)
    // res.status(500).json({ message: 'Server Error', error: error.message });
    // Using next to pass the error to the error handling middleware
    // This allows for centralized error handling
    // and avoids duplicating error response logic in each controller.
    next(error);
  }
};

// @desc    Get all tasks
// @route   GET /api/tasks
// @access  Public
export const getAllTasks = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const { status, sortBy, order = 'asc' } = req.query;
    let query = Task.find();

    if (status) {
      query = query.where('status').equals(status as string);
    }

    if (sortBy) {
      const sortOrder = order === 'desc' ? -1 : 1;
      query = query.sort({ [sortBy as string]: sortOrder });
    }

    const tasks = await query.exec();
    res.status(200).json(tasks);
  } catch (error: any) {
    next(error);
  }
};

// @desc    Get a single task by ID
// @route   GET /api/tasks/:id
// @access  Public
export const getTaskById = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const task = await Task.findById(req.params.id);
    if (!task) {
      res.status(404).json({ message: 'Task not found' });
      return;
    }
    res.status(200).json(task);
  } catch (error: any) {
    next(error);
  }
};

// @desc    Update a task
// @route   PUT /api/tasks/:id
// @access  Public
export const updateTask = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const { title, description, startDate, dueDate, status } = req.body;
    const task = await Task.findById(req.params.id);

    if (!task) {
      res.status(404).json({ message: 'Task not found' });
      return;
    }

    task.title = title || task.title;
    task.description = description || task.description;
    task.startDate = startDate || task.startDate;
    task.dueDate = dueDate || task.dueDate;
    task.status = status || task.status;

    const updatedTask = await task.save();
    res.status(200).json(updatedTask);
  } catch (error: any) {
    next(error);
  }
};

// @desc    Delete a task
// @route   DELETE /api/tasks/:id
// @access  Public
export const deleteTask = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const task = await Task.findById(req.params.id);
    if (!task) {
      res.status(404).json({ message: 'Task not found' });
      return;
    }
    await task.deleteOne(); 
    res.status(200).json({ message: 'Task removed' });
  } catch (error: any) {
    next(error);
  }
};

// dont mind the comments in the code, they are just so that I can fix it in my mind