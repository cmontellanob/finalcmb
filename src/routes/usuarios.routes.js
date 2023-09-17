import { Router } from 'express';
import {
  getUsuarios,
  createUsuario,
  getUsuario,
  updateUsuario,
  deleteUsuario,
  login
} from '../controllers/usuarios.controller.js';

const router = Router();

// Routes
router.get('/', getUsuarios);

router.post('/', createUsuario);

router.put('/:id', updateUsuario);

router.delete('/:id', deleteUsuario);

router.get('/:id', getUsuario);

router.post('/login', login);

export default router;
