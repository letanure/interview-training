# Development Workflow Implementation

## Overview

This guide describes how we implemented development workflow automation through git hooks, establishing code quality gates and commit message conventions for professional team collaboration.

## Available Options Analysis

### Git Hooks Tools

#### Option 1: Husky (Industry Standard)

**Tools**:

- **Husky**: Git hooks management
- **lint-staged**: Run linters on staged files only
- **commitlint**: Enforce commit message conventions

**Pros**:

- Most popular solution, widely adopted
- Easy setup with modern npm scripts
- Works with any linter/formatter
- Great documentation and community support

**Cons**:

- Additional dependencies to manage
- Can slow down git operations if not configured well
- Requires team buy-in for conventions

#### Option 2: Simple Git Hooks (Native)

**Tools**:

- Git's built-in hooks in `.git/hooks/`
- Custom shell scripts

**Pros**:

- No additional dependencies
- Full control over hook behavior
- No npm packages needed

**Cons**:

- Not shared via version control by default
- Platform-specific scripts (shell/batch)
- Harder to maintain across team

#### Option 3: Lefthook (Modern Alternative)

**Tools**:

- **Lefthook**: Fast, cross-platform git hooks manager
- Written in Go, single binary

**Pros**:

- Much faster than Husky
- Cross-platform without dependencies
- Parallel execution support
- Simple YAML configuration

**Cons**:

- Less popular than Husky
- Smaller ecosystem
- Team might not be familiar

### Commit Message Conventions

#### Option 1: Conventional Commits

- Format: `type(scope): description`
- Example: `feat(auth): add login functionality`
- Enables automatic changelog generation

#### Option 2: Custom Format

- Team-specific conventions
- Example: `[JIRA-123] Add login functionality`

#### Option 3: No Convention

- Free-form commit messages
- Relies on developer discipline

## Decision & Reasoning

### Final Choice: Husky + lint-staged + commitlint

**Reasoning**:

- **Community standard**: Most widely adopted solution in the industry
- **Well-organized workflow**: Clear separation of concerns between tools
- **Professional practice**: Shows understanding of team collaboration standards
- **Proven ecosystem**: Mature tools with extensive documentation
- **Team-friendly**: New developers will likely be familiar with this setup

## Implementation Process

### Installation Steps

```bash
# 1. Install Husky (v9)
npm install -D husky
npx husky init

# 2. Install lint-staged
npm install -D lint-staged

# 3. Install commitlint
npm install -D @commitlint/cli @commitlint/config-conventional

# 4. Configure commitlint
echo "export default { extends: ['@commitlint/config-conventional'] };" > commitlint.config.js
# Note: For Node v24, ensure package.json has "type": "module" or rename to commitlint.config.mjs

# 5. Add lint-staged config to package.json
npx json -I -f package.json -e 'this["lint-staged"]={"*.{js,jsx,ts,tsx}": "biome check --fix"}'

# 6. Set up git hooks
echo "npx lint-staged" > .husky/pre-commit
echo "npx --no -- commitlint --edit \$1" > .husky/commit-msg

# 7. Make hooks executable
chmod +x .husky/pre-commit .husky/commit-msg
```

### Testing the Setup

```bash
# Test pre-commit hook (lint-staged)
git add .
git commit -m "test commit"
# Should run Biome checks on staged files

# Test commit message validation
git commit -m "bad commit message"
# Should fail with commitlint error

git commit -m "feat: add git hooks setup"
# Should pass - follows conventional format
```

### Conventional Commit Types

Common types to use:

- `feat:` New feature
- `fix:` Bug fix
- `docs:` Documentation changes
- `style:` Code style changes (formatting, etc.)
- `refactor:` Code refactoring
- `test:` Adding or updating tests
- `chore:` Maintenance tasks

## Interview Relevance

Being able to discuss git hooks and workflow automation shows:

- **Professional practices**: Understanding of team collaboration tools
- **Quality focus**: Automated checks prevent bad code from entering repository
- **Efficiency**: Saves time by catching issues early
- **Team player**: Consideration for code review and maintenance

## What Was Created

**Git workflow automation:**
- Husky configuration for git hooks management
- lint-staged setup for pre-commit code quality checks
- commitlint configuration for conventional commit messages
- Pre-commit and commit-msg hooks for automated validation

**Development workflow:**
- Automated code quality checks before commits
- Standardized commit message format enforcement
- Team-friendly configuration familiar to most developers
- Quality gates preventing bad code from entering repository

## Related Documentation
- [ADR-006: Git Hooks and Workflow Automation](./adr.md)
- [Development Workflow Interview Guide](./interview-guide.md)
