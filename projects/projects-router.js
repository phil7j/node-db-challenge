const express = require('express');
const Projects = require('./projects-model.js');
const router = express.Router();

router.get('/', async (req, res) => {
    try {
      const recipes = await Recipes.getRecipes();
      res.json(recipes);
    } catch (err) {
      res.status(500).json({ message: 'Failed to get recipes' });
    }
  });

router.get('/:id/shoppingList', async (req, res) => {
    const { id } = req.params;

    try {
      const recipes = await Recipes.getShoppingList(id);

      if (recipes) {
        res.status(200).json(recipes);
      } else {
        res.status(404).json({ message: 'Could not find recipes' })
      }
    } catch (err) {
      res.status(500).json({ message: 'Failed to get recipes' });
    }
  });

  router.get('/:id/instructions', async (req, res) => {
    const { id } = req.params;

    try {
      const recipes = await Recipes.getInstructions(id);

      if (recipes) {
        res.status(200).json(recipes);
      } else {
        res.status(404).json({ message: 'Could not find recipes' })
      }
    } catch (err) {
      res.status(500).json({ message: 'Failed to get recipes' });
    }
  });

module.exports = router;