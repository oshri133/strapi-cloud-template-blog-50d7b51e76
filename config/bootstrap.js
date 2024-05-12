const migratePreparationTime = require("../migratePreparationTime");

module.exports = async () => {
  await migratePreparationTime();
  // Other bootstrap logic
};
