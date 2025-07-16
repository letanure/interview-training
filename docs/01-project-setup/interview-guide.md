# React Setup in 2025 - Interview Guide

## Key Talking Points

### 1. "How would you set up a new React project in 2025?"

**Answer:**
> "The modern approach is Vite with the React TypeScript template. Create React App is deprecated and no longer maintained. Vite offers superior performance, better development experience, and is the recommended approach by the React team. The command `npm create vite@latest . --template react-ts-swc` provides the fastest setup with TypeScript and SWC compilation."

**Command Examples:**
```bash
# Modern approach (2025)
npm create vite@latest my-app --template react-ts-swc
cd my-app
npm install
npm run dev

# Old approach (deprecated)
npx create-react-app my-app --template typescript  # Don't use this
```

**Follow-up Question:** "Why TypeScript and SWC specifically?"

**Answer:**
> "TypeScript provides compile-time type safety and better IDE support, which is essential for maintainable applications. SWC is a Rust-based compiler that's significantly faster than Babel - about 20x faster compilation. It's becoming the standard for performance-critical builds."

---

### 2. "What build tools would you choose and why?"

**Answer:**
> "Vite is the clear winner for modern React development. It uses native ES modules for development with instant hot reload, and Rollup for optimized production builds. The development server starts in milliseconds versus seconds with Webpack-based tools. It also has excellent TypeScript support out of the box."

**Example**: Vite configuration is minimal - just `plugins: [react()]` with optional build optimizations for vendor chunking.

**Follow-up Question:** "How does this compare to Webpack?"

**Answer:**
> "Webpack is still powerful for complex configurations, but Vite provides better defaults and performance. Vite uses esbuild for development and Rollup for production, giving you the best of both worlds - fast development and optimized builds. The configuration is much simpler too."

---

### 3. "How do you handle code quality in modern React projects?"

**Answer:**
> "I use Biome instead of ESLint and Prettier. Biome is a single tool that handles both linting and formatting, written in Rust for better performance. It has fewer configuration headaches and provides consistent results across the team. I set up Git hooks with Husky to enforce quality before commits."

**Code Example:**
```json
// biome.json - Single config for linting and formatting
{
  "files": {
    "include": ["src/**/*", "e2e/**/*"]
  },
  "linter": {
    "enabled": true,
    "rules": {
      "recommended": true
    }
  },
  "formatter": {
    "enabled": true,
    "indentStyle": "tab"
  }
}
```

**Follow-up Question:** "What about ESLint and Prettier?"

**Answer:**
> "ESLint and Prettier are still widely used and perfectly valid choices. I chose Biome for this project because it's faster, has simpler configuration, and represents the direction the ecosystem is moving. For teams already using ESLint/Prettier, migration isn't urgent, but new projects benefit from Biome's simplicity."

---

### 4. "How do you set up testing in a React project?"

**Answer:**
> "I use Vitest for unit testing instead of Jest because it's faster and integrates better with Vite. It has the same API as Jest, so migration is straightforward. For React components, I use React Testing Library for user-centric testing. For E2E testing, Playwright is excellent with great debugging tools and reliable test execution."

**Code Example:**
```typescript
// Component test with Vitest and RTL
import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { Button } from './Button'

describe('Button', () => {
  it('renders with correct text', () => {
    render(<Button>Click me</Button>)
    expect(screen.getByRole('button')).toHaveTextContent('Click me')
  })
})
```

**Follow-up Question:** "Why Vitest over Jest?"

**Answer:**
> "Vitest is built specifically for Vite projects and shares the same configuration. It's faster because it uses the same transformation pipeline as your build tool. The development experience is better with built-in watch mode and excellent error reporting. Jest is still great, but Vitest is the natural choice for Vite-based projects."

---

## Advanced Topics

### Bundle Size Management
- **Modern approach**: Built-in bundle analysis with budget enforcement
- **CI integration**: Fail builds that exceed size budgets
- **Tools**: Native Vite rollup analysis, not webpack-bundle-analyzer

### Git Workflow Automation
- **Husky**: Git hooks for quality gates
- **lint-staged**: Only lint changed files for speed
- **commitlint**: Consistent commit message format

### Team Development
- **Docker optional**: Native development first, Docker for consistency
- **Scripts naming**: Consistent `category:action` pattern
- **Documentation**: ADR for decisions, Journey for implementation

## Common Mistakes to Avoid

❌ **Don't say:** "I still use Create React App because it's what I know"
✅ **Do say:** "I migrated from CRA to Vite for better performance and modern tooling"

❌ **Don't say:** "I use the latest versions of everything"
✅ **Do say:** "I evaluate tools based on stability, community adoption, and project needs"

❌ **Don't say:** "Setup doesn't matter, any approach works"
✅ **Do say:** "Good setup saves hours of development time and prevents common issues"

## Real-World Scenarios

### Startup/New Project
> "For a new startup, I'd prioritize speed and simplicity. Vite + TypeScript + Biome gets you productive immediately with minimal configuration. Add Playwright for critical user flows."

### Enterprise Migration
> "For enterprise migration from CRA, I'd do it incrementally. Set up Vite in a new branch, migrate build scripts, and validate that all existing functionality works. The performance improvement is worth the effort."

### Team Onboarding
> "New team members can start contributing immediately with Vite's fast startup and clear error messages. The unified tooling (Biome) reduces configuration complexity and onboarding friction."

---

*This guide is part of the React/Frontend interview training project.*