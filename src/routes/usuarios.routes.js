import { Router } from 'express';
import {
  getUsuarios,
  createUsuario,
  getUsuario,
  updateUsuario,
  deleteUsuario,
  login,
  getUsuarioCategorias,
  getUsuarioProductos,
  getUsuarioProductosCategorias
} from '../controllers/usuarios.controller.js';

const router = Router();

// Routes
router.get('/', getUsuarios);

router.post('/', createUsuario);


router.put('/:id', updateUsuario);

router.delete('/:id', deleteUsuario);

router.get('/:id', getUsuario);

router.get('/:id/categorias', getUsuarioCategorias);
router.get('/:id/productos', getUsuarioProductos);
router.get('/:id/productos/categorias', getUsuarioProductosCategorias);


router.post('/login', login);


export default router;
