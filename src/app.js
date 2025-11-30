import express from 'express';
import dotenv from 'dotenv';
import orderRoutes from './routes/orderRoutes.js';

dotenv.config();

const app = express();
app.use(express.json());

app.use('/order', orderRoutes);

export default app;
