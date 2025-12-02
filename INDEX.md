# Recipe & Meal Planning System - Quick Reference

**Purpose:** AI Model Evaluation Codebase for Testing Ambiguous Task Handling

---

## 🚀 Quick Start

### For Task Creators
1. **Start here:** Read `TASK_CREATION_GUIDE.md`
2. **Browse examples:** See `AMBIGUITY_EXAMPLES.md` (50+ tasks)
3. **Find gaps:** Check `CODEBASE_GAPS.md` (catalog of issues)
4. **Understand project:** Read `PROJECT_SUMMARY.md`

### For Evaluators
1. **Understand gaps:** `CODEBASE_GAPS.md`
2. **See examples:** `AMBIGUITY_EXAMPLES.md`
3. **Know requirements:** `PROJECT_UNDERSTANDING.md`
4. **Project details:** `PROJECT_SUMMARY.md`

---

## 📁 Documentation Files (Start Here!)

| Priority | File | Purpose | Read Time |
|----------|------|---------|-----------|
| ⭐⭐⭐ | **TASK_CREATION_GUIDE.md** | How to create tasks from this codebase | 15 min |
| ⭐⭐⭐ | **AMBIGUITY_EXAMPLES.md** | 50+ example ambiguous tasks | 20 min |
| ⭐⭐⭐ | **CODEBASE_GAPS.md** | All intentional gaps & inconsistencies | 15 min |
| ⭐⭐ | **PROJECT_SUMMARY.md** | Complete codebase overview | 10 min |
| ⭐⭐ | **README.md** | Basic setup (intentionally partial) | 5 min |
| ⭐ | **PROJECT_UNDERSTANDING.md** | Original requirements | 10 min |

---

## 📊 Codebase Stats

- **38 Files** created
- **~2,800 lines** of code
- **40+ TODO** comments
- **10+ incomplete** features
- **4+ pattern** inconsistencies
- **50+ example** tasks

---

## 🎯 What Makes This Codebase Special

### ✅ All Required Variations Included

**Context Variations:**
- ✅ Minimal context (single file tasks)
- ✅ Contradictory context (README vs schema)
- ✅ Missing context (non-existent features)
- ✅ Overwhelming context (38 files)

**Request Style Variations:**
- ✅ Terse ("add auth")
- ✅ Verbose but vague (business speak)
- ✅ Stakeholder language (non-technical)
- ✅ Technical jargon (buzzwords)

**Setup Variations:**
- ✅ With tests (Jest tests included)
- ✅ With docs (README provided)
- ✅ With examples (code patterns visible)
- ✅ From scratch (can provide minimal files)

**Clarification Interaction:**
- ✅ Single turn (rate first response)
- ✅ Multi-turn (1-2 rounds)
- ✅ Partial answers (incomplete info)
- ✅ Contradictory answers (conflicting info)

### ✅ All 6 Ambiguity Types Supported

1. **Underspecified Requirements** - Missing critical details
2. **Technical Impossibilities** - Violates constraints
3. **Contextual Ambiguity** - Incomplete codebase context
4. **Interpretation Ambiguity** - Multiple valid approaches
5. **Conflicting Requirements** - Contradictory constraints
6. **False Ambiguity** - Actually clear from context

---

## 🏗️ Technology Stack

**Backend:** Node.js, Express, PostgreSQL, JWT
**Frontend:** React 18, React Router, Axios
**Testing:** Jest, Supertest
**Database:** PostgreSQL with 11 tables

---

## 📦 Complete File List (38 Files)

### Documentation (6 files)
```
├── INDEX.md                      # This file - quick reference
├── README.md                     # Basic setup (partial)
├── PROJECT_SUMMARY.md            # Complete overview
├── TASK_CREATION_GUIDE.md        # How to create tasks
├── AMBIGUITY_EXAMPLES.md         # 50+ example tasks
└── CODEBASE_GAPS.md              # Catalog of gaps
```

### Backend (20 files)
```
├── src/
│   ├── server.js                 # Express app
│   ├── controllers/              # 4 controllers
│   │   ├── recipeController.js
│   │   ├── mealPlanController.js
│   │   ├── authController.js
│   │   └── userController.js
│   ├── models/                   # 4 models
│   │   ├── db.js
│   │   ├── Recipe.js
│   │   ├── MealPlan.js
│   │   └── User.js
│   ├── routes/                   # 4 route files
│   │   ├── recipeRoutes.js
│   │   ├── mealPlanRoutes.js
│   │   ├── authRoutes.js
│   │   └── userRoutes.js
│   ├── middleware/               # 2 middleware files
│   │   ├── auth.js
│   │   └── validation.js
│   └── utils/                    # 2 utility files
│       ├── helpers.js
│       └── constants.js
```

### Frontend (10 files)
```
├── client/
│   ├── src/
│   │   ├── App.js
│   │   ├── index.js
│   │   ├── index.css
│   │   └── components/           # 7 components
│   │       ├── Header.js
│   │       ├── RecipeList.js
│   │       ├── RecipeDetail.js
│   │       ├── CreateRecipe.js
│   │       ├── MealPlanner.js
│   │       ├── Login.js
│   │       └── Register.js
│   └── public/
│       └── index.html
```

### Database & Tests (5 files)
```
├── database/
│   └── schema.sql                # PostgreSQL schema
├── tests/
│   ├── recipe.test.js
│   ├── mealPlan.test.js
│   └── auth.test.js
└── jest.config.js
```

### Configuration (5 files)
```
├── package.json                  # Backend deps
├── client/package.json           # Frontend deps
├── .env.example                  # Environment template
├── .gitignore
└── jest.config.js
```

---

## 🎨 Key Features for Task Creation

### ✅ Implemented (Can reference in tasks)
- User authentication (JWT)
- Recipe CRUD operations
- Basic search & filtering
- Meal plan creation
- Database with relationships

### ⚠️ Partially Implemented (Great for ambiguity!)
- Search (basic, many TODOs)
- Validation (defined, not used)
- Filtering (some done, some not)
- Recipe creation form (basic fields only)
- Error handling (inconsistent patterns)

### ❌ Not Implemented (Perfect for tasks!)
- Shopping list generation
- Recipe ratings & reviews
- User favorites
- Password reset
- Profile editing
- Account deletion
- Image upload
- Nutrition info
- Calendar view

---

## 💡 Quick Task Ideas

**Easy:**
- "Add validation to recipe creation" (TODOs hint at it)
- "Fix error handling in auth" (pattern visible)

**Medium:**
- "Implement shopping list" (stub exists, not done)
- "Add caching" (where? what? how?)

**Hard:**
- "Make meal planning collaborative" (architecture unclear)
- "Add GraphQL layer" (complex, possibly conflicting)

**See AMBIGUITY_EXAMPLES.md for 50+ detailed examples!**

---

## 🔍 How to Navigate

### Looking for...

**Example tasks?**
→ `AMBIGUITY_EXAMPLES.md`

**What's incomplete?**
→ `CODEBASE_GAPS.md`

**How to create tasks?**
→ `TASK_CREATION_GUIDE.md`

**Complete overview?**
→ `PROJECT_SUMMARY.md`

**Setup instructions?**
→ `README.md`

**Original requirements?**
→ `PROJECT_UNDERSTANDING.md`

**Specific code?**
→ Browse `src/` and `client/src/`

---

## ⚠️ Important Notes

1. **Gaps are intentional** - Don't "fix" them, use them for tasks
2. **Inconsistencies are planned** - They create natural ambiguity
3. **TODOs are hints** - Use them as task starting points
4. **Not production code** - This is for evaluation only
5. **Tests are partial** - Showing some behavior, not complete coverage

---

## 🎯 Success Metrics

When evaluating AI responses, prioritize:

1. **Ambiguity Detection** (HIGH) - Did it notice unclear aspects?
2. **Question Quality** (HIGH) - Specific, actionable questions?
3. **Assumption Transparency** (HIGH) - Were assumptions stated clearly?
4. **Reasonable Interpretation** (MEDIUM) - Sensible approach?
5. **Code Quality** (LOW) - Well-structured if implemented?

**Remember:** Good attempt with clear assumptions > Perfect code with wrong interpretation

---

## 📚 Recommended Reading Order

### For First-Time Users
1. This file (INDEX.md) - 5 min
2. PROJECT_SUMMARY.md - 10 min
3. TASK_CREATION_GUIDE.md - 15 min
4. AMBIGUITY_EXAMPLES.md - 20 min
5. CODEBASE_GAPS.md - 15 min

**Total:** ~65 minutes to full understanding

### For Quick Start
1. This file (INDEX.md) - 5 min
2. TASK_CREATION_GUIDE.md - 15 min
3. Pick examples from AMBIGUITY_EXAMPLES.md - 10 min

**Total:** ~30 minutes to start creating tasks

---

## 🚦 Next Steps

**Ready to create a task?**
1. Read TASK_CREATION_GUIDE.md
2. Choose your variation mix (context, style, setup, clarification)
3. Pick an ambiguity type (underspecified, impossible, etc.)
4. Select a gap from CODEBASE_GAPS.md
5. Draft your task
6. Verify ambiguity (would YOU need clarification?)
7. Check against examples in AMBIGUITY_EXAMPLES.md

**Need inspiration?**
- Browse AMBIGUITY_EXAMPLES.md for 50+ ready-to-use examples
- Each example includes the variation mix and ambiguity type

**Want to understand the code?**
- Read PROJECT_SUMMARY.md for complete overview
- Browse CODEBASE_GAPS.md for all intentional issues
- Explore the actual code files in src/ and client/src/

---

## 📞 Questions?

- Review the documentation files above
- Check TASK_CREATION_GUIDE.md for detailed guidance
- See AMBIGUITY_EXAMPLES.md for concrete examples
- Read PROJECT_SUMMARY.md for technical details

---

**Version:** 1.0
**Purpose:** AI Model Evaluation - Ambiguous Coding Tasks
**Status:** ✅ Ready for use

This codebase contains everything needed to create realistic, natural ambiguous coding tasks for evaluating AI models' ability to handle uncertainty and incomplete requirements.