import { DataTypes } from 'sequelize';
import { sequelize } from '../database/database.js';
import {Usuario} from './Usuario.js'; // Importa el modelo Usuario
import  {Categoria} from './Categoria.js'; // Importa el modelo Categoria

export const Producto = sequelize.define(
  'productos', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  nombre: {
    type: DataTypes.STRING,
  },
  precio_unitario: {
    type: DataTypes.FLOAT,
  },
  estado: {
    type: DataTypes.BOOLEAN,
  },
});

// Definir relaciones
//Producto.belongsTo(Usuario, { foreignKey: 'usuario_id' });
Producto.belongsTo(Categoria, { foreignKey: 'categoria_id' });

