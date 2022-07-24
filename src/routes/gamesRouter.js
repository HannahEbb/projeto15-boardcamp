import { getGames, createGames } from '../controllers/gamesController.js';
import { Router } from 'express';

const router = Router();

router.get('/games', getGames);
router.post('/games', createGames);

export default router;