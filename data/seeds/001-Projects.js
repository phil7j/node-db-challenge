
exports.seed = function(knex, Promise) {
  return knex("Projects")
    .truncate()
    .then(function() {
      return knex("Projects").insert([
        {project_name: 'Build a house', description: 'Build a new house on my property', completed: false},
    {project_name: 'Make new website', description: 'Plan, design and build website for client', completed: false}
      ])
    })
  }