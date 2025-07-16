# React Code Splitting Best Practices

## Overview

This guide covers best practices for implementing React code splitting effectively, including chunk strategies, loading states, and performance optimization.

## Incremental Code Splitting Strategy

### Level 1: Don't Split If...

**Start with NO code splitting when:**
- **Small applications** (< 10 routes, < 200KB total bundle)
- **Simple single-page apps** with minimal routing
- **Prototypes and MVPs** where simplicity matters more than optimization
- **Internal tools** with fast networks and small user base

```typescript
// No splitting - direct imports
import { HomePage } from "@pages/HomePage";
import { AboutPage } from "@pages/AboutPage";
import { ContactPage } from "@pages/ContactPage";

// Simple routing
<Routes>
  <Route path="/" element={<HomePage />} />
  <Route path="/about" element={<AboutPage />} />
  <Route path="/contact" element={<ContactPage />} />
</Routes>
```

**Benefits:**
- Simple implementation
- No loading states complexity
- Fast navigation between pages
- Easy debugging

### Level 2: Split Per Route If...

**Implement route-based splitting when:**
- **Medium applications** (10-50 routes, 200KB-500KB bundle)
- **Multiple page sections** with distinct functionality
- **User journeys** where not all pages are visited
- **Mobile users** on slower connections

```typescript
// Route-based splitting
const HomePage = lazy(() => import("@pages/HomePage"));
const DashboardPage = lazy(() => import("@pages/DashboardPage"));
const SettingsPage = lazy(() => import("@pages/SettingsPage"));

// With Suspense boundary
<Suspense fallback={<PageLoader />}>
  <Routes>
    <Route path="/" element={<HomePage />} />
    <Route path="/dashboard" element={<DashboardPage />} />
    <Route path="/settings" element={<SettingsPage />} />
  </Routes>
</Suspense>
```

**Benefits:**
- Reduced initial bundle size
- Users only download pages they visit
- Natural loading boundaries
- Better mobile performance

### Level 3: Group by Feature If...

**Implement feature-based grouping when:**
- **Large applications** (50+ routes, 500KB+ bundle)
- **Complex user workflows** with related page sequences
- **Performance-critical** applications
- **Too many small chunks** (20+ individual chunks)

```typescript
// Feature-based grouping
const dashboardChunk = lazy(() => import("@chunks/dashboard"));
const adminChunk = lazy(() => import("@chunks/admin"));
const reportingChunk = lazy(() => import("@chunks/reporting"));

// Chunk contains multiple related pages
// @chunks/dashboard/index.ts
export { DashboardHome } from "./DashboardHome";
export { DashboardAnalytics } from "./DashboardAnalytics";
export { DashboardSettings } from "./DashboardSettings";
```

**Benefits:**
- Fewer HTTP requests
- Better compression ratios
- Logical grouping matches user journeys
- Reduced network overhead

### Level 4: Hybrid Approach If...

**Use hybrid strategy when:**
- **Enterprise applications** with complex requirements
- **Different user roles** with distinct app sections
- **Performance budgets** require fine-tuned optimization
- **Mixed usage patterns** (some pages visited together, others standalone)

```typescript
// Hybrid approach
// Critical pages - direct imports (no loading delay)
import { LandingPage } from "@pages/LandingPage";
import { LoginPage } from "@pages/LoginPage";

// Feature groups - logical chunks
const userDashboard = lazy(() => import("@chunks/user-dashboard"));
const adminPanel = lazy(() => import("@chunks/admin-panel"));

// Heavy standalone pages - separate chunks
const ReportsPage = lazy(() => import("@pages/ReportsPage"));
const DataVisualization = lazy(() => import("@pages/DataVisualization"));
```

**Benefits:**
- Optimized for specific use cases
- Critical path performance
- Flexible loading strategies
- Maximum control over bundle composition

## Decision Framework

### Step 1: Measure Current Performance
```bash
npm run build
# Check bundle size and analyze composition
npx vite-bundle-analyzer dist
```

### Step 2: Apply Incremental Strategy
1. **< 200KB bundle**: No splitting needed
2. **200KB-500KB bundle**: Route-based splitting
3. **500KB+ bundle**: Feature-based grouping
4. **Complex requirements**: Hybrid approach

### Step 3: Monitor and Adjust
- Track loading times
- Monitor user navigation patterns
- Adjust grouping based on real usage
- Set performance budgets

## Implementation Guidelines

### Always Include Loading States
```typescript
// Consistent loading component
<Suspense fallback={<PageLoader />}>
  <LazyComponent />
</Suspense>
```

### Handle Errors Gracefully
```typescript
// Error boundary for chunk failures
<ChunkErrorBoundary>
  <Suspense fallback={<PageLoader />}>
    <LazyComponent />
  </Suspense>
</ChunkErrorBoundary>
```

### Consider Preloading
```typescript
// Preload likely next routes
<Link 
  to="/dashboard"
  onMouseEnter={() => import("@pages/Dashboard")}
>
  Dashboard
</Link>
```

## Loading Experience

### 1. Loading Components
Create consistent loading states:

```typescript
// Basic loader
export function PageLoader() {
  return (
    <div className="flex items-center justify-center h-64">
      <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600" />
    </div>
  );
}

// Skeleton loader
export function PageSkeleton() {
  return (
    <div className="space-y-4 p-4">
      <div className="h-8 bg-gray-200 rounded animate-pulse" />
      <div className="h-4 bg-gray-200 rounded w-3/4 animate-pulse" />
      <div className="h-4 bg-gray-200 rounded w-1/2 animate-pulse" />
    </div>
  );
}
```

