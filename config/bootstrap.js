// config/functions/bootstrap.js

const migratePreparationTime = require("../migratePreparationTime");

module.exports = async ({ strapi }) => {
  if (!strapi) {
    console.error("Strapi instance is undefined");
    return;
  }

  const knex = strapi.db.connection;

  console.log("Calling migration script...");
  await migratePreparationTime(knex);
};
