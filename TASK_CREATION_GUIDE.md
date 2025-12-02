# Task Creation Guide for Recipe & Meal Planning System

This guide helps you create effective ambiguous coding tasks using this codebase for AI model evaluation.

---

## Quick Reference

**Codebase Stats:**
- **Files:** 38 files
- **Lines of Code:** ~2,800 lines
- **Stack:** Node.js, Express, PostgreSQL, React
- **Intentional Gaps:** 10+ incomplete features
- **Inconsistencies:** 4+ pattern variations
- **TODO Comments:** 40+ locations

---

## Using This Codebase

### Step 1: Choose Your Variation Mix

Select one from each category:

**Context Variation:**
- Minimal (1-3 files)
- Contradictory (README vs code)
- Missing (references non-existent features)
- Overwhelming (full codebase)

**Request Style:**
- Terse ("add auth")
- Verbose but vague (long business requirements)
- Stakeholder language (non-technical)
- Technical jargon (buzzwords)

**Setup:**
- With tests (tests/ directory)
- With docs (README.md)
- With examples (existing code patterns)
- From scratch (minimal files)

**Clarification:**
- Single turn (one shot)
- Multi-turn (1-2 rounds)
- Partial answers (incomplete info)
- Contradictory answers (conflicting info)

### Step 2: Choose Your Ambiguity Type

Pick from:

1. **Underspecified Requirements** - Missing critical details
2. **Technical Impossibilities** - Violates constraints
3. **Contextual Ambiguity** - Incomplete codebase context
4. **Interpretation Ambiguity** - Multiple valid approaches
5. **Conflicting Requirements** - Contradictory constraints
6. **False Ambiguity** - Actually clear from context

### Step 3: Select a Gap or Inconsistency

Refer to `CODEBASE_GAPS.md` for:
- Incomplete features to reference
- Inconsistent patterns to exploit
- Missing validation to mention
- Partial implementations to "complete"

---

## Example Task Creation Walkthrough

### Example 1: Underspecified + Minimal Context + Terse

**Variation Choices:**
- Context: Minimal (only `src/models/Recipe.js`)
- Style: Terse
- Setup: With code examples
- Clarification: Single turn

**Gap Selected:** Search functionality (partially implemented)

**Task:** "improve recipe search"

**Why This Works:**
- Underspecified: doesn't say what aspect to improve
- Could mean: performance, relevance, features, scope
- Existing code shows basic implementation
- Multiple valid interpretations
- Natural ambiguity a developer would question

**Expected Good Response:**
- Notice existing basic search
- Ask what aspect needs improvement (speed, relevance, features)
- Propose specific options based on code
- State assumptions clearly

---

### Example 2: Contextual + Contradictory + Stakeholder Language

**Variation Choices:**
- Context: Contradictory (README vs schema)
- Style: Stakeholder language
- Setup: With docs
- Clarification: Multi-turn

**Gap Selected:** Recipe ratings (table exists, no API)

**Task:** "Our users want to rate and review recipes. Implement the rating system described in the requirements doc so users can find the best recipes."

**Why This Works:**
- No requirements doc exists
- Recipe_ratings table in schema but no API
- README doesn't mention ratings
- "Best recipes" undefined (highest rated? most popular? most recent?)
- Business language without technical specs

**Expected Good Response (Round 1):**
- Notice no requirements doc
- Note database has ratings table
- Ask: rating scale, review text, search integration, sorting

**User Answer (Round 2):** "5-star ratings with optional text reviews"

**Expected Good Response (Round 2):**
- Ask about average calculation
- Ask about sorting/filtering integration
- Clarify if reviews are moderated
- Note endpoint design choices

---

### Example 3: Technical Impossibility + Conflicting

**Variation Choices:**
- Context: Overwhelming (full codebase)
- Style: Technical jargon
- Setup: From scratch (new feature)
- Clarification: Single turn

**Gap Selected:** Shopping list generation (not implemented) + Quantity handling (text field)

**Task:** "Implement the shopping list aggregation feature without modifying the database schema. Use ML to automatically convert between units and combine ingredients intelligently."

**Why This Works:**
- Shopping list needs new table (impossible without schema change)
- Quantities stored as text ("2 cups") - hard to parse
- ML requirement is overkill and undefined
- "Intelligently" is vague
- Fundamental impossibility

**Expected Good Response:**
- Point out schema change is required (shopping_list_items table missing)
- Note quantity parsing challenge (text storage)
- Pushback on ML requirement (unclear benefit, overkill)
- Suggest simpler approach or explain limitations
- Request clarification on core requirements

---

## Task Quality Checklist

Before submitting a task, verify:

- [ ] **Natural ambiguity:** Would you need clarification if asked this by a teammate?
- [ ] **Verifiable ground truth:** You know what the correct approach should be
- [ ] **Detectable:** A thoughtful developer should notice the ambiguity
- [ ] **Multiple interpretations:** At least 2-3 valid ways to approach it
- [ ] **Based on real gaps:** References actual codebase limitations
- [ ] **Varied from previous:** Different variation mix than recent tasks
- [ ] **Not contrived:** Feels like a realistic request
- [ ] **Appropriate difficulty:** Requires thought but not domain expertise

