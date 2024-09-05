import { Router } from 'express';
import {
  createGame,
  getAllGames,
  joinGame,
} from '../controllers/gameController';
import { createGameRequestModel } from '../models/request/createGameRequestModel';
import { validationMiddleware } from '../middleware/validationMiddleware';
import { joinGameRequestModel } from '../models/request/joinGameRequestModel';

const router = Router();

router.get('/', getAllGames);
router.post(
  '/create',
  validationMiddleware(createGameRequestModel),
  createGame,
);

router.post('/join', validationMiddleware(joinGameRequestModel), joinGame);

export default router;
