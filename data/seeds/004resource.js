
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('resource').del()
    .then(function () {
      // Inserts seed entries
      return knex('resource').insert([
        {name: 'lots of food', description: 'double usual amount'},
        {name: 'res- name', description: 'res- des'},

      ]);
    });
};
