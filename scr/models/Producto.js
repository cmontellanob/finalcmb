// Producto.js
const { DataTypes } = require('sequelize');
const sequelize = require('./sequelize'); // Importa la instancia de Sequelize
const Usuario = require('./usuario'); // Importa el modelo Usuario
const Categoria = require('./Categoria'); // Importa el modelo Categoria

const Producto = sequelize.define('Producto', {
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
Producto.belongsTo(Usuario, { foreignKey: 'usuario_id' });
Producto.belongsTo(Categoria, { foreignKey: 'categoria_id' });

module.exports = Producto;
