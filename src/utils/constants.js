// Application constants

// Note: These are defined here but not consistently used throughout the codebase
// Some controllers use hardcoded values instead

const DIFFICULTY_LEVELS = ['easy', 'medium', 'hard'];

const MEAL_TYPES = ['breakfast', 'lunch', 'dinner', 'snack'];

// TODO: Should these be loaded from database instead?
const CUISINE_TYPES = [
  'italian',
  'chinese',
  'mexican',
  'indian',
  'japanese',
  'american',
  'french',
  'thai',
  'greek',
  'mediterranean'
];

// Inconsistency: These are defined but database uses VARCHAR without constraints
const INGREDIENT_CATEGORIES = [
  'vegetable',
  'fruit',
  'meat',
  'dairy',
  'grain',
  'spice',
  'condiment',
  'other'
];

// Pagination defaults (not implemented yet)
const DEFAULT_PAGE_SIZE = 20;
const MAX_PAGE_SIZE = 100;

// JWT settings (inconsistent with usage in authController)
const TOKEN_EXPIRY = '7d';  // Not actually used, hardcoded in controller

// File upload limits (not implemented)
const MAX_IMAGE_SIZE = 5 * 1024 * 1024; // 5MB
const ALLOWED_IMAGE_TYPES = ['image/jpeg', 'image/png', 'image/webp'];

module.exports = {
  DIFFICULTY_LEVELS,
  MEAL_TYPES,
  CUISINE_TYPES,
  INGREDIENT_CATEGORIES,
  DEFAULT_PAGE_SIZE,
  MAX_PAGE_SIZE,
  TOKEN_EXPIRY,
  MAX_IMAGE_SIZE,
  ALLOWED_IMAGE_TYPES
};