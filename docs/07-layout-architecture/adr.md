# ADR-012: Layout Architecture Pattern

## Status
Accepted

## Context
React applications need a consistent pattern for handling layouts that:
- Separates layout concerns from page content
- Supports nested layouts for different sections
- Follows modern React patterns and community standards
- Prepares for future routing implementation
- Maintains clean component boundaries

## Decision
We will use a **Next.js-inspired layout pattern** with the following structure:

1. **Root layout** lives in `src/components/Layout/RootLayout.tsx`
2. **Layout components** (Header, Footer, etc.) live in `src/components/Layout/`
3. **Page components** live in `src/pages/`
4. **Layouts use children pattern** for composition

### File Structure
```
src/
├── components/
│   └── Layout/
│       ├── RootLayout.tsx  # Root application layout
│       └── Header.tsx      # Reusable layout components
└── pages/
    └── HomePage.tsx        # Pure page content
```

### Implementation Pattern
```typescript
// components/Layout/RootLayout.tsx
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <Header />
        {children}
      </SidebarInset>
    </SidebarProvider>
  );
}

// App.tsx
export default function App() {
  return (
    <RootLayout>
      <Routes>
        {/* React Router routes */}
      </Routes>
    </RootLayout>
  );
}
```

## Alternatives Considered

### Alternative 1: Traditional Component-Based Layout
```
src/components/Layout/RootLayout.tsx
```
**Pros:**
- All components in one place
- Traditional React pattern
- Familiar to most React developers

**Cons:**
- Doesn't distinguish app-level vs reusable components
- Less aligned with modern frameworks
- Harder to identify layout hierarchy

### Alternative 2: Layout as HOC (Higher Order Component)
```typescript
export default withLayout(HomePage);
```
**Pros:**
- Flexible composition
- Can apply multiple layouts

**Cons:**
- More complex mental model
- HOCs are less favored in modern React
- Props drilling issues

### Alternative 3: Inline Layout in App.tsx
```typescript
function App() {
  return (
    <SidebarProvider>
      <AppSidebar />
      <HomePage />
    </SidebarProvider>
  );
}
```
**Pros:**
- Everything visible in one place
- No abstraction layers

**Cons:**
- Mixed concerns
- Not reusable
- Difficult to maintain

## Consequences

**Positive:**
- **Clear separation**: Layout logic separated from page content
- **Industry alignment**: Matches Next.js patterns (widely recognized)
- **Future-ready**: Easy to add routing without changing layout
- **Nested layout support**: Can add section-specific layouts
- **Component reusability**: Layout pieces can be composed
- **Type safety**: Clean props interfaces with TypeScript

**Negative:**
- **Additional abstraction**: One more layer to understand
- **Import paths**: Need to import from different directories
- **Learning curve**: Developers need to understand the pattern

**Neutral:**
- **File organization**: Requires consistent folder structure
- **Mental model**: Need to think in terms of layouts vs pages
- **Flexibility**: Can mix patterns when needed

## Implementation Details

### Layout Hierarchy
1. **Root Layout** (`components/Layout/RootLayout.tsx`): Application shell
2. **Section Layouts** (future): Dashboard, Auth, etc.
3. **Page Content**: Pure content components

### Key Principles
- Layouts are **route-agnostic** (don't know about routing)
- Pages are **layout-agnostic** (don't know about layouts)
- Props flow through children pattern
- Layout components are composable

### Future Considerations
When adding routing:
- Layouts remain unchanged
- Router outlet replaces direct page rendering
- Nested routes can have nested layouts

## References
- [Next.js App Router Layouts](https://nextjs.org/docs/app/building-your-application/routing/pages-and-layouts)
- [React Composition Patterns](https://react.dev/learn/passing-props-to-a-component#passing-jsx-as-children)
- [Patterns.dev - Layout Components](https://www.patterns.dev/posts/layout-components)