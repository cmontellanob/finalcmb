import { Router } from 'express';
import {
  getUsuarios,
  createUsuario,
  getUsuario,
  updateUsuario,
  deleteUsuario,
  login,
  getUsuariosCategoria,
  getUsuariosProducto
} from '../controllers/usuarios.controller.js';

const router = Router();

// Routes
router.get('/', getUsuarios);

router.post('/', createUsuario);


router.put('/:id', updateUsuario);

router.delete('/:id', deleteUsuario);

router.get('/:id', getUsuario);

router.get('/:id/categorias', getUsuariosCategoria);
router.get('/:id/productos', getUsuariosProducto);


router.post('/login', login);


export default router;
