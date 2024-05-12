// migratePreparationTime.js

module.exports = async (knex) => {
    try {
      console.log('Starting migration...');
  
      // Rename the existing preparation_time column
      await knex.schema.alterTable('recipes', (table) => {
        table.renameColumn('preparation_time', 'preparation_time_old');
      });
  
      console.log('Renamed column preparation_time to preparation_time_old');
  
      // Add the new preparation_time column with TIME type
      await knex.schema.alterTable('recipes', (table) => {
        table.time('preparation_time');
      });
  
      console.log('Added new preparation_time column with TIME type');
  
      // Migrate data from preparation_time_old to preparation_time
      const recipes = await knex('recipes').select('id', 'preparation_time_old');
      for (const recipe of recipes) {
        if (recipe.preparation_time_old) {
          const timeValue = new Date(recipe.preparation_time_old).toTimeString().split(' ')[0];
          await knex('recipes')
            .where('id', recipe.id)
            .update({ preparation_time: timeValue });
        }
      }
  
      console.log('Migrated data to new preparation_time column');
  
      // Drop the old preparation_time_old column
      await knex.schema.alterTable('recipes', (table) => {
        table.dropColumn('preparation_time_old');
      });
  
      console.log('Dropped old preparation_time_old column');
  
      console.log('Migration completed successfully');
    } catch (error) {
      console.error('Error during migration:', error);
    }
  };
  