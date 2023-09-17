import { Categoria } from '../models/Categoria.js';


export async function getCategorias(req, res) {
  try {
    const Categorias = await Categoria.findAll({
      attributes: ['id', 'nombre'],
      order: [['id', 'DESC']],
    });

    res.json(Categorias);
  } catch (error) {
    logger.error(error.message);
    res.status(500).json({
      message: error.message,
    });
  }
}

export async function createCategoria(req, res) {
  const { nombre } = req.body;
  try {
    const newCategoria = await Categoria.create({
      
      nombre,
      
    });
    res.json(newCategoria);
  } catch (error) {
    logger.error(error.message);
    
    res.status(500).json({
      message: error.message,
    });
  }
}

export async function getCategoria(req, res) {
  const { id } = req.params;
  try {
    const categoria = await Categoria.findOne({
      where: { id },
    });
    if (categoria==null)
    {
      return res.status(404).json({ message: 'No se encuentra la categoria' });
    }
    return res.json(categoria);
  } catch (error) {
    logger.error(error.message);
    
    res.status(500).json({
      message: error.message,
    });
  }
}

export async function updateCategoria(req, res) {
  const { id } = req.params;

  try {
    const categoria = await Categoria.findOne({
      attributes: ['nombre', ],
      where: { id },
    });
    if(!categoria){
      logger.error(error.message);
    
      return res.status(404).json({
        message: 'No se encuentra la categoria',
      });
    }


    categoria.set(req.body);

    await categoria.save();

    return res.json(categoria);
  } catch (error) {
    logger.error(error.message);
    
    res.status(500).json({
      message: error.message,
    });
  }
}

export async function deleteCategoria(req, res) {
  const { id } = req.params;
  try {
    await Categoria.destroy({
      where: { id: id },
    });
    return res.sendStatus(204);
  } catch (error) {
    logger.error(error.message);
    
    res.status(500).json({
      message: error.message,
    });
  }
}
