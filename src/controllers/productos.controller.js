import { Producto } from '../models/Producto.js';


export async function getProductos(req, res) {
  try {
    const Productos = await Producto.findAll({
      attributes: ['id', 'nombre', 'precio_unitario', 'estado'],
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
  console.log (req.usuario_id);
  const { nombre, precio_unitario, estado,usuario_id} = req.body;
  
  try {
    const newProducto = await Producto.create({
      nombre,
      precio_unitario,
      estado,
      usuario_id
    });
    res.json(newProducto);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
}

export async function getProducto(req, res) {
  console.log("entro");
  console.log(req.params);
  const { id } = req.params;
  console.log(id);

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
      attributes: ['nombre', 'precio_unitario', 'estado'],
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
      where: { id },
    });
    return res.sendStatus(204);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
}
