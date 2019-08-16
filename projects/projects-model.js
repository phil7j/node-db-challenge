const knex = require('knex');
const config = require('../knexfile.js');

const db = knex(config.development);

module.exports = {
    getRecipes,
    getShoppingList,
    getInstructions
  };

function getRecipes(){
    return db('recipes')
}

function getShoppingList(recipe_id){
    return db('recipe_ingredients as ri')
        .select('i.name as Ingredient', 'ri.quantity', 'r.recipe_name as Recipe')
        .innerJoin('ingredients as i', 'ri.ingredient_id', '=', 'i.id')
        .innerJoin('recipes as r', 'ri.recipe_id', '=', 'r.id')
        .where({recipe_id})
}

function getInstructions(recipe_id){
    return db('recipes')
        .where({id: recipe_id})
}
