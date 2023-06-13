const { Sequelize } = require('sequelize')
const mysql = require('mysql2/promise');

const createDatabase = async () => {
  const connection = await mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
  });

  await connection.query('CREATE DATABASE IF NOT EXISTS hotelaria');

  console.log('Banco de Dados criado com sucesso');

  await connection.end();
};

createDatabase();

const sequelize = new Sequelize({
  dialect: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'root',
  password: 'root',
  database: 'hotelaria',
  define: {
    timestamps: true,
    freezeTableName: true
  },
});

module.exports = sequelize;