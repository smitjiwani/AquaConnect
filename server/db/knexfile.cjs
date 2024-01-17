/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
module.exports = {
  development: {
    client: 'postgres',
    connection: {
      host: "db",
      database: 'username',
      user: 'username',
      password: 'password',
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      tableName: 'knex_migrations',
      directory: './migration',
    },
    seeds: {
      directory: './seeds',
    },
  },
}
