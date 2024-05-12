module.exports = async ({ strapi }) => {
  const migratePreparationTime = require("../migratePreparationTime");

  // Ensure Strapi is initialized
  if (!strapi) {
    console.error("Strapi instance is undefined");
    return;
  }

  // Call the migration script
  await migratePreparationTime({ strapi });
};
