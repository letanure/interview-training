# ADR-016: TypeScript Path Aliases Strategy

## Status
Accepted

## Context
As the codebase grows, import paths become longer and harder to maintain. TypeScript path aliases provide a way to create shorter, more semantic import paths that are easier to read and refactor.

## Problem
- Long relative imports: `../../../components/ui/button`
- Brittle refactoring: Moving files breaks relative imports
- Poor readability: Hard to understand component relationships
- Inconsistent imports: Mix of relative and absolute paths
- IDE complexity: Poor autocomplete with deep relative paths

## Decision
Use **multiple semantic aliases** for different domains to demonstrate best practices and prepare for project growth.

### Configuration
```typescript
// tsconfig.json
{
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@/*": ["./src/*"],
      "@components/*": ["./src/components/*"],
      "@pages/*": ["./src/pages/*"],
      "@hooks/*": ["./src/hooks/*"],
      "@utils/*": ["./src/utils/*"],
      "@types/*": ["./src/types/*"],
      "@routes/*": ["./src/routes/*"],
      "@styles/*": ["./src/styles/*"]
    }
  }
}

// vite.config.ts
export default defineConfig({
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      "@components": path.resolve(__dirname, "./src/components"),
      "@pages": path.resolve(__dirname, "./src/pages"),
      "@hooks": path.resolve(__dirname, "./src/hooks"),
      "@utils": path.resolve(__dirname, "./src/utils"),
      "@types": path.resolve(__dirname, "./src/types"),
      "@routes": path.resolve(__dirname, "./src/routes"),
      "@styles": path.resolve(__dirname, "./src/styles"),
    },
  },
});
```

### Usage Pattern
```typescript
// ✅ Best: Use semantic aliases for clarity and brevity
import { Button } from "@components/ui/button";
import { HomePage } from "@pages/HomePage";
import { route, ROUTE_NAMES } from "@routes/routes";
import { useLocalStorage } from "@hooks/useLocalStorage";
import { cn } from "@utils/cn";
import type { User } from "@types/user";

// ✅ Good: Generic @ alias (fallback for mixed directories)
import { Button } from "@/components/ui/button";
import { HomePage } from "@/pages/HomePage";

// ❌ Bad: Relative imports
import { Button } from "../../../components/ui/button";
import { HomePage } from "../../pages/HomePage";
```

### Training Project Rationale

**Why multiple aliases for this project:**

1. **Demonstration Purpose**: Show industry best practices for scaling projects
2. **Known Growth**: This interview training project will definitely expand
3. **Learning Opportunity**: Teach developers about alias organization
4. **Future-Proofing**: Avoid migration overhead when project grows
5. **Professional Pattern**: Demonstrate enterprise-level code organization

**General Recommendation**: Start with single `@/` alias for most projects, add semantic aliases when thresholds are met. For this training project, we implement multiple aliases early to demonstrate the pattern.

## Alternatives Considered

### Alternative 1: Single Generic Alias
```typescript
// Single @ alias only
{
  "paths": {
    "@/*": ["./src/*"]
  }
}
```

**Pros:**
- **Simple configuration**: One alias to rule them all
- **Lower cognitive load**: Single pattern to remember
- **React community standard**: Most common in React ecosystem
- **Good for small projects**: Sufficient for most use cases

**Cons:**
- **Longer imports**: `@/components/ui/Button` vs `@components/ui/Button`
- **Less semantic clarity**: Harder to understand domain at glance
- **Future migration**: Need to update later when project grows
- **Mixed domains**: All imports look the same

### Alternative 2: Tilde (~) Alias
```typescript
// Using ~ instead of @
{
  "paths": {
    "~/*": ["./src/*"]
  }
}
```

**Pros:**
- Less visual conflict with npm scoped packages
- Common in some ecosystems (Vue, Nuxt)

**Cons:**
- Less common in React ecosystem
- @ is more widely recognized
- Potential conflicts with npm workspace features

### Alternative 3: No Aliases (Relative Only)
```typescript
// Only relative imports
import { Button } from "../../../components/ui/button";
```

**Pros:**
- No configuration needed
- Explicit path relationships
- Works without build tool support

**Cons:**
- Becomes unwieldy as project grows
- Brittle during refactoring
- Poor developer experience
- Hard to read and maintain

### Alternative 4: Absolute Imports (src/)
```typescript
// Absolute imports from src
import { Button } from "components/ui/button";
```

**Pros:**
- No special syntax
- Shorter than relative paths
- Clear absolute reference

**Cons:**
- Conflicts with node_modules packages
- Less explicit about internal vs external
- Harder to distinguish from third-party imports

## Implementation Rules

