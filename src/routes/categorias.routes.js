import { Router } from 'express';
import {
    getCategorias,
    createCategoria,
    getCategoria,
    updateCategoria,
    deleteCategoria
  } from '../controllers/categorias.controller.js';

  import {verificarToken } from '../middleware/verifyToken.js';
 

  
const router = Router();

// // Routes
router.get('/', verificarToken,getCategorias);

router.post('/',verificarToken, createCategoria);

router.put('/:id',verificarToken, updateCategoria);

router.delete('/:id',verificarToken, deleteCategoria);

router.get('/:id', verificarToken, getCategoria);

 export default router;
