# Layout Patterns Best Practices

## Overview

This guide covers how to implement and work with layouts in our React Training project, following our established Next.js-inspired architecture pattern.

## Architecture Pattern

### File Structure

```
src/
├── components/
│   └── Layout/
│       ├── RootLayout.tsx  # Root application layout
│       ├── Header.tsx      # Header with breadcrumbs
│       └── Footer.tsx      # Footer (future)
├── pages/
│   └── *.tsx              # Page components (pure content)
└── App.tsx                # Entry point + routing
```

### Component Hierarchy

```
App.tsx
└── RootLayout ({ children })
    ├── AppSidebar
    ├── Header
    └── {children} (page content)
```

## Implementation Guidelines

### 1. Root Layout (`components/Layout/RootLayout.tsx`)

**Purpose**: Application shell that wraps all pages

**Rules**:

- ✅ Contains global layout structure (sidebar, header)
- ✅ Accepts `children` prop for page content
- ✅ Manages layout state (sidebar open/closed)
- ❌ Does NOT know about routing or specific pages
- ❌ Does NOT contain page-specific logic

**Example**:

```typescript
// components/Layout/RootLayout.tsx
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
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
```

### 2. Layout Components (`components/Layout/`)

**Purpose**: Reusable layout pieces that can be composed

**Header Component Rules**:

- ✅ Flexible breadcrumb system via props
- ✅ Responsive design (mobile/desktop)
- ✅ Integrates with sidebar toggle
- ❌ Does NOT hardcode page-specific content

**Example**:

```typescript
// components/Layout/Header.tsx
interface HeaderProps {
  title?: string;
  breadcrumbs?: Array<{ label: string; href?: string }>;
}

export function Header({ title = "Home", breadcrumbs }: HeaderProps) {
  // Implementation with flexible breadcrumb system
}
```

### 3. Page Components (`pages/`)

**Purpose**: Pure content components with no layout concerns

**Rules**:

- ✅ Focus only on page content
- ✅ Receive data via props or hooks
- ✅ Handle page-specific state
- ❌ Do NOT import layout components
- ❌ Do NOT handle navigation structure

**Example**:

```typescript
// pages/HomePage.tsx
export function HomePage() {
  return (
    <div className="flex flex-1 flex-col gap-4 p-4">
      {/* Pure page content */}
    </div>
  );
}
```

### 4. App Entry Point (`App.tsx`)

**Purpose**: Wires layout and pages together

**Rules**:

- ✅ Minimal composition logic
- ✅ Handles routing (when implemented)
- ✅ Imports RootLayout and pages
- ❌ Does NOT contain layout logic
- ❌ Does NOT contain business logic

**Example**:

```typescript
// App.tsx
export default function App() {
  return (
    <RootLayout>
      <HomePage />
    </RootLayout>
  );
}
```

## Sidebar Navigation Best Practices

### Structure Organization

```typescript
// Separate navigation vs topics
const navigationItems = [{ title: "Home", url: "#", icon: Home }];

const topicItems = [
  {
    title: "Project Setup",
    subitems: [
      { title: "Build Tool", url: "#setup/build-tool" },
      // Topic-focused, not tool-specific names
    ],
  },
];
```

### Naming Conventions

- ✅ **Topic-focused**: "Build Tool", "CSS Styling"
- ❌ **Tool-specific**: "Vite Setup", "Tailwind CSS"
- ✅ **Problem-focused**: "Code Quality", "Testing"
- ❌ **Solution-focused**: "Biome Config", "Vitest Setup"

### Collapsible Sections

- Use for topics with multiple subtopics
- Always provide visual feedback (chevron rotation)
- Group related concepts together
- Keep hierarchy maximum 2 levels deep

## Header and Breadcrumb Patterns

### Breadcrumb Guidelines

```typescript
// Current page context
const breadcrumbs = [
  { label: "React Training", href: "#" },
  { label: "CSS Styling", href: "#css" },
  { label: "Tailwind CSS" }, // Current page (no href)
];
```

### Dynamic Updates

- Update breadcrumbs based on current route
- Always show project name as root
- Current page should not have href
- Use descriptive, user-friendly labels

## Layout State Management

### Sidebar State

- Use shadcn/ui `SidebarProvider` for consistent state
- Persist state via cookies (handled by shadcn/ui)
- Support mobile responsive behavior
- Provide keyboard shortcuts (Cmd/Ctrl + B)

### Responsive Behavior

- Mobile: Overlay sidebar
- Desktop: Persistent sidebar with toggle
- Smooth transitions between states
- Proper focus management

## Adding New Layouts

### When to Create New Layouts

- Different user contexts (auth pages, dashboard, etc.)
- Significantly different structure needs
- Section-specific navigation requirements

### Implementation Pattern

```typescript
// components/Layout/AuthLayout.tsx
export function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-md mx-auto pt-20">{children}</div>
    </div>
  );
}

// Usage in App.tsx
function App() {
  if (isAuthPage) {
    return (
      <AuthLayout>
        <LoginPage />
      </AuthLayout>
    );
  }

  return (
    <RootLayout>
      <HomePage />
    </RootLayout>
  );
}
```

## Testing Layout Components

### Layout Component Tests

```typescript
// Test layout structure
test("RootLayout renders sidebar and header", () => {
  render(
    <RootLayout>
      <div>Test content</div>
    </RootLayout>
  );

  expect(screen.getByRole("navigation")).toBeInTheDocument();
  expect(screen.getByText("Test content")).toBeInTheDocument();
});
```

### Integration Tests

- Test sidebar navigation functionality
- Test responsive behavior
- Test breadcrumb updates
- Test keyboard shortcuts

## Common Patterns and Anti-Patterns

### ✅ Good Patterns

```typescript
// Layout composition
<RootLayout>
  <HomePage />
</RootLayout>

// Flexible header props
<Header title="CSS Styling" breadcrumbs={customBreadcrumbs} />

// Topic-focused navigation
{ title: "State Management", subitems: [...] }
```

### ❌ Anti-Patterns

```typescript
// Layout logic in pages
function HomePage() {
  return (
    <div>
      <Sidebar /> {/* ❌ Layout concern in page */}
      <Header /> {/* ❌ Layout concern in page */}
      {/* page content */}
    </div>
  );
}

// Hardcoded navigation
<Breadcrumb>
  <BreadcrumbItem>Home</BreadcrumbItem> {/* ❌ Not flexible */}
</Breadcrumb>;

// Tool-specific naming
{
  title: "Vite Configuration";
} // ❌ Should be "Build Tool"
```


## Related Documentation

- [ADR-012: Layout Architecture Pattern](./adr.md)
- [shadcn/ui Best Practices](../03-css-styling/best-practices.md)
- [Tailwind Best Practices](../03-css-styling/best-practices.md)
