import { Router } from 'express';
import {
  getProductos,
  createProducto,
  getProducto,
  updateProducto,
  deleteProducto,
} from '../controllers/productos.controller.js';

const router = Router();

// Routes
router.get('/', getProductos);

router.post('/', createProducto);

router.put('/:id', updateProducto);

router.delete('/:id', deleteProducto);

router.get('/:id', getProducto);

export default router;
