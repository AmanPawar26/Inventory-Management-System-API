import express from "express";
import {decreaseStockQuantity, increaseStockQuantity} from "../controllers/managestock.controller.js"

const router = express.Router();

router.put('/products/:id/increase', increaseStockQuantity);
router.put('/products/:id/decrease', decreaseStockQuantity)

export default router;
