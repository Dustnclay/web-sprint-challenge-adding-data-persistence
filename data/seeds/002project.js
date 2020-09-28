
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('project').del()
    .then(function () {
      // Inserts seed entries
      return knex('project').insert([
        {name:"eating contest" , description: ' gone eat da hotdogs' , complete: false},
        {name:"throw up name" , description: ' throw up des' , complete: false}

      ]);
    });
};
