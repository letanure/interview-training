# Routing Best Practices

## Overview

This guide covers best practices for using our React Router v6 system with Vue Router-inspired named routes.

## Route Organization

### ✅ Good Route Structure

```typescript
// Clear hierarchical structure
const routes = [
  {
    name: "home",
    path: "/",
    component: HomePage,
    title: "Home",
  },
  {
    name: "projectSetup",
    path: "/setup",
    component: SetupOverviewPage,
    title: "Project Setup",
    children: [
      {
        name: "buildTool",
        path: "build-tool",  // Relative path
        component: BuildToolPage,
        title: "Build Tool",
      },
    ],
  },
];
```

### ❌ Anti-Patterns

```typescript
// Avoid these patterns
const badRoutes = [
  {
    name: "setup.build-tool",  // ❌ Dotted names
    path: "/setup/build-tool", // ❌ Absolute paths in children
    component: BuildToolPage,
    title: "Build Tool",
  },
  {
    name: "vite_page",         // ❌ Underscore naming
    path: "/vite-config",      // ❌ Tool-specific paths
    component: VitePage,
    title: "Vite Configuration", // ❌ Tool-specific titles
  },
];
```

## Naming Conventions

### Route Names
- **Use camelCase**: `buildTool`, `codeQuality`, `cssStyling`
- **Be descriptive**: `userProfile` not `user`, `projectSetup` not `setup`
- **Avoid abbreviations**: `documentation` not `docs`
- **Topic-focused**: `buildTool` not `viteConfig`

### Route Paths
- **Use kebab-case**: `/build-tool`, `/code-quality`
- **Keep URLs short**: `/css/tailwind` not `/css-styling/tailwind-css`
- **Use relative paths for children**: `tailwind` not `/css/tailwind`
- **Avoid deep nesting**: Maximum 2 levels deep

### Route Titles
- **User-friendly**: "Build Tool" not "Vite Configuration"
- **Consistent capitalization**: "CSS Styling" not "css styling"
- **Problem-focused**: "Code Quality" not "Biome Setup"

## Navigation Patterns

### ✅ Always Use Named Routes

```typescript
// Good - Type-safe named routes
<Link to={route(ROUTE_NAMES.BUILD_TOOL)}>Build Tool</Link>
<Link to={route(ROUTE_NAMES.HOME)}>Home</Link>

// Navigation
const navigate = useNavigate();
navigate(route(ROUTE_NAMES.PROJECT_SETUP));
```

### ❌ Never Use Hardcoded Paths

```typescript
// Bad - Hardcoded paths
<Link to="/setup/build-tool">Build Tool</Link>  // ❌ Fragile
<Link to="/">Home</Link>                        // ❌ Not refactoring-safe
navigate("/setup");                             // ❌ No type safety
```

## Component Integration

### Page Components

```typescript
// ✅ Good - Use named routes for internal navigation
export function SetupOverviewPage() {
  return (
    <div>
      <h1>Project Setup</h1>
      <div className="grid">
        <Card>
          <CardHeader>
            <CardTitle>
              <Link to={route(ROUTE_NAMES.BUILD_TOOL)}>Build Tool</Link>
            </CardTitle>
          </CardHeader>
        </Card>
      </div>
    </div>
  );
}
```

### Navigation Components

```typescript
// ✅ Good - Dynamic navigation from routes
export function AppSidebar() {
  return (
    <Sidebar>
      {navigationSections.map((section) => (
        <SidebarMenuItem key={section.title}>
          <Link to={section.url}>{section.title}</Link>
          {section.subitems.map((item) => (
            <Link key={item.name} to={`${section.url}/${item.path}`}>
              {item.title}
            </Link>
          ))}
        </SidebarMenuItem>
      ))}
    </Sidebar>
  );
}
```

## Error Handling

### Route Resolution

```typescript
// ✅ Good - Graceful fallbacks
export const route = (name: RouteName): string => {
  const found = findRoute(routes, name);
  if (!found) {
    console.warn(`Route '${name}' not found, falling back to home`);
    return "/";
  }
  return buildPath(found);
};
```

### Invalid Routes

```typescript
// ✅ Good - TypeScript prevents invalid routes
const validRoute = route(ROUTE_NAMES.BUILD_TOOL);    // ✅ Compiles
const invalidRoute = route("nonExistent"); // ❌ Compilation error
```

## Performance Optimization

### Route Splitting

```typescript
// ✅ Good - Lazy loading for large routes
const routes = [
  {
    name: "dashboard",
    path: "/dashboard",
    component: lazy(() => import("@/pages/DashboardPage")),
    title: "Dashboard",
  },
];
```

### Route Memoization

```typescript
// ✅ Good - Memoize expensive route calculations
const memoizedRoute = useMemo(() => route(ROUTE_NAMES.COMPLEX_ROUTE), []);
```

## Testing Strategy

### Unit Tests

```typescript
// ✅ Good - Test route resolution
describe("route function", () => {
  it("should resolve parent routes", () => {
    expect(route(ROUTE_NAMES.HOME)).toBe("/");
    expect(route(ROUTE_NAMES.PROJECT_SETUP)).toBe("/setup");
  });

  it("should resolve child routes", () => {
    expect(route(ROUTE_NAMES.BUILD_TOOL)).toBe("/setup/build-tool");
    expect(route(ROUTE_NAMES.CODE_QUALITY)).toBe("/setup/code-quality");
  });
});
```

