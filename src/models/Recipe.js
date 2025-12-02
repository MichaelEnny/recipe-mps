const db = require('./db');

class Recipe {
  static async findAll(filters = {}) {
    let query = 'SELECT * FROM recipes WHERE 1=1';
    const params = [];
    let paramCount = 1;

    // Filter by cuisine type
    if (filters.cuisine) {
      query += ` AND cuisine_type = $${paramCount}`;
      params.push(filters.cuisine);
      paramCount++;
    }

    // Filter by difficulty
    if (filters.difficulty) {
      query += ` AND difficulty = $${paramCount}`;
      params.push(filters.difficulty);
      paramCount++;
    }

    // TODO: Add filtering by tags, ingredients, prep time
    // TODO: Add sorting options

    const result = await db.query(query, params);
    return result.rows;
  }

  static async findById(id) {
    const result = await db.query(
      'SELECT * FROM recipes WHERE id = $1',
      [id]
    );
    return result.rows[0];
  }

  static async create(recipeData) {
    const { title, description, prep_time, cook_time, servings, difficulty, cuisine_type, user_id } = recipeData;

    // Note: Missing validation here
    const result = await db.query(
      `INSERT INTO recipes (title, description, prep_time, cook_time, servings, difficulty, cuisine_type, user_id)
       VALUES ($1, $2, $3, $4, $5, $6, $7, $8)
       RETURNING *`,
      [title, description, prep_time, cook_time, servings, difficulty, cuisine_type, user_id]
    );

    return result.rows[0];
  }

  static async update(id, recipeData) {
    const { title, description, prep_time, cook_time, servings, difficulty, cuisine_type } = recipeData;

    const result = await db.query(
      `UPDATE recipes
       SET title = $1, description = $2, prep_time = $3, cook_time = $4,
           servings = $5, difficulty = $6, cuisine_type = $7, updated_at = CURRENT_TIMESTAMP
       WHERE id = $8
       RETURNING *`,
      [title, description, prep_time, cook_time, servings, difficulty, cuisine_type, id]
    );

    return result.rows[0];
  }

  static async delete(id) {
    await db.query('DELETE FROM recipes WHERE id = $1', [id]);
  }

  // Get recipe with ingredients and instructions
  static async findByIdWithDetails(id) {
    const recipe = await this.findById(id);
    if (!recipe) return null;

    const ingredients = await db.query(
      `SELECT ri.*, i.name, i.category
       FROM recipe_ingredients ri
       JOIN ingredients i ON ri.ingredient_id = i.id
       WHERE ri.recipe_id = $1`,
      [id]
    );

    const instructions = await db.query(
      'SELECT * FROM instructions WHERE recipe_id = $1 ORDER BY step_number',
      [id]
    );

    // TODO: Add tags to the response

    return {
      ...recipe,
      ingredients: ingredients.rows,
      instructions: instructions.rows
    };
  }

  // Search recipes - basic implementation
  static async search(searchTerm) {
    const result = await db.query(
      `SELECT * FROM recipes
       WHERE title ILIKE $1 OR description ILIKE $1`,
      [`%${searchTerm}%`]
    );
    return result.rows;
  }
}

module.exports = Recipe;