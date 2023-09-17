
import { Usuario } from '../models/Usuario.js';

export async function getUsuarios(req, res) {
  try {
    const Usuarios = await Usuario.findAll({
      attributes: ['id', 'nombre', 'correo', 'contrasena','estado'],
      order: [['id', 'DESC']],
    });

    res.json(Usuarios);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
}

export async function createUsuario(req, res) {
  const { nombre, correo, contrasena,estado } = req.body;
  try {
    const newUsuario = await Usuario.create({
      nombre,
      correo,
      contrasena,
      estado,
    });
    res.json(newUsuario);
  } catch (error) {
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
    });
    return res.json(Usuario);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
}

export async function updateUsuario(req, res) {
  const { id } = req.params;

  try {
    const Usuario = await Usuario.findOne({
      attributes: ['nombre', 'correo', 'contrasena','estado'],
      where: { id },
    });

    Usuario.set(req.body);

    await Usuario.save();

    return res.json(Usuario);
  } catch (error) {
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
    res.status(500).json({
      message: error.message,
    });
  }
}
