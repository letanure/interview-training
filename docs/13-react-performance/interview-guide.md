# React Code Splitting Interview Guide

## Core Concepts Questions

### 1. **"What is code splitting and why do we need it?"**

**Expected Answer:**
Code splitting is the practice of breaking your JavaScript bundle into smaller chunks that can be loaded on demand, rather than loading everything upfront.

**Why we need it:**
- Reduce initial bundle size
- Improve First Contentful Paint (FCP)
- Better user experience, especially on mobile
- Load only what users actually need

**Follow-up:** "What happens without code splitting?"
- Large initial bundles (300KB+ for React apps)
- Slow first load, especially on 3G connections
- Users download code for pages they may never visit

### 2. **"How do you implement code splitting in React?"**

**Expected Answer:**
```typescript
// React.lazy() for dynamic imports
const MyComponent = lazy(() => import('./MyComponent'));

// Suspense for loading states
<Suspense fallback={<Loading />}>
  <MyComponent />
</Suspense>
```

**Follow-up:** "What's the difference between static and dynamic imports?"
```typescript
// Static import - bundled together
import MyComponent from './MyComponent';

// Dynamic import - separate chunk
const MyComponent = lazy(() => import('./MyComponent'));
```

### 3. **"What is React.lazy() and how does it work?"**

**Expected Answer:**
- `React.lazy()` enables dynamic imports for React components
- Returns a component that can be rendered inside a Suspense boundary
- The component is loaded only when it's first rendered
- Uses JavaScript's dynamic `import()` function under the hood

**Code Example:**
```typescript
const LazyComponent = lazy(() => import('./Component'));

// With named exports
const LazyComponent = lazy(() => 
  import('./Component').then(module => ({ default: module.MyComponent }))
);
```

### 4. **"What is Suspense and why is it required with lazy loading?"**

**Expected Answer:**
- Suspense provides a way to "wait" for code to load
- Shows fallback UI while the component is being loaded
- Required because lazy components are asynchronous
- Creates a loading boundary in your component tree

**Follow-up:** "What happens if you don't use Suspense?"
- React will throw an error
- The app will crash when trying to render a lazy component

## Implementation Strategies

### 5. **"What are different code splitting strategies?"**

**Expected Answer:**

**Route-based Splitting:**
```typescript
const HomePage = lazy(() => import('./pages/Home'));
const AboutPage = lazy(() => import('./pages/About'));
```

**Component-based Splitting:**
```typescript
const HeavyChart = lazy(() => import('./components/HeavyChart'));
```

**Feature-based Splitting:**
```typescript
const dashboardChunk = lazy(() => import('./features/dashboard'));
```

**Follow-up:** "Which strategy should you start with?"
Route-based splitting - natural boundaries, predictable loading patterns

### 6. **"How do you decide between individual page chunks vs feature-based grouping?"**

**Expected Answer:**

**Individual Page Chunks:**
- Small to medium apps (< 50 routes)
- Simple navigation patterns
- Easy debugging and development

**Feature-based Grouping:**
- Large applications (50+ routes)  
- Related pages often accessed together
- Better compression and fewer HTTP requests

**Trade-offs:**
- Individual: More chunks, simpler implementation
- Grouped: Fewer chunks, requires planning user journeys

### 7. **"What are the problems with too much code splitting?"**

**Expected Answer:**
- **Over-splitting**: Creating too many tiny chunks
- **Network overhead**: HTTP request overhead exceeds chunk size
- **Poor compression**: Small files don't compress well
- **Complex loading states**: Managing many loading boundaries

**Example of over-splitting:**
```typescript
// ❌ Bad - 1KB chunks
const Button = lazy(() => import('./Button'));
const Input = lazy(() => import('./Input'));

// ✅ Better - logical grouping
const FormComponents = lazy(() => import('./forms'));
```

## Performance and UX

### 8. **"How do you handle loading states effectively?"**

**Expected Answer:**
```typescript
// Consistent loading component
function PageLoader() {
  return (
    <div className="flex items-center justify-center h-64">
      <div className="spinner" />
      <span>Loading...</span>
    </div>
  );
}

// Skeleton screens for better UX
function PageSkeleton() {
  return (
    <div className="space-y-4">
      <div className="h-8 bg-gray-200 animate-pulse" />
      <div className="h-4 bg-gray-200 animate-pulse w-3/4" />
    </div>
  );
}
```

**Follow-up:** "What's better - spinners or skeleton screens?"
Skeleton screens provide better perceived performance by showing content structure

### 9. **"How do you preload components for better UX?"**

**Expected Answer:**
```typescript
// Preload on hover
<Link 
  to="/dashboard"
  onMouseEnter={() => import('./pages/Dashboard')}
>
  Dashboard
</Link>

// Preload likely next routes
useEffect(() => {
  // Preload after initial render
  import('./pages/Settings');
}, []);

// Intersection Observer for viewport-based preloading
```

### 10. **"How do you handle chunk loading failures?"**

**Expected Answer:**
```typescript
class ChunkErrorBoundary extends React.Component {
  componentDidCatch(error, errorInfo) {
    if (error.name === 'ChunkLoadError') {
      // Option 1: Reload the page
      window.location.reload();
      
      // Option 2: Show retry UI
      this.setState({ hasError: true });
    }
  }
  
  render() {
    if (this.state.hasError) {
      return <RetryComponent onRetry={() => window.location.reload()} />;
    }
    return this.props.children;
  }
}
```

## Advanced Topics

### 11. **"How do you analyze and monitor bundle performance?"**

**Expected Answer:**

