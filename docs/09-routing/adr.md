# ADR-013: Client-Side Routing Solution

## Status
Accepted

## Context
Our React application needs client-side routing to navigate between different topic pages (project setup, CSS styling, etc.). The current implementation uses a single hardcoded HomePage component, but we need to support multiple pages with proper URL navigation and browser history.

## Problem
- Single page application needs multiple routes for different topics
- URLs should reflect current content (e.g., `/setup/build-tool`, `/css/tailwind`)
- Navigation should work with browser back/forward buttons
- Need to implement modern React routing patterns and best practices
- Bundle size and complexity should be balanced with functionality

## Decision
Implement **React Router v6** with nested routes and declarative route configuration using a Next.js-inspired routes array pattern.

### Implementation Pattern

**Route Configuration Structure:**
Routes are defined with `name`, `path`, `component`, and `title` properties. Children use relative paths:

```typescript
// Example: Setup section with child routes
{
  name: "projectSetup",      // camelCase for type safety
  path: "/setup",           // absolute path for parent
  component: SetupOverviewPage,
  title: "Project Setup",
  children: [
    {
      name: "buildTool",     // semantic name, not tied to URL
      path: "build-tool",    // relative path (not "/setup/build-tool")
      component: BuildToolPage,
      title: "Build Tool"
    }
  ]
}
```

**Named Routes System:**
Instead of hardcoding paths, components use semantic names:

```typescript
// Before: Hardcoded paths everywhere
<Link to="/setup/build-tool">Build Tool</Link>
<Link to="/css/tailwind">Tailwind</Link>

// After: Named routes with type safety
<Link to={route("buildTool")}>Build Tool</Link>
<Link to={route("tailwind")}>Tailwind</Link>
```

**Type Safety:**
TypeScript types are automatically generated from the routes array:

```typescript
// Auto-generated type includes all route names
type RouteName = "home" | "projectSetup" | "buildTool" | "tailwind" | ...

// Function provides autocomplete and compile-time validation
export const route = (name: RouteName): string => { ... }
```

**Real Usage Examples:**

*Header Component:*
```typescript
// Uses named route instead of hardcoded "/"
const defaultBreadcrumbs = [
  { label: "React Training", href: route("home") },
  { label: title }
];
```

*Page Components:*
```typescript
// SetupOverviewPage.tsx - All navigation uses named routes
<Link to={route("buildTool")}>Build Tool</Link>
<Link to={route("codeQuality")}>Code Quality</Link>
<Link to={route("testing")}>Testing</Link>
```

*Programmatic Navigation:*
```typescript
// Navigation with type safety
const navigate = useNavigate();
navigate(route("buildTool"));  // Autocomplete works here
```

### Key Features
- **Nested routes**: `/setup/*` and `/css/*` grouped logically with relative child paths
- **Declarative configuration**: Single source of truth for all routes with titles
- **Named routes**: Vue Router-inspired named route system for type-safe navigation
- **Type safety**: TypeScript interfaces for route objects and auto-generated route names
- **Flat route generation**: Utility to build full paths from nested structure
- **Navigation integration**: Routes used for both React Router and sidebar navigation
- **Single source of truth**: Routes object drives routing, navigation, and named route resolution

## Alternatives Considered

### Option 1: Wouter (2kb)
**Pros:**
- Tiny bundle size (2kb vs 50kb)
- Simple hooks-based API
- Fast performance
- Modern React patterns

**Cons:**
- Less mature ecosystem
- Fewer advanced features
- Less commonly used in production
- Limited TypeScript support
- Smaller community

### Option 2: Custom Routing (useState + History API)
**Pros:**
- No dependencies
- Full control over implementation
- Minimal bundle size
- Educational value

**Cons:**
- Reinventing the wheel
- Maintenance burden
- Missing features (lazy loading, code splitting)
- Doesn't follow established industry patterns
- Time-consuming to implement properly

### Option 3: Flat Route Structure
**Pros:**
- Simpler initial setup
- All routes at same level
- Easy to understand

**Cons:**
- Doesn't scale well
- Not real-world pattern
- Harder to organize large applications
- Limited reusability

### Option 4: Hardcoded Routes (without configuration object)
**Pros:**
- Direct React Router usage
- No abstraction layer
- Immediate clarity

