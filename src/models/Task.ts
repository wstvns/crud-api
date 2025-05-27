import mongoose, { Schema, Document } from 'mongoose';

// Interface of the task
export interface ITask extends Document {
  title: string;
  description?: string;
  startDate?: Date;
  dueDate?: Date;
  status: 'pending' | 'in-progress' | 'completed';
  createdAt: Date;
  updatedAt: Date;
}

// Schema of the task
const TaskSchema: Schema = new Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
    description: {
      type: String,
      trim: true,
    },
    startDate: {
      type: Date,
    },
    dueDate: {
      type: Date,
    },
    status: {
      type: String,
      enum: ['pending', 'in-progress', 'completed'],
      default: 'pending',
      required: true,
    },
  },
  {
    timestamps: true, // Automatically manage the creat and uptade field
  }
);

// task model
const Task = mongoose.model<ITask>('Task', TaskSchema);

export default Task;