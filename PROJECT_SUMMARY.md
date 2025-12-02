# Project Summary: Recipe & Meal Planning System

## Overview

This codebase is a **Recipe Management and Meal Planning System** designed specifically for AI model evaluation. It contains intentional gaps, inconsistencies, and incomplete features to create realistic ambiguous coding tasks.

**Purpose:** Test how AI models handle uncertainty, incomplete requirements, and conflicting information in software engineering tasks.

---

## Codebase Statistics

- **Total Files:** 38
- **Backend Files:** 20 (Node.js/Express)
- **Frontend Files:** 10 (React)
- **Test Files:** 4 (Jest)
- **Database:** 1 schema file (PostgreSQL)
- **Documentation:** 5 files
- **Lines of Code:** ~2,800
- **TODO Comments:** 40+
- **Intentional Gaps:** 10+ incomplete features
- **Pattern Inconsistencies:** 4+

---

## Technology Stack

### Backend
- **Runtime:** Node.js
- **Framework:** Express.js
- **Database:** PostgreSQL
- **Authentication:** JWT (jsonwebtoken)
- **Password Hashing:** bcrypt
- **Validation:** express-validator (partially implemented)

### Frontend
- **Framework:** React 18
- **Routing:** React Router DOM v6
- **HTTP Client:** Axios
- **Build Tool:** Create React App

### Testing
- **Framework:** Jest
- **API Testing:** Supertest

---

## Project Structure

```
Task_05/
├── src/                          # Backend source code
│   ├── controllers/              # Request handlers (4 files)
│   │   ├── recipeController.js   # Recipe CRUD + search
│   │   ├── mealPlanController.js # Meal planning logic
│   │   ├── authController.js     # Login/register
│   │   └── userController.js     # User profile
│   ├── models/                   # Database models (4 files)
│   │   ├── Recipe.js             # Recipe queries
│   │   ├── MealPlan.js           # Meal plan queries
│   │   ├── User.js               # User queries
│   │   └── db.js                 # Database connection
│   ├── routes/                   # API route definitions (4 files)
│   ├── middleware/               # Express middleware (2 files)
│   │   ├── auth.js               # JWT authentication
│   │   └── validation.js         # Input validation (partial)
│   ├── utils/                    # Utility functions (2 files)
│   │   ├── helpers.js            # Time formatting, validation
│   │   └── constants.js          # App constants
│   └── server.js                 # Express app setup
├── client/                       # React frontend
│   ├── src/
│   │   ├── components/           # React components (8 files)
│   │   │   ├── RecipeList.js
│   │   │   ├── RecipeDetail.js
│   │   │   ├── CreateRecipe.js
│   │   │   ├── MealPlanner.js
│   │   │   ├── Login.js
│   │   │   ├── Register.js
│   │   │   └── Header.js
│   │   ├── App.js
│   │   ├── index.js
│   │   └── index.css
│   ├── public/
│   │   └── index.html
│   └── package.json
├── database/                     # Database schema
│   └── schema.sql                # PostgreSQL schema with 11 tables
├── tests/                        # Test files
│   ├── recipe.test.js
│   ├── mealPlan.test.js
│   └── auth.test.js
├── package.json                  # Backend dependencies
├── .env.example                  # Environment variables template
├── .gitignore
├── jest.config.js
├── README.md                     # Basic documentation (intentionally partial)
├── AMBIGUITY_EXAMPLES.md         # 50+ example ambiguous tasks
├── CODEBASE_GAPS.md              # Catalog of intentional issues
├── TASK_CREATION_GUIDE.md        # Guide for creating tasks
└── PROJECT_SUMMARY.md            # This file
```

---

## Features & Status

### ✅ Implemented Features

1. **User Authentication**
   - Registration with email/password
   - Login with JWT tokens
   - Password hashing with bcrypt
   - Auth middleware for protected routes

2. **Recipe Management**
   - Create, read, update, delete recipes
   - Basic recipe search (title/description)
   - Filter by cuisine and difficulty
   - Recipe ingredients and instructions

3. **Meal Planning (Basic)**
   - Create meal plans with date ranges
   - Add recipes to meal plan dates
   - View meal plans by user

4. **Database Schema**
   - Complete schema with 11 tables
   - Foreign key relationships
   - Some indexes

### ⚠️ Partially Implemented Features

1. **Search & Filtering**
   - ✅ Basic text search
   - ✅ Cuisine and difficulty filters
   - ❌ Tag-based filtering (route exists, not implemented)
   - ❌ Ingredient search
   - ❌ Prep time filtering
   - ❌ Search relevance ranking

