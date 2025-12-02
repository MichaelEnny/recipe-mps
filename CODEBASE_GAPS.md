# Codebase Gaps & Intentional Inconsistencies

This document catalogs all intentional gaps, incomplete features, and inconsistencies in the Recipe & Meal Planning System codebase. Use this as a reference when creating ambiguous tasks.

---

## Intentional Gaps (Features Mentioned but Not Implemented)

### 1. Shopping List Generation
- **Location:** `src/models/MealPlan.js:44-49`
- **Status:** Method exists but throws "not implemented" error
- **Database:** `shopping_lists` table exists, but `shopping_list_items` table is missing
- **Gap:** Entire feature is stubbed
- **Ambiguity potential:** "Implement shopping list" - how to aggregate ingredients, handle units, combine duplicates

### 2. Recipe Favorites
- **Location:** `src/models/User.js:46-49`
- **Status:** Method exists but throws error
- **Database:** No `favorites` or `user_favorites` table
- **Gap:** Schema missing, no API endpoints
- **Ambiguity potential:** "Add favorites feature" - what does "favorite" mean, where to store, how to display

### 3. Password Reset
- **Location:** `src/controllers/authController.js:58-62`
- **Status:** Route exists, returns 501
- **Gap:** No email service, no reset token system
- **Ambiguity potential:** "Implement password reset" - email vs SMS, token expiration, security requirements

### 4. User Profile Update
- **Location:** `src/controllers/userController.js:13-17`
- **Status:** Route exists, not implemented
- **Gap:** No validation, unclear which fields updatable
- **Ambiguity potential:** "Add profile editing" - which fields, password change process, email verification

### 5. Account Deletion
- **Location:** `src/controllers/userController.js:27-31`
- **Status:** Route exists, not implemented
- **Gap:** Soft delete vs hard delete undefined, cascade behavior unclear
- **Ambiguity potential:** "Implement account deletion" - hard/soft delete, what happens to user's recipes

### 6. Tag-Based Recipe Filtering
- **Location:** `src/controllers/recipeController.js:59-62`
- **Status:** Route exists, returns 501
- **Database:** Tags tables exist
- **Gap:** API not implemented
- **Ambiguity potential:** "Add tag filtering" - AND vs OR logic, UI unclear

### 7. Recipe Rating Display
- **Database:** `recipe_ratings` table exists
- **Location:** Mentioned in schema, no API
- **Gap:** No endpoints to submit/view ratings
- **Frontend:** TODO comment in `RecipeDetail.js:50`
- **Ambiguity potential:** "Add ratings" - 5-star vs thumbs up, display aggregate vs individual

### 8. Nutrition Information
- **Frontend:** TODO in `RecipeDetail.js:51`
- **Database:** No nutrition columns
- **Gap:** No data model, no API integration
- **Ambiguity potential:** "Add nutrition info" - calculate vs manual entry vs API, which nutrients

### 9. Image Upload
- **Frontend:** TODO in `CreateRecipe.js:80`
- **Database:** No image URL column
- **Gap:** No file upload handling, storage undefined
- **Ambiguity potential:** "Add recipe images" - storage location, size limits, multiple images

### 10. Meal Plan Calendar View
- **Frontend:** TODO in `MealPlanner.js:37`
- **Gap:** No calendar component, drag-drop undefined
- **Ambiguity potential:** "Add calendar view" - which library, mobile responsive, edit interactions

---

## Missing Validation

### 1. Recipe Creation
- **Location:** `src/models/Recipe.js:28-39`
- **Gap:** No validation before insert
- **Missing checks:**
  - Title length/format
  - Numeric fields (prep_time, cook_time, servings) must be positive
  - Difficulty must be valid value (easy/medium/hard)
  - Cuisine type format
- **Middleware:** `src/middleware/validation.js` partially implemented but not used

### 2. User Registration
- **Location:** `src/models/User.js:25-40`
- **Gap:** Comments note missing validation
- **Missing checks:**
  - Email format
  - Password strength (length, complexity)
  - Username length/characters
  - Username uniqueness (only email checked)

### 3. Meal Plan Date Validation
- **Location:** `src/controllers/mealPlanController.js:31-32`
- **Gap:** TODO comments
- **Missing checks:**
  - end_date after start_date
  - Date format validation
  - Meal item dates within plan range

### 4. Meal Plan Item Validation
- **Location:** `src/models/MealPlan.js:38`
- **Gap:** Comment notes missing validation
- **Missing checks:**
  - meal_date within meal plan date range
  - meal_type is valid value
  - recipe_id exists
  - servings is positive

---

## Inconsistent Patterns

### 1. Error Handling
**Inconsistency:** Different methods use different error handling patterns

- **Pattern A (try-catch with specific errors):**
  - `recipeController.js` - getAllRecipes, createRecipe

- **Pattern B (no error handling):**
  - `recipeController.js` - getRecipeById, deleteRecipe

- **Pattern C (try-catch with generic errors):**
  - `authController.js` - all methods

**Ambiguity potential:** "Add error handling" - which pattern to follow?

### 2. Response Formats
**Inconsistency:** API responses have different structures

- **Format A (direct data):**
  ```json
  { "id": 1, "title": "Recipe" }
  ```
  - Used in: getRecipeById, createRecipe

- **Format B (wrapped with success flag):**
  ```json
  { "success": true, "data": {...} }
  ```
  - Used in: updateRecipe

- **Format C (with metadata):**
  ```json
  { "results": [...], "count": 10 }
  ```
  - Used in: searchRecipes

**Ambiguity potential:** "Add new endpoint" - which format to use?

### 3. Authentication Application
**Inconsistency:** Different routes apply auth differently

- **Pattern A (per-route):**
  - `recipeRoutes.js` - auth middleware on individual routes

