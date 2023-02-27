module.exports = ({ env }) => ({
  url: env("WEBSITE_URL"),
  port: process.env.PORT,
  app: {
    keys: env.array("APP_KEYS", [
      "xK3ahudoDuLGx8gRp3FSew==",
      "3jyMlXONvwxn0z+oi/0N/A==",
    ]),
  },
});