**Bundle Analysis:**
```bash
npm run build
npx vite-bundle-analyzer dist
```

**Performance Monitoring:**
```typescript
// Core Web Vitals
import { getCLS, getFID, getFCP, getLCP, getTTFB } from 'web-vitals';

getCLS(console.log);
getFID(console.log);
getFCP(console.log);
getLCP(console.log);
getTTFB(console.log);
```

**Bundle Size Budgets:**
```json
{
  "budgets": [
    {
      "type": "initial",
      "maximumWarning": "500kb",
      "maximumError": "1mb"
    }
  ]
}
```

### 12. **"How do you implement code splitting with TypeScript?"**

**Expected Answer:**
```typescript
// Type-safe lazy loading
const LazyComponent = lazy(() => import('./Component'));

// With proper typing
interface LazyComponentProps {
  data: string;
}

const TypedLazyComponent = lazy((): Promise<{ default: React.ComponentType<LazyComponentProps> }> => 
  import('./TypedComponent')
);

// Handling named exports
const LazyComponent = lazy(() => 
  import('./Component').then(m => ({ default: m.NamedComponent }))
);
```

### 13. **"How does code splitting work with SSR (Server-Side Rendering)?"**

**Expected Answer:**
- Client-server hydration mismatches can occur
- Need to ensure chunks are available on both client and server
- Use `@loadable/component` for SSR-compatible code splitting
- Handle loading states differently in SSR context

```typescript
// SSR-compatible with @loadable/component
import loadable from '@loadable/component';

const LoadableComponent = loadable(() => import('./Component'), {
  fallback: <Loading />
});
```

## Troubleshooting

### 14. **"What are common code splitting errors and how do you fix them?"**

**Expected Answer:**

**Missing Suspense Boundary:**
```typescript
// ❌ Error: A React component suspended while rendering
<LazyComponent />

// ✅ Fix: Wrap with Suspense
<Suspense fallback={<Loading />}>
  <LazyComponent />
</Suspense>
```

**Named Export Issues:**
```typescript
// ❌ Error: Module has no default export
const Component = lazy(() => import('./NamedExport'));

// ✅ Fix: Transform named to default
const Component = lazy(() => 
  import('./NamedExport').then(m => ({ default: m.NamedExport }))
);
```

**Chunk Loading Failures:**
- Network issues during chunk download
- Outdated cached chunks after deployment
- CDN configuration problems

### 15. **"How do you test code splitting?"**

**Expected Answer:**
```typescript
import { render, waitFor } from '@testing-library/react';
import { Suspense } from 'react';

test('lazy component loads correctly', async () => {
  const LazyComponent = lazy(() => import('./Component'));
  
  const { getByText } = render(
    <Suspense fallback={<div>Loading...</div>}>
      <LazyComponent />
    </Suspense>
  );
  
  // Test loading state
  expect(getByText('Loading...')).toBeInTheDocument();
  
  // Test loaded component
  await waitFor(() => {
    expect(getByText('Component Content')).toBeInTheDocument();
  });
});

// Test error boundaries
test('handles loading failures', async () => {
  const FailingComponent = lazy(() => Promise.reject(new Error('Failed')));
  // ... error boundary testing
});
```

## Practical Scenarios

### 16. **"You have a React app with 50+ routes. How would you implement code splitting?"**

**Expected Answer:**
1. **Start with route-based splitting** for all pages
2. **Group related routes** (e.g., admin pages, user dashboard)
3. **Keep critical pages** (home, login) as direct imports
4. **Implement preloading** for likely next routes
5. **Monitor bundle sizes** and adjust grouping
6. **Set up error boundaries** for chunk failures

### 17. **"Your initial bundle is 500KB. What's your optimization strategy?"**

**Expected Answer:**
1. **Analyze bundle composition** - identify large dependencies
2. **Implement route-based code splitting** - move pages to separate chunks
3. **Split vendor bundles** - separate React/libraries from app code
4. **Lazy load heavy components** - charts, rich text editors
5. **Remove unused code** - tree shaking, dead code elimination
6. **Consider CDN strategies** - external libraries

### 18. **"How would you implement code splitting in a micro-frontend architecture?"**

**Expected Answer:**
- Each micro-frontend as a separate bundle
- Shared dependencies in common chunks
- Dynamic loading of micro-frontends
- Module federation for runtime integration
- Careful dependency management to avoid duplication

## Performance Metrics

### 19. **"What metrics do you track for code splitting performance?"**

**Expected Answer:**

**Loading Metrics:**
- First Contentful Paint (FCP)
- Largest Contentful Paint (LCP)
- Time to Interactive (TTI)

**Bundle Metrics:**
- Initial bundle size
- Individual chunk sizes
- Total JavaScript downloaded

**User Experience:**
- Route transition times
- Loading state duration
- Error rates for chunk loading

### 20. **"What are performance budgets and how do you set them?"**

**Expected Answer:**
Performance budgets are limits set on metrics to maintain good performance:

```json
{
  "budgets": [
    {
      "type": "initial", 
      "maximumWarning": "300kb",
      "maximumError": "500kb"
    },
    {
      "type": "anyComponentStyle",
      "maximumWarning": "2kb"
    }
  ]
}
```

**Guidelines:**
- Initial bundle: < 200KB (mobile 3G)
- Route chunks: < 50KB each
- Vendor chunk: < 150KB
- Fail builds that exceed budgets

## Related Documentation
- [React Code Splitting ADR](./adr.md)
- [React Code Splitting Implementation](./implementation.md)
- [React Code Splitting Best Practices](./best-practices.md)