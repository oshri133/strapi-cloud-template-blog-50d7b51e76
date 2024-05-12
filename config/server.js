require("dotenv").config();

console.log("APP_KEYS:", process.env.APP_KEYS); // Add this line to debug

module.exports = ({ env }) => ({
  host: env("HOST", "0.0.0.0"),
  port: env.int("PORT", 1337),
  app: {
    keys: env.array("APP_KEYS", ["yourKeyA", "yourKeyB"]),
  },
  webhooks: {
    populateRelations: env.bool("WEBHOOKS_POPULATE_RELATIONS", false),
  },
});
