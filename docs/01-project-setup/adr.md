# ADR-001: React App Setup Tool Selection

## Status
Accepted

## Context
Need to choose a build tool for creating a new React application in 2025. Create React App (CRA) has been officially deprecated by the React team, and the React ecosystem has converged around new build tools with better performance and modern features.

## Problem
- Create React App (CRA) is officially deprecated
- Need modern build tool with TypeScript support
- Want fast development experience with HMR
- Prefer minimal configuration setup

## Decision
Use **Vite with TypeScript + SWC template** for React application setup.

**Key choices:**
- **Build tool**: Vite for fast development and modern architecture
- **Language**: TypeScript for type safety and better development experience
- **Compiler**: SWC for faster transpilation than Babel
- **Template**: `react-ts-swc` for optimal performance

## Alternatives Considered

### Option 1: Next.js
**Pros:**
- Full-stack framework with built-in routing
- Excellent production optimization
- Server-side rendering capabilities
- Strong ecosystem support

**Cons:**
- Heavier setup for simple React learning
- Framework conventions may obscure React fundamentals
- More complex for interview training purposes

### Option 2: Create React App (CRA)
**Pros:**
- Familiar to many developers
- Zero configuration setup
- Well-documented patterns

**Cons:**
- Officially deprecated by React team
- Slower build times and HMR
- Uses outdated tooling (Webpack, Babel)
- No longer maintained

### Option 3: Vite with JavaScript
**Pros:**
- Faster to write without type annotations
- Less initial setup complexity
- Familiar to JavaScript developers

**Cons:**
- No compile-time error detection
- Reduced IDE support and autocomplete
- Less maintainable for learning projects

### Option 4: Vite with TypeScript + Babel
**Pros:**
- Type safety with familiar Babel tooling
- Extensive plugin ecosystem
- Well-understood transpilation process

**Cons:**
- Slower compilation than SWC
- More complex configuration
- Legacy approach in 2025

## Consequences

**Positive:**
- **Fast development**: Near-instant startup times and HMR
- **Modern architecture**: Native ES modules and latest JavaScript features
- **Type safety**: Compile-time error detection with TypeScript
- **Performance**: SWC provides faster compilation than Babel
- **Official support**: Recommended by React team for custom setups
- **Learning value**: Demonstrates modern React development practices

**Negative:**
- **Learning curve**: Different from legacy CRA setup
- **Configuration**: Requires understanding Vite configuration (though minimal)
- **Tooling changes**: Developers need to learn new build tool patterns

**Neutral:**
- **Industry standard**: Vite has become the new standard in 2025
- **Ecosystem support**: Well-documented and widely adopted
- **Migration path**: Easy to migrate from CRA when needed

## Implementation Notes

### Setup Command
```bash
npm create vite@latest . --template react-ts-swc
```

### Key Files Created
- `vite.config.ts` - Build configuration
- `tsconfig.json` - TypeScript configuration
- `package.json` - Dependencies and scripts

### Development Commands
- `npm run dev` - Start development server
- `npm run build` - Create production build
- `npm run preview` - Preview production build

## Related Documentation
- [Project Setup Implementation](./implementation.md)
- [Project Setup Interview Guide](./interview-guide.md)