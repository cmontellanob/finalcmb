import { Router } from 'express';
import {
    getCategorias,
    createCategoria,
    getCategoria,
    updateCategoria,
    deleteCategoria
  } from '../controllers/categorias.controller.js';


const router = Router();

// // Routes
router.get('/', getCategorias);

router.post('/', createCategoria);

router.put('/:id', updateCategoria);

router.delete('/:id', deleteCategoria);

router.get('/:id', getCategoria);

 export default router;
