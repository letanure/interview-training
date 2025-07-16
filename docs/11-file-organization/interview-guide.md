# File Organization Interview Guide

## Overview

File organization questions test your understanding of scalable project structure, maintainability, and team collaboration. This guide covers how to discuss our file organization approach in interviews.

## Key Talking Points

### 1. **"How do you organize files in a React project?"**

**Answer Framework:**
```
1. Simple Rule: 1 file = no folder, 2+ files = folder
2. Test Colocation: Keep tests close to components
3. Logical Grouping: Related files stay together
4. Avoid Clutter: No single files in folders
```

**Code Example to Discuss:**
```typescript
// ✅ Good: Single file, no folder
src/components/
├── SimpleButton.tsx

// ✅ Good: Multiple files, use folder
src/components/
├── Button/
│   ├── Button.tsx
│   ├── Button.test.tsx
│   └── Button.stories.tsx

// ❌ Bad: Single file in folder
src/components/
├── SimpleButton/
│   └── SimpleButton.tsx
```

**Follow-up Question:** "Why not always use folders for consistency?"

**Answer:**
> "Folders should serve a purpose. A single file in a folder adds unnecessary nesting without benefits. The rule '1 file = no folder, 2+ files = folder' keeps the structure clean and purposeful. You create folders only when you need to group related files together."

---

### 2. **"How do you handle test file organization?"**

**Key Points:**
- **Test colocation** for easier maintenance
- **Folder creation** when adding tests
- **Consistent naming** patterns

**Example Response:**
> "I use test colocation - tests live right next to the components they test. When a component only exists as a single file, I keep it as a file. But as soon as I add a test, I create a folder and move both the component and test into it. This way, related files are always together."

**Code to Show:**
```typescript
// Single component file
src/components/Icon.tsx

// Adding test creates folder
src/components/Icon/
├── Icon.tsx
└── Icon.test.tsx
```

---

### 3. **"How do you prevent folder structure from becoming cluttered?"**

**Discussion Points:**
- **Clear rules** prevent inconsistency
- **Purposeful organization** over arbitrary nesting
- **Scalable structure** that grows with complexity

**Technical Details:**
```typescript
// ❌ Cluttered approach
src/components/
├── Button.tsx
├── Button.test.tsx
├── Button.stories.tsx
├── UserProfile.tsx
├── UserProfile.test.tsx
├── UserProfile.module.css
├── SearchInput.tsx
├── SearchInput.test.tsx

// ✅ Organized approach
src/components/
├── Button/
│   ├── Button.tsx
│   ├── Button.test.tsx
│   └── Button.stories.tsx
├── UserProfile/
│   ├── UserProfile.tsx
│   ├── UserProfile.test.tsx
│   └── UserProfile.module.css
├── SearchInput/
│   ├── SearchInput.tsx
│   └── SearchInput.test.tsx
└── SimpleIcon.tsx          # Single file, no folder
```

---

### 4. **"How do you balance simplicity with organization?"**

**Strategic Answer:**
> "The key is having a clear rule that everyone follows. Our rule is simple: if a component has only one file, it stays as a file. If it has multiple files (component + test, component + styles, etc.), it gets a folder. This prevents both under-organization and over-organization."

**Benefits to Highlight:**
- **Consistent structure** across the team
- **Easy decision-making** - no ambiguity about when to create folders
- **Scales naturally** with component complexity
- **Reduces cognitive load** - you know where to look for files

---

### 5. **"How does this approach scale with large applications?"**

**Advanced Discussion:**
- **Nested organization** for complex features
- **Feature-based grouping** within components
- **Shared utilities** organization

**Example:**
```typescript
// Complex component with nested structure
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
└── SimpleIcon.tsx
```

## Advanced Follow-up Questions

### **"How do you handle shared utilities and types?"**

**Answer:**
> "Shared utilities follow the same rule. If it's a single utility file, it stays as a file in the utils folder. If it needs tests, documentation, or related functions, it gets its own folder. The key is consistency across the entire codebase."

### **"How do you maintain this organization in a team?"**

**Team Strategy:**
- **Clear documentation** of the rules
- **Code review checklist** items
- **Automated tooling** when possible
- **Team onboarding** includes file organization

### **"What about existing codebases that don't follow this pattern?"**

**Pragmatic Answer:**
> "I'd gradually adopt the pattern for new components and when modifying existing ones. You don't need to reorganize everything at once. When adding tests to an existing component, that's a good time to create the folder structure. The key is establishing the pattern going forward."

## Common Mistakes to Avoid

### ❌ **Don't say:** "I just put everything in folders for consistency"
### ✅ **Do say:** "I create folders when they serve a purpose - grouping related files together"

### ❌ **Don't say:** "File organization doesn't matter much"
### ✅ **Do say:** "Good file organization reduces cognitive load and improves team productivity"

### ❌ **Don't say:** "I follow whatever pattern the team uses"
### ✅ **Do say:** "I advocate for clear, consistent rules that everyone can follow"

## Questions to Ask the Interviewer

1. **"What file organization patterns does your team currently follow?"**

2. **"How do you handle component organization as the codebase grows?"**

3. **"Do you have any specific tooling or conventions for file structure?"**

4. **"How do you onboard new team members to your file organization approach?"**

## Real-World Scenarios

### **Startup/New Project**
> "For a new project, I'd establish the file organization rules early. Simple components start as single files, but as we add tests and complexity, they naturally evolve into folders. This prevents both over-engineering early and under-organization later."

### **Enterprise/Large Team**
> "In a large team, consistent file organization is crucial. The '1 file = no folder, 2+ files = folder' rule is simple enough for everyone to follow, but flexible enough to handle complex components. I'd document this in the team's style guide."

### **Legacy Codebase**
> "For legacy codebases, I'd gradually adopt the pattern. When adding tests to existing components, that's a natural time to create the folder structure. The key is establishing the pattern going forward without disrupting existing work."

## Key Takeaways for Interviews

### **Demonstrate Understanding Of:**
- **Clear rules** over arbitrary decisions
- **Scalable structure** that grows with complexity
- **Team productivity** and cognitive load reduction
- **Maintainability** and consistency

### **Show Practical Experience:**
- Discuss specific examples from your projects
- Explain trade-offs you've encountered
- Show how organization supports development workflow
- Connect structure to team collaboration

### **Connect to Broader Concepts:**
- **Code maintainability** and technical debt
- **Team collaboration** and onboarding
- **Development velocity** and productivity
- **Codebase evolution** and scaling

## Related Topics to Review
- [Component Architecture Patterns](https://react.dev/learn/thinking-in-react)
- [Testing Strategies and File Organization](https://testing-library.com/docs/guiding-principles/)
- [Monorepo Organization](https://monorepo.tools/)
- [Design System File Structure](https://storybook.js.org/docs/react/writing-stories/introduction)