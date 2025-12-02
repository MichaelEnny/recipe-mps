const db = require('./db');

class MealPlan {
  static async findAll(userId) {
    const result = await db.query(
      'SELECT * FROM meal_plans WHERE user_id = $1 ORDER BY start_date DESC',
      [userId]
    );
    return result.rows;
  }

  static async findById(id) {
    const result = await db.query(
      'SELECT * FROM meal_plans WHERE id = $1',
      [id]
    );
    return result.rows[0];
  }

  static async create(mealPlanData) {
    const { user_id, name, start_date, end_date } = mealPlanData;

    const result = await db.query(
      `INSERT INTO meal_plans (user_id, name, start_date, end_date)
       VALUES ($1, $2, $3, $4)
       RETURNING *`,
      [user_id, name, start_date, end_date]
    );

    return result.rows[0];
  }

  static async addMealItem(mealPlanId, itemData) {
    const { recipe_id, meal_date, meal_type, servings } = itemData;

    // Missing validation: does meal_date fall within meal plan date range?
    const result = await db.query(
      `INSERT INTO meal_plan_items (meal_plan_id, recipe_id, meal_date, meal_type, servings)
       VALUES ($1, $2, $3, $4, $5)
       RETURNING *`,
      [mealPlanId, recipe_id, meal_date, meal_type, servings || 1]
    );

    return result.rows[0];
  }

  static async getMealItems(mealPlanId) {
    const result = await db.query(
      `SELECT mpi.*, r.title as recipe_title, r.prep_time, r.cook_time
       FROM meal_plan_items mpi
       JOIN recipes r ON mpi.recipe_id = r.id
       WHERE mpi.meal_plan_id = $1
       ORDER BY mpi.meal_date, mpi.meal_type`,
      [mealPlanId]
    );
    return result.rows;
  }

  // Generate shopping list from meal plan
  static async generateShoppingList(mealPlanId) {
    // TODO: Implement shopping list generation
    // This should aggregate all ingredients from recipes in the meal plan
    // Need to handle:
    // - Combining duplicate ingredients
    // - Converting units (2 cups + 1 pint = ?)
    // - Handling "to taste" quantities
    throw new Error('Shopping list generation not yet implemented');
  }

  static async delete(id) {
    await db.query('DELETE FROM meal_plans WHERE id = $1', [id]);
  }
}

module.exports = MealPlan;