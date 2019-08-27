
exports.seed = function(knex, Promise) {
  return knex("Tasks")
    .truncate()
    .then(function() {
      return knex("Tasks").insert([
        {description: 'build the foundation', notes: '', completed: false, project_id: 1 },
    {description: 'build the walls', notes: '', completed: false, project_id: 1 },
    {description: 'build the roof', notes: '', completed: false, project_id: 1 },
    {description: 'talk to client about what they want in a website', notes: '', completed: false, project_id: 2},
    {description: 'design a mockup for the website', notes: '', completed: false, project_id: 2},
    {description: 'code the website', notes: '', completed: false, project_id: 2},
      ]);
    });
  }