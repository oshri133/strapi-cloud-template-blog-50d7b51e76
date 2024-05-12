// migratePreparationTime.js

module.exports = async () => {
  const knex = strapi.db.connection;

  try {
    // Rename the existing preparation_time column
    await knex.schema.alterTable("recipes", (table) => {
      table.renameColumn("preparation_time", "preparation_time_old");
    });

    // Add the new preparation_time column with TIME type
    await knex.schema.alterTable("recipes", (table) => {
      table.time("preparation_time");
    });

    // Migrate data from preparation_time_old to preparation_time
    await knex.raw(`
        UPDATE recipes
        SET preparation_time = TO_CHAR(preparation_time_old, 'HH24:MI:SS')::time
        WHERE preparation_time_old IS NOT NULL;
      `);

    // Drop the old preparation_time_old column
    await knex.schema.alterTable("recipes", (table) => {
      table.dropColumn("preparation_time_old");
    });

    console.log(
      "Migration completed: preparation_time column updated to TIME type."
    );
  } catch (error) {
    console.error("Error during migration:", error);
  }
};
