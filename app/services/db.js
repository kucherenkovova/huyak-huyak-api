const knex = require('knex');

const db = knex({
  client: 'pg',
  connection:  {
    host: process.env.DB_HOST || 'localhost',
    port: 5432,
    user: 'postgres',
    password: 'postgres',
    database: 'huyak',
  }
});

module.exports = db;