// knexfile.js
require('dotenv').config();

module.exports = {
  client: 'mssql',
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