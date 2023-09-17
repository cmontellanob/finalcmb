import { Producto } from '../models/Producto.js';


export async function getProductos(req, res) {
  try {
    const Productos = await Producto.findAll({
      attributes: ['id', 'nombre', 'precio_unitario', 'estado'],
      order: [['id', 'DESC']],
    });

    res.json(Productos);
  } catch (error) {
    logger.error(error.message);
    
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
    logger.error(error.message);
    
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
    const producto = await Producto.findOne({
      where: { id },
    });
    if (producto==null)
    {
      return res.status(404).json({ message: 'No se encuentra el producto' });
    }
    return res.json(producto);
  } catch (error) {
    logger.error(error.message);
    
    res.status(500).json({
      message: error.message,
    });
  }
}

export async function updateProducto(req, res) {
  const { id } = req.params;

  try {
    const producto = await Producto.findOne({
      attributes: ['id','nombre', 'precio_unitario', 'estado'],
      where: { id },
    });
    
    producto.set(req.body);

    await producto.save();

    return res.json(producto);
  } catch (error) {
    logger.error(error.message);
    
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
    logger.error(error.message);
    
    res.status(500).json({
      message: error.message,
    });
  }
}
