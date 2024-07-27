import { Router } from 'express';
import { createPlayer, getAllPlayers } from '../controllers/playerController';

const router = Router();

router.get('/', getAllPlayers);
router.post('/create', createPlayer);

export default router;
