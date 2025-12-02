-- Recipe Management System Database Schema

CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    username VARCHAR(50) UNIQUE NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    password_hash VARCHAR(255) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE recipes (
    id SERIAL PRIMARY KEY,
    user_id INTEGER REFERENCES users(id),
    title VARCHAR(255) NOT NULL,
    description TEXT,
    prep_time INTEGER,  -- in minutes
    cook_time INTEGER,  -- in minutes
    servings INTEGER,
    difficulty VARCHAR(20),  -- TODO: Should this be an enum?
    cuisine_type VARCHAR(50),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE ingredients (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    category VARCHAR(50)  -- dairy, vegetable, meat, etc.
);

-- Note: quantity handling is inconsistent - sometimes numeric, sometimes text
CREATE TABLE recipe_ingredients (
    id SERIAL PRIMARY KEY,
    recipe_id INTEGER REFERENCES recipes(id) ON DELETE CASCADE,
    ingredient_id INTEGER REFERENCES ingredients(id),
    quantity VARCHAR(50),  -- "2 cups", "1 tbsp", "to taste"
    unit VARCHAR(20),
    notes TEXT
);

CREATE TABLE instructions (
    id SERIAL PRIMARY KEY,
    recipe_id INTEGER REFERENCES recipes(id) ON DELETE CASCADE,
    step_number INTEGER NOT NULL,
    instruction TEXT NOT NULL
);

CREATE TABLE tags (
    id SERIAL PRIMARY KEY,
    name VARCHAR(50) UNIQUE NOT NULL
);

CREATE TABLE recipe_tags (
    recipe_id INTEGER REFERENCES recipes(id) ON DELETE CASCADE,
    tag_id INTEGER REFERENCES tags(id) ON DELETE CASCADE,
    PRIMARY KEY (recipe_id, tag_id)
);

-- Meal planning tables
CREATE TABLE meal_plans (
    id SERIAL PRIMARY KEY,
    user_id INTEGER REFERENCES users(id),
    name VARCHAR(255),
    start_date DATE NOT NULL,
    end_date DATE NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE meal_plan_items (
    id SERIAL PRIMARY KEY,
    meal_plan_id INTEGER REFERENCES meal_plans(id) ON DELETE CASCADE,
    recipe_id INTEGER REFERENCES recipes(id),
    meal_date DATE NOT NULL,
    meal_type VARCHAR(20),  -- breakfast, lunch, dinner, snack
    servings INTEGER DEFAULT 1
);

-- Shopping list feature (partially implemented)
CREATE TABLE shopping_lists (
    id SERIAL PRIMARY KEY,
    user_id INTEGER REFERENCES users(id),
    meal_plan_id INTEGER REFERENCES meal_plans(id),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    status VARCHAR(20)  -- active, completed, archived
);

-- TODO: Add table for shopping list items

-- Recipe ratings (mentioned in features but not fully implemented)
CREATE TABLE recipe_ratings (
    id SERIAL PRIMARY KEY,
    recipe_id INTEGER REFERENCES recipes(id) ON DELETE CASCADE,
    user_id INTEGER REFERENCES users(id),
    rating INTEGER CHECK (rating >= 1 AND rating <= 5),
    review TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Indexes for common queries
CREATE INDEX idx_recipes_user_id ON recipes(user_id);
CREATE INDEX idx_recipes_cuisine ON recipes(cuisine_type);
CREATE INDEX idx_meal_plan_items_date ON meal_plan_items(meal_date);

-- Missing indexes on some foreign keys that might need them