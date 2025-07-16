# ADR-015: File Organization Strategy

## Status
Accepted

## Context
As the codebase grows, we need clear rules for organizing files to avoid clutter while maintaining test colocation and related file grouping. The challenge is balancing simplicity for single files with organization for complex components.

## Problem
- Single files in folders feel over-engineered
- Multiple files with their tests in one folder creates clutter
- Hard to find related files when they're scattered
- Inconsistent organization across the codebase

## Decision
Use **component folder organization** based on file count:

### Rule 1: Single File = No Folder (Mandatory)
```
src/components/
├── SimpleButton.tsx        # ✅ Single file, stays as file
├── Icon.tsx               # ✅ Single file, stays as file
├── utils.ts               # ✅ Single file, stays as file
```

**Never create folders for single files** - avoid this anti-pattern:
```
src/components/
├── SimpleButton/           # ❌ Bad: folder with only one file
│   └── SimpleButton.tsx
├── Icon/                   # ❌ Bad: folder with only one file
│   └── Icon.tsx
```

### Rule 2: Multiple Files = Component Folder (Mandatory)
```
src/components/
├── Button/
│   ├── Button.tsx
│   ├── Button.test.tsx
│   └── Button.stories.tsx
├── UserProfile/
│   ├── UserProfile.tsx
│   ├── UserProfile.test.tsx
│   ├── UserProfile.module.css
│   └── hooks.ts
```

### Rule 3: Complex Features = Nested Organization
```
src/components/
├── DataTable/
│   ├── DataTable.tsx
│   ├── DataTable.test.tsx
│   ├── Header/
│   │   ├── Header.tsx
│   │   └── Header.test.tsx
│   ├── Row/
│   │   ├── Row.tsx
│   │   └── Row.test.tsx
│   └── utils/
│       ├── sorting.ts
│       └── sorting.test.ts
```

## Community Standards Analysis

### Industry Practices
This pattern is widely adopted across the React ecosystem:

**Next.js (App Router)**:
```
app/
├── dashboard/
│   ├── page.tsx
│   ├── layout.tsx
│   └── loading.tsx
```

**Angular (Standard)**:
```
src/components/
├── user-profile/
│   ├── user-profile.component.ts
│   ├── user-profile.component.html
│   ├── user-profile.component.css
│   └── user-profile.component.spec.ts
```

**Vue (Recommended)**:
```
src/components/
├── UserProfile/
│   ├── UserProfile.vue
│   ├── UserProfile.test.js
│   └── UserProfile.stories.js
```

**React (Modern Teams)**:
- **Facebook**: Uses this pattern internally
- **Airbnb**: Documented in their style guide
- **Netflix**: Adopts this for complex components
- **Shopify**: Uses this in Polaris design system

### Why This Works
1. **Cognitive Load**: Easy to find related files
2. **Scalability**: Grows naturally with component complexity
3. **Refactoring**: Easy to move/rename component folders
4. **Team Collaboration**: Clear ownership of files
5. **IDE Support**: Better autocomplete and navigation

## Implementation Rules

### When to Create a Folder
**Only create a folder when you have 2+ files:**
- ✅ Component + test file
- ✅ Component + styles (CSS/SCSS modules)
- ✅ Component + Storybook stories
- ✅ Component + utility functions
- ✅ Component + documentation files
- ✅ Component + multiple related components

### When NOT to Create a Folder
**Never create folders for single files:**
- ❌ Single `.tsx` file (even if it's a component)
- ❌ Single test file
- ❌ Single utility function
- ❌ Single type definition
- ❌ Single configuration file

**The rule is simple: 1 file = no folder, 2+ files = folder**

### Folder Naming
- **PascalCase**: `UserProfile/` (matches component name)
- **Match component name exactly**: `Button/Button.tsx`
- **Descriptive**: `DataTable/` not `Table/`

### File Naming Within Folders
```
ComponentName/
├── ComponentName.tsx           # Main component
├── ComponentName.test.tsx      # Tests
├── ComponentName.stories.tsx   # Storybook stories
├── ComponentName.module.css    # Styles
├── hooks.ts                   # Component-specific hooks
├── utils.ts                   # Component-specific utilities
├── types.ts                   # Component-specific types
└── index.ts                   # Optional barrel export
```

## Alternatives Considered

### Alternative 1: Flat File Structure
```
src/components/
├── Button.tsx
├── Button.test.tsx
├── Button.stories.tsx
├── UserProfile.tsx
├── UserProfile.test.tsx
├── UserProfile.module.css
```

**Pros**: Simple, fewer folders
**Cons**: Becomes cluttered quickly, hard to find related files

### Alternative 2: Test Folders
```
src/components/
├── Button.tsx
├── UserProfile.tsx
└── __tests__/
    ├── Button.test.tsx
    └── UserProfile.test.tsx
```

**Pros**: Separates tests from components
**Cons**: Breaks test colocation, harder to find related tests

### Alternative 3: File Type Grouping
```
src/
├── components/
│   ├── Button.tsx
│   └── UserProfile.tsx
├── tests/
│   ├── Button.test.tsx
│   └── UserProfile.test.tsx
└── styles/
    ├── Button.module.css
    └── UserProfile.module.css
```

**Pros**: Clean separation by file type
**Cons**: Related files scattered, harder to maintain

## Consequences

### Positive
- **Clear organization**: Related files are grouped together
- **Scalable**: Structure grows naturally with complexity
- **Team friendly**: Easy for new developers to understand
- **IDE support**: Better autocomplete and navigation
- **Refactoring**: Easy to move/rename components
- **Test colocation**: Tests stay close to components

### Negative
- **Initial overhead**: Need to create folders for multi-file components
- **Folder depth**: Can create nested structures
- **Import paths**: Slightly longer import paths

### Neutral
- **Flexibility**: Can mix approaches based on component complexity
- **Migration**: Can gradually adopt for existing components
- **Tooling**: Works well with most build tools and IDEs

## Migration Strategy

### Phase 1: New Components
- All new components with multiple files use folder structure
- Single-file components remain as files

### Phase 2: Existing Components
- Migrate components when they gain additional files (tests, stories, etc.)
- No rush to migrate single-file components

### Phase 3: Cleanup
- Gradually organize cluttered areas
- Focus on high-traffic components first

## Examples in Our Codebase

### Current Good Examples
```
src/components/
├── button/
│   ├── Button.tsx
│   └── Button.test.tsx
```

### Areas for Improvement
```
src/components/Layout/
├── Header.tsx
├── RootLayout.tsx
└── AppSidebar/
    └── AppSidebar.tsx
```

**Better organization:**
```
src/components/Layout/
├── Header/
│   ├── Header.tsx
│   └── Header.test.tsx
├── RootLayout/
│   ├── RootLayout.tsx
│   └── RootLayout.test.tsx
└── AppSidebar/
    ├── AppSidebar.tsx
    └── AppSidebar.test.tsx
```

## Related Documentation
- [Component Naming Strategy](../10-component-naming/adr.md)
- [Layout Architecture](../07-layout-architecture/adr.md)
- [Testing Strategy](../04-testing/adr.md)