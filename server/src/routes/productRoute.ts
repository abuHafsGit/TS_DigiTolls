
import express from 'express';
import { getProducts } from '../controllers/productsController';

const productRoute = express.Router();

productRoute.get('/products', getProducts);


export default productRoute