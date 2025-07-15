# Frontend Development Best Practices

A collection of best practices, patterns, and strategies discovered during the setup and implementation of this interview training project.

## Bundle Size Optimization

### Bundle Analysis Commands

Use these commands to monitor and analyze bundle size:

```bash
# Check if bundle exceeds budget (fails if over 500KB)
npm run size:check

# Visual bundle composition analysis (opens in browser)
npm run size:analyze

# Show file sizes in terminal
npm run size:info
```

### Code Splitting Techniques

**Route-based splitting** - Split by application routes:
```typescript
const HomePage = lazy(() => import('./pages/HomePage'));
const AboutPage = lazy(() => import('./pages/AboutPage'));
```

**Feature-based splitting** - Split by feature modules:
```typescript
const AdvancedFeature = lazy(() => import('./features/AdvancedFeature'));
```

**Library splitting** - Split heavy components:
```typescript
const ChartComponent = lazy(() => import('./components/Chart'));
```

### Tree Shaking Optimization

**✅ Good: Named imports**
```typescript
import { debounce } from 'lodash-es';
```

**❌ Bad: Full library import**
```typescript
import _ from 'lodash';
```

**✅ Good: Specific utility imports**
```typescript
import debounce from 'lodash/debounce';
```

### Common Bundle Size Issues & Solutions

| Issue | Problem | Solution | Example |
|-------|---------|----------|---------|
| **Large Dependencies** | Popular libraries with large footprints | Find smaller alternatives | `date-fns` instead of `moment.js` |
| **Duplicate Dependencies** | Same library bundled multiple times | Configure bundle splitting | Use bundle analyzer to detect |
| **Unused Code** | Dead code increases bundle size | Tree shaking + knip analysis | Regular dead code cleanup |
| **Large Assets** | Images bundled with JavaScript | Asset optimization + CDN | Image optimization plugins |

## NPM Scripts Naming Convention

Follow consistent naming patterns for package.json scripts to improve developer experience:

### Pattern: `category:action`

**Categories:**
- `format:*` = Code style (tabs, quotes, spacing)
- `lint:*` = Code quality (unused vars, logic errors, TypeScript types, dead code)
- `test:*` = Testing (unit, e2e, coverage)
- `size:*` = Bundle size analysis

**Standard Actions:**
- `:check` = Check for issues (read-only, exits with error if issues found)
- `:fix` = Fix issues automatically
- `:analyze` = Interactive analysis (opens UI)
- `:info` = Show information (terminal output)

### Examples

```bash
# Code Quality
npm run format:check       # Check code style
npm run format:fix         # Fix code style issues
npm run lint:check         # Check code quality
npm run lint:fix           # Fix code quality issues
npm run lint:ts            # Check TypeScript types

# Testing
npm run test               # Run unit tests
npm run test:coverage      # Run tests with coverage
npm run test:e2e:debug     # Debug E2E tests

# Bundle Analysis
npm run size:check         # Check bundle size budget
npm run size:analyze       # Interactive bundle analysis
npm run size:info          # Show bundle size info
```

**Benefits:**
- Predictable command structure
- Clear intent and functionality
- Consistent across all script types
- Easy to discover related commands

## Development Workflow

### Two-Tier Monitoring Strategy

**Development Tier (Immediate Feedback)**
- Use build tool warnings (e.g., Vite's `chunkSizeWarningLimit`)
- Show compressed sizes during builds
- Provide developer feedback without blocking

**CI/CD Tier (Enforcement)**
- Implement hard limits that fail builds
- Compare changes between branches
- Generate automated reports

### Tool Selection Philosophy

**Evaluate tools periodically, don't chase trends**
- Choose tools based on actual needs, not popularity
- Consider maintenance overhead and team expertise
- Document decisions in ADRs for future reference

## Code Quality

### Understanding Biome Commands

Biome handles both formatting and linting, but with different commands:

```bash
# FORMATTING (code style: tabs, quotes, etc.)
npm run format:check       # Check if code needs formatting
npm run format:fix         # Fix formatting issues

# LINTING (code quality: unused vars, logic errors, TypeScript, etc.)
npm run lint:check         # Check for linting issues
npm run lint:fix           # Fix linting issues
npm run lint:ts            # Check TypeScript types
```

**Key Differences:**
- **Formatting** (`biome format`) = Code style (tabs, quotes, spacing)
- **Linting** (`biome check`, `tsc --noEmit`, `knip`) = Code quality (unused variables, logic errors, TypeScript types, dead code)

### Linting Configuration

**Use ignore patterns effectively**
```json
{
  "files": {
    "ignoreUnknown": true,
    "experimentalScannerIgnores": [
      "**/node_modules/**",
      "**/dist/**",
      "**/coverage/**"
    ]
  },
  "vcs": {
    "enabled": true,
    "useIgnoreFile": true
  }
}
```

### Git Hooks Best Practices

**Pre-commit hooks should be fast**
- Only lint staged files
- Use `lint-staged` for targeted checking
- Avoid running full test suites in pre-commit

## Performance Monitoring

### Bundle Size Budgets

**Set realistic budgets for early-stage projects**
- Don't base budgets on minimal starter code
- Allow room for feature growth
- Use 500KB as reasonable limit for small apps

**Monitor trends, not just absolutes**
- Track size changes over time
- Alert on significant increases (>20KB)
- Use percentage changes for context

### Build-Time Monitoring

**Configure warnings in build tools**
```javascript
build: {
  chunkSizeWarningLimit: 500,
  rollupOptions: {
    onwarn(warning, warn) {
      if (warning.code === 'LARGE_BUNDLE') {
        console.error('Bundle size exceeded limit!');
      }
      warn(warning);
    }
  }
}
```

## Testing Strategy

### Test Organization

**Co-locate tests with components**
- Component folders, not separate test directories
- No barrel exports - use explicit imports
- Keep test files close to source code

**Use appropriate testing tools**
- Unit tests: Vitest + React Testing Library
- E2E tests: Playwright for full user journeys
- Component tests: React Testing Library for UI logic

## Documentation Practices

### Architecture Decision Records (ADRs)

**Document the "why" not just the "what"**
- Include alternatives considered
- Explain trade-offs and consequences
- Update when decisions evolve (don't change past decisions)

**Keep ADRs focused and actionable**
- One decision per ADR
- Include implementation details or reference them
- Review and update during retrospectives

### README Best Practices

**Lead with essential information**
- Commands developers need immediately
- Budget limits and constraints
- Quick start instructions

**Structure for different audiences**
- Getting started (new developers)
- Commands reference (daily use)
- Architecture overview (understanding)

## Interview Preparation

### Demonstrate Production Thinking

**Show understanding of real-world constraints**
- Performance budgets affect user experience
- Automated monitoring prevents regressions
- Tool selection impacts team productivity

**Explain trade-offs clearly**
- Benefits and drawbacks of each approach
- Why specific tools were chosen
- How decisions might change with scale

---

*This document evolves as we discover new practices and patterns during development. Contribute improvements through pull requests.*