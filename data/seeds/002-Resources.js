exports.seed = function(knex, Promise) {
  return knex("Resources")
    .truncate()
    .then(function() {
      return knex("Resources").insert([
        {resource_name: 'lumber', description: 'some wood to build the house'},
    {resource_name: 'cement', description: 'for the foundation of the house'},
    {resource_name: 'VsCode', description: 'an app to code the website'},
    {resource_name: 'computer', description: 'to run any software'},
      ]);
    })
  }