# NPM Scripts Naming Convention

## Introduction

This document is part of the **Project Setup Essentials** series, focusing on establishing consistent naming conventions for NPM scripts. Rather than ad-hoc naming, we implement a systematic approach that scales with project growth and improves developer experience.

## Problem Statement

As projects grow, NPM scripts multiply and naming becomes inconsistent:
- `lint` vs `lint-fix` vs `size-check`
- Unclear what each script does
- Difficult to discover related commands
- No pattern for adding new scripts

## Available Options Analysis

### Option 1: Flat Naming (No Convention)
**Example**: `lint`, `lint-fix`, `size-check`, `analyze`, `test-coverage`

**Pros**:
- **Shorter commands**: Less typing required
- **No learning curve**: Each script is independent
- **Maximum flexibility**: Can name anything however you want
- **Backward compatibility**: Matches many existing projects

**Cons**:
- **Inconsistent patterns**: Mix of kebab-case, no separators, different structures
- **Hard to discover**: No way to find related commands
- **Unclear intent**: What does "analyze" analyze?
- **Doesn't scale**: Gets messy with many scripts
- **No predictability**: Can't guess command names

### Option 2: Verb-First Pattern
**Example**: `check:lint`, `fix:format`, `analyze:size`, `run:test`

**Pros**:
- **Action-oriented**: Clear what the script will do
- **Groups by action**: All "fix" commands together
- **Logical flow**: Matches imperative programming style
- **Easy to understand**: Verb-object structure

**Cons**:
- **Less intuitive discovery**: Hard to find all linting commands
- **Breaks common patterns**: Most projects don't use this
- **Action duplication**: Many scripts have the same action
- **Harder to organize**: Tools/categories get scattered

### Option 3: Tool-Based Naming
**Example**: `biome:check`, `biome:fix`, `playwright:test`, `vite:build`

**Pros**:
- **Clear tool mapping**: Know exactly which tool runs
- **Easy to understand**: Direct correlation to tool commands
- **Debugging friendly**: Can easily identify which tool is failing
- **Tool documentation**: Can reference tool-specific docs

**Cons**:
- **Tool coupling**: Tied to specific implementations
- **Refactoring pain**: Changing tools requires script renames
- **Functional grouping lost**: Can't find all linting-related commands
- **Implementation focus**: Emphasizes "how" over "what"

### Option 4: Category-Action Pattern
**Example**: `format:check`, `lint:fix`, `test:coverage`, `size:analyze`

**Pros**:
- **Predictable structure**: Easy to guess command names
- **Functional grouping**: All related commands together
- **Clear intent**: Both category and action are obvious
- **Scalable**: Pattern works with any number of scripts
- **Tool agnostic**: Can change tools without renaming scripts

**Cons**:
- **Longer commands**: More typing required
- **Learning curve**: Need to understand the pattern
- **Refactoring effort**: Existing scripts need renaming
- **Convention enforcement**: Requires discipline to maintain

## Community Standards Analysis (2025)

**NPM Scripts Patterns in Popular Projects**:

**React Projects**:
- `test:unit`, `test:e2e`, `test:coverage`
- `build:prod`, `build:dev`
- `lint:js`, `lint:css`

**Angular Projects**:
- `test:unit`, `test:e2e`
- `build:prod`, `build:dev`
- `lint:ts`, `lint:html`

**Vue Projects**:
- `test:unit`, `test:e2e`
- `build:prod`, `build:dev`
- `lint:js`, `lint:vue`

**Node.js Projects**:
- `test:unit`, `test:integration`
- `lint:js`, `lint:ts`
- `build:prod`, `build:dev`

**Common Patterns**:
- **Category:Action** is the most prevalent pattern
- **Test scripts** almost universally use `test:*` pattern
- **Build scripts** commonly use `build:*` pattern
- **Linting scripts** often use `lint:*` pattern

## My Decision & Reasoning

### Final Choice: Category-Action Pattern

**Reasoning**:
- **Industry standard**: Aligns with most popular projects
- **Developer experience**: Predictable and discoverable
- **Scalability**: Works with any number of scripts
- **Tool independence**: Can change implementations without renaming
- **Interview relevance**: Shows systematic thinking and attention to developer experience

**Implementation Strategy**:
- Define standard categories and actions
- Refactor existing scripts systematically
- Document the pattern clearly
- Enforce through code reviews

## Implementation Process

### Step 1: Define Categories and Actions

**Categories** (What type of operation):
- `format:*` = Code style (tabs, quotes, spacing)
- `lint:*` = Code quality (unused vars, logic errors, TypeScript types, dead code)
- `test:*` = Testing (unit, e2e, coverage)
- `size:*` = Bundle size analysis

**Actions** (What it does):
- `:check` = Check for issues (read-only, exits with error if issues found)
- `:fix` = Fix issues automatically
- `:analyze` = Interactive analysis (opens UI)
- `:info` = Show information (terminal output)

### Step 2: Apply the Pattern

