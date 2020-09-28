
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('project-resource').del()
    .then(function () {
      // Inserts seed entries
      return knex('project-resource').insert([
        // {projectId:1, resourceId:1},
        // {projectId:2, resourceId:2}

      ]);
    });
};
