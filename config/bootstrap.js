// config/functions/bootstrap.js

const migratePreparationTime = require("../migratePreparationTime");

module.exports = async ({ strapi }) => {
    if (!strapi) {
      console.error('Strapi instance is undefined');
      return;
    }
  
    console.log('Strapi instance is initialized');
  
    try {
      // Call the migration script with the strapi instance
      await migratePreparationTime({ strapi });
    } catch (error) {
      console.error('Error during migration:', error);
    }
  };