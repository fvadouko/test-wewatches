const parse = require("pg-connection-string").parse;
const config = parse(process.env.DATABASE_URL);
console.log(
  "config: ",
  config,
  "process.env.DATABASE_URL: ",
  process.env.DATABASE_URL,
  "config.host",
  config.host,
  "config.port",
  config.port,
  "config.database",
  config.database,
  "config.user",
  config.user,
  "config.password",
  config.password
);
module.exports = ({ env }) => ({
  connection: {
    client: "postgres",
    connection: {
      host: config.host,
      port: config.port,
      database: config.database,
      user: config.user,
      password: config.password,
      ssl: true,
      dialectOptions: {
        ssl: {
          require: true,
          rejectUnauthorized: false,
        },
      },
    },
    debug: false,
  },
});
