# File Organization Best Practices

## Overview

This guide covers how to organize files and folders in React projects following our established rule: **1 file = no folder, 2+ files = folder**.

## Core Rules

### Rule 1: Single File = No Folder
```
src/components/
├── SimpleButton.tsx        # ✅ Single file, stays as file
├── Icon.tsx               # ✅ Single file, stays as file
├── utils.ts               # ✅ Single file, stays as file
```

### Rule 2: Multiple Files = Component Folder
```
src/components/
├── Button/
│   ├── Button.tsx
│   ├── Button.test.tsx
│   └── Button.stories.tsx
├── UserProfile/
│   ├── UserProfile.tsx
│   ├── UserProfile.test.tsx
│   └── UserProfile.module.css
```

## Implementation Guidelines

### When Adding Tests
**Before (single file):**
```
src/components/
├── Button.tsx
```

**After (multiple files):**
```
src/components/
├── Button/
│   ├── Button.tsx
│   └── Button.test.tsx
```

### When Adding Styles
**Before (single file):**
```
src/components/
├── UserCard.tsx
```

**After (multiple files):**
```
src/components/
├── UserCard/
│   ├── UserCard.tsx
│   └── UserCard.module.css
```

### When Adding Stories
**Before (component + test):**
```
src/components/
├── Button/
│   ├── Button.tsx
│   └── Button.test.tsx
```

**After (component + test + stories):**
```
src/components/
├── Button/
│   ├── Button.tsx
│   ├── Button.test.tsx
│   └── Button.stories.tsx
```

## Folder Structure Patterns

### Simple Component
```
Button/
├── Button.tsx
└── Button.test.tsx
```

### Component with Styles
```
UserProfile/
├── UserProfile.tsx
├── UserProfile.test.tsx
└── UserProfile.module.css
```

### Component with Utilities
```
DataTable/
├── DataTable.tsx
├── DataTable.test.tsx
├── utils.ts
└── utils.test.ts
```

### Complex Component
```
SearchInput/
├── SearchInput.tsx
├── SearchInput.test.tsx
├── SearchInput.stories.tsx
├── SearchInput.module.css
├── hooks.ts
├── hooks.test.ts
├── utils.ts
├── utils.test.ts
└── types.ts
```

### Nested Components
```
DataTable/
├── DataTable.tsx
├── DataTable.test.tsx
├── Header/
│   ├── Header.tsx
│   └── Header.test.tsx
├── Row/
│   ├── Row.tsx
│   └── Row.test.tsx
└── Cell/
    ├── Cell.tsx
    └── Cell.test.tsx
```

## Common Patterns

### Layout Components
```
src/components/Layout/
├── Header/
│   ├── Header.tsx
│   └── Header.test.tsx
├── Sidebar/
│   ├── Sidebar.tsx
│   └── Sidebar.test.tsx
└── RootLayout/
    ├── RootLayout.tsx
    └── RootLayout.test.tsx
```

### Feature Components
```
src/components/
├── UserProfile/
│   ├── UserProfile.tsx
│   ├── UserProfile.test.tsx
│   └── UserProfile.module.css
├── SearchForm/
│   ├── SearchForm.tsx
│   ├── SearchForm.test.tsx
│   ├── hooks.ts
│   └── validation.ts
└── SimpleIcon.tsx          # Single file, no folder
```

### Utility Functions
```
src/utils/
├── formatDate.ts           # Single file, no folder
├── validation.ts           # Single file, no folder
└── api/
    ├── client.ts
    ├── client.test.ts
    └── types.ts
```

## File Naming Within Folders

### Component Folders
- **Main file**: Match folder name exactly (`Button/Button.tsx`)
- **Test file**: Add `.test` suffix (`Button/Button.test.tsx`)
- **Stories**: Add `.stories` suffix (`Button/Button.stories.tsx`)
- **Styles**: Add `.module.css` suffix (`Button/Button.module.css`)

### Support Files
- **Hooks**: `hooks.ts` (component-specific)
- **Utils**: `utils.ts` (component-specific)
- **Types**: `types.ts` (component-specific)
- **Constants**: `constants.ts` (component-specific)

## Implementation Examples

### Adding Tests to Components
1. Create component folder
2. Move component file into folder
3. Add test file
4. Update imports in other files

### Organizing Multiple Related Files
**Before:**
```
src/components/forms/
├── LoginForm.tsx
├── LoginForm.test.tsx
├── SignupForm.tsx
├── SignupForm.test.tsx
├── ContactForm.tsx
├── ContactForm.test.tsx
├── validation.ts
└── validation.test.ts
```

**After:**
```
src/components/forms/
├── LoginForm/
│   ├── LoginForm.tsx
│   └── LoginForm.test.tsx
├── SignupForm/
│   ├── SignupForm.tsx
│   └── SignupForm.test.tsx
├── ContactForm/
│   ├── ContactForm.tsx
│   └── ContactForm.test.tsx
└── validation/
    ├── validation.ts
    └── validation.test.ts
```

## Anti-Patterns to Avoid

### ❌ Single File in Folder
```
src/components/
├── Button/
│   └── Button.tsx          # Bad: folder with only one file
```

### ❌ Mixed File Types in Root
```
src/components/
├── Button.tsx
├── Button.test.tsx         # Bad: cluttered root level
├── Button.stories.tsx
├── UserProfile.tsx
├── UserProfile.test.tsx
├── UserProfile.module.css
```

### ❌ Overly Nested Empty Folders
```
src/components/
├── forms/
│   └── inputs/
│       └── text/
│           └── Input.tsx   # Bad: too much nesting for single file
```

## IDE Integration

### VSCode Settings
```json
{
  "explorer.fileNesting.enabled": true,
  "explorer.fileNesting.patterns": {
    "*.tsx": "$(capture).test.tsx,$(capture).stories.tsx,$(capture).module.css"
  }
}
```

### Import Shortcuts
```typescript
// Create index.ts for easier imports (optional)
// Button/index.ts
export { Button } from './Button';

// Usage
import { Button } from '@/components/Button';
```

## Team Workflow

### Code Review Checklist
- [ ] Single files are not in folders
- [ ] Multiple files are properly organized in folders
- [ ] Folder names match component names
- [ ] Tests are colocated with components
- [ ] Related files are grouped together

### Implementation Guidelines
1. **When adding second file**: Create folder and move files
2. **When removing files**: If only one file remains, move out of folder
3. **When renaming**: Update folder name to match component name
4. **When moving**: Keep folder structure intact

## Related Documentation
- [ADR-015: File Organization Strategy](./adr.md)
- [Component Naming Strategy](../10-component-naming/adr.md)
- [Testing Strategy](../04-testing/adr.md)