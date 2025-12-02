const express = require('express');
const router = express.Router();
const recipeController = require('../controllers/recipeController');
const { authenticateToken } = require('../middleware/auth');

// Public routes
router.get('/', recipeController.getAllRecipes);
router.get('/search', recipeController.searchRecipes);
router.get('/:id', recipeController.getRecipeById);

// Protected routes (require authentication)
router.post('/', authenticateToken, recipeController.createRecipe);
router.put('/:id', authenticateToken, recipeController.updateRecipe);
router.delete('/:id', authenticateToken, recipeController.deleteRecipe);

// Tag-based filtering route
router.get('/tags/:tag', recipeController.getRecipesByTag);

module.exports = router;