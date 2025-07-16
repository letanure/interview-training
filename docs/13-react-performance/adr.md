# ADR-017: React Code Splitting Strategy

## Status
Accepted

## Context
As the application grows with multiple pages and components, initial bundle size increases and can impact user experience. React applications need code splitting strategies to avoid loading unnecessary code upfront.

## Problem
- **Large initial bundle**: All pages loaded upfront even if not visited
- **Slow first load**: Users wait for unnecessary code to download
- **Poor mobile experience**: Large bundles particularly impact mobile users
- **Wasted bandwidth**: Users download code for pages they may never visit

## Decision
Implement **route-based code splitting** using React.lazy() and Suspense as the primary optimization strategy.

### Core Strategy
- **Route-based splitting**: Split code at page boundaries
- **React.lazy()**: Dynamic imports for page components
- **Suspense**: Declarative loading states
- **Bundle analysis**: Monitor and optimize bundle composition

### Implementation Pattern
```typescript
// Route-based lazy loading
const BuildToolPage = lazy(() => import("@pages/setup/BuildToolPage"));
const CodeQualityPage = lazy(() => import("@pages/setup/CodeQualityPage"));

// Suspense boundary in Router
<Suspense fallback={<PageLoader />}>
  <Routes>
    <Route path="/setup/build-tool" element={<BuildToolPage />} />
    <Route path="/setup/code-quality" element={<CodeQualityPage />} />
  </Routes>
</Suspense>
```

## Alternatives Considered

### Alternative 1: Component-based Code Splitting
```typescript
// Split individual components
const HeavyChart = lazy(() => import("@components/HeavyChart"));
const DataTable = lazy(() => import("@components/DataTable"));
```

**Pros:**
- Granular control over loading
- Can split heavy components individually
- Good for conditional rendering

**Cons:**
- Complex loading state management
- More Suspense boundaries to manage
- Diminishing returns for small components
- Harder to predict performance impact

### Alternative 2: No Code Splitting
```typescript
// Import everything upfront
import { BuildToolPage } from "@pages/setup/BuildToolPage";
import { CodeQualityPage } from "@pages/setup/CodeQualityPage";
```

**Pros:**
- Simple implementation
- No loading states needed
- Immediate navigation

**Cons:**
- Large initial bundle size
- Slower first load
- Wasted bandwidth for unused pages
- Poor mobile experience

### Alternative 3: Manual Bundle Splitting
```typescript
// Manual webpack configuration
module.exports = {
  optimization: {
    splitChunks: {
      chunks: 'all',
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          chunks: 'all',
        },
      },
    },
  },
};
```

**Pros:**
- Full control over bundle composition
- Can optimize for specific use cases
- Framework agnostic

**Cons:**
- Complex configuration
- Harder to maintain
- Vite already handles this well
- Less declarative than React.lazy()

## Implementation Strategy

### Phase 1: Route-based Splitting
1. **Convert page imports** to React.lazy()
2. **Add Suspense boundaries** around route components
3. **Create loading components** for better UX
4. **Measure bundle size impact**

### Phase 2: Loading Experience
1. **Design loading states** consistent with app design
2. **Add skeleton screens** for better perceived performance
3. **Implement error boundaries** for failed imports
4. **Add preloading** for likely next routes

### Phase 3: Advanced Optimization
1. **Component-level splitting** for heavy components
2. **Prefetching strategies** based on user behavior
3. **Service worker caching** for repeat visits
4. **Bundle analysis automation**

## Performance Targets

### Bundle Size Goals
- **Initial bundle**: <200KB (currently ~365KB)
- **Route chunks**: <50KB per page
- **Vendor chunk**: <150KB (React, libraries)
- **Total reduction**: >40% first load improvement

### Loading Performance
- **First Contentful Paint**: <1.5s
- **Largest Contentful Paint**: <2.5s
- **Route transitions**: <200ms
- **Mobile 3G**: <3s initial load

## Monitoring and Measurement

### Bundle Analysis
```bash
# Regular bundle analysis
npm run size:analyze
npm run size:check

# CI/CD monitoring
npm run size:compare-baseline
```

### Performance Metrics
- **Lighthouse CI**: Automated performance audits
- **Bundle size budgets**: Fail builds if exceeded
- **Loading time tracking**: Real user monitoring
- **Core Web Vitals**: Production monitoring

## Benefits

### User Experience
- **Faster initial load**: Only load current page
- **Progressive enhancement**: Load features as needed
- **Better mobile experience**: Smaller initial payloads
- **Improved perceived performance**: Immediate app shell

### Developer Experience
- **Declarative loading**: React.lazy() + Suspense
- **Automatic optimization**: Vite handles bundling
- **Easy to implement**: Minimal code changes
- **Built-in tooling**: Bundle analyzer, performance profiler

### Business Impact
- **Better conversion**: Faster loads increase engagement
- **Reduced bounce rate**: Users don't wait for large bundles
- **Lower bandwidth costs**: Smaller initial payloads
- **SEO benefits**: Better Core Web Vitals scores

## Consequences

### Positive
- **Significant bundle size reduction**: 40%+ smaller initial load
- **Improved loading performance**: Better user experience
- **Scalable architecture**: Easy to add new pages
- **Modern best practices**: Industry standard approach

### Negative
- **Loading states complexity**: Need to design loading UX
- **Slightly more complex routing**: Suspense boundaries
- **Potential flash of loading**: Brief loading indicators
- **Testing complexity**: Need to test loading states

### Neutral
- **Build complexity**: Minimal impact with Vite
- **SEO considerations**: Modern crawlers handle dynamic imports
- **Caching strategy**: Need to consider chunk caching
- **Browser support**: Excellent in modern browsers

## Implementation Timeline

### Week 1: Foundation
- Set up React.lazy() for all page components
- Add Suspense boundaries in routing
- Create basic loading components

### Week 2: Optimization
- Implement proper loading states
- Add error boundaries for failed imports
- Measure and document performance improvements

### Week 3: Advanced Features
- Add skeleton screens for better UX
- Implement route preloading
- Set up automated bundle monitoring

## Related Tools

### Build Tools
- **Vite**: Automatic code splitting support
- **Rollup**: Underlying bundler optimization
- **Bundle analyzer**: Visual bundle composition

### React Tools
- **React.lazy()**: Dynamic component imports
- **Suspense**: Declarative loading states
- **Error boundaries**: Handle loading failures

### Performance Tools
- **Lighthouse**: Performance auditing
- **Web Vitals**: Core performance metrics
- **Bundle analyzer**: Bundle composition analysis

## Examples in Our Codebase

### Before (Direct Imports)
```typescript
import { BuildToolPage } from "@pages/setup/BuildToolPage";
import { CodeQualityPage } from "@pages/setup/CodeQualityPage";
```

### After (Lazy Loading)
```typescript
import { lazy, Suspense } from "react";
import { PageLoader } from "@components/PageLoader";

const BuildToolPage = lazy(() => import("@pages/setup/BuildToolPage"));
const CodeQualityPage = lazy(() => import("@pages/setup/CodeQualityPage"));

// In Router
<Suspense fallback={<PageLoader />}>
  <Routes>
    <Route path="/setup/build-tool" element={<BuildToolPage />} />
    <Route path="/setup/code-quality" element={<CodeQualityPage />} />
  </Routes>
</Suspense>
```

## Related Documentation
- [Bundle Size Budgets](../05-performance/adr.md)
- [Development Workflow](../06-development-workflow/adr.md)
- [File Organization Strategy](../11-file-organization/adr.md)