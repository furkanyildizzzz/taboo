import express from 'express';
import dotenv from 'dotenv';
import pool from './database/db';

dotenv.config(); // Load environment variables from .env file
const app = express();

app.use(express.json());

app.listen(4000, () => {
  console.log(`Taboo app listening on port 4000`);
  pool
    .connect()
    .catch((err) => {
      console.log('Error while connection to databse ', err);
    })
    .finally(() => {
      console.log('Connected to Postgre Database');
    });
});
