const knex = require('knex');

const db = knex({
  client: 'pg',
  connection:  {
    host: 'localhost',
    port: 5432,
    user: 'postgres',
    password: 'postgres',
    database: 'huyak',
  }
});

module.exports = db;