const { body, validationResult } = require('express-validator');

// Recipe validation rules (partially implemented)
exports.validateRecipe = [
  body('title').notEmpty().withMessage('Title is required'),
  body('prep_time').optional().isInt({ min: 0 }),
  body('cook_time').optional().isInt({ min: 0 }),
  // TODO: Add validation for servings, difficulty, cuisine_type
  // TODO: Add custom validator for difficulty values
];

// Meal plan validation (not used anywhere yet)
exports.validateMealPlan = [
  body('start_date').isISO8601().withMessage('Invalid start date'),
  body('end_date').isISO8601().withMessage('Invalid end date'),
  // TODO: Add custom validator to check end_date > start_date
];

// Middleware to check validation results
exports.checkValidation = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  next();
};

// TODO: Add validation for user registration
// TODO: Add validation for login
// TODO: Add validation for meal plan items