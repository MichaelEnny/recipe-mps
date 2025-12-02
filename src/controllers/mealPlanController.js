const MealPlan = require('../models/MealPlan');

exports.getAllMealPlans = async (req, res) => {
  try {
    const userId = req.user.id;
    const mealPlans = await MealPlan.findAll(userId);
    res.json(mealPlans);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error retrieving meal plans' });
  }
};

exports.getMealPlanById = async (req, res) => {
  try {
    const mealPlan = await MealPlan.findById(req.params.id);

    if (!mealPlan) {
      return res.status(404).json({ error: 'Meal plan not found' });
    }

    // Also get the meal items
    const items = await MealPlan.getMealItems(req.params.id);

    res.json({
      ...mealPlan,
      items
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.createMealPlan = async (req, res) => {
  const { name, start_date, end_date } = req.body;

  // Basic validation
  if (!start_date || !end_date) {
    return res.status(400).json({ error: 'Start and end dates are required' });
  }

  // TODO: Validate that end_date is after start_date
  // TODO: Validate date format

  try {
    const mealPlan = await MealPlan.create({
      user_id: req.user.id,
      name,
      start_date,
      end_date
    });

    res.status(201).json(mealPlan);
  } catch (error) {
    res.status(500).json({ error: 'Failed to create meal plan' });
  }
};

exports.addMealItem = async (req, res) => {
  const { meal_plan_id } = req.params;
  const itemData = req.body;

  try {
    const item = await MealPlan.addMealItem(meal_plan_id, itemData);
    res.status(201).json(item);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.generateShoppingList = async (req, res) => {
  try {
    const shoppingList = await MealPlan.generateShoppingList(req.params.id);
    res.json(shoppingList);
  } catch (error) {
    // This will fail because it's not implemented
    res.status(500).json({ error: error.message });
  }
};

exports.deleteMealPlan = async (req, res) => {
  try {
    await MealPlan.delete(req.params.id);
    res.json({ message: 'Meal plan deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};