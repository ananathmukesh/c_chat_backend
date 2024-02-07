// // knexfile.js
// require('dotenv').config();

// module.exports = {
//   client: 'mssql',
//   connection: {
//     host: 'seconddb.cvqgq6ou6nh3.ap-south-1.rds.amazonaws.com',
//     user: 'admin',
//     password: 'leo45gkm',
//     database: 'test_project',
//     charset: 'utf8',
//     port:1433,
//     options: {
//       encrypt: true, // For Azure SQL Database
//       trustServerCertificate: true, // Added for SSL trust
//     },
    
//   },
//   migrations: {
//     tableName: 'knex_migrations',
//     directory: './migrations',
//   },
//   seeds: {
//     directory: './seeds',
//   },
// };



// Locall
// // knexfile.js
// require('dotenv').config();

// module.exports = {
//   client: 'mysql',
//   connection: {
//     host: 'localhost',
//     user: 'root',
//     password: '',
//     database: 'kodukku_test_project',
//     charset: 'utf8',
//   },
  
//   migrations: {
//     tableName: 'knex_migrations',
//     directory: './migrations',
//   },
//   seeds: {
//     directory: './seeds',
//   },
// };


// knexfile.js
require('dotenv').config();

module.exports = {
  client: 'mssql2',
  connection: {
    server: 'sql.freedb.tech',
    user: 'freedb_liveroot',
    password: 'dn%&s6fN8*V#K4m',
    database: 'freedb_kodukku_test_project',
    charset: 'utf8',
   
    options: {
      encrypt: false, 
      
    },
  },
  migrations: {
    tableName: 'knex_migrations',
    directory: './migrations',
  },
  seeds: {
    directory: './seeds',
  },
};

