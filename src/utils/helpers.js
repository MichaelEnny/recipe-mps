// Utility functions for the application

/**
 * Format recipe prep/cook time for display
 * @param {number} minutes - Time in minutes
 * @returns {string} Formatted time string
 */
function formatTime(minutes) {
  if (!minutes) return 'N/A';

  if (minutes < 60) {
    return `${minutes} min`;
  }

  const hours = Math.floor(minutes / 60);
  const mins = minutes % 60;

  if (mins === 0) {
    return `${hours} hr`;
  }

  return `${hours} hr ${mins} min`;
}

/**
 * Calculate total time for a recipe
 * @param {number} prepTime - Prep time in minutes
 * @param {number} cookTime - Cook time in minutes
 * @returns {number} Total time
 */
function calculateTotalTime(prepTime, cookTime) {
  return (prepTime || 0) + (cookTime || 0);
}

// TODO: Add unit conversion utilities for ingredients
// TODO: Add ingredient quantity parsing (e.g., "2 cups" -> {amount: 2, unit: "cups"})
// TODO: Add function to combine duplicate ingredients in shopping list

/**
 * Validate email format
 * @param {string} email
 * @returns {boolean}
 */
function isValidEmail(email) {
  // Basic email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

/**
 * Validate password strength
 * NOTE: This is a basic implementation, might need more robust checking
 * @param {string} password
 * @returns {object} { valid: boolean, message: string }
 */
function validatePassword(password) {
  if (password.length < 8) {
    return { valid: false, message: 'Password must be at least 8 characters' };
  }

  // TODO: Add more password requirements:
  // - Uppercase letter
  // - Lowercase letter
  // - Number
  // - Special character

  return { valid: true, message: '' };
}

module.exports = {
  formatTime,
  calculateTotalTime,
  isValidEmail,
  validatePassword
};