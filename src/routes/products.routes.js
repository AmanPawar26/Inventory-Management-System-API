import express from 'express';
import {getAllProducts, createProducts, updateProducts, deleteProducts} from '../controllers/products.controller.js';

const router = express.Router();

router.get('/products', getAllProducts);
router.post('/products', createProducts);
router.put('/products/:id', updateProducts);
router.delete('/products/:id', deleteProducts)

export default router;