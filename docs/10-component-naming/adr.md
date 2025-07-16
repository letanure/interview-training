# ADR-014: Component Naming Strategy

## Status
Accepted

## Context
As we build page components and expand the application, we need consistent naming conventions for components and files. The codebase needs clear, searchable, and maintainable naming patterns that follow React community standards.

## Problem
- Inconsistent component naming leads to confusion
- File names should clearly indicate their purpose
- Components should be easily searchable and discoverable
- Naming should scale as the application grows
- Need to balance brevity with clarity

## Decision
Use **PascalCase filenames that match component names** with **descriptive + type pattern** for clarity.

### Primary Pattern: Descriptive + Type
```typescript
// ✅ Page Components
BuildToolPage.tsx        → export function BuildToolPage()
CodeQualityPage.tsx      → export function CodeQualityPage()
SetupOverviewPage.tsx    → export function SetupOverviewPage()
CssOverviewPage.tsx      → export function CssOverviewPage()

// ✅ UI Components
NavigationButton.tsx     → export function NavigationButton()
UserProfileCard.tsx      → export function UserProfileCard()
SearchInputField.tsx     → export function SearchInputField()

// ✅ Layout Components
AppSidebar.tsx          → export function AppSidebar()
HeaderComponent.tsx     → export function HeaderComponent()
FooterSection.tsx       → export function FooterSection()
```

### Overview vs Topic Pages
Use "Overview" suffix for index/landing pages to distinguish from topic-specific pages:
```typescript
// ✅ Overview Pages (index routes)
SetupOverviewPage.tsx    → /setup (lists all setup topics)
CssOverviewPage.tsx      → /css (lists all CSS approaches)
HomeOverviewPage.tsx     → / (main dashboard)

// ✅ Topic Pages (specific content)
BuildToolPage.tsx        → /setup/build-tool (specific to Vite)
TailwindPage.tsx         → /css/tailwind (specific to Tailwind)
```

## Alternatives Considered

### Option 1: Topic + Type (Rejected)
```typescript
// ❌ Problems
CssPage.tsx             → What kind of CSS content?
SetupPage.tsx           → Setup overview or specific setup?
BuildPage.tsx           → Build what?
```
**Issues**: Ambiguous, doesn't scale when adding more pages per topic.

### Option 2: Just Descriptive (Rejected)
```typescript
// ❌ Problems  
BuildTool.tsx           → Is this a page, component, or utility?
CssOverview.tsx         → What type of component?
UserProfile.tsx         → Page or component?
```
**Issues**: Unclear component type, harder to categorize.

### Option 3: Lowercase Files (Rejected)
```typescript
// ❌ Problems
build-tool-page.tsx     → export function BuildToolPage()
css-overview.tsx        → export function CssOverview()
```
**Issues**: Mismatch between filename and export, not React community standard.

### Option 4: Verbose Descriptive (Rejected)
```typescript
// ❌ Problems
BuildToolConfigurationPage.tsx    → Too long
CodeQualitySetupPage.tsx          → Redundant
CssStyleMethodOverviewPage.tsx    → Excessive
```
**Issues**: Overly verbose, harder to work with in imports.

## Consequences

### Positive
- **Clarity**: Component purpose is immediately clear from filename
- **Searchability**: Easy to find components by name or type
- **Consistency**: Predictable naming across the codebase
- **Scalability**: Pattern works as application grows
- **Community alignment**: Follows React/TypeScript community standards
- **Import clarity**: Clear what's being imported

### Negative
- **Longer names**: More verbose than minimal naming
- **Refactoring effort**: Need to update existing inconsistent names
- **Typing overhead**: Slightly more characters to type

### Neutral
- **Flexibility**: Pattern can accommodate new component types
- **Tooling support**: Works well with IDE auto-completion
- **Team adoption**: Easy for new developers to follow

## Implementation Examples

### Page Components
```typescript
// Route: /setup
export function SetupOverviewPage() {
  return <div>Setup topics overview</div>;
}

// Route: /setup/build-tool  
export function BuildToolPage() {
  return <div>Vite build tool configuration</div>;
}

// Route: /css/tailwind
export function TailwindPage() {
  return <div>Tailwind CSS implementation</div>;
}
```

### UI Components
```typescript
// Reusable button component
export function NavigationButton({ children, onClick }: Props) {
  return <button onClick={onClick}>{children}</button>;
}

// User profile display
export function UserProfileCard({ user }: Props) {
  return <div>{user.name}</div>;
}
```

### Layout Components
```typescript
// Main application sidebar
export function AppSidebar() {
  return <aside>Navigation items</aside>;
}

// Page header with breadcrumbs
export function HeaderComponent() {
  return <header>Header content</header>;
}
```

## Naming Guidelines

### Do
- Match filename to component name exactly
- Use PascalCase for both filename and component
- Include component type in name (Page, Button, Card, etc.)
- Be descriptive about component purpose
- Use "Overview" for index/landing pages

### Don't
- Use generic names like "Page" or "Component"
- Mix naming conventions within the same category
- Use abbreviations unless widely understood
- Create overly long names (keep under 25 characters)
- Use prefixes unless necessary (like "App" for app-level components)

## Future Considerations

### Potential Extensions
- **Lazy loading**: `const BuildToolPage = lazy(() => import('./BuildToolPage'))`
- **Route metadata**: Components can export metadata for routing
- **Testing**: Test files follow same pattern `BuildToolPage.test.tsx`
- **Stories**: Storybook files follow same pattern `NavigationButton.stories.tsx`

### Scaling Patterns
```typescript
// As application grows
AuthenticationPage.tsx      → /auth
LoginFormPage.tsx          → /auth/login
UserDashboardPage.tsx      → /dashboard
ProjectListPage.tsx        → /projects
ProjectDetailPage.tsx      → /projects/:id
```

## Related Documentation
- [React Router Implementation ADR](../09-routing/adr.md) - How page components integrate with routing
- [Layout Architecture ADR](../07-layout-architecture/adr.md) - Component organization patterns