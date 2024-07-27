import 'reflect-metadata';
import express, { Request, Response } from 'express';
import dotenv from 'dotenv';
import { AppDataSource } from './data-source';
import gameRoutes from './routes/gameRoutes';
import playerRoutes from './routes/playerRoutes';
import { errorHandler } from './middleware/errorHandler';

dotenv.config(); // Load environment variables from .env file

const app = express();

app.use(express.json());

app.use(errorHandler);

app.use('/game', gameRoutes);
app.use('/player', playerRoutes);

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('*', (req: Request, res: Response) => {
  res.status(505).json({ message: 'Bad Request' });
});

AppDataSource.initialize().then(() => {
  const PORT = process.env.PORT || 4000;

  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
});