2. **Validation**
   - ✅ Basic authentication validation
   - ✅ Validation middleware defined
   - ❌ Validation not applied to routes
   - ❌ Password strength checking
   - ❌ Email format validation
   - ❌ Recipe field validation
   - ❌ Date range validation

3. **Recipe Creation Form**
   - ✅ Basic recipe fields
   - ❌ Ingredient input (TODO)
   - ❌ Instruction input (TODO)
   - ❌ Image upload (TODO)
   - ❌ Tag selection (TODO)

4. **Meal Planner UI**
   - ✅ List meal plans
   - ❌ Calendar view (TODO)
   - ❌ Drag-and-drop (TODO)
   - ❌ Edit meal items (TODO)

### ❌ Not Implemented Features

1. **Shopping List Generation**
   - Database table exists
   - Function throws "not implemented" error
   - Requires ingredient aggregation logic
   - Unit conversion needed

2. **Recipe Ratings & Reviews**
   - Database table exists
   - No API endpoints
   - No frontend components
   - Mentioned in README but not built

3. **User Favorites**
   - Mentioned in code
   - No database table
   - Function throws error

4. **Password Reset**
   - Route exists
   - Returns 501 Not Implemented
   - Requires email service integration

5. **User Profile Management**
   - Routes exist
   - Not implemented
   - Unclear which fields are editable

6. **Account Deletion**
   - Route exists
   - Not implemented
   - Soft vs hard delete undefined

7. **Image Upload**
   - No upload handling
   - No storage configured
   - Frontend has TODO

8. **Nutrition Information**
   - Frontend TODO
   - No database fields
   - No API integration

---

## Intentional Inconsistencies

### 1. Error Handling Patterns
- **Pattern A:** Try-catch with specific error messages
- **Pattern B:** No error handling
- **Pattern C:** Try-catch with generic errors
- Different controllers use different patterns

### 2. Response Formats
- **Format A:** Direct data `{ "id": 1, "title": "..." }`
- **Format B:** Wrapped `{ "success": true, "data": {...} }`
- **Format C:** With metadata `{ "results": [...], "count": 10 }`
- Inconsistent across endpoints

### 3. Authentication Application
- **Pattern A:** Per-route middleware
- **Pattern B:** Router-level middleware
- Different route files use different approaches

### 4. HTTP Status Codes
- 404 responses use different formats (JSON vs text)
- Error message keys vary (`error` vs `message`)

---

## Intentional Gaps for Ambiguity

### Data Model Issues
1. **Quantity Storage:** Stored as text ("2 cups") instead of structured data
2. **Enum vs VARCHAR:** difficulty, meal_type, cuisine not constrained
3. **Missing Tables:** shopping_list_items, user_favorites
4. **Missing Indexes:** Some foreign keys not indexed

### Security Issues
1. **No Ownership Checks:** Users can modify others' data
2. **No Rate Limiting:** Login attempts unlimited
3. **CORS:** Open to all origins
4. **Password Requirements:** Not enforced

### Code Quality Issues
1. **TODOs Everywhere:** 40+ TODO comments
2. **Unused Constants:** Defined in constants.js but not used
3. **Validation Not Applied:** Middleware exists but not used in routes
4. **Hardcoded Values:** JWT expiry, page sizes
5. **Inconsistent Patterns:** See above

---

## Available Ambiguous Task Types

This codebase supports all 6 ambiguity categories:

1. **Underspecified Requirements**
   - "Add pagination"
   - "Add data validation"
   - "Improve search"

2. **Technical Impossibilities**
   - "Add shopping list without changing database"
   - "Support offline without adding dependencies"

3. **Contextual Ambiguity**
   - "Fix the bug in recipe controller"
   - "Use the existing pattern"
   - "Complete the favorites feature"

4. **Interpretation Ambiguity**
   - "Sort by relevance"
   - "Add caching"
   - "Add logging"

5. **Conflicting Requirements**
   - "Add features but don't change database"
   - "Make it collaborative but keep it simple"

6. **False Ambiguity**
   - "Complete the validation" (TODOs specify what)
   - "Add error handling" (pattern visible in code)

---

## Using This Codebase

### For Task Creators

