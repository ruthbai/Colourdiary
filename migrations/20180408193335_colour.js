
exports.up = function(knex, Promise) {
    return knex.schema.createTableIfNotExists('colour', table => {
        table.increments('colour_id')
        table.string('user_id')
        table.string('date')
        table.string('week_of_year')
        table.string('colour')
    })
  };
  
  exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('colour')
  };
  