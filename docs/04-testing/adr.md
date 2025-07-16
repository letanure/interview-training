# ADR-004: Unit Testing Infrastructure Selection

## Status
Accepted

## Context
Need to establish unit and integration testing infrastructure for React application. Modern testing tools have evolved significantly, with Vitest emerging as a strong alternative to Jest for Vite-based projects.

## Decision
Use Vitest with React Testing Library for unit and integration testing.

**Implementation Details:** See `journey/2c-unit-testing-vitest.md`

**Key Decisions:**
- **Test File Organization:** Component folders with colocation
- **Barrel Exports:** No barrel exports (index.ts files)  
- **Test Globals:** Explicit imports over globals
- **Jest-DOM Integration:** Use `@testing-library/jest-dom/vitest`
- **Git Hooks Integration:** Pre-push hook to prevent broken code from reaching repository

## Consequences

**Positive:**
- Native Vite integration with Vitest requires minimal configuration
- Faster test execution than Jest for unit tests
- Modern tooling aligned with 2025 community standards
- Hot Module Replacement (HMR) for tests in development
- Component folder organization creates self-contained, scalable structure
- Easy to find and maintain related files (component, test, styles)
- Prevents future refactoring by starting with structure that accommodates growth
- Avoids folder cluttering and maintains consistency across all component types
- Explicit imports provide better IDE support and type safety
- Pre-push hook prevents broken code from reaching shared repository
- Allows work-in-progress commits while maintaining code quality gates

**Negative:**
- Smaller community support compared to Jest
- Some Jest plugins and tutorials may not be directly applicable
- Team members might need to learn new APIs
- Less Stack Overflow content for troubleshooting

**Neutral:**
- Vitest is API-compatible with Jest for easier migration
- Growing adoption means increasing community support over time