### When to Use @ Alias
- ✅ **All internal imports**: Components, pages, utils, hooks
- ✅ **Cross-directory imports**: Any import that would require `../`
- ✅ **Same-directory imports**: For consistency (optional but recommended)

### When NOT to Use @ Alias
- ❌ **Third-party packages**: `react`, `react-router-dom`, etc.
- ❌ **Node modules**: Built-in Node.js modules
- ❌ **Relative imports within same folder**: `./types` (though @ is acceptable)

### Import Organization
```typescript
// Recommended import order
import React from "react";                    // 1. React
import { Link } from "react-router-dom";      // 2. Third-party libraries
import { Button } from "@/components/ui/button"; // 3. Internal components
import { cn } from "@/utils/cn";              // 4. Internal utilities
import type { User } from "@/types/user";     // 5. Internal types
```

## Benefits

### Developer Experience
- **Shorter imports**: `@/components/ui/button` vs `../../../components/ui/button`
- **Better autocomplete**: IDE can resolve paths more efficiently
- **Easier refactoring**: Moving files doesn't break imports
- **Consistent style**: All internal imports use same pattern

### Maintainability
- **Single source of truth**: One alias to rule them all
- **Future-proof**: Works regardless of folder depth
- **Easy to understand**: Clear distinction between internal and external
- **Tool support**: Works with all major IDEs and build tools

### Performance
- **Faster builds**: Less path resolution overhead
- **Better bundling**: Clearer dependency graph
- **Tree shaking**: Easier for bundlers to optimize
- **Hot reload**: Faster development server updates

## Consequences

### Positive
- **Improved readability**: Imports are cleaner and more semantic
- **Better maintainability**: Refactoring becomes easier
- **Consistent codebase**: All imports follow same pattern
- **IDE support**: Better autocomplete and navigation
- **Future-proof**: Works as project scales

### Negative
- **Learning curve**: New developers need to learn the alias
- **Configuration overhead**: Need to configure both TypeScript and Vite
- **Potential conflicts**: Could conflict with npm scoped packages (rare)

### Neutral
- **Tool dependency**: Requires build tool support (all modern tools support this)
- **Migration effort**: Existing relative imports should be updated gradually
- **Documentation**: Need to document the pattern for team

## Migration Strategy

### For New Code
- All new imports should use @ alias
- Update import statements when modifying existing files
- Use IDE find/replace for bulk updates when convenient

### For Existing Code
- Update imports opportunistically during normal development
- Focus on frequently modified files first
- No rush to update all files at once

## Related Tools

### IDE Configuration
Most modern IDEs support TypeScript path mapping automatically:
- **VS Code**: Works out of the box with tsconfig.json
- **WebStorm**: Automatic path resolution
- **Vim/Neovim**: Works with TypeScript language server

### Linting
ESLint can enforce import patterns:
```javascript
// .eslintrc.js
rules: {
  "import/no-relative-parent-imports": "error", // Prevent ../
  "import/order": ["error", { /* import order rules */ }]
}
```

## Examples in Our Codebase

### Current Usage
```typescript
// components/Layout/Header.tsx
import { ROUTE_NAMES, route } from "@/routes/routes";

// pages/setup/SetupOverviewPage.tsx
import { route, ROUTE_NAMES } from "@/routes/routes";
import { Card, CardHeader } from "@/components/ui/card";

// App.tsx
import RootLayout from "@/components/Layout/RootLayout";
import { flatRoutes } from "@/routes/routes";
```

### Pattern Consistency
All internal imports use the `@/` prefix, making it immediately clear what's internal vs external.

## Community Standards Analysis

### React Ecosystem
- **Most common**: Single `@/` alias (Create React App, Next.js default)
- **Large projects**: May add `@components/`, `@utils/`, `@hooks/`
- **Enterprise**: Often stick with single alias for consistency

### Vue/Nuxt Ecosystem
- **Standard**: Multiple aliases (`@/`, `@components/`, `@pages/`, etc.)
- **Framework provided**: Nuxt provides many aliases out of the box
- **Community expectation**: Developers expect semantic aliases

### Rules for Adding New Aliases

#### Rule 1: Directory Usage Threshold
**Add alias when a directory has:**
- **5+ files** that are imported from other directories
- **3+ subdirectories** with frequent cross-imports
- **10+ total files** in the directory tree

*Example: `@/components/ui/button`, `@/components/ui/card`, `@/components/ui/input`, `@/components/forms/LoginForm`, `@/components/forms/ContactForm`*

#### Rule 2: Import Path Length
**Add alias when import paths exceed:**
- **3 directory levels**: `@/components/ui/forms/inputs/TextInput`
- **50 characters**: Common when using descriptive names
- **Frequent ../ usage**: More than 2 levels of relative imports

