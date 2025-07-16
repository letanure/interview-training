# ADR-002: Code Quality & Formatting Tool Selection

## Status
Accepted

## Context
Need to choose linting and formatting tools for React TypeScript project. Traditional approach uses ESLint + Prettier, but newer alternatives like Biome are available. Must consider performance, ease of use, and community adoption.

## Decision
Use Biome instead of ESLint + Prettier for code quality and formatting.

## Consequences

**Positive:**
- 25x faster formatting than Prettier, 15x faster linting than ESLint
- Single tool and configuration file eliminates conflicts
- 97% Prettier compatibility
- Unified linting and formatting approach
- Simple npm scripts setup
- Combined with TypeScript's `tsc --noEmit` for complete code quality coverage

**Negative:**
- Limited ecosystem compared to mature ESLint plugin system
- Missing comprehensive TypeScript type-checking rules
- Smaller community and fewer resources
- Some file types have limited support

**Neutral:**
- Personal project choice - real projects should consider team familiarity
- Growing adoption but still emerging standard
- Need to maintain knowledge of both approaches for interviews