# ADR-009: NPM Scripts Naming Convention

## Status
Accepted

## Context
As the project grew, we accumulated various NPM scripts for different purposes (formatting, linting, testing, bundle analysis). The naming became inconsistent and confusing, making it difficult for developers to discover and understand available commands. We needed a systematic approach to script naming that would scale as the project grows.

## Decision
Adopt a consistent `category:action` naming pattern for all NPM scripts.

**Implementation Details:** See `journey/2h-npm-scripts-naming-convention.md`

**Pattern**: `category:action`
- `category` = What type of operation (format, lint, test, size)
- `action` = What it does (check, fix, analyze, info)

**Standard Categories:**
- `format:*` = Code style (tabs, quotes, spacing)
- `lint:*` = Code quality (unused vars, logic errors, TypeScript types, dead code)
- `test:*` = Testing (unit, e2e, coverage)
- `size:*` = Bundle size analysis

**Standard Actions:**
- `:check` = Check for issues (read-only, exits with error if issues found)
- `:fix` = Fix issues automatically
- `:analyze` = Interactive analysis (opens UI)
- `:info` = Show information (terminal output)

**Examples:**
- `npm run format:check` / `npm run format:fix`
- `npm run lint:check` / `npm run lint:fix` / `npm run lint:ts`
- `npm run test:coverage` / `npm run test:e2e:debug`
- `npm run size:check` / `npm run size:analyze`

## Alternatives Considered

### Option 1: Flat Naming (Current Before Decision)
**Example**: `lint`, `lint-fix`, `size-check`, `analyze`

**Pros:**
- Shorter commands
- No need to remember patterns

**Cons:**
- Inconsistent naming (`lint-fix` vs `size-check`)
- Difficult to discover related commands
- Unclear what each command does
- Doesn't scale well with more scripts

### Option 2: Verb-First Pattern
**Example**: `check:lint`, `fix:format`, `analyze:size`

**Pros:**
- Action-oriented
- Groups by what you want to do

**Cons:**
- Less intuitive for discovering capabilities
- Breaks muscle memory from common patterns
- Harder to find all linting-related commands

### Option 3: Tool-Based Naming
**Example**: `biome:check`, `biome:fix`, `playwright:test`

**Pros:**
- Clear which tool is being used
- Easy to understand implementation

**Cons:**
- Tied to specific tools (what if we switch?)
- Focuses on "how" rather than "what"
- Doesn't group by functionality

## Consequences

**Positive:**
- **Predictable structure**: Developers can guess command names
- **Easy discovery**: All related commands are grouped together
- **Clear intent**: Each command's purpose is obvious
- **Scalable**: Pattern works as we add more script types
- **Consistent**: All scripts follow the same convention
- **Interview-friendly**: Demonstrates systematic thinking

**Negative:**
- **Longer commands**: `npm run lint:check` vs `npm run lint`
- **Learning curve**: New developers need to understand the pattern
- **Refactoring effort**: Existing scripts need to be renamed
- **Documentation updates**: All references need updating

**Neutral:**
- **Industry alignment**: Many projects use similar patterns
- **Tooling agnostic**: Pattern works regardless of underlying tools
- **Maintainable**: Clear rules for adding new scripts