import { getCustomers, createCustomers, getCustomersById, updateCustomersById } from '../controllers/customersController.js';
import { Router } from 'express';

const router = Router();

router.get('/customers', getCustomers);
router.get('/customers/:id', getCustomersById);
router.post('/customers', createCustomers);
router.put('/customers/:id', updateCustomersById);

export default router;