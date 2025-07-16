# Routing Implementation Guide

## Overview

This guide covers the step-by-step implementation of our React Router v6 system with Vue Router-inspired named routes.

## What Was Created

### Core Files Created
- `src/routes/routes.ts` - Central route configuration with named routes system
- `src/App.tsx` - Updated to use BrowserRouter with route generation
- `src/components/AppSidebar/AppSidebar.tsx` - Updated to use route configuration
- `src/components/Layout/Header.tsx` - Updated to use named routes for breadcrumbs

### Page Components Updated
- `src/pages/setup/SetupOverviewPage.tsx` - Uses named routes instead of hardcoded paths
- `src/pages/css/CssOverviewPage.tsx` - Uses named routes instead of hardcoded paths
- All 13 page components now use shadcn/ui Card components

## Installation

```bash
npm install react-router-dom
npm install --save-dev @types/react-router-dom
```

## Key Implementation Details

### 1. Route Configuration (src/routes/routes.ts)

**What it does:**
- Defines all routes with `name`, `path`, `component`, and `title` properties
- Uses nested structure with relative paths for children
- Exports `routes`, `navigationSections`, and `flatRoutes`

**Why this approach:**
- Single source of truth for all routing
- Type-safe named routes system
- Easy to maintain and extend
- Supports hierarchical navigation

### 2. Named Route System

**Type Generation (`src/routes/routes.ts`):**
Advanced TypeScript utility that automatically extracts all route names from the routes array. Creates a union type like `"home" | "buildTool" | "codeQuality"` that updates automatically when routes are added or removed.

**Why created:** Ensures type safety without manual maintenance of route name lists.

**Route Resolver (`route()` function):**
Function that takes a route name and returns the full path. Recursively searches through nested routes and builds complete paths for child routes.

**Why created:** Provides single source of truth for path resolution with compile-time validation.

**Benefits achieved:**
- TypeScript autocomplete for route names
- Compile-time validation prevents invalid routes
- No hardcoded paths needed in components
- Refactoring safety - change URL once, works everywhere

### 3. Component Integration

**Updated components use:**
All page components (SetupOverviewPage, CssOverviewPage) now use `route("routeName")` instead of hardcoded paths like `"/setup/build-tool"`.

**Why this matters:**
- Change URL once, works everywhere
- TypeScript catches invalid route names
- IDE provides autocomplete
- Easier to refactor and maintain

### 4. Navigation Architecture

**Sidebar Navigation:**
- Generated from `navigationSections` array
- Uses nested route structure
- Supports collapsible sections
- Integrates with React Router Link components

**Header Breadcrumbs:**
- Uses `route("home")` instead of hardcoded "/"
- Supports custom breadcrumb configuration
- Integrates with React Router navigation

## Testing

Created comprehensive tests for:
- Route resolution (parent and child routes)
- Invalid route handling
- Path building logic
- Navigation component integration

## Benefits Achieved

### Type Safety
- **100% type-safe routing**: All route names validated at compile time
- **IDE support**: Full autocomplete and IntelliSense
- **Refactoring safety**: Rename routes once, updates everywhere

### Developer Experience
- **No hardcoded paths**: All navigation uses semantic names
- **Single source of truth**: Routes defined once, used everywhere
- **Easy maintenance**: Change URL structure without touching components

### Performance
- **Compile-time resolution**: No runtime overhead for route lookups
- **Bundle optimization**: Unused routes can be tree-shaken
- **Efficient navigation**: Simple object lookup for route resolution

## Architecture Decisions

### CamelCase Route Names
- **Decision**: Use `buildTool` instead of `build-tool`
- **Why**: Better TypeScript integration, semantic naming, easier to type

### Relative Paths for Children
- **Decision**: Use `build-tool` instead of `/setup/build-tool`
- **Why**: DRY principle, easier refactoring, less error-prone

### Auto-Generated Types
- **Decision**: Extract types from routes array instead of manual typing
- **Why**: Single source of truth, no duplication, automatic updates

## Common Patterns

**Conditional navigation:** Use ternary operators with route names for dynamic routing based on user state.

**Programmatic navigation:** useNavigate hook works with route() function for type-safe navigation.

**Component links:** All Link components use route() function instead of hardcoded paths.

## Troubleshooting

### Route Not Found
- Check route name exists in routes array
- Verify TypeScript compilation
- Ensure correct import of `route` function

### Navigation Issues
- Use React Router `Link`, not anchor tags
- Import `route` function correctly
- Check route names are case-sensitive

## Related Documentation
- [ADR-013: Client-Side Routing Solution](./adr.md)
- [Routing Best Practices](./best-practices.md)
- [Layout Architecture](../07-layout-architecture/best-practices.md)