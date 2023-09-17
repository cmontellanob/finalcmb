// Usuario.js

import { DataTypes } from 'sequelize';
import { sequelize } from '../database/database.js';
import { Categoria } from './Categoria.js';
import { Producto } from './Producto.js';



export const Usuario = sequelize.define(
  'usuarios', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  nombre: {
    type: DataTypes.STRING,
  },
  correo: {
    type: DataTypes.STRING,
  },
  contrasena: {
    type: DataTypes.STRING,
  },
  estado: {
    type: DataTypes.BOOLEAN,
  },
});

// Definir relaciones
Usuario.hasMany(
  Categoria, { foreignKey: 'usuario_id' }
  );
Usuario.hasMany(
  Producto, { foreignKey: 'usuario_id' }
  );



