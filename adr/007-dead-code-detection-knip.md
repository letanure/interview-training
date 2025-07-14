# ADR-007: Dead Code Detection with Knip

## Status
Accepted

## Context
Need to maintain codebase health and prevent accumulation of dead code (unused exports, dependencies, and files). As the project grows with interview topic implementations, dead code can accumulate from refactoring, changing requirements, and experimental code. This impacts bundle size, developer experience, and maintenance overhead.

## Decision
Implement Knip for comprehensive dead code detection with gradual configuration approach.

**Implementation Details:** See `journey/2f-dead-code-detection-knip.md`

**Key Decisions:**
- **Primary tool**: Knip for comprehensive dead code analysis
- **Scope**: Start with unused dependencies, expand to exports and files
- **Integration**: CI checks without blocking development initially
- **Workflow**: Weekly cleanup sessions, pre-release full analysis
- **Configuration**: Conservative start, expand based on team comfort

**Alternatives Considered:**
- **TypeScript compiler flags**: Limited to local variables only
- **ESLint rules**: Good for development feedback but limited scope
- **Bundle analyzers**: Post-build only, doesn't help source cleanup
- **Manual review**: Time-consuming and error-prone

## Consequences

**Positive:**
- Comprehensive dead code detection (files, exports, dependencies)
- Smaller bundle sizes through cleaner code
- Reduced maintenance overhead for dependencies
- Better developer experience with cleaner navigation
- Automated detection prevents manual review overhead
- TypeScript-native tool fits perfectly with our stack
- CI integration provides consistent quality checks

**Negative:**
- Additional tool to learn and maintain
- Initial configuration time and potential false positives
- Need team discipline for regular cleanup
- Configuration maintenance as project evolves
- Possible analysis time impact in CI pipeline

**Neutral:**
- Fits well with existing quality tools (Biome, Vitest)
- Supports gradual adoption approach
- Can be integrated with existing git hooks workflow
- Complements bundle analyzer for different perspectives