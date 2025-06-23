import { Router } from 'express';
import { createProduct, getALLProduct } from '../controller/product.controller.js';

const router = Router();

router.post('/', [], createProduct)
router.get('/', getALLProduct)

export default router;