*Example: Instead of `../../../components/ui/forms/inputs/TextInput`, use `@components/ui/forms/inputs/TextInput`*

#### Rule 3: Team Cognitive Load
**Add alias when:**
- **Team size >3 developers** and imports become confusing
- **New developers** consistently ask about import paths
- **Code reviews** frequently discuss import organization
- **Domain separation** is needed for different features

#### Rule 4: Frequency of Use
**Add alias when a directory is imported:**
- **>10 times** across the codebase
- **From >5 different files**
- **By multiple team members** regularly

#### Decision Matrix

| Directory | Files | Depth | Imports | Team Impact | Add Alias? |
|-----------|-------|-------|---------|-------------|------------|
| `/components` | 15 | 3 levels | 25 times | High | ✅ Yes |
| `/utils` | 8 | 2 levels | 12 times | Medium | ✅ Yes |
| `/hooks` | 3 | 1 level | 5 times | Low | ❌ No |
| `/types` | 10 | 2 levels | 20 times | Medium | ✅ Yes |
| `/constants` | 2 | 1 level | 3 times | Low | ❌ No |

#### Current Project Analysis

**Current state:**
- `/components`: 8 files, 2 levels, ~15 imports → **Threshold not met**
- `/pages`: 6 files, 2 levels, ~8 imports → **Threshold not met**
- `/utils`: 2 files, 1 level, ~5 imports → **Threshold not met**
- `/hooks`: 0 files, 0 levels, 0 imports → **Threshold not met**

**Normal decision:** Keep single `@/` alias until thresholds are met

**Training project decision:** Implement multiple aliases now because:
- **Planned growth**: Will add state management, testing, performance features
- **Educational value**: Demonstrate how to organize imports in larger projects
- **Interview preparation**: Show knowledge of scaling patterns
- **Prevent technical debt**: Avoid future migration overhead

## Monitoring and Review Process

### Quarterly Alias Review
**Every 3 months, evaluate:**
1. **Count files** in each directory
2. **Measure import frequency** using `grep -r "from.*@/" src/ | wc -l`
3. **Check path lengths** for imports >50 characters
4. **Team feedback** on import confusion

### Automated Threshold Monitoring
**Consider adding to CI/CD:**
```bash
# Count files in directories
find src/components -name "*.tsx" -o -name "*.ts" | wc -l

# Count imports from directories
grep -r "from.*@/components" src/ | wc -l
grep -r "from.*@/utils" src/ | wc -l
```

### Trigger Points
**Review aliases when:**
- **Components directory** reaches 15 files
- **Utils directory** reaches 8 files
- **Any directory** has >20 imports
- **New team member** joins
- **Code review** mentions import confusion

## Migration Path

**When thresholds are met:**

1. **Add specific aliases** to tsconfig.json and vite.config.ts
2. **Update gradually** - both patterns work simultaneously
3. **No breaking changes** - existing `@/` imports continue working
4. **Team decision** - adopt new aliases in new code
5. **Document decision** - update this ADR with rationale

Example future configuration:
```typescript
{
  "paths": {
    "@/*": ["./src/*"],           // Keep for compatibility
    "@components/*": ["./src/components/*"],
    "@hooks/*": ["./src/hooks/*"],
    "@utils/*": ["./src/utils/*"]
  }
}
```

### Implementation Priority
**Add aliases in this order:**
1. **@components/** - Usually first to hit thresholds
2. **@utils/** - Second most common
3. **@hooks/** - When custom hooks grow
4. **@types/** - When type definitions expand
5. **@constants/** - Usually last, if ever needed

## Migration Tools

### Automated Import Migration Script
Created `scripts/migrate-imports.cjs` to automatically update import paths:

```bash
# Run migration script
node scripts/migrate-imports.cjs
```

**Script features:**
- Scans all `.ts`, `.tsx`, `.js`, `.jsx` files in `src/`
- Updates import statements to use semantic aliases
- Provides detailed summary of changes
- Safe to run multiple times (idempotent)

**Example migration:**
```typescript
// Before
import { Button } from "@/components/ui/button";
import { route } from "@/routes/routes";

// After
import { Button } from "@components/ui/button";
import { route } from "@routes/routes";
```

**Migration results for this project:**
- Files scanned: 42
- Files updated: 19
- All imports successfully migrated to semantic aliases

## Related Documentation
- [File Organization Strategy](../11-file-organization/adr.md)
- [Component Naming Strategy](../10-component-naming/adr.md)
- [TypeScript Configuration Best Practices](../02-code-quality/best-practices.md)