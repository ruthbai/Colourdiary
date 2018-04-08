
exports.seed = function(knex, Promise) {
    // Deletes ALL existing entries
    return knex('colour').del()
      .then(function () {
        // Inserts seed entries
        return knex('colour').insert([
          {colour_id: 1, user_id: 1, date: '8/4/2018', week_of_year: '14', colour: 'yellow'}
        ]);
      });
  };