const express = require('express');
const router = express.Router();
const mealPlanController = require('../controllers/mealPlanController');
const { authenticateToken } = require('../middleware/auth');

// All meal plan routes require authentication
router.use(authenticateToken);

router.get('/', mealPlanController.getAllMealPlans);
router.get('/:id', mealPlanController.getMealPlanById);
router.post('/', mealPlanController.createMealPlan);
router.post('/:meal_plan_id/items', mealPlanController.addMealItem);
router.get('/:id/shopping-list', mealPlanController.generateShoppingList);
router.delete('/:id', mealPlanController.deleteMealPlan);

module.exports = router;