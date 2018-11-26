// Update with your config settings.

module.exports = {

  development: {
    client: 'pg',
    connection: 'postgres://localhost:/useless-superpowers',
    migrations: {
      tableName: 'knex_migrations'
     }
  },

  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL
  }

};
