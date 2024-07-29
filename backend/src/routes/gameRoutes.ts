import { Router } from 'express';
import { createGame, getAllGames } from '../controllers/gameController';
import { createGameRequestModel } from '../models/request/createGameRequestModel';
import { validationMiddleware } from '../middleware/validationMiddleware';

const router = Router();

router.get('/', getAllGames);
router.post(
  '/create',
  validationMiddleware(createGameRequestModel),
  createGame,
);

export default router;