### Integration Tests

```typescript
// ✅ Good - Test navigation flow
it("should navigate between pages", () => {
  render(<App />);
  
  fireEvent.click(screen.getByText("Build Tool"));
  expect(screen.getByText("Build Tool Page")).toBeInTheDocument();
});
```

## Accessibility

### Semantic Navigation

```typescript
// ✅ Good - Proper ARIA attributes
<nav aria-label="Main navigation">
  <ul>
    {navigationSections.map((section) => (
      <li key={section.title}>
        <Link to={section.url} aria-current={isActive ? "page" : undefined}>
          {section.title}
        </Link>
      </li>
    ))}
  </ul>
</nav>
```

### Focus Management

```typescript
// ✅ Good - Manage focus on route changes
useEffect(() => {
  const heading = document.querySelector("h1");
  if (heading) {
    heading.focus();
  }
}, [location.pathname]);
```

## SEO and Meta Tags

### Dynamic Titles

```typescript
// ✅ Good - Dynamic page titles
export function usePageTitle(routeName: RouteName) {
  const route = findRoute(routes, routeName);
  useEffect(() => {
    document.title = `${route?.title} - React Training`;
  }, [route?.title]);
}
```

### Breadcrumb Schema

```typescript
// ✅ Good - Structured breadcrumb data
const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": breadcrumbs.map((item, index) => ({
    "@type": "ListItem",
    "position": index + 1,
    "name": item.label,
    "item": item.href ? `https://example.com${item.href}` : undefined,
  })),
};
```

## Security Considerations

### Route Validation

```typescript
// ✅ Good - Validate route parameters
const validateRoute = (name: string): name is RouteName => {
  return flatRoutes.some(route => route.name === name);
};
```

### Access Control

```typescript
// ✅ Good - Route-based permissions
const getAccessibleRoute = (routeName: RouteName, user: User): string => {
  const route = findRoute(routes, routeName);
  if (!route || !hasPermission(user, route)) {
    return route(ROUTE_NAMES.ACCESS_DENIED);
  }
  return route.path;
};
```

## Migration and Refactoring

### URL Changes

```typescript
// ✅ Good - Easy URL refactoring
const routes = [
  {
    name: "buildTool",
    path: "build-setup",  // Changed from "build-tool"
    component: BuildToolPage,
    title: "Build Tool",
  },
];
// All components automatically use new URL
```

### Route Deprecation

```typescript
// ✅ Good - Deprecate old routes gracefully
const deprecatedRoutes = {
  "oldBuildTool": "buildTool",
  "oldSetup": "projectSetup",
};

export const route = (name: RouteName | keyof typeof deprecatedRoutes): string => {
  if (name in deprecatedRoutes) {
    console.warn(`Route '${name}' is deprecated, use '${deprecatedRoutes[name]}'`);
    return route(deprecatedRoutes[name as keyof typeof deprecatedRoutes]);
  }
  return resolveRoute(name as RouteName);
};
```

## Common Pitfalls

### ❌ Mixing Route Types

```typescript
// Bad - Mixing named routes with hardcoded paths
<Link to="/setup">Setup</Link>          // ❌ Hardcoded
<Link to={route(ROUTE_NAMES.BUILD_TOOL)}>Tool</Link> // ✅ Named route
```

### ❌ Deep Route Nesting

```typescript
// Bad - Too deep nesting
const badRoutes = [
  {
    name: "app",
    path: "/app",
    children: [
      {
        name: "dashboard",
        path: "dashboard",
        children: [
          {
            name: "settings",
            path: "settings",
            children: [  // ❌ Too deep
              {
                name: "profile",
                path: "profile",
              },
            ],
          },
        ],
      },
    ],
  },
];
```

### ❌ Inconsistent Naming

```typescript
// Bad - Inconsistent naming patterns
const badRoutes = [
  { name: "home", path: "/", title: "Home" },
  { name: "setup-page", path: "/setup", title: "setup" },      // ❌ Inconsistent
  { name: "CSS", path: "/css", title: "css styling" },         // ❌ Inconsistent
];
```

## Best Practice Checklist

### Route Definition
- [ ] Use camelCase for route names
- [ ] Use kebab-case for route paths
- [ ] Use relative paths for children
- [ ] Keep nesting maximum 2 levels deep
- [ ] Use topic-focused names and titles

### Navigation
- [ ] Always use `route()` function
- [ ] Never hardcode paths in components
- [ ] Use React Router `Link` components
- [ ] Implement proper loading states

### Type Safety
- [ ] Routes generate TypeScript types
- [ ] All route names are type-checked
- [ ] Invalid routes cause compilation errors
- [ ] Route parameters are properly typed

### Performance
- [ ] Consider lazy loading for large routes
- [ ] Memoize expensive route calculations
- [ ] Optimize route resolution logic
- [ ] Use proper code splitting

### Testing
- [ ] Unit test route resolution
- [ ] Integration test navigation flow
- [ ] Test error handling
- [ ] Verify accessibility compliance

## Related Documentation
- [ADR-013: Client-Side Routing Solution](./adr.md)
- [Routing Implementation Guide](./implementation.md)
- [Layout Architecture Best Practices](../07-layout-architecture/best-practices.md)