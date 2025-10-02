import express from 'express';
import productRoutes from './routes/products.routes.js'
import manageStockRoutes from './routes/managestock.routes.js'


const app = express();

app.use(express.json());

app.use('/stock', manageStockRoutes)
app.use('/api', productRoutes);



export default app;