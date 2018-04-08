
exports.up = function(knex, Promise) {
    return knex.schema.createTableIfNotExists('user', table => {
        table.increments('user_id')
        table.string('name')
        table.string('photo')
    })
  };
  
  exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('user')
  };
  

