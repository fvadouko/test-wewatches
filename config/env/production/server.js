module.exports = ({ env }) => ({
  url: env("WEBSITE_URL"),
  proxy: true,
  app: {
    keys: env.array("APP_KEYS", [
      "xK3ahudoDuLGx8gRp3FSew==",
      "3jyMlXONvwxn0z+oi/0N/A==",
    ]),
  },
});