- **Pattern B (router-level):**
  - `mealPlanRoutes.js` - auth applied to all routes
  - `userRoutes.js` - auth applied to all routes

**Ambiguity potential:** "Add auth to X" - which pattern?

### 4. HTTP Status Codes for Not Found
**Inconsistency:**

- `getRecipeById`: Returns 404 with `{ message: 'Recipe not found' }`
- `updateRecipe`: Returns 404 with text 'Recipe not found'
- `getMealPlanById`: Returns 404 with `{ error: 'Meal plan not found' }`

**Ambiguity potential:** "Add not found handling" - which format?

---

## Subtle Issues

### 1. Quantity Handling
- **Database:** `recipe_ingredients.quantity` is VARCHAR(50)
- **Issue:** Stored as text ("2 cups"), hard to aggregate/calculate
- **Impact:** Shopping list generation complicated
- **Ambiguity potential:** "Fix shopping list" - need to address quantity parsing

### 2. Missing Foreign Key Indexes
- **Location:** `database/schema.sql:116`
- **Issue:** Comment notes missing indexes
- **Gap:** Some FK columns not indexed
- **Ambiguity potential:** "Improve performance" - which indexes to add?

### 3. Difficulty Validation
- **Database:** `recipes.difficulty` is VARCHAR, not enum
- **Code:** Assumes 'easy', 'medium', 'hard' but doesn't enforce
- **Issue:** Could store invalid values
- **Ambiguity potential:** "Add validation" - change to enum or validate in code?

### 4. Meal Type Validation
- **Database:** `meal_plan_items.meal_type` is VARCHAR
- **Code:** No validation
- **Issue:** Inconsistent values possible ("breakfast" vs "Breakfast" vs "morning meal")
- **Ambiguity potential:** "Fix meal type handling" - standardize how?

### 5. User Ownership Checking
- **Middleware:** TODO in `auth.js:20` for authorization
- **Issue:** Users can modify other users' recipes/meal plans
- **Gap:** No ownership validation
- **Ambiguity potential:** "Add security" - where to check, how to enforce

---

## Partially Implemented Features

### 1. Search Functionality
- **Implemented:** Basic text search in title/description
- **Missing:**
  - Search by ingredients (TODO in Recipe.js:76)
  - Search ranking/relevance
  - Fuzzy matching
  - Search filters beyond cuisine/difficulty
  - Frontend search component (TODO in RecipeList.js:40)

### 2. Recipe Filtering
- **Implemented:** Cuisine and difficulty filters
- **Mentioned in code:**
  - Tag filtering (route exists but not implemented)
  - Prep time filtering (TODO in Recipe.js:19)
  - Ingredient filtering
- **Frontend:** Only cuisine and difficulty selectors

### 3. Validation Middleware
- **File:** `src/middleware/validation.js`
- **Implemented:** Recipe validation rules (partial)
- **Not used:** Validation not applied to any routes
- **Missing:** User validation, meal plan validation (noted in TODOs)

### 4. Create Recipe Form
- **Implemented:** Basic recipe fields
- **Missing (TODOs):**
  - Ingredient input fields
  - Instruction input fields
  - Image upload
  - Tag selection

### 5. Meal Planner UI
- **Implemented:** List of meal plans
- **Missing (TODOs):**
  - Calendar view
  - Drag-and-drop
  - Meal plan detail view
  - Create form
  - Edit/delete functionality

---

## Configuration Gaps

### 1. Environment Variables
- **File:** `.env.example`
- **Incomplete:** Some API keys have placeholder values
- **Missing definitions:**
  - Email service configuration
  - File upload service
  - Redis configuration (if caching added)

### 2. CORS Configuration
- **Location:** `src/server.js:8`
- **Issue:** CORS enabled for all origins
- **Gap:** No whitelist, production config missing

### 3. JWT Expiration
- **Location:** `authController.js`
- **Issue:** Hardcoded to 7 days
- **Gap:** Should be configurable, no refresh token strategy

---

## Test Coverage Gaps

### 1. Missing Test Implementations
- Tests have TODO comments for:
  - Difficulty filter tests
  - Tag filtering tests
  - Prep time filtering tests
  - Validation tests
  - Required fields tests
  - Search ranking tests
  - Shopping list tests
  - Password strength tests

### 2. Test Setup
- **Issue:** Auth token generation noted as TODO
- **Gap:** No test database setup
- **Missing:** Test data fixtures/factories

### 3. Integration Tests
- **Gap:** No end-to-end tests
- **Missing:** Frontend tests entirely

---

## Documentation Gaps

### 1. README
- **Complete:** Basic setup, main endpoints
- **Missing:**
  - Authentication flow details
  - Response format specifications
  - Error code documentation
  - Rate limiting (if any)
  - Deployment instructions

### 2. API Documentation
- **Gap:** No OpenAPI/Swagger spec
- **Missing:** Request/response examples
- **Incomplete:** Query parameter documentation

### 3. Code Comments
- **Pattern:** Some files well-commented, others minimal
- **TODOs:** Many TODO comments indicating incomplete areas

---

## How to Use This Document

When creating ambiguous tasks:

1. **Reference specific gaps** - Point to actual missing features
2. **Exploit inconsistencies** - Ask to "follow existing pattern" when multiple patterns exist
3. **Combine gaps** - Create tasks that touch multiple incomplete areas
4. **Use TODO comments** - These indicate natural extension points
5. **Leverage partial implementations** - Ask to "complete" features that are partially done

**Example Task Creation:**
- Gap: Shopping list not implemented
- Inconsistency: Response format varies
- Partial: Meal plans exist but missing this feature
- **Task:** "Complete the shopping list feature" (underspecified - which part, what format, how to aggregate)