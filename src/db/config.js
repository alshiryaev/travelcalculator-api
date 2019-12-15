const dotenv = require('dotenv');
dotenv.config();

module.exports = {
  development: {
    host: "127.0.0.1",
    username: process.env.ADMIN_LOGIN,
    password: process.env.ADMIN_PASSWORD,    
    dialect: "postgres",
    database: "travelcalculator"
  },
  production: {
    host: process.env.ADMIN_HOST,
    username: process.env.ADMIN_LOGIN,
    password: process.env.ADMIN_PASSWORD,
    dialect: "postgres",
    ssl: true,
    dialectOptions: {
      ssl: {
        require: true
      }
    }
  }
};