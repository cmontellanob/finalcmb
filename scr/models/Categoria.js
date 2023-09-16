// categoria.js
const { DataTypes } = require('sequelize');
const sequelize = require('./sequelize'); // Importa la instancia de Sequelize
const Usuario = require('./usuario'); // Importa el modelo Usuario

const Categoria = sequelize.define('Categoria', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  nombre: {
    type: DataTypes.STRING,
  },
});

// Definir relación con Usuario
Categoria.belongsTo(Usuario, { foreignKey: 'usuario_id' });

module.exports = Categoria;
