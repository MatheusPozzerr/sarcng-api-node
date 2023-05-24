module.exports = {
  development: {
    dialect: "postgres",
    host: "localhost",
    username: "user",
    password: "user",
    database: "construcao_software",
    port: 5432,
  },
  test: {
    dialect: "postgres",
    host: "localhost",
    username: "user",
    password: "user",
    database: "construcao_software",
    port: 5432,
  },
  production: {
    dialect: "postgres",
    host: "postgres",
    username: "user",
    password: "user",
    database: "construcao_software",
    port: 5432,
  },
};