---

## Red Flags (Don't Submit If...)

- ⚠️ The ambiguity is trivial (typo, obvious detail)
- ⚠️ Only one interpretation makes any sense
- ⚠️ Ambiguity is artificial/contrived
- ⚠️ You didn't verify ground truth yourself
- ⚠️ Task is too similar to recent submissions
- ⚠️ Requires <5 files (too small for this project)
- ⚠️ You're not sure if you would need clarification

---

## Common Pitfalls to Avoid

### 1. Over-Obvious Ambiguity
**Bad:** "Add a feature" (too vague, not realistic)
**Good:** "Add caching to improve performance" (realistic, multiple approaches)

### 2. Under-Ambiguous
**Bad:** "Add try-catch to recipeController.js line 15" (too specific)
**Good:** "Add error handling to recipe controller" (which methods? which pattern?)

### 3. False Contradiction
**Bad:** Making up requirements that contradict when none actually do
**Good:** Using real contradictions (README vs schema, code patterns)

### 4. Impossible to Detect
**Bad:** Ambiguity that requires domain knowledge to detect
**Good:** Ambiguity visible from reading the code

### 5. Grep-able Tasks
**Bad:** "What does the formatTime function do?" (just search for it)
**Good:** "Use the time formatting utilities for the meal planner" (which ones? where?)

---

## Tips for Great Tasks

### 1. Layer Multiple Ambiguities
Combine gaps for richer tasks:
- "Complete the favorites feature and add it to the meal planner"
- Multiple undefined aspects
- Integration concerns
- Pattern questions

### 2. Use Real Developer Language
Tasks should sound like:
- Slack messages from PMs
- JIRA tickets
- Standup discussions
- Code review comments

Not like:
- Textbook exercises
- Contrived puzzles
- Trick questions

### 3. Exploit Partial Implementations
The codebase has many half-done features:
- Search (basic implementation, many TODOs)
- Validation (middleware exists, not used)
- Create recipe form (basic fields, missing ingredients/instructions)

Tasks like "complete the search" or "finish the validation" are naturally ambiguous.

### 4. Reference TODO Comments
The codebase has 40+ TODOs:
- Use them as task starting points
- "Implement the TODOs in the recipe controller" - which ones? how?
- "Complete the validation as noted in the code" - which validation? what rules?

### 5. Test Your Task
Before submitting:
1. **Ask yourself:** Would I need to ask questions?
2. **List interpretations:** Can you think of 2-3 valid approaches?
3. **Check the code:** Is the ambiguity actually present in the codebase?
4. **Verify ground truth:** Do you know what the "right" answer is?

---

## Task Templates

### Template 1: Feature Completion
"Complete the [partially implemented feature] in [location/component]"

**Example:** "Complete the meal planner calendar view"
- Feature mentioned in frontend TODO
- No implementation exists
- "Calendar view" has many interpretations
- Integration with backend unclear

### Template 2: Pattern Following
"Implement [new thing] following the existing pattern"

**Example:** "Add user preferences following the existing user data pattern"
- User model exists
- Preferences mentioned but not implemented
- What "existing pattern" - inconsistent code

### Template 3: Bug Fix (Vague)
"Fix the [vague issue] in [component]"

**Example:** "Fix the validation issue in recipe creation"
- Many validation gaps exist
- Which issue specifically?
- What's the correct behavior?

### Template 4: Feature Addition (Underspecified)
"Add [feature name]"

**Example:** "Add pagination"
- Where? (which endpoints)
- What style? (offset, cursor, page-based)
- Page size?
- Response format?

### Template 5: Improvement (Undefined Metric)
"Improve [quality attribute]"

**Example:** "Improve the security of user authentication"
- Current auth works but has gaps
- What aspect? (password strength, rate limiting, 2FA, session management)
- What's the threat model?

---

## Documentation Reference

- **CODEBASE_GAPS.md**: Catalog of all intentional issues
- **AMBIGUITY_EXAMPLES.md**: Pre-made example tasks for each category
- **README.md**: Basic codebase documentation (intentionally partial)
- **TODO comments**: In-code markers for incomplete areas

---

## Final Checklist

Before submitting your task:

1. **Review variation mix:** Have you selected one from each category?
2. **Check ambiguity type:** Does it fit into 1-2 of the 6 types?
3. **Verify against codebase:** Is the ambiguity real?
4. **Test yourself:** Would you ask questions?
5. **Check diversity:** Different from recent tasks?
6. **Confirm ground truth:** Do you know the right approach?
7. **Natural language:** Does it sound realistic?
8. **Appropriate scope:** 5+ files relevant, not trivial?

---

## Need Help?

If unsure about:
- **Gap verification:** Check CODEBASE_GAPS.md
- **Example tasks:** See AMBIGUITY_EXAMPLES.md
- **Variation ideas:** Review PROJECT_UNDERSTANDING.md
- **Codebase details:** Read the actual code files

Remember: The goal is to test how AI models handle ambiguity, not to create impossible puzzles. The best tasks are ones where YOU would need to ask clarifying questions in a real work scenario.