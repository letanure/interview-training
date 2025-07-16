# React Code Splitting Implementation Guide

## Overview
This guide shows how to implement route-based code splitting using React.lazy() and Suspense to reduce initial bundle size and improve loading performance.

## Implementation Steps

### Step 1: Convert Route Imports to Lazy Loading

**Before (Direct Imports):**
```typescript
// routes/routes.ts
import { BuildToolPage } from "@pages/setup/BuildToolPage";
import { CodeQualityPage } from "@pages/setup/CodeQualityPage";
import { TestingPage } from "@pages/setup/TestingPage";
```

**After (Lazy Loading):**
```typescript
// routes/routes.ts
import { lazy } from "react";

const BuildToolPage = lazy(() => import("@pages/setup/BuildToolPage").then(m => ({ default: m.BuildToolPage })));
const CodeQualityPage = lazy(() => import("@pages/setup/CodeQualityPage").then(m => ({ default: m.CodeQualityPage })));
const TestingPage = lazy(() => import("@pages/setup/TestingPage").then(m => ({ default: m.TestingPage })));
```

### Step 2: Create Loading Component

```typescript
// components/PageLoader.tsx
import { Loader2 } from "lucide-react";

export function PageLoader() {
  return (
    <div className="flex flex-1 items-center justify-center">
      <div className="flex items-center gap-2 text-muted-foreground">
        <Loader2 className="h-4 w-4 animate-spin" />
        <span>Loading...</span>
      </div>
    </div>
  );
}
```

### Step 3: Add Suspense Boundary

```typescript
// App.tsx
import { Suspense } from "react";
import { PageLoader } from "@components/PageLoader";

export default function App() {
  return (
    <BrowserRouter>
      <RootLayout>
        <Suspense fallback={<PageLoader />}>
          <Routes>
            {flatRoutes.map((route) => (
              <Route
                key={route.path}
                path={route.path}
                element={<route.component />}
              />
            ))}
          </Routes>
        </Suspense>
      </RootLayout>
    </BrowserRouter>
  );
}
```

## Implementation Results

### Bundle Analysis Output
```bash
npm run build

# Before Code Splitting
dist/assets/index-BETRvb9m.js   365.18 kB │ gzip: 113.38 kB

# After Code Splitting
dist/assets/index-C1SlSQWt.js              340.50 kB │ gzip: 111.16 kB
dist/assets/BuildToolPage-BZW0KDSS.js        2.17 kB │ gzip:   0.77 kB
dist/assets/CodeQualityPage-D0TgvDEg.js      1.02 kB │ gzip:   0.48 kB
dist/assets/TestingPage-BIwnhLFS.js          1.01 kB │ gzip:   0.46 kB
# ... 24 more individual page chunks
```

### Performance Improvements
- **Initial bundle reduced**: 365KB → 340KB (7% reduction)
- **Page chunks**: 1-3KB each (tiny individual pages)
- **Total chunks**: 27 separate chunks for lazy-loaded pages
- **Network efficiency**: Only load what users actually visit

## Common Patterns

### 1. Named Export Handling
When components use named exports, transform them explicitly:

```typescript
// Component with named export
export function MyComponent() { ... }

// Lazy loading with named export
const MyComponent = lazy(() => 
  import("@pages/MyComponent").then(m => ({ default: m.MyComponent }))
);
```

### 2. Multiple Components in One File
```typescript
// If file exports multiple components
export function ComponentA() { ... }
export function ComponentB() { ... }

// Lazy load specific component
const ComponentA = lazy(() => 
  import("@pages/MyFile").then(m => ({ default: m.ComponentA }))
);
```

### 3. Conditional Lazy Loading
```typescript
// Keep critical pages as direct imports
import { HomePage } from "@pages/HomePage";  // Always loaded

// Lazy load secondary pages
const SettingsPage = lazy(() => import("@pages/SettingsPage"));
```

