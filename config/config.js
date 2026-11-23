require('dotenv').config();

const development = {
  username: process.env.DB_USER,
  password: procces.env.DB_PASS,
  database: procces.env.DB_DATABASE,
  host: procces.env.DB_HOST,
  port: procces.env.DB_PORT,
  dialect: procces.env.DB_DIALECT
}

module.exports = { development }