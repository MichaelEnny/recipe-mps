# Recipe & Meal Planning System

A web application for managing recipes, planning meals, and generating shopping lists.

## Features

- **Recipe Management**: Store and organize your favorite recipes
- **Meal Planning**: Plan your meals for the week
- **Shopping Lists**: Automatically generate shopping lists from meal plans
- **Search & Filter**: Find recipes based on various criteria
- **User Accounts**: Save your personal recipe collection

## Getting Started

### Installation

```bash
npm install
```

### Database Setup

Create a PostgreSQL database and run the migrations (see `database/schema.sql`).

### Configuration

Copy `.env.example` to `.env` and update the values.

### Running the Application

```bash
npm run dev
```

The server will start on port 3000 (or the PORT specified in .env).

## API Endpoints

### Recipes
- `GET /api/recipes` - Get all recipes
- `GET /api/recipes/:id` - Get a specific recipe
- `POST /api/recipes` - Create a new recipe
- `PUT /api/recipes/:id` - Update a recipe
- `DELETE /api/recipes/:id` - Delete a recipe

### Meal Plans
- `GET /api/meal-plans` - Get meal plans
- `POST /api/meal-plans` - Create a meal plan

### Users
- `POST /api/auth/register` - Register a new user
- `POST /api/auth/login` - Login

## Project Structure

```
src/
  controllers/  - Request handlers
  models/       - Database models
  routes/       - API routes
  middleware/   - Express middleware
  utils/        - Helper functions
database/       - Database schema and migrations
tests/          - Test files
client/         - Frontend React application
```

## Notes

- Some features are still in development
- Error handling needs improvement in several areas
- Validation rules are partially implemented