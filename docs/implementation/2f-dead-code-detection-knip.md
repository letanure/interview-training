# Dead Code Detection with Knip

## Introduction

This document is part of the **Project Setup Essentials** series, focusing on dead code detection and project maintenance. Knip helps maintain codebase health by finding unused exports, dependencies, and files.

## Available Options Analysis

### Option 1: No Dead Code Detection
**Tools**: Manual code review only

**Pros**:
- **No additional tooling**: Zero setup or configuration needed
- **No build overhead**: No impact on development or CI performance
- **Full control**: Developers decide what's unused manually

**Cons**:
- **Manual effort**: Time-consuming and error-prone reviews
- **Accumulating debt**: Dead code builds up over time
- **Bundle bloat**: Unused code increases bundle size
- **Dependency drift**: Unused packages remain in package.json
- **Refactoring risk**: Hard to know what's safe to remove

### Option 2: TypeScript Compiler (tsc --noUnusedLocals)
**Tools**: Built-in TypeScript compiler flags

**Pros**:
- **Zero dependencies**: Uses existing TypeScript setup
- **Fast detection**: Part of type checking process
- **IDE integration**: Shows unused variables in editor

**Cons**:
- **Limited scope**: Only finds unused local variables/imports
- **No dependency detection**: Can't find unused npm packages
- **No file-level detection**: Doesn't identify unused files
- **Export blindness**: Can't detect unused exports across modules

### Option 3: ESLint Rules
**Tools**: @typescript-eslint/no-unused-vars, eslint-plugin-unused-imports

**Pros**:
- **Existing integration**: Works with current ESLint setup
- **IDE warnings**: Real-time feedback during development
- **Configurable**: Can adjust rules per project needs

**Cons**:
- **Limited scope**: Similar to TypeScript compiler limitations
- **No dependency analysis**: Can't find unused packages
- **Performance impact**: Adds to linting time
- **False positives**: May flag intentionally unused parameters

### Option 4: Knip (Comprehensive Dead Code Detection)
**Tools**: Knip with project-specific configuration

**Pros**:
- **Comprehensive detection**: Finds unused files, exports, dependencies
- **TypeScript native**: Understands TypeScript projects deeply
- **Build tool aware**: Integrates with Vite, Webpack, etc.
- **Configurable**: Exclude patterns, entry points, plugins
- **Fast execution**: Efficient analysis of large codebases
- **CI integration**: Can be part of automated quality checks

**Cons**:
- **Learning curve**: Requires understanding of configuration
- **False positives**: May flag code that's used indirectly
- **Additional dependency**: One more tool to maintain
- **Configuration maintenance**: Needs updates as project evolves

### Option 5: Bundle Analyzers (webpack-bundle-analyzer, vite-bundle-analyzer)
**Tools**: Build-specific bundle analysis tools

**Pros**:
- **Visual insights**: See what's actually in production bundles
- **Tree-shaking verification**: Confirm dead code elimination works
- **Performance focus**: Directly relates to bundle size

**Cons**:
- **Post-build only**: Only shows what makes it to the bundle
- **No source analysis**: Doesn't help clean up source code
- **Build tool specific**: Different tools for different bundlers
- **Limited actionability**: Hard to trace back to specific files

## Community Standards Analysis (2025)

**Current Trends**:
- **Knip adoption growing**: Becoming standard in TypeScript projects
- **CI integration**: Most teams run dead code detection in CI/CD
- **Complementary tools**: Used alongside linting and testing
- **Configuration sharing**: Teams share knip configs for common setups

**Industry Practices**:
- **Regular cleanup**: Run weekly or before releases
- **Gradual adoption**: Start with unused dependencies, then exports
- **Team education**: Train developers to understand and fix issues
- **Automation preference**: Prefer automated detection over manual reviews

## My Decision & Reasoning

### Final Choice: Knip with Gradual Configuration

**Reasoning**:
- **Comprehensive coverage**: Detects all types of dead code in one tool
- **TypeScript integration**: Perfect fit for our TypeScript + Vite setup
- **Maintenance value**: Prevents accumulation of technical debt
- **Interview relevance**: Shows awareness of code quality and maintenance practices
- **CI integration**: Can automate quality checks without blocking development

**Implementation Strategy**:
- **Start conservative**: Begin with unused dependencies only
- **Gradual expansion**: Add unused exports and files detection
- **Team education**: Document common patterns and how to fix issues
- **CI integration**: Run in CI but don't block merges initially

## When to Run Knip

### Development Workflow
```bash
# Quick check for unused dependencies
npm run lint:unused-deps

# Full dead code analysis (slower, more comprehensive)
npm run lint:dead-code
```

