# Unit Testing Implementation

## Overview

This guide describes how we evaluated and implemented unit testing for React applications, choosing Vitest and React Testing Library for modern testing practices.

## Available Options Analysis

### Unit/Integration Testing Options

#### Option 1: Vitest (Modern, Vite-Optimized)
**Tools**:
- **Vitest**: Fast unit test runner built for Vite
- **React Testing Library**: Component testing utilities
- **@testing-library/jest-dom**: Additional matchers

**Pros**:
- Native Vite integration, no configuration needed
- Faster than Jest, built for modern tooling
- Hot Module Replacement (HMR) for tests
- Compatible with Jest APIs (easy migration)
- Better developer experience

**Cons**:
- Newer tool, smaller community than Jest
- Some Jest plugins might not be compatible

#### Option 2: Jest (Traditional Standard)
**Tools**:
- **Jest**: Mature testing framework
- **React Testing Library**: Component testing utilities
- **@testing-library/jest-dom**: Additional matchers

**Pros**:
- Mature ecosystem with extensive community support
- Widely known, expected knowledge for interviews
- Comprehensive documentation and tutorials
- Many existing plugins and extensions

**Cons**:
- Slower than Vitest
- Requires additional configuration with Vite
- Less optimized for modern build tools

## Community Standards Analysis (2025)

**Current Trends**:
- **Vitest** is becoming the preferred choice over Jest for new projects
- Community moving towards faster, more modern testing tools
- Vite ecosystem driving tool choices

## Decision & Reasoning

### Final Choice: Vitest

**Reasoning**:
- **Better Vite integration**: Vitest is built specifically for Vite, no configuration needed
- **Performance**: Faster than Jest
- **Modern approach**: Using current community standards for 2025
- **Future-proof**: Strong backing and active development

## Test Organization Decisions

### Test File Organization Options

1. **Colocation (flat)**: `Button.tsx` + `Button.test.tsx` in same folder
2. **Separate __tests__ folders**: Tests grouped in `__tests__/` subdirectories  
3. **Parallel structure**: Separate `test/` folder mirroring `src/` structure
4. **Component folders with colocation** (chosen): Each component in own folder with test

**Final Choice: Component Folders with Colocation**

```
src/
  components/
    button/
      Button.tsx
      Button.test.tsx
```

**Reasoning**:

- Self-contained components, easy to find related files, scales well, popular in modern React projects
- **Experience-based decision**: Every time projects start with simpler approaches, they eventually evolve to this structure
- **Consistency**: Better to have one structure that fits all cases rather than refactoring later
- **Avoids cluttering**: Prevents folders from becoming cluttered with mixed file types
- **Slightly more nested but familiar**: All folders have clear purpose, especially when adding styles, docs, or dividing components further

**Barrel Exports Decision**: 

**Choice**: No barrel exports (no index.ts files)

**Reasoning**: 
- **Performance issues**: Can cause bundle size problems and tree shaking issues
- **Experience-based**: Teams report problems with tooling and performance
- **Direct imports**: `import { Button } from 'components/button/Button'` is more explicit
- **Modern tooling**: IDE auto-imports work better with direct file references

**Test Globals Decision:**

**Choice**: Explicit imports over globals

**Reasoning**:
- **Clear dependencies**: Can see exactly what functions are being used
- **Better IDE support**: Autocomplete and go-to-definition work properly  
- **Type safety**: TypeScript can properly type imports
- **Consistency**: Matches explicit import pattern used throughout codebase
- **No magic**: Explicit about where test functions come from

**Jest-DOM Integration:**

**Choice**: Use `@testing-library/jest-dom/vitest` instead of generic jest-dom

**Reasoning**:
- **Vitest-specific**: Designed specifically for Vitest, avoiding `expect` global issues
- **Maintains explicit imports**: No need to enable globals in config
- **Better compatibility**: Official integration between Testing Library and Vitest
- **Cleaner setup**: Single import handles all jest-dom matchers correctly

## Implementation Process

### Vitest Setup

**Installation:**
```bash
# Install Vitest and testing libraries (all dev dependencies)
npm install -D vitest @testing-library/react @testing-library/jest-dom @testing-library/user-event jsdom
```

**Configuration:**
```bash
# Create vitest.config.ts
echo 'import { defineConfig } from "vitest/config"
import react from "@vitejs/plugin-react-swc"

export default defineConfig({
  plugins: [react()],
  test: {
    environment: "jsdom",
    setupFiles: ["./src/test/setup.ts"],
  },
})' > vitest.config.ts

# Create test setup file
mkdir -p src/test && echo 'import "@testing-library/jest-dom/vitest"' > src/test/setup.ts
```

**Package Scripts:**
Add to your package.json:

```json
{
  "scripts": {
    "test": "vitest",
    "test:ui": "vitest --ui",
    "test:coverage": "vitest --coverage"
  }
}
```

**Basic Test Structure:**
```bash
# Create example component folder structure
mkdir -p src/components/button
mkdir -p src/utils/__tests__
```

**Complete Example Component Setup:**
```bash
# Create component folder structure first
mkdir -p src/components/button

# Create Button component
echo 'interface ButtonProps {
  children: React.ReactNode
  onClick?: () => void
  variant?: "primary" | "secondary"
}

export function Button({ children, onClick, variant = "primary" }: ButtonProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`btn btn-${variant}`}
    >
      {children}
    </button>
  )
}' > src/components/button/Button.tsx

# Create Button test
echo 'import { render, screen } from "@testing-library/react"
import { userEvent } from "@testing-library/user-event"
import { expect, test, vi } from "vitest"
import { Button } from "./Button"

test("renders button with text", () => {
  render(<Button>Click me</Button>)
  expect(screen.getByRole("button", { name: "Click me" })).toBeInTheDocument()
})

test("calls onClick when clicked", async () => {
  const handleClick = vi.fn()
  render(<Button onClick={handleClick}>Test Button</Button>)

  await userEvent.click(screen.getByRole("button", { name: "Test Button" }))
  expect(handleClick).toHaveBeenCalledOnce()
})' > src/components/button/Button.test.tsx

# Test the setup
npm run test
```

## Git Hooks Integration

### Adding Tests to Pre-Push Hook

**Why Pre-Push Over Pre-Commit:**

**Reasoning**:
- **Allow partial commits**: Can commit work-in-progress or partial implementations to save state
- **Prevent broken pushes**: Ensures only working code reaches the shared repository
- **Better performance**: Doesn't slow down frequent local commits
- **Team protection**: Prevents broken code from affecting other developers

**Implementation:**
```bash
# Add test hook to prevent pushing broken code
echo "npm run test" > .husky/pre-push
```

**Testing the Hook:**
```bash
# This should run tests before pushing
git push origin main
```

If tests fail, the push will be blocked until tests pass.

## Interview Relevance

Being able to discuss unit testing shows:
- **Quality focus**: Understanding the importance of comprehensive testing
- **Modern practices**: Knowledge of current testing tools and strategies
- **Component design**: How to write testable React components
- **Professional experience**: Understanding of testing best practices

## What Was Created

**Testing framework setup:**
- Vitest configuration with React Testing Library
- Component folder structure with colocation
- Test setup with jest-dom matchers
- Pre-push hook integration

**Development workflow:**
- Fast test execution with Vitest
- Component-focused testing approach
- Explicit imports over globals for better type safety
- Git hooks to prevent broken code from being pushed

## Related Documentation
- [ADR-004: Unit Testing Tool Selection](./adr.md)
- [Unit Testing Interview Guide](./interview-guide.md)