import { Producto } from '../models/Producto.js';

export async function getProductos(req, res) {
  try {
    const Productos = await Producto.findAll({
      attributes: ['id', 'projectId', 'name', 'done'],
      order: [['id', 'DESC']],
    });

    res.json(Productos);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
}

export async function createProducto(req, res) {
  const { name, done, projectId } = req.body;
  try {
    const newProducto = await Producto.create({
      projectId,
      name,
      done,
    });
    res.json(newProducto);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
}

export async function getProducto(req, res) {
  const { id } = req.params;
  try {
    const Producto = await Producto.findOne({
      where: { id },
    });
    return res.json(Producto);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
}

export async function updateProducto(req, res) {
  const { id } = req.params;

  try {
    const Producto = await Producto.findOne({
      attributes: ['name', 'projectId', 'done', 'id'],
      where: { id },
    });

    Producto.set(req.body);

    await Producto.save();

    return res.json(Producto);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
}

export async function deleteProducto(req, res) {
  const { id } = req.params;
  try {
    await Producto.destroy({
      where: { projectId: id },
    });
    return res.sendStatus(204);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
}