### Timing Recommendations

**Daily Development**:
- **Not recommended**: Too slow for constant feedback
- **Exception**: Quick dependency check before installing new packages

**Weekly Maintenance**:
- **Recommended**: Regular cleanup sessions
- **Focus**: Review and fix unused exports and files
- **Team activity**: Pair programming for complex cases

**Pre-Release**:
- **Essential**: Full analysis before major releases
- **Bundle impact**: Ensure clean code reaches production
- **Documentation**: Update any architectural decisions

**CI/CD Integration**:
- **Check mode**: Report issues without failing builds
- **Gradual enforcement**: Start with warnings, move to errors
- **Separate job**: Don't slow down main build pipeline

## Benefits and Trade-offs

### Benefits

**Code Quality**:
- **Cleaner codebase**: Removes accumulating dead code
- **Smaller bundles**: Less code to download and parse
- **Faster builds**: Less code to process during compilation
- **Easier refactoring**: Clear understanding of code dependencies

**Team Productivity**:
- **Reduced confusion**: Less code to navigate and understand
- **Safer changes**: Know what can be safely removed
- **Dependency hygiene**: Keep package.json clean and up-to-date
- **Onboarding**: New team members see only relevant code

**Maintenance**:
- **Security**: Fewer dependencies to monitor for vulnerabilities
- **Updates**: Less packages to maintain and update
- **Licensing**: Cleaner dependency license management

### Trade-offs

**Initial Setup**:
- **Configuration time**: Need to set up proper excludes and patterns
- **Learning curve**: Team needs to understand how to interpret results
- **False positive handling**: May need to mark some code as intentionally unused

**Ongoing Maintenance**:
- **Configuration updates**: Need to adjust as project structure evolves
- **Team discipline**: Requires regular attention and cleanup
- **Edge case handling**: Some dynamic imports or reflection may be missed

## Implementation Process

### Step 1: Install Knip
```bash
npm install -D knip
```

### Step 2: Basic Configuration
Create `knip.config.ts`:
```bash
echo 'import type { KnipConfig } from "knip";

export default {
  entry: ["src/main.tsx", "src/vite-env.d.ts"],
  project: ["src/**/*.{ts,tsx}"],
  ignore: ["dist/**", "coverage/**"],
  ignoreDependencies: ["@types/*"],
} satisfies KnipConfig;' > knip.config.ts
```

### Step 3: Package Scripts
```bash
npx json -I -f package.json -e 'this.scripts["lint:dead-code"] = "knip"'
npx json -I -f package.json -e 'this.scripts["lint:unused-deps"] = "knip --dependencies"'
```

### Step 4: Initial Run and Cleanup
```bash
# Check for unused dependencies only
npm run lint:unused-deps

# Full dead code analysis
npm run lint:dead-code
```

### Step 5: CI Integration (Optional)
Add to `.github/workflows/quality.yml`:
```bash
# Add knip check to existing quality workflow
echo "      - name: Check for dead code
        run: npm run lint:dead-code" >> .github/workflows/quality.yml
```

## Common Patterns and Configuration

### Vite + React + TypeScript Setup
```typescript
// knip.config.ts
export default {
  entry: [
    "src/main.tsx",           // Vite entry point
    "src/vite-env.d.ts",      // Vite types
    "vite.config.ts",         // Build config
    "vitest.config.ts",       // Test config
  ],
  project: ["src/**/*.{ts,tsx}"],
  ignore: [
    "dist/**",               // Build output
    "coverage/**",           // Test coverage
    "playwright-report/**",  // E2E reports
  ],
  ignoreDependencies: [
    "@types/*",              // Type-only packages
    "typescript",            // Used by build tools
  ],
} satisfies KnipConfig;
```

### Handling False Positives
```typescript
// For dynamic imports or external usage
export default {
  // ... other config
  ignoreExportsUsedInFile: true,  // Ignore exports used in same file
  includeEntryExports: false,     // Don't report unused exports from entry files
} satisfies KnipConfig;
```

## Interview Relevance

Understanding dead code detection demonstrates:
- **Code quality awareness**: Attention to maintaining clean codebases
- **Performance consciousness**: Understanding bundle size impact
- **Team collaboration**: Knowledge of tools that help team maintenance
- **Automation mindset**: Using tools to catch issues automatically
- **Technical debt management**: Proactive approach to preventing accumulation

**Common Interview Questions**:
- "How do you ensure your codebase stays clean?"
- "What tools do you use for maintaining code quality?"
- "How do you handle technical debt in your projects?"
- "What's your approach to dependency management?"

---

*This document is part of the Project Setup Essentials series in the React/Frontend interview training project.*