const request = require('supertest');
const app = require('../src/server');

describe('Recipe API', () => {
  describe('GET /api/recipes', () => {
    it('should return all recipes', async () => {
      const res = await request(app).get('/api/recipes');
      expect(res.statusCode).toBe(200);
      expect(Array.isArray(res.body)).toBe(true);
    });

    it('should filter recipes by cuisine', async () => {
      const res = await request(app)
        .get('/api/recipes')
        .query({ cuisine: 'italian' });
      expect(res.statusCode).toBe(200);
      // All returned recipes should be Italian
      res.body.forEach(recipe => {
        expect(recipe.cuisine_type).toBe('italian');
      });
    });

    // TODO: Add tests for difficulty filter
    // TODO: Add tests for tag filtering
    // TODO: Add tests for prep time filtering
  });

  describe('GET /api/recipes/:id', () => {
    it('should return a recipe with ingredients and instructions', async () => {
      const res = await request(app).get('/api/recipes/1');
      expect(res.statusCode).toBe(200);
      expect(res.body).toHaveProperty('title');
      expect(res.body).toHaveProperty('ingredients');
      expect(res.body).toHaveProperty('instructions');
    });

    it('should return 404 for non-existent recipe', async () => {
      const res = await request(app).get('/api/recipes/99999');
      expect(res.statusCode).toBe(404);
    });
  });

  describe('POST /api/recipes', () => {
    it('should create a new recipe when authenticated', async () => {
      const token = 'valid-test-token'; // TODO: Generate actual test token

      const newRecipe = {
        title: 'Test Recipe',
        description: 'A test recipe',
        prep_time: 10,
        cook_time: 20,
        servings: 4,
        difficulty: 'easy',
        cuisine_type: 'test'
      };

      const res = await request(app)
        .post('/api/recipes')
        .set('Authorization', `Bearer ${token}`)
        .send(newRecipe);

      expect(res.statusCode).toBe(201);
      expect(res.body.title).toBe('Test Recipe');
    });

    it('should return 401 when not authenticated', async () => {
      const newRecipe = { title: 'Test' };

      const res = await request(app)
        .post('/api/recipes')
        .send(newRecipe);

      expect(res.statusCode).toBe(401);
    });

    // TODO: Add validation tests
    // TODO: Test required fields
  });

  describe('Search functionality', () => {
    it('should search recipes by title', async () => {
      const res = await request(app)
        .get('/api/recipes/search')
        .query({ q: 'pasta' });

      expect(res.statusCode).toBe(200);
      expect(res.body.results).toBeDefined();
    });

    // TODO: Test search by ingredients
    // TODO: Test search with no results
    // TODO: Test search ranking/relevance
  });
});