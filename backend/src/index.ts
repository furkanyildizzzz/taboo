import 'reflect-metadata';
import express, { NextFunction, Request, Response } from 'express';
import dotenv from 'dotenv';
import { AppDataSource } from './data-source';
import gameRoutes from './routes/gameRoutes';
import playerRoutes from './routes/playerRoutes';
import { errorHandler } from './middleware/errorHandler';
import { NotFoundError } from './types/error/NotFoundError';

dotenv.config(); // Load environment variables from .env file

const app = express();

app.use(express.json());

app.use((req: Request, res: Response, next: NextFunction) => {
  const ip = req.headers['x-forwarded-for'] || req.socket.remoteAddress;
  req.body.ipAddress = ip;
  next();
});

app.use('/game', gameRoutes);
app.use('/player', playerRoutes);

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.use((req: Request, res: Response, next: NextFunction) =>
  next(new NotFoundError(req.path)),
);
app.use(errorHandler);

AppDataSource.initialize().then(() => {
  const PORT = process.env.PORT || 4000;

  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
});
