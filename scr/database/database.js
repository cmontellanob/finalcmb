import { Sequelize } from 'sequelize';

export const sequelize = new Sequelize(
  'bd_productos', // db name
  'postgres', // username
  'cristina', // password
  {
    host: 'localhost',
    dialect: 'postgres',
  }
);
