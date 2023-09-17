import { Router } from 'express';
import {
  getProductos,
  createProducto,
  getProducto,
  updateProducto,
  deleteProducto,
} from '../controllers/productos.controller.js';
import {verificarToken } from '../middleware/verifyToken.js';
const router = Router();

// Routes
router.get('/', verificarToken, getProductos);

router.post('/',verificarToken, createProducto);

router.put('/:id',verificarToken, updateProducto);

router.delete('/:id',verificarToken, deleteProducto);

router.get('/:id', verificarToken,getProducto);

export default router;
