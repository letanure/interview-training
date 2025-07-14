# ADR-001: React App Setup Tool Selection

## Status
Accepted

## Context
Need to choose a build tool for creating a new React application in 2025. Create React App (CRA) has been officially deprecated by the React team. Available options include Vite, Next.js, and other modern build tools.

## Decision
Use Vite with TypeScript + SWC template for React application setup.

## Consequences

**Positive:**
- Near-instant startup times and fast Hot Module Replacement (HMR)
- Modern architecture using native ES modules
- Officially recommended by React team for custom setups
- SWC provides faster compilation than Babel
- TypeScript support with better performance

**Negative:**
- Different from legacy CRA setup that some developers might expect
- Requires learning new tool configuration (though minimal)

**Neutral:**
- Vite has become the new standard, making this a safe choice
- Well-documented and widely adopted in 2025