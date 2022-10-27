require('dotenv').config();

//import sequelize constructor from the library
const Sequelize = require('sequelize');

//create connection to database, pass in MySQL info for username and password
// const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
//   host: 'localhost',
//   dialect: 'mysql',
//   port: '3306'
// })

const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
    host: 'localhost',
    dialect: 'mysql',
    port: 3306
  })


// let sequelize = process.env.JAWSDB_URL
//   ? new Sequelize(process.env.JAWSDB_URL)
//   : new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PW, {
//       host: 'localhost',
//       dialect: 'mysql',
//       dialectOptions: {
//         decimalNumbers: true,
//       },
//     });


module.exports = sequelize;
