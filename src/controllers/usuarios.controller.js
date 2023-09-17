
import { Usuario } from '../models/Usuario.js';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import 'dotenv/config';
import { Categoria } from '../models/Categoria.js';
import { Producto } from '../models/Producto.js';


export async function getUsuarios(req, res) {
  try {
    const Usuarios = await Usuario.findAll({
      attributes: ['id', 'nombre', 'correo',  'estado'],
      order: [['id', 'DESC']],
    });

    res.json(Usuarios);
  } catch (error) {
    logger.error(error.message);
    
    res.status(500).json({
      message: error.message,
    });
  }
}

export async function createUsuario(req, res) {
  const { nombre, correo, contrasena, estado } = req.body;
  try {
    const hashedPassword = await bcrypt.hash(contrasena,10);
    console.log(hashedPassword);
    const newUsuario = await Usuario.create({
      nombre,
      correo,
      contrasena:hashedPassword,
      estado,
    });
    res.json(newUsuario);
  } catch (error) {
    logger.error(error.message);
    
    res.status(500).json({
      message: error.message,
    });
  }
}

export async function getUsuario(req, res) {
  const { id } = req.params;
  try {
    const Usuario = await Usuario.findOne({
      where: { id },
      attributes: ['id', 'nombre', 'correo', 'contrasena', 'estado'],
    });
    return res.json(Usuario);
  } catch (error) {
    logger.error(error.message);
    
    res.status(500).json({
      message: "usuario no encontrado",
    });
  }
}

export async function updateUsuario(req, res) {
  const { id } = req.params;

  try {
    const hashedPassword = await bcrypt.hash(contrasena,10);
    const Usuario = await Usuario.findOne({
      attributes: ['nombre', 'correo', hashedPassword, 'estado'],
      where: { id },
    });

    Usuario.set(req.body);

    await Usuario.save();

    return res.json(Usuario);
  } catch (error) {
    logger.error(error.message);
    
    res.status(500).json({
      message: error.message,
    });
  }
}

export async function deleteUsuario(req, res) {
  const { id } = req.params;
  try {
    await Usuario.destroy({
      where: { id },
    });
    return res.sendStatus(204);
  } catch (error) {
    logger.error(error.message);
    
    res.status(500).json({
      message: error.message,
    });
  }
}

export async function login(req, res) {
  const { correo, contrasena } = req.body;

  // Buscar el usuario por correo
  const usuario = await Usuario.findOne({ where: { correo } });

  if (!usuario) {
    return res.status(404).json({ error: 'Usuario no encontrado.' });
  }

  // Verificar la contraseña
  const contrasenaValida = await bcrypt.compare(contrasena, usuario.contrasena);

  if (!contrasenaValida) {
    return res.status(401).json({ error: 'Contraseña incorrecta.' });
  }

  // Generar un JWT
  const token = jwt.sign({ id: usuario.id }, process.env.SECRETO, { expiresIn: '1h' });

  res.json({ token });
}
// 
export async function getUsuariosCategoria(req, res) {
  const { id } = req.params;
  try {
    const categorias = await Categoria.findAll({
      attributes: ['id',  'nombre'],
      where: { usuario_id: id },
    });
    return res.json(categorias);
  } catch (error) {
    logger.error(error.message);
    
    res.status(500).json({
      message: error.message,
    });
  }
}

export async function getUsuariosProducto(req, res) {
  const { id } = req.params;
  try {
    const productos = await Producto.findAll({
      attributes: ['id',  'nombre','precio_unitario','estado'],
      where: { usuario_id: id },
    });
    return res.json(productos);
  } catch (error) {
    logger.error(error.message);
    
    res.status(500).json({
      message: error.message,
    });
  }
}