**Cons:**
- Routes scattered across codebase
- Hard to maintain paths
- Can't iterate programmatically
- No single source of truth

## Consequences

### Positive
- **Industry standard**: React Router v6 is widely adopted in production applications
- **Real-world patterns**: Nested routes and declarative configuration match production applications
- **Maintainability**: Single routes configuration makes path changes easy
- **Scalability**: Route structure can grow with application complexity
- **Type safety**: TypeScript support for route configuration
- **Navigation consistency**: Programmatic route generation ensures consistent structure

### Negative
- **Bundle size**: ~50kb addition to application bundle
- **Learning curve**: React Router v6 has breaking changes from v5
- **Complexity**: More complex than simple hash-based routing
- **Migration effort**: Need to update all navigation components to use React Router Links

### Neutral
- **Future extensibility**: Routes array can be enhanced with metadata, guards, lazy loading
- **Testing**: Standard React Router testing patterns apply
- **Documentation**: Well-documented library with extensive community resources

## Implementation Notes

### Route Structure
```
/                       # HomePage
/setup                  # SetupOverviewPage
/setup/build-tool       # BuildToolPage
/setup/code-quality     # CodeQualityPage  
/setup/git-hooks        # GitHooksPage
/setup/testing          # TestingPage
/setup/bundle-size      # BundleSizePage
/setup/dev-env          # DevEnvPage
/css                    # CssOverviewPage
/css/modules            # ModulesPage
/css/vanilla-extract    # VanillaExtractPage
/css/tailwind           # TailwindPage
/css/shadcn             # ShadcnPage
```

### File Organization
```
src/
├── pages/
│   ├── HomePage.tsx
│   ├── setup/
│   │   ├── SetupOverviewPage.tsx
│   │   ├── BuildToolPage.tsx
│   │   ├── CodeQualityPage.tsx
│   │   ├── GitHooksPage.tsx
│   │   ├── TestingPage.tsx
│   │   ├── BundleSizePage.tsx
│   │   └── DevEnvPage.tsx
│   └── css/
│       ├── CssOverviewPage.tsx
│       ├── ModulesPage.tsx
│       ├── VanillaExtractPage.tsx
│       ├── TailwindPage.tsx
│       └── ShadcnPage.tsx
├── routes/
│   └── routes.ts               # Route configuration, navigationSections, flatRoutes
```

### Named Routes System

**Design Decision:**
We implemented a Vue Router-inspired named routes system with TypeScript safety:

```typescript
// Components use semantic names instead of hardcoded paths
<Link to={route("buildTool")}>Build Tool</Link>
<Link to={route("codeQuality")}>Code Quality</Link>
// Change URL once in routes config, works everywhere
```

**Real Examples from Current Codebase:**

*CssOverviewPage.tsx:*
```typescript
// All links use named routes instead of hardcoded paths
<Link to={route("cssModules")}>CSS Modules</Link>
<Link to={route("vanillaExtract")}>Vanilla Extract</Link>
<Link to={route("tailwind")}>Tailwind CSS</Link>
<Link to={route("shadcn")}>shadcn/ui</Link>
```

*AppSidebar.tsx:*
```typescript
// Sidebar navigation builds paths dynamically
{item.subitems.map((subitem) => (
  <Link to={`${item.url}/${subitem.path}`}>
    {subitem.title}
  </Link>
))}
```

**Benefits of This Approach:**
- ✅ **Type safety**: `route("buildTool")` has autocomplete and compile-time validation
- ✅ **Refactoring safety**: Change `/setup` to `/project-setup` once, updates everywhere
- ✅ **Developer experience**: IDE autocomplete shows all available routes
- ✅ **Maintainability**: Single source of truth for all navigation

### Future Enhancements
- **Data loading**: Add React Router loaders when API integration needed
- **Route guards**: Add authentication/authorization when user system added
- **Lazy loading**: Implement code splitting for better performance
- **Metadata**: Add route titles, breadcrumbs, and SEO information
- **Error boundaries**: Add route-level error handling
- **Route parameters**: Extend named routes to support dynamic parameters

## Related Documentation
- [Component Naming Convention ADR](../10-component-naming/adr.md) - Naming patterns for page components
- [Layout Architecture ADR](../07-layout-architecture/adr.md) - How routing integrates with layout system