### 2. Error Boundaries
Handle chunk loading failures:

```typescript
class ChunkErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    if (error.name === 'ChunkLoadError') {
      return { hasError: true };
    }
    return null;
  }

  componentDidCatch(error, errorInfo) {
    if (error.name === 'ChunkLoadError') {
      // Optionally reload the page
      window.location.reload();
    }
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="text-center p-8">
          <h2>Something went wrong loading this page.</h2>
          <button onClick={() => window.location.reload()}>
            Try again
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}
```

## Performance Optimization

### 1. Preloading Strategies
Preload likely next routes:

```typescript
// Preload on hover
<Link 
  to="/dashboard"
  onMouseEnter={() => import("@pages/Dashboard")}
>
  Dashboard
</Link>

// Preload on user interaction
const preloadDashboard = () => {
  const componentImport = import("@pages/Dashboard");
  return componentImport;
};
```

### 2. Bundle Analysis
Monitor bundle composition:

```bash
# Analyze bundle size
npm run build
npm run size:analyze

# Check bundle composition
npx vite-bundle-analyzer dist
```

### 3. Chunk Naming
Use meaningful chunk names:

```typescript
// ✅ Good - Clear chunk names
const DashboardPage = lazy(() => 
  import(/* webpackChunkName: "dashboard" */ "@pages/Dashboard")
);

// ❌ Bad - Generic names
const DashboardPage = lazy(() => import("@pages/Dashboard"));
```

## Testing Code Splitting

### 1. Test Loading States
```typescript
import { render, waitFor } from '@testing-library/react';
import { Suspense } from 'react';

test('shows loading state', async () => {
  const LazyComponent = lazy(() => import('./MyComponent'));
  
  const { getByText } = render(
    <Suspense fallback={<div>Loading...</div>}>
      <LazyComponent />
    </Suspense>
  );
  
  expect(getByText('Loading...')).toBeInTheDocument();
  
  await waitFor(() => {
    expect(getByText('Component Content')).toBeInTheDocument();
  });
});
```

### 2. Test Error Boundaries
```typescript
test('handles chunk loading errors', async () => {
  const FailingComponent = lazy(() => Promise.reject(new Error('ChunkLoadError')));
  
  const { getByText } = render(
    <ChunkErrorBoundary>
      <Suspense fallback={<div>Loading...</div>}>
        <FailingComponent />
      </Suspense>
    </ChunkErrorBoundary>
  );
  
  await waitFor(() => {
    expect(getByText('Something went wrong')).toBeInTheDocument();
  });
});
```

## Common Pitfalls

### 1. Over-splitting
```typescript
// ❌ Bad - Too granular
const Button = lazy(() => import("@components/Button"));
const Input = lazy(() => import("@components/Input"));

// ✅ Good - Appropriate granularity
const FormComponents = lazy(() => import("@components/forms"));
```

### 2. Missing Suspense Boundaries
```typescript
// ❌ Bad - No Suspense
function App() {
  return (
    <Routes>
      <Route path="/page" element={<LazyPage />} />
    </Routes>
  );
}

// ✅ Good - Proper Suspense
function App() {
  return (
    <Suspense fallback={<PageLoader />}>
      <Routes>
        <Route path="/page" element={<LazyPage />} />
      </Routes>
    </Suspense>
  );
}
```

### 3. Inconsistent Loading States
```typescript
// ❌ Bad - Inconsistent loaders
<Suspense fallback={<div>Loading...</div>}>
  <Component1 />
</Suspense>

<Suspense fallback={<span>Please wait</span>}>
  <Component2 />
</Suspense>

// ✅ Good - Consistent loading component
<Suspense fallback={<PageLoader />}>
  <Component1 />
</Suspense>

<Suspense fallback={<PageLoader />}>
  <Component2 />
</Suspense>
```

## Performance Monitoring

### 1. Bundle Size Budgets
Set up performance budgets:

```json
{
  "budgets": [
    {
      "type": "initial",
      "maximumWarning": "500kb",
      "maximumError": "1mb"
    },
    {
      "type": "anyComponentStyle",
      "maximumWarning": "2kb",
      "maximumError": "4kb"
    }
  ]
}
```

### 2. Core Web Vitals
Monitor loading performance:

```typescript
// Track loading times
const observer = new PerformanceObserver((list) => {
  for (const entry of list.getEntries()) {
    if (entry.entryType === 'navigation') {
      console.log('Page load time:', entry.duration);
    }
  }
});

observer.observe({ entryTypes: ['navigation'] });
```

## Production Considerations

### 1. CDN and Caching
Configure proper caching headers:

```javascript
// vite.config.js
export default {
  build: {
    rollupOptions: {
      output: {
        chunkFileNames: 'assets/[name].[hash].js',
        entryFileNames: 'assets/[name].[hash].js',
        assetFileNames: 'assets/[name].[hash].[ext]'
      }
    }
  }
};
```

### 2. Service Worker Integration
Cache chunks for offline access:

```javascript
// sw.js
self.addEventListener('fetch', (event) => {
  if (event.request.url.includes('/assets/')) {
    event.respondWith(
      caches.match(event.request)
        .then((response) => response || fetch(event.request))
    );
  }
});
```


## Bundle Analysis Commands

```bash
# Analysis
npm run size:analyze     # Visual bundle analysis
npm run size:info        # Bundle size details
npm run size:check       # Check against budgets
```

## Related Documentation
- [React Code Splitting ADR](./adr.md)
- [React Code Splitting Implementation](./implementation.md)
- [Bundle Size Budgets](../05-performance/adr.md)