import express from "express";
import {decreaseStockQuantity, increaseStockQuantity, productsBelowThreshold} from "../controllers/managestock.controller.js"

const router = express.Router();

router.put('/products/:id/increase', increaseStockQuantity);
router.put('/products/:id/decrease', decreaseStockQuantity)
router.get('/products/low-stock', productsBelowThreshold);

export default router;
