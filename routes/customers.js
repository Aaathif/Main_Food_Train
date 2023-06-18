import express from 'express';
import { register, login, getCustomer, deleteCustomer, updateCustomer } from '../controllers/customer.js';

const router = express.Router();

//Create a new Customer
router.post('/register',register)
router.post('/login', login)
router.get('/', getCustomer)
router.delete('/:email', deleteCustomer)
router.put('/:email', updateCustomer); // Add this line

export default router