import jwt from 'jsonwebtoken';
import 'dotenv/config';

export function verificarToken(req, res, next) {
  
  const bearerHeader = req.header('authorization'); 
if (typeof bearerHeader=='undefined') {
    return res.status(401).json({ msg: 'No hay token, acceso no autorizado' });
  }

  try {
    const token=bearerHeader.split(' ')[1];
    const decoded = jwt.verify(token, process.env.SECRETO); 
    
    req.body.usuario_id = decoded.id;
    
    next();
  } catch (error) {
    res.status(401).json({ msg: 'Token no válido' });
  }
}