## File Structure
```
src/
├── components/
│   └── PageLoader.tsx          # Loading component
├── pages/
│   ├── HomePage.tsx           # Direct import (critical)
│   ├── setup/
│   │   ├── BuildToolPage.tsx  # Lazy loaded
│   │   └── CodeQualityPage.tsx # Lazy loaded
│   └── ...
├── routes/
│   └── routes.ts             # Lazy import definitions
└── App.tsx                   # Suspense boundary
```

## Testing the Implementation

### Development Testing
```bash
# Start dev server
npm run dev

# Navigate between pages - observe network tab
# Each page should load its chunk dynamically
```

### Production Testing
```bash
# Build for production
npm run build

# Serve production build
npm run preview

# Check bundle composition
npm run size:analyze
```

### Performance Verification
1. **Network Tab**: Individual chunks load on navigation
2. **Bundle Size**: Reduced initial bundle size
3. **Loading States**: Smooth transitions with loading indicators
4. **Error Handling**: Failed chunks show error boundaries

## Troubleshooting

### Common Issues

**1. Named Export Issues**
```typescript
// ❌ This won't work
const MyComponent = lazy(() => import("@pages/MyComponent"));

// ✅ This works
const MyComponent = lazy(() => 
  import("@pages/MyComponent").then(m => ({ default: m.MyComponent }))
);
```

**2. Missing Suspense Boundary**
```typescript
// ❌ This will cause errors
<Routes>
  <Route path="/page" element={<LazyComponent />} />
</Routes>

// ✅ Wrap with Suspense
<Suspense fallback={<PageLoader />}>
  <Routes>
    <Route path="/page" element={<LazyComponent />} />
  </Routes>
</Suspense>
```

**3. TypeScript Errors**
```typescript
// ❌ Type errors with lazy components
const routes: RouteConfig[] = [
  {
    component: LazyComponent, // Type error
  }
];

// ✅ Use ComponentType<any> or proper typing
import type { ComponentType } from "react";

interface RouteConfig {
  component: ComponentType<any>;
}
```

## Advanced Optimizations

### 1. Preloading Strategy
```typescript
// Preload likely next pages
const preloadPage = () => {
  const pageImport = import("@pages/setup/BuildToolPage");
  return pageImport;
};

// Trigger on hover or user interaction
<Link 
  to="/setup/build-tool"
  onMouseEnter={preloadPage}
>
  Build Tool
</Link>
```

### 2. Error Boundaries
```typescript
// Error boundary for failed chunk loading
class ChunkErrorBoundary extends React.Component {
  componentDidCatch(error, errorInfo) {
    if (error.name === 'ChunkLoadError') {
      // Handle chunk loading failure
      window.location.reload();
    }
  }
}

// Wrap lazy components
<ChunkErrorBoundary>
  <Suspense fallback={<PageLoader />}>
    <Routes>...</Routes>
  </Suspense>
</ChunkErrorBoundary>
```

### 3. Bundle Analysis Automation
```bash
# Add to package.json
"scripts": {
  "analyze": "npm run build && npx vite-bundle-analyzer dist",
  "size:check": "npm run build && node scripts/check-bundle-size.js"
}
```

## Related Commands

### Development
```bash
npm run dev              # Start dev server
npm run build            # Build for production
npm run preview          # Preview production build
```

### Bundle Analysis
```bash
npm run size:analyze     # Visual bundle analysis
npm run size:info        # Bundle size information
npm run size:check       # Check against budget
```

### Performance Testing
```bash
npm run test:e2e         # E2E tests with page loading
npm run lighthouse       # Performance audit
```

## Next Steps

1. **Monitor Performance**: Track bundle sizes and loading times
2. **Component Splitting**: Consider splitting heavy components
3. **Prefetching**: Implement strategic prefetching
4. **Caching**: Add service worker for repeat visits
5. **Metrics**: Set up real user monitoring

## Related Documentation
- [Bundle Size Budgets](../05-performance/adr.md)
- [Performance Monitoring](../05-performance/best-practices.md)
- [Build Tool Configuration](../01-project-setup/implementation.md)