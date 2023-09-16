// Usuario.js
const { DataTypes } = require('sequelize');
const sequelize = require('./sequelize'); // Importa la instancia de Sequelize

const Usuario = sequelize.define('Usuario', {
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
Usuario.hasMany(Categoria, { foreignKey: 'usuario_id' });
Usuario.hasMany(Producto, { foreignKey: 'usuario_id' });


module.exports = Usuario;