1. **Read TASK_CREATION_GUIDE.md** - Comprehensive guide for creating tasks
2. **Review CODEBASE_GAPS.md** - Catalog of all intentional issues
3. **See AMBIGUITY_EXAMPLES.md** - 50+ pre-made example tasks
4. **Choose variations** - Context, style, setup, clarification
5. **Select ambiguity type** - Pick from 6 categories
6. **Reference specific gaps** - Use real codebase limitations

### For Evaluators

1. **Understand the gaps** - Review CODEBASE_GAPS.md
2. **Know the ground truth** - Document correct approaches
3. **Evaluate ambiguity handling** - More important than code perfection
4. **Check assumptions** - Did model state them explicitly?
5. **Assess questions** - Were they specific and actionable?

---

## Key Variations Included

### ✅ Context Variations
- **Minimal:** Can provide single files
- **Contradictory:** README vs database schema conflicts
- **Missing:** References to non-existent features
- **Overwhelming:** 38 files to search through

### ✅ Request Style Variations
- Can use: terse, verbose, stakeholder language, technical jargon
- Examples provided in AMBIGUITY_EXAMPLES.md

### ✅ Setup Variations
- **With tests:** Jest tests show some expected behavior
- **With docs:** README provides partial information
- **With examples:** Code shows inconsistent patterns
- **From scratch:** Can provide minimal files

### ✅ Clarification Interaction
- **Single turn:** Initial response only
- **Multi-turn:** Follow-up questions supported
- **Partial answers:** Can answer some questions, not all
- **Contradictory:** Can provide conflicting info

---

## Success Metrics for AI Models

When evaluating responses, prioritize:

1. **Ambiguity Detection** (High Priority)
   - Did model notice what was unclear?
   - Did it acknowledge multiple interpretations?

2. **Question Quality** (High Priority)
   - Were questions specific and actionable?
   - Did they focus on critical decisions?

3. **Assumption Transparency** (High Priority)
   - Were assumptions clearly stated?
   - Were they reasonable given context?

4. **Reasonable Interpretation** (Medium Priority)
   - Was the chosen approach sensible?
   - Did it consider tradeoffs?

5. **Code Quality** (Lower Priority)
   - If implemented, is it well-structured?
   - Note: Perfect code with wrong interpretation scores lower than good attempt with clear assumptions

---

## Common Task Examples

### Easy Difficulty
- "Add validation to recipe creation" (some context in tests/TODOs)
- "Fix error handling in auth controller" (pattern visible)

### Medium Difficulty
- "Implement shopping list generation" (not implemented, multiple approaches)
- "Add caching to improve performance" (where, what, how long)

### Hard Difficulty
- "Make meal planning collaborative" (architecture unclear, many decisions)
- "Add GraphQL without changing REST API" (possibly conflicting)

---

## Getting Started

### Running the Application

1. **Install dependencies:**
   ```bash
   npm install
   cd client && npm install
   ```

2. **Setup database:**
   ```bash
   # Create PostgreSQL database
   createdb recipe_db
   psql recipe_db < database/schema.sql
   ```

3. **Configure environment:**
   ```bash
   cp .env.example .env
   # Edit .env with your values
   ```

4. **Run backend:**
   ```bash
   npm run dev
   ```

5. **Run frontend:**
   ```bash
   cd client && npm start
   ```

### Creating Tasks

1. Review TASK_CREATION_GUIDE.md
2. Choose variation mix
3. Select gaps to exploit
4. Draft task
5. Verify ambiguity
6. Test yourself

---

## Notes

- **Not a production app:** This is for evaluation only
- **Gaps are intentional:** Don't "fix" them
- **Inconsistencies are planned:** Part of the design
- **TODOs are hints:** Use them for task creation
- **Tests are partial:** Showing some behavior, not all

---

## Documentation Files

| File | Purpose |
|------|---------|
| README.md | Basic setup instructions (partial) |
| PROJECT_SUMMARY.md | This file - complete overview |
| AMBIGUITY_EXAMPLES.md | 50+ example ambiguous tasks |
| CODEBASE_GAPS.md | Detailed catalog of all gaps |
| TASK_CREATION_GUIDE.md | How to create effective tasks |
| PROJECT_UNDERSTANDING.md | Original evaluation framework requirements |

---

## Version

**Version:** 1.0
**Created:** 2024
**Purpose:** AI Model Evaluation - Ambiguous Coding Tasks
**Status:** Ready for task creation

---

This codebase is specifically designed to generate realistic ambiguous coding tasks. All gaps, inconsistencies, and incomplete features are intentional and serve the purpose of creating natural uncertainty for AI model evaluation.