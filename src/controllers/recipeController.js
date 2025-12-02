const Recipe = require('../models/Recipe');

// Get all recipes (with optional filters)
exports.getAllRecipes = async (req, res) => {
  try {
    const filters = {
      cuisine: req.query.cuisine,
      difficulty: req.query.difficulty,
      // TODO: Add more filter options from query params
    };

    const recipes = await Recipe.findAll(filters);
    res.json(recipes);
  } catch (error) {
    console.error('Error fetching recipes:', error);
    res.status(500).json({ error: 'Failed to fetch recipes' });
  }
};

// Get single recipe - note different error handling pattern
exports.getRecipeById = async (req, res) => {
  const recipe = await Recipe.findByIdWithDetails(req.params.id);

  if (!recipe) {
    return res.status(404).json({ message: 'Recipe not found' });
  }

  res.json(recipe);
};

// Create new recipe
exports.createRecipe = async (req, res) => {
  try {
    // TODO: Add validation middleware
    const recipeData = {
      ...req.body,
      user_id: req.user?.id || null  // Assumes auth middleware sets req.user
    };

    const newRecipe = await Recipe.create(recipeData);
    res.status(201).json(newRecipe);
  } catch (error) {
    console.error('Error creating recipe:', error);
    res.status(500).json({ error: 'Failed to create recipe' });
  }
};

// Update recipe - inconsistent response format
exports.updateRecipe = async (req, res) => {
  try {
    const updatedRecipe = await Recipe.update(req.params.id, req.body);

    if (!updatedRecipe) {
      return res.status(404).send('Recipe not found');  // Different format than getRecipeById
    }

    res.json({ success: true, data: updatedRecipe });  // Different format than create
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Delete recipe - no error handling
exports.deleteRecipe = async (req, res) => {
  await Recipe.delete(req.params.id);
  res.status(204).send();
};

// Search recipes
exports.searchRecipes = async (req, res) => {
  const { q } = req.query;

  if (!q) {
    return res.status(400).json({ error: 'Search query required' });
  }

  try {
    const results = await Recipe.search(q);
    res.json({ results, count: results.length });
  } catch (error) {
    res.status(500).json({ error: 'Search failed' });
  }
};

// Get recipes by tag - mentioned in README but not implemented
exports.getRecipesByTag = async (req, res) => {
  // TODO: Implement tag-based filtering
  res.status(501).json({ error: 'Not implemented yet' });
};