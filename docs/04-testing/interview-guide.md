# Testing Strategies - Interview Guide

## Key Talking Points

### 1. "How do you approach testing in React applications?"

**Answer:**
> "I use a layered testing strategy: unit tests with Vitest and React Testing Library for component behavior, integration tests for user workflows, and E2E tests with Playwright for critical paths. I follow the testing pyramid - lots of unit tests, some integration tests, and focused E2E tests for the most important user journeys."

**Code Example:**
```typescript
// Unit test - Component behavior
import { render, screen, fireEvent } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { Button } from './Button'

describe('Button', () => {
  it('calls onClick when clicked', () => {
    const mockClick = vi.fn()
    render(<Button onClick={mockClick}>Click me</Button>)
    
    fireEvent.click(screen.getByRole('button'))
    expect(mockClick).toHaveBeenCalledOnce()
  })
})

// E2E test - User workflow
test('user can complete checkout', async ({ page }) => {
  await page.goto('/products')
  await page.click('[data-testid="add-to-cart"]')
  await page.click('[data-testid="checkout"]')
  await expect(page.locator('[data-testid="success"]')).toBeVisible()
})
```

**Follow-up Question:** "Why Vitest instead of Jest?"

**Answer:**
> "Vitest is built for Vite projects and shares the same configuration and transformation pipeline. It's faster because it reuses Vite's build optimizations. The API is compatible with Jest, so migration is straightforward, but you get better performance and integration with modern tooling."

---

### 2. "How do you decide what to test?"

**Answer:**
> "I focus on testing behavior, not implementation. For components, I test user interactions and different states. For utilities, I test edge cases and error conditions. I don't test trivial code or third-party libraries. The key is testing what users actually do and what could realistically break."

**Code Example:**
```typescript
// Good - Testing user behavior
test('shows error message when form is invalid', async () => {
  render(<LoginForm />)
  fireEvent.click(screen.getByRole('button', { name: 'Submit' }))
  expect(screen.getByText('Email is required')).toBeInTheDocument()
})

// Avoid - Testing implementation details
test('calls validateEmail function', () => {
  const spy = vi.spyOn(utils, 'validateEmail')
  render(<LoginForm />)
  expect(spy).toHaveBeenCalled() // This is implementation detail
})
```

**Follow-up Question:** "How do you handle testing components with complex state?"

**Answer:**
> "I use React Testing Library's user-centric approach. Instead of testing state directly, I test the UI changes that result from user actions. For complex state logic, I extract it into custom hooks and test those separately. This makes tests more maintainable and focused on user experience."

---

### 3. "How do you set up E2E testing?"

**Answer:**
> "I use Playwright because it's fast, reliable, and has excellent debugging tools. I test critical user paths like authentication, checkout, and core workflows. I run E2E tests in CI but also provide local debugging with headed mode and trace viewer. The key is keeping E2E tests focused on happy paths and major error scenarios."

**Code Example:**
```typescript
// playwright.config.ts
import { defineConfig } from '@playwright/test'

export default defineConfig({
  testDir: './e2e',
  use: {
    baseURL: 'http://localhost:5173',
    trace: 'on-first-retry',
    screenshot: 'only-on-failure'
  },
  projects: [
    { name: 'chromium', use: { ...devices['Desktop Chrome'] } },
    { name: 'webkit', use: { ...devices['Desktop Safari'] } }
  ]
})
```

**Follow-up Question:** "How do you handle flaky E2E tests?"

**Answer:**
> "I use Playwright's built-in waiting mechanisms and avoid hard timeouts. I use data-testid attributes for reliable element selection, and I structure tests to be independent - each test sets up its own data. When tests are flaky, I investigate the root cause rather than just increasing timeouts."

---

### 4. "How do you organize and structure tests?"

**Answer:**
> "I follow the component folder structure - each component has its test file in the same directory. I use descriptive test names that explain the behavior being tested. I group related tests with describe blocks and use beforeEach for common setup. This makes tests easy to find and understand."

