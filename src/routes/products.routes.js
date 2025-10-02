import express from 'express';
import {getAllProducts, createProducts, updateProducts, deleteProducts, getProductById} from '../controllers/products.controller.js';

const router = express.Router();

router.get('/products', getAllProducts);
router.get('/products/:id', getProductById)
router.post('/products', createProducts);
router.put('/products/:id', updateProducts);
router.delete('/products/:id', deleteProducts)

export default router;