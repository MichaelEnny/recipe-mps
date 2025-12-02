const request = require('supertest');
const app = require('../src/server');

describe('Authentication', () => {
  describe('POST /api/auth/register', () => {
    it('should register a new user', async () => {
      const userData = {
        username: 'testuser',
        email: 'test@example.com',
        password: 'password123'
      };

      const res = await request(app)
        .post('/api/auth/register')
        .send(userData);

      expect(res.statusCode).toBe(201);
      expect(res.body.user).toBeDefined();
      expect(res.body.token).toBeDefined();
    });

    it('should not allow duplicate emails', async () => {
      const userData = {
        username: 'testuser2',
        email: 'existing@example.com',
        password: 'password123'
      };

      const res = await request(app)
        .post('/api/auth/register')
        .send(userData);

      expect(res.statusCode).toBe(400);
      expect(res.body.error).toContain('already registered');
    });

    // TODO: Test username uniqueness
    // TODO: Test password strength requirements
    // TODO: Test email validation
  });

  describe('POST /api/auth/login', () => {
    it('should login with valid credentials', async () => {
      const credentials = {
        email: 'test@example.com',
        password: 'password123'
      };

      const res = await request(app)
        .post('/api/auth/login')
        .send(credentials);

      expect(res.statusCode).toBe(200);
      expect(res.body.token).toBeDefined();
    });

    it('should reject invalid credentials', async () => {
      const credentials = {
        email: 'test@example.com',
        password: 'wrongpassword'
      };

      const res = await request(app)
        .post('/api/auth/login')
        .send(credentials);

      expect(res.statusCode).toBe(401);
    });
  });
});