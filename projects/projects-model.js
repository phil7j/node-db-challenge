const knex = require('knex');
const config = require('../knexfile.js');

const db = knex(config.development);

module.exports = {
    getResources,
    getProjects,
    getTasks,
    addResource,
    addProject,
    addTask
  };

function getResources(){
    return db('resources')
}

function getProjects(){
    return db('projects')
}

function getTasks(){
    return db('tasks as t')
        .select('t.description as Task', 't.Notes', 't.completed', 'p.project_name', 'p.description')
        .innerJoin('projects as p', 't.project_id', '=', 'p.id')

}

function addResource(data){
    return db('resources').insert(data);
}

function addProject(data){
    return db('projects').insert(data);
}

function addTask(data){
    return db('tasks').insert(data);
}


// function getShoppingList(recipe_id){
//     return db('recipe_ingredients as ri')
//         .select('i.name as Ingredient', 'ri.quantity', 'r.recipe_name as Recipe')
//         .innerJoin('ingredients as i', 'ri.ingredient_id', '=', 'i.id')
//         .innerJoin('recipes as r', 'ri.recipe_id', '=', 'r.id')
//         .where({recipe_id})
// }

// function getInstructions(recipe_id){
//     return db('recipes')
//         .where({id: recipe_id})
// }
