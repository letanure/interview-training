# Architecture Decision Records (ADRs)

This directory contains Architecture Decision Records for the React/Frontend interview training project.

## Index

| ADR | Title | Status | Date | Summary |
|-----|-------|--------|------|---------|
| [001](001-react-app-setup.md) | React App Setup Tool Selection | Accepted | 2025-01-14 | Vite with React + TypeScript |
| [002](002-code-quality-formatting.md) | Code Quality & Formatting Tool Selection | Accepted | 2025-01-14 | Biome for linting & formatting |
| [003](003-git-hooks-workflow.md) | Git Hooks and Development Workflow | Accepted | 2025-01-14 | Husky + lint-staged + commitlint |
| [004](004-testing-infrastructure.md) | Unit Testing Infrastructure Selection | Accepted | 2025-01-14 | Vitest + React Testing Library |
| [005](005-e2e-testing-playwright.md) | E2E Testing Infrastructure Selection | Accepted | 2025-01-14 | Playwright for E2E testing |
| [006](006-optional-docker-setup.md) | Optional Docker Development Setup | Accepted | 2025-01-14 | Native primary, Docker optional |
| [007](007-dead-code-detection-knip.md) | Dead Code Detection with Knip | Accepted | 2025-01-14 | Knip for unused code detection |
| [008](008-bundle-size-budgets.md) | Bundle Size Budgets and Performance Monitoring | Accepted | 2025-01-14 | 500KB budget with CI enforcement |
| [009](009-npm-scripts-naming-convention.md) | NPM Scripts Naming Convention | Accepted | 2025-01-15 | category:action pattern for consistent script naming |
| [010](010-css-styling-solution.md) | CSS/Styling Solution | Accepted | 2025-01-15 | Multi-solution: Vanilla Extract + shadcn/ui + Tailwind v4 + CSS Modules |
| [011](011-documentation-organization.md) | Documentation Organization Strategy | Accepted | 2025-01-15 | 4-tier system: ADR, Journey, Best Practices, Interview Guide |
| [012](012-layout-architecture-pattern.md) | Layout Architecture Pattern | Accepted | 2025-01-16 | Next.js-inspired layout pattern with children composition |

## ADR Format

Each ADR follows the standard format:
- **Status**: Proposed, Accepted, Rejected, Superseded
- **Context**: What situation led to the decision
- **Decision**: What was chosen
- **Consequences**: Trade-offs and implications