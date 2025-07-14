# ADR-003: Git Hooks and Development Workflow

## Status
Accepted

## Context
Need to implement automated code quality checks before commits and enforce consistent commit message format. This ensures code quality and maintains clean git history for team collaboration.

## Decision
Use Husky + lint-staged + commitlint for git hooks and workflow automation.

## Consequences

**Positive:**
- Industry standard solution with wide adoption
- Automated quality checks prevent bad code from being committed
- Enforced commit conventions enable changelog generation
- Runs only on changed files for performance
- Well-documented with strong community support
- New team members likely familiar with the tools

**Negative:**
- Additional development dependencies
- Slight delay on commits for running checks
- Requires team agreement on conventions
- Initial setup and configuration needed

**Neutral:**
- Commit conventions require learning but improve long-term maintenance
- Can be bypassed with --no-verify flag if needed