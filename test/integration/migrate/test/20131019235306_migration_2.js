
exports.up = function(knex, when) {
  return when.all([
    knex.schema.createTable('migration_test_2', function(t) {
      t.increments();
      t.string('name');
    }),
    knex.schema.createTable('migration_test_2.1', function(t) {
      t.increments();
      t.string('name');
    })
  ]);
};

exports.down = function(knex, when) {
  return when.all([knex.schema.dropTable('migration_test_2'), knex.schema.dropTable('migration_test_2.1')]);
};