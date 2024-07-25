import 'reflect-metadata';
import express from 'express';
import dotenv from 'dotenv';
import { AppDataSource } from './data-source';

dotenv.config(); // Load environment variables from .env file

AppDataSource.initialize().then(() => {
  const app = express();
  const PORT = process.env.PORT || 4000;

  app.use(express.json());

  app.get('/', (req, res) => {
    res.send('Hello World!');
  });

  app.listen(PORT, () => {
    console.log(`${__dirname}/**/entities/*.{ts,js}`);
    console.log(`Server is running on port ${PORT}`);
  });
});
