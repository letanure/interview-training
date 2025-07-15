# Code Quality Tools - Interview Guide

## Key Talking Points

### 1. "How do you ensure code quality in React projects?"

**Answer:**
> "I use a multi-layered approach: Biome for linting and formatting, TypeScript for type safety, Git hooks for automated quality gates, and comprehensive testing. This catches issues at different stages - development, commit time, and CI. The key is making quality checks fast and automatic so they don't slow down development."

**Code Example:**
```json
// package.json - Quality check scripts
{
  "scripts": {
    "format:check": "biome format --check .",
    "format:fix": "biome format --write .",
    "lint:check": "biome lint .", 
    "lint:fix": "biome lint --write .",
    "lint:ts": "tsc --noEmit",
    "lint:dead-code": "knip"
  }
}
```

**Follow-up Question:** "Why Biome instead of ESLint and Prettier?"

**Answer:**
> "Biome provides both linting and formatting in a single tool, eliminating configuration conflicts between ESLint and Prettier. It's written in Rust so it's significantly faster - about 25x faster than ESLint. The unified tooling reduces setup complexity and provides consistent results across the team."

---

### 2. "How do you handle different types of code issues?"

**Answer:**
> "I categorize quality checks by what they catch: format checks for code style (tabs, quotes, spacing), lint checks for code quality (unused variables, logic errors), TypeScript checks for type safety, and dead code detection for unused exports. Each serves a specific purpose and runs at the appropriate time."

**Code Example:**
```bash
# Different types of quality checks
npm run format:check    # Code style - tabs, quotes, spacing
npm run lint:check      # Code quality - unused vars, logic errors  
npm run lint:ts         # Type safety - TypeScript compilation
npm run lint:dead-code  # Dead code - unused exports, dependencies
```

**Follow-up Question:** "When do you run these checks?"

**Answer:**
> "I run them at multiple stages: during development with IDE integration, pre-commit with Git hooks for changed files only, and in CI for the full codebase. This catches issues early while keeping the feedback loop fast."

---

### 3. "How do you set up automated quality gates?"

**Answer:**
> "I use Husky for Git hooks and lint-staged to only check changed files. This ensures quality without slowing down commits. The pre-commit hook runs formatting and linting on staged files, while pre-push runs TypeScript checking. CI runs the full suite including tests and dead code detection."

**Code Example:**
```json
// .husky/pre-commit
npm run format:fix
npx lint-staged

// lint-staged.config.js
export default {
  "*.{js,jsx,ts,tsx}": ["biome lint --write"],
  "*.{js,jsx,ts,tsx,json,css,md}": ["biome format --write"]
}
```

**Follow-up Question:** "What about team resistance to strict quality gates?"

**Answer:**
> "I introduce quality gates gradually and make them as fast as possible. Start with formatting only, then add linting, then TypeScript. The key is showing value - catching bugs before they reach code review saves everyone time. Fast tools like Biome make the overhead minimal."

---

### 4. "How do you handle dead code detection?"

**Answer:**
> "I use Knip to detect unused exports, dependencies, and files. It's particularly valuable in TypeScript projects where unused code can accumulate over time. I run it periodically rather than on every commit because it's more of a maintenance task than a quality gate."

**Code Example:**
```typescript
// knip.config.ts
export default {
  entry: ['src/main.tsx', 'src/App.tsx'],
  project: ['src/**/*.{ts,tsx}'],
  ignore: ['src/**/*.test.{ts,tsx}'],
  ignoreDependencies: ['@types/*']
}
```

**Follow-up Question:** "How often do you run dead code detection?"

**Answer:**
> "I run it weekly or before major releases. Dead code detection is more about maintenance than immediate quality - it helps keep the codebase clean and reduces bundle size. Running it too frequently creates noise, but running it regularly prevents accumulation."

---

## Tool Comparison & Decisions

### Biome vs ESLint + Prettier

**Biome Advantages:**
- ✅ **Single tool**: No configuration conflicts
- ✅ **Performance**: 25x faster than ESLint
- ✅ **Simplicity**: One config file, consistent behavior
- ✅ **Future-proof**: Actively developed, growing adoption

**ESLint + Prettier Advantages:**
- ✅ **Ecosystem**: Larger plugin ecosystem
- ✅ **Maturity**: Battle-tested in production
- ✅ **Team familiarity**: Most developers know it
- ✅ **Customization**: More granular rule configuration

**My Decision:**
> "For new projects, I choose Biome for its performance and simplicity. For existing projects, I evaluate migration cost vs. benefits. The performance difference is significant for large codebases."

### TypeScript Configuration

```json
// tsconfig.json - Strict but practical
{
  "compilerOptions": {
    "strict": true,
    "noUncheckedIndexedAccess": true,
    "exactOptionalPropertyTypes": true,
    "noImplicitReturns": true,
    "noFallthroughCasesInSwitch": true
  }
}
```

**Reasoning:**
> "I use strict TypeScript settings to catch more issues at compile time. The initial setup cost pays off with fewer runtime errors and better IDE support."

## Automation Strategy

### 1. Development (IDE)
- Real-time feedback with IDE integration
- Format on save, lint on type
- Immediate error highlighting

### 2. Commit Time (Git Hooks)
- Format and lint changed files only
- Fast feedback (< 5 seconds)
- Prevent bad code from entering repo

### 3. CI/CD (Full Suite)
- All quality checks on full codebase
- Type checking, testing, dead code detection
- Bundle size analysis and budget enforcement

## Common Mistakes to Avoid

❌ **Don't say:** "We don't need linting, we write good code"
✅ **Do say:** "Automated quality checks catch issues that humans miss and maintain consistency"

❌ **Don't say:** "Quality checks slow down development"
✅ **Do say:** "Fast quality checks like Biome save time by catching issues early"

❌ **Don't say:** "We'll add quality checks later"
✅ **Do say:** "Setting up quality checks early prevents technical debt accumulation"

## Team Adoption Strategies

### For New Teams
- Start with basic formatting and linting
- Provide clear documentation and examples
- Make tools fast and non-intrusive
- Show value with concrete examples

### For Existing Teams
- Introduce gradually, one tool at a time
- Run quality checks on new code only initially
- Provide migration guides and training
- Address resistance with performance metrics

### For Large Organizations
- Standardize tooling across teams
- Provide shared configurations and presets
- Automate setup with project templates
- Monitor adoption and gather feedback

---

*This guide is part of the React/Frontend interview training project.*