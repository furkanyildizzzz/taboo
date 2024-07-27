import { Router } from 'express';
import { createGame, getAllGames } from '../controllers/gameController';

const router = Router();

router.get('/', getAllGames);
router.post('/create', createGame);

export default router;