**Code Example:**
```
src/
├── components/
│   ├── Button/
│   │   ├── Button.tsx
│   │   ├── Button.test.tsx
│   │   └── Button.module.css
│   └── LoginForm/
│       ├── LoginForm.tsx
│       ├── LoginForm.test.tsx
│       └── useLoginForm.test.tsx
```

**Follow-up Question:** "How do you handle test data and mocking?"

**Answer:**
> "I create test utilities for common data setup and use MSW (Mock Service Worker) for API mocking. This gives me realistic request/response cycles without hitting real APIs. I avoid over-mocking - I only mock external dependencies and complex integrations, not internal application logic."

---

## Testing Tools Comparison

### Vitest vs Jest

**Vitest Advantages:**
- ✅ **Vite integration**: Same config and transforms
- ✅ **Performance**: Faster test execution
- ✅ **Modern**: Built-in TypeScript support
- ✅ **Developer experience**: Better watch mode and UI

**Jest Advantages:**
- ✅ **Ecosystem**: Larger community and plugins
- ✅ **Maturity**: Battle-tested in production
- ✅ **Documentation**: More tutorials and examples
- ✅ **Compatibility**: Works with any build system

**My Decision:**
> "For Vite projects, Vitest is the natural choice. For existing Jest setups, migration isn't urgent, but new projects benefit from Vitest's better integration and performance."

### Playwright vs Cypress

**Playwright Advantages:**
- ✅ **Performance**: Faster execution, parallel tests
- ✅ **Browser support**: Chrome, Firefox, Safari, Edge
- ✅ **Debugging**: Excellent trace viewer and inspector
- ✅ **API**: More flexible and powerful

**Cypress Advantages:**
- ✅ **Developer experience**: Great visual debugging
- ✅ **Community**: Larger ecosystem and plugins
- ✅ **Learning curve**: Easier to get started
- ✅ **Documentation**: Comprehensive guides

**My Decision:**
> "Playwright for new projects due to performance and multi-browser support. Cypress is still excellent, but Playwright represents the current state of the art in E2E testing."

## Testing Best Practices

### 1. Test Structure
```typescript
// AAA Pattern - Arrange, Act, Assert
describe('UserProfile', () => {
  it('displays user information correctly', () => {
    // Arrange
    const user = { name: 'John', email: 'john@example.com' }
    
    // Act
    render(<UserProfile user={user} />)
    
    // Assert
    expect(screen.getByText('John')).toBeInTheDocument()
    expect(screen.getByText('john@example.com')).toBeInTheDocument()
  })
})
```

### 2. Test Data Management
```typescript
// Test utilities for consistent data
export const createMockUser = (overrides = {}) => ({
  id: '1',
  name: 'Test User',
  email: 'test@example.com',
  ...overrides
})

// Usage
const user = createMockUser({ name: 'John Doe' })
```

### 3. Async Testing
```typescript
// Proper async testing with waitFor
test('loads user data', async () => {
  render(<UserProfile userId="1" />)
  
  await waitFor(() => {
    expect(screen.getByText('John Doe')).toBeInTheDocument()
  })
})
```

## Common Mistakes to Avoid

❌ **Don't say:** "We don't have time for testing"
✅ **Do say:** "Testing saves time by catching bugs early and enabling confident refactoring"

❌ **Don't say:** "We test everything to get 100% coverage"
✅ **Do say:** "We focus on testing critical paths and user interactions"

❌ **Don't say:** "E2E tests are too slow and flaky"
✅ **Do say:** "Modern E2E tools like Playwright are fast and reliable when used correctly"

## Team Adoption Strategies

### Starting Testing Culture
- Begin with critical components and user flows
- Provide training and examples
- Make testing part of the definition of done
- Show value with bug prevention metrics

### Scaling Testing
- Create shared test utilities and patterns
- Establish testing guidelines and standards
- Automate test execution in CI/CD
- Monitor test performance and reliability

### Maintaining Test Quality
- Regular review and cleanup of test code
- Update tests when requirements change
- Refactor tests to improve maintainability
- Keep test documentation current

---

*This guide is part of the React/Frontend interview training project.*