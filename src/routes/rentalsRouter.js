import { getRentals, createRentals, returnRentalsById, deleteRentalsById } from '../controllers/rentalsController.js';
import { Router } from 'express';

const router = Router();

router.get('/rentals', getRentals);
router.post('/rentals', createRentals);
router.post('/rentals/:id/return', returnRentalsById);
router.delete('/rentals/:id', deleteRentalsById);

export default router;