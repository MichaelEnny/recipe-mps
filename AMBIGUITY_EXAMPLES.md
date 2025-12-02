# Ambiguity Examples for Recipe & Meal Planning System

This document contains example ambiguous tasks for evaluating AI models, organized by the four variation categories and six ambiguity types defined in the PROJECT_UNDERSTANDING.md.

---

## Variation Categories

### 1. Context Variations

#### Example 1A: Minimal Context (Single file + vague request)
**Files provided:** Only `src/controllers/recipeController.js`

**Task:** "Add pagination to the recipes endpoint"

**Ambiguity:**
- What pagination style? (offset-based, cursor-based, page-based)
- What default page size?
- Where to implement? (controller, model, or both)
- Should it be added to all endpoints or just GET /recipes?
- Response format? (separate metadata or inline)

---

#### Example 1B: Contradictory Context
**Files provided:** Full codebase

**Task:** "Implement the recipe rating system as described in the README"

**Ambiguity:**
- README says "Search & Filter: Find recipes based on various criteria" but doesn't mention ratings
- Database has `recipe_ratings` table but no API endpoints
- Tests don't reference ratings at all
- Should it be 5-star? thumbs up/down? what does "rating" mean?
- Should ratings affect search results?

---

#### Example 1C: Missing Context
**Files provided:** Full codebase

**Task:** "Use the existing ingredient validation to validate recipe submissions"

**Ambiguity:**
- No ingredient validation exists in the codebase
- Is this referencing something that should exist but doesn't?
- What type of validation is expected? (format, allowed values, nutritional data)
- Should this be created or is it "missing"?

---

#### Example 1D: Overwhelming Context
**Files provided:** Full codebase (38 files)

**Task:** "Fix the shopping list bug"

**Ambiguity:**
- Which bug? No specific bug described
- Shopping list feature exists in schema but throws "not implemented" error
- Is the "bug" that it's not implemented, or is there a specific issue?
- Multiple possible interpretations across database, backend, and frontend

---

### 2. Request Style Variations

#### Example 2A: Terse Request
**Task:** "add auth"

**Ambiguity:**
- Auth already exists (JWT-based)
- Does this mean: add auth to a specific endpoint? improve existing auth? add OAuth? add 2FA?
- Which endpoints need protection?
- What's wrong with current auth?

---

#### Example 2B: Verbose but Vague
**Task:** "We need to make the application more performant and responsive for our users. The recipe loading is taking too long and users are complaining about the experience. We need to implement some kind of caching mechanism to speed things up and make sure the data is fresh but also fast. This is a high priority for our user satisfaction scores."

**Ambiguity:**
- Where to cache? (Redis, in-memory, browser, CDN)
- What to cache? (recipes, user data, search results)
- Cache invalidation strategy?
- "Fresh but fast" - conflicting requirements (how to balance?)
- No specific performance metrics or targets

---

#### Example 2C: Stakeholder Language
**Task:** "Our users want to share their favorite recipes with friends. We need social features so people can discover trending recipes and see what's popular. Make it engaging and modern, like Instagram but for food."

**Ambiguity:**
- "Share" - via link, email, social media, in-app?
- "Trending" - algorithm undefined (time-based, rating-based, view-based?)
- "Popular" vs "trending" - are these different?
- "Like Instagram" - which features specifically? (likes, comments, follows, feed)
- No technical requirements, only business desires

---

#### Example 2D: Technical Jargon
**Task:** "Implement a microservices architecture with event-driven patterns for the meal planning workflow. Use CQRS and eventual consistency with saga patterns for distributed transactions."

**Ambiguity:**
- Current codebase is a monolith
- Which parts should be separate microservices?
- What events should be published?
- Is this necessary/appropriate for the scale?
- Conflicts with existing simple architecture

---

### 3. Setup Variations

#### Example 3A: With Tests
**Files:** Full codebase including tests

**Task:** "Add validation to recipe creation"

**Ambiguity (partially resolved by tests):**
- Tests show `title` is required
- Tests show auth is required
- BUT: tests have TODOs for "validation tests", "required fields"
- What other fields should be validated?
- What validation rules? (length limits, format requirements)

---

#### Example 3B: With Docs
**Files:** Full codebase with README

**Task:** "Implement the filtering features"

**Ambiguity (partially resolved by docs):**
- README lists "Search & Filter: Find recipes based on various criteria"
- Some filters exist (cuisine, difficulty)
- TODOs mention tags, ingredients, prep time
- Should ALL be implemented or just missing ones?
- What about other possible filters not mentioned?

---

#### Example 3C: With Examples
**Files:** Full codebase

**Task:** "Add error handling to the meal plan controller"

**Ambiguity (patterns visible in code):**
- `recipeController` has try-catch in some methods
- `authController` has different error handling pattern
- Some controllers have no error handling
- Which pattern to follow? (they're inconsistent)
- Apply to which methods specifically?

---

#### Example 3D: From Scratch
**Files:** Only package.json and database schema

**Task:** "Create an API endpoint for getting personalized recipe recommendations"

**Ambiguity (maximum):**
- No existing recommendation code
- What makes a recommendation "personalized"? (user history, preferences, dietary restrictions)
- What algorithm? (collaborative filtering, content-based, simple rules)
- Response format undefined
- Integration with existing code unclear

---

### 4. Clarification Interaction

#### Example 4A: Single Turn (Rate Initial Response Only)
**Task:** "Add sorting to the recipe list"

**Good response would:**
- Acknowledge multiple sort options (date, popularity, prep time, alphabetical)
- Ask which fields should be sortable
- Propose a reasonable default
- Note frontend and backend both need changes

---

#### Example 4B: Multi-Turn Dialogue (1-2 rounds)

**Initial Task:** "Improve the search functionality"

**AI Response:** "I can improve the search in several ways. What aspect concerns you:
1. Search speed/performance
2. Search result relevance
3. Additional search filters
4. Search scope (what fields to search)"

**User Reply:** "Result relevance"

**AI Response:** "For relevance, should I:
1. Implement fuzzy matching for typos
2. Weight title matches higher than description
3. Add ingredient-based search
4. Include recipe ratings in ranking"

**Expected:** Model uses context to narrow down options progressively

---

#### Example 4C: Partial Answers
**Initial Task:** "Add data validation"

**AI Asks:**
- Which data needs validation?
- What validation rules?
- Client-side, server-side, or both?

**User Answers (partial):** "Server-side validation for recipes"

**AI Must Handle:**
- Some questions answered (server-side, for recipes)
- Some still ambiguous (which fields, what rules)
- Should make assumptions for unanswered parts while noting them

---

#### Example 4D: Contradictory Answers
**Initial Task:** "Add user preferences"

**AI Asks:** "What preferences should users be able to set?"

**User Reply:** "Dietary restrictions, favorite cuisines, and ingredient allergies"

**Later User Says:** "Keep it simple, just let them mark favorite recipes"

**AI Must Handle:**
- Conflicting requirements
- Point out the contradiction
- Ask for clarification or prioritization

---

## Ambiguity Type Categories

### Type 1: Underspecified Requirements

**Example:** "Add authentication to the app"
- Auth already exists (JWT)
- Missing: which endpoints, what's missing from current auth, what problem to solve

**Example:** "Make the API faster"
- Which endpoints?
- How much faster?
- What's the current bottleneck?

**Example:** "Add data validation"
- Which data/endpoints?
- What rules?
- Client or server side?

---

### Type 2: Technical Impossibilities

**Example:** "Add the shopping list feature without modifying the database"
- Shopping list items table doesn't exist in schema
- Feature requires DB changes
- Fundamentally impossible without schema changes

**Example:** "Make recipe search work offline in the React app"
- All recipe data is in PostgreSQL
- No offline storage implemented
- Would require significant architecture change (local DB, sync strategy)

**Example:** "Support real-time collaborative meal planning without adding dependencies"
- Requires WebSocket or SSE (new dependencies)
- Current architecture doesn't support it
- Impossible constraint

---

### Type 3: Contextual Ambiguity

**Example:** "Fix the bug in the recipe controller"
- Multiple potential bugs: missing error handling, inconsistent response formats, no validation
- Which one?

**Example:** "Use the existing pattern for meal plan items"
- No consistent pattern (different controllers use different approaches)
- Which pattern to follow?

**Example:** "Implement favorites like the other features"
- Favorites mentioned in User model but not implemented
- No "other features" to reference
- What pattern?

---

### Type 4: Interpretation Ambiguity

**Example:** "Sort recipes by relevance"
- Relevance could mean: popularity, rating, recency, match quality, user preference
- Multiple valid interpretations

**Example:** "Add pagination"
- Offset-based, cursor-based, or page number-based?
- Page size?
- Response format?

**Example:** "Cache API responses"
- Which responses?
- Cache where? (Redis, memory, CDN, browser)
- TTL/invalidation strategy?

**Example:** "Add logging"
- What to log? (requests, errors, user actions, performance)
- What level? (debug, info, warning, error)
- Where to send logs? (file, service, stdout)

---

### Type 5: Conflicting/Contradictory Requirements

**Example:** "Add the shopping list feature but don't change the database schema"
- Schema doesn't have shopping_list_items table
- Feature impossible without DB changes
- Direct contradiction

**Example:** "Make meal planning collaborative but keep it simple"
- Collaborative features are inherently complex (real-time sync, conflict resolution)
- "Simple" conflicts with requirements

**Example:** "Support guest users but require authentication"
- Contradictory: can't require auth and support guests
- Need clarification on priority

**Example:** "Keep backward compatibility but change the API response format"
- Can't change format and maintain compatibility
- Need versioning strategy or clarification

---

### Type 6: False Ambiguity - Clear from Context

**Example:** "Fix the validation on recipe creation"
- README doesn't specify validation rules
- Tests show title is required
- TODO comments say "Add validation middleware"
- Code has validation.js partially implemented
- **Clear from context:** title required, other fields need implementation

**Example:** "Implement the missing error handling"
- Some controllers have try-catch, some don't
- Pattern is visible in existing code
- **Clear from context:** add try-catch blocks following existing pattern

**Example:** "Complete the meal plan date validation"
- TODO comment in mealPlanController: "Validate that end_date is after start_date"
- Validation middleware has placeholder for this
- **Clear from context:** exactly what to validate

**Example:** "Add the missing ingredients endpoint"
- Recipe endpoints exist with CRUD operations
- Database has ingredients table
- **Clear from context:** follow CRUD pattern for ingredients

---

## Multi-Dimensional Examples

### Complex Example 1: Multiple Ambiguity Types + Variations

**Context:** Contradictory context (README vs code)
**Style:** Stakeholder language
**Ambiguity Types:** Underspecified + Interpretation + False ambiguity

**Task:** "Users are confused about how to plan their meals. We need to make the meal planning feature more intuitive and user-friendly. Add a calendar view like the one in the design docs and make sure it works on mobile. This is blocking our launch."

**Ambiguities:**
- No design docs exist in codebase (missing context)
- "Calendar view" - implementation undefined (multiple calendar libraries, patterns)
- "Intuitive" - subjective, no specific requirements
- "Works on mobile" - responsive or native app? Touch interactions?
- "Blocking launch" - pressure but no technical specs
- Meal plan feature partially implemented (some backend exists, no frontend calendar)

---

### Complex Example 2: Contextual + Conflicting Requirements

**Context:** Overwhelming context
**Style:** Technical jargon
**Ambiguity Types:** Conflicting requirements + Technical impossibility

**Task:** "Implement GraphQL layer for recipe queries with real-time subscriptions but maintain the existing REST API for backward compatibility. Don't add new dependencies and keep response times under 100ms."

**Ambiguities:**
- GraphQL requires new dependencies (conflicts with "don't add")
- Real-time requires WebSocket/subscription infrastructure (conflicts with "no dependencies")
- Both REST and GraphQL increases complexity (conflicts with simplicity)
- 100ms target may be impossible for complex queries
- "Backward compatibility" unclear - both APIs simultaneously?

---

### Complex Example 3: Missing Context + Interpretation

**Context:** Minimal context (only frontend files)
**Style:** Terse
**Ambiguity Types:** Missing context + Interpretation + Underspecified

**Task:** "Add offline support"

**Ambiguities:**
- No access to backend code (minimal context)
- "Offline" could mean: service worker caching, local storage, IndexedDB, full PWA
- Which features work offline? (view cached recipes, create new ones, sync later?)
- Sync strategy undefined
- No existing offline infrastructure

---

## Notes for Task Creators

When crafting tasks, ensure:

1. **Natural ambiguity**: Based on real-world scenarios you've encountered
2. **Verifiable ground truth**: You know what the "right" approach is
3. **Multiple valid interpretations**: At least 2-3 reasonable ways to interpret
4. **Detectable ambiguity**: A thoughtful developer would recognize the unclear aspects
5. **Varied combinations**: Mix variation categories and ambiguity types

**Good Task Characteristics:**
- Requires clarification you yourself would need
- Has subtle gaps that aren't immediately obvious
- Reflects real teammate interactions
- Multiple stakeholders might interpret differently

**Avoid:**
- Contrived scenarios that feel artificial
- Trivial ambiguities (typos, obvious details)
- Tasks where any interpretation would be "wrong"
- Ambiguity that's impossible to detect without domain knowledge