**Example Pattern Structure**:
```json
{
  "scripts": {
    "format:check": "<formatter-check-command>",
    "format:fix": "<formatter-fix-command>",
    
    "lint:check": "<linter-check-command>",
    "lint:fix": "<linter-fix-command>",
    "lint:ts": "<typescript-check-command>",
    "lint:dead-code": "<dead-code-detector-command>",
    "lint:unused-deps": "<unused-deps-detector-command>",
    
    "size:check": "<bundle-size-check-command>",
    "size:analyze": "<bundle-analyzer-command>",
    "size:info": "<bundle-info-command>",
    
    "test": "<unit-test-command>",
    "test:coverage": "<test-with-coverage-command>",
    "test:e2e": "<e2e-test-command>",
    "test:e2e:debug": "<e2e-debug-command>",
    "test:e2e:headed": "<e2e-headed-command>",
    "test:e2e:ui": "<e2e-ui-command>",
    "test:ui": "<test-ui-command>"
  }
}
```

**Pattern Applied**:
- `format:*` = Code style operations
- `lint:*` = Code quality operations  
- `size:*` = Bundle size operations
- `test:*` = Testing operations

### Step 4: Enforce the Pattern

**Code Review Checklist**:
- [ ] New scripts follow `category:action` pattern
- [ ] Category is one of: `format`, `lint`, `test`, `size`
- [ ] Action is one of: `check`, `fix`, `analyze`, `info`
- [ ] Script name clearly indicates purpose
- [ ] Documentation is updated

## Pattern Examples

### Code Quality Scripts
```bash
# Formatting (code style)
npm run format:check       # Check if code needs formatting
npm run format:fix         # Fix formatting issues

# Linting (code quality)
npm run lint:check         # Check for linting issues
npm run lint:fix           # Fix auto-fixable linting issues
npm run lint:ts            # Check TypeScript types
npm run lint:dead-code     # Find dead code
npm run lint:unused-deps   # Find unused dependencies
```

### Testing Scripts
```bash
# Unit testing
npm run test               # Run unit tests
npm run test:coverage      # Run tests with coverage
npm run test:ui            # Run tests with UI

# E2E testing
npm run test:e2e           # Run E2E tests
npm run test:e2e:debug     # Debug E2E tests
npm run test:e2e:headed    # Run E2E tests with browser UI
npm run test:e2e:ui        # Run E2E tests with Playwright UI
```

### Bundle Size Scripts
```bash
# Bundle analysis
npm run size:check         # Check if bundle exceeds budget
npm run size:analyze       # Interactive bundle analysis
npm run size:info          # Show bundle size information
```

## Benefits of This Approach

### Developer Experience
- **Predictable**: Can guess command names
- **Discoverable**: Tab completion shows related commands
- **Clear intent**: Both category and action are obvious
- **Consistent**: All scripts follow the same pattern

### Maintenance
- **Scalable**: Pattern works with any number of scripts
- **Tool agnostic**: Can change tools without renaming scripts
- **Organized**: Related commands are grouped together
- **Enforceable**: Clear rules for code reviews

### Interview Value
- **Systematic thinking**: Shows attention to developer experience
- **Consistency**: Demonstrates ability to establish and follow patterns
- **Scalability**: Shows consideration for project growth
- **Team coordination**: Indicates understanding of collaborative development

## Common Pitfalls to Avoid

### Inconsistent Naming
```bash
# Bad
npm run lint:check
npm run format-fix         # Mixed separators
npm run sizeCheck          # camelCase

# Good
npm run lint:check
npm run format:fix
npm run size:check
```

### Unclear Categories
```bash
# Bad
npm run tool:biome         # Tool-focused
npm run check:everything   # Too broad

# Good
npm run lint:check         # Function-focused
npm run format:check       # Specific category
```

### Action Confusion
```bash
# Bad
npm run lint:run           # Unclear action
npm run test:do            # Vague action

# Good
npm run lint:check         # Clear action
npm run test:coverage      # Specific action
```

## Future Considerations

### Adding New Categories
When adding new script categories:
1. Ensure it's a distinct functional area
2. Use singular nouns (e.g., `deploy`, not `deployments`)
3. Keep it short and memorable
4. Document the new category

### Adding New Actions
When adding new actions:
1. Ensure it's a distinct type of operation
2. Use verbs or clear nouns
3. Keep it concise
4. Document the new action

### Tool Changes
When changing underlying tools:
1. Keep the same script names
2. Update the implementation
3. Update documentation if behavior changes
4. Test that the pattern still works

## Interview Relevance

Understanding NPM script conventions demonstrates:
- **Developer experience focus**: Consideration for team productivity
- **Systematic thinking**: Ability to establish and follow patterns
- **Scalability awareness**: Planning for project growth
- **Team collaboration**: Understanding of shared conventions

**Common Interview Questions**:
- "How do you organize build scripts in a project?"
- "What's your approach to maintaining consistency across a team?"
- "How do you balance flexibility with convention?"
- "What patterns have you established in previous projects?"

---

*This document is part of the Project Setup Essentials series in the React/Frontend interview training project.*