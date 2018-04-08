
exports.seed = function(knex, Promise) {
    // Deletes ALL existing entries
    return knex('user').del()
      .then(function () {
        // Inserts seed entries
        return knex('user').insert([
          {user_id: 1, name: 'Ruth', photo: 'https://avatars2.githubusercontent.com/u/33887459?s=460&v=4'},
        ]);
      });
  };