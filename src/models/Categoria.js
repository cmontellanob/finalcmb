// Categoria.js
import { DataTypes } from 'sequelize';
import { sequelize } from '../database/database.js';
import { Usuario } from './Usuario.js';

export const Categoria = sequelize.define(
  'categorias', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  nombre: {
    type: DataTypes.STRING,
    allowNull: false,
    comment: 'nombre del producto',
  },
});

// // Definir relación con Usuario
// Categoria.belongsTo(Usuario,
//   { foreignKey: 'usuario_id', targetKey: 'id' }
// );

