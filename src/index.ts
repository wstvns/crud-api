import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';
import connectDB from './config/db';
import taskRoutes from './routes/taskRoutes';

dotenv.config();

const app: Express = express();

// Connect to Database
connectDB();

// Init Middleware
app.use(express.json());

// Define Routes
app.get('/', (req: Request, res: Response) => {
  res.send('API is running...');
});

app.use('/api/tasks', taskRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

