const db = require('./db');
const bcrypt = require('bcrypt');

class User {
  static async findByEmail(email) {
    const result = await db.query(
      'SELECT * FROM users WHERE email = $1',
      [email]
    );
    return result.rows[0];
  }

  static async findByUsername(username) {
    const result = await db.query(
      'SELECT * FROM users WHERE username = $1',
      [username]
    );
    return result.rows[0];
  }

  static async findById(id) {
    const result = await db.query(
      'SELECT id, username, email, created_at FROM users WHERE id = $1',
      [id]
    );
    return result.rows[0];
  }

  static async create(userData) {
    const { username, email, password } = userData;

    // Hash password
    const saltRounds = 10;
    const password_hash = await bcrypt.hash(password, saltRounds);

    // Missing validation: email format, password strength, username length
    const result = await db.query(
      `INSERT INTO users (username, email, password_hash)
       VALUES ($1, $2, $3)
       RETURNING id, username, email, created_at`,
      [username, email, password_hash]
    );

    return result.rows[0];
  }

  static async verifyPassword(user, password) {
    return bcrypt.compare(password, user.password_hash);
  }

  // Get user's favorite recipes (feature mentioned but not in schema)
  static async getFavorites(userId) {
    // TODO: Need to add favorites table to schema
    throw new Error('Favorites feature not implemented');
  }
}

module.exports = User;