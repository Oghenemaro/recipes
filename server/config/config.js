module.exports = {
  development: {
    username: "postgres",
    password: "root",
    database: "more-recipes",
    host: "127.0.0.1",
    port : 5432,
    dialect: "postgres"
  },
  test: {
    username: "postgres",
    password: "root",
    database: "more-recipes",
    host: "127.0.0.1",
    port : 5432,
    dialect: "postgres"
  },
  production: {
    DATABASE_URL: 'DATABASE_URL',
    dialect: "postgres",
    "native": "true"
  },
}
