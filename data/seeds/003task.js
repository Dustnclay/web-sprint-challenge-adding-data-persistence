
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('task').del()
    .then(function () {
      // Inserts seed entries
      return knex('task').insert([
        {projectId:1, description:'expand stomach', notes:'eat lettuce', complete:false },
        {projectId:2, description:'ttasku des', notes:'th taskup notes', complete:false }

      ]);
    });
};
