# Bundle Size & Performance - Interview Guide

## Key Talking Points

### 1. "How do you monitor and optimize bundle size in React applications?"

**Answer:**
> "I use a three-pronged approach: bundle size budgets with CI enforcement, regular analysis with built-in tools, and proactive optimization strategies. I set a 500KB budget for early-stage projects, which prevents performance issues before they start. The key is making bundle size a first-class concern, not an afterthought."

**Code Example:**
```javascript
// scripts/check-bundle-size.js - Budget enforcement
const BUDGET_KB = 500;
const budgetBytes = BUDGET_KB * 1024;

if (totalSize > budgetBytes) {
  console.error(`❌ Bundle size ${(totalSize / 1024).toFixed(1)}KB exceeds budget of ${BUDGET_KB}KB`);
  process.exit(1);
}
```

**Follow-up Question:** "How do you determine appropriate bundle size budgets?"

**Answer:**
> "For early-stage projects, I start with 500KB to allow growth. For production apps, I analyze user metrics and connection speeds. The budget should reflect your user base - 200KB for mobile-first apps, 500KB for desktop apps, 1MB+ only for specialized applications. The key is setting budgets that align with performance goals."

---

### 2. "How do you integrate bundle size monitoring into CI/CD?"

**Answer:**
> "I implement bundle size checks as a required CI step that fails the build if budgets are exceeded. I also provide PR comments showing size changes so teams can see the impact of their changes. This creates accountability and makes performance visible in the development process."

**Code Example:**
```yaml
# .github/workflows/bundle-size.yml
- name: Check bundle size
  run: npm run size:check
  
- name: Compare bundle sizes
  run: |
    npm run build
    node scripts/compare-bundle-sizes.js
    
- name: Comment PR
  uses: actions/github-script@v6
  with:
    script: |
      const comment = await fs.readFile('bundle-comparison.md', 'utf8')
      github.rest.issues.createComment({
        issue_number: context.issue.number,
        owner: context.repo.owner,
        repo: context.repo.repo,
        body: comment
      })
```

**Follow-up Question:** "What happens when the budget is exceeded?"

**Answer:**
> "The CI build fails, preventing the merge. The team then has three options: optimize the code to reduce size, split the feature into smaller chunks, or consciously increase the budget with proper justification. This forces intentional decisions about performance trade-offs."

---

### 3. "What tools do you use for bundle analysis?"

**Answer:**
> "I use Vite's built-in rollup analyzer for detailed breakdowns, and create custom scripts for automated monitoring. I avoid heavy webpack-analyzer tools since Vite provides excellent built-in analysis. For team usage, I provide simple npm scripts that generate both terminal output and interactive visualizations."

**Code Example:**
```json
// package.json - Bundle analysis scripts
{
  "scripts": {
    "size:check": "node scripts/check-bundle-size.js",
    "size:analyze": "npm run build && npx vite-bundle-analyzer dist/",
    "size:info": "npm run build && node scripts/bundle-info.js"
  }
}
```

**Follow-up Question:** "How do you identify what's causing bundle bloat?"

**Answer:**
> "I use the analyze script to get a visual breakdown, then focus on the largest chunks. Common culprits are: moment.js instead of date-fns, entire icon libraries instead of tree-shaken imports, and duplicate dependencies. I also check for accidentally imported dev dependencies and unused CSS frameworks."

---

### 4. "What are your strategies for bundle optimization?"

**Answer:**
> "I use several techniques: tree-shaking with proper ES modules, code splitting for vendor libraries, dynamic imports for large features, and careful dependency selection. I also implement manual chunks for stable vendor code, which improves caching. The goal is to only load what users actually need."

**Code Example:**
```javascript
// vite.config.ts - Manual chunking strategy
export default defineConfig({
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          utils: ['date-fns', 'lodash-es']
        }
      }
    }
  }
})

// Dynamic imports for code splitting
const LazyComponent = lazy(() => import('./HeavyComponent'))
```

**Follow-up Question:** "How do you balance bundle size with developer experience?"

**Answer:**
> "I prioritize DX tools that don't affect production bundles - like TypeScript and development-only dependencies. For runtime dependencies, I choose libraries carefully, favoring smaller alternatives when functionality is equivalent. I also use tree-shaking effectively, importing only what's needed rather than entire libraries."

---

## Performance Budgets Strategy

### Setting Realistic Budgets

**Early Stage Projects (our approach):**
- **Initial budget**: 500KB total
- **Reasoning**: Allows growth without immediate optimization pressure
- **Monitoring**: Weekly review, adjust as needed

**Production Applications:**
- **Mobile-first**: 200KB for 3G networks
- **Desktop-first**: 500KB for typical connections  
- **Enterprise**: 1MB+ acceptable for internal tools

### Budget Categories
```javascript
// Different budget types
const budgets = {
  total: 500,           // Total bundle size
  vendor: 300,          // Third-party libraries
  app: 150,            // Application code
  css: 50              // Stylesheets
}
```

## Common Bundle Size Issues

### 1. Dependency Problems
```javascript
// ❌ Bad - Imports entire library
import _ from 'lodash'
import moment from 'moment'

// ✅ Good - Tree-shakable imports
import { debounce } from 'lodash-es'
import { format } from 'date-fns'
```

### 2. CSS Framework Bloat
```css
/* ❌ Bad - Entire framework */
@import 'bootstrap/dist/css/bootstrap.css';

/* ✅ Good - Only needed utilities */
@import 'tailwindcss/base';
@import 'tailwindcss/components';
@import 'tailwindcss/utilities';
```

### 3. Icon Library Issues
```javascript
// ❌ Bad - Entire icon library
import * as Icons from 'react-icons/fa'

// ✅ Good - Specific icon imports
import { FaHome, FaUser } from 'react-icons/fa'
```

## CI/CD Integration Best Practices

### 1. Fail Fast Strategy
- Check bundle size before running expensive tests
- Provide clear error messages with optimization suggestions
- Allow temporary budget increases with team approval

### 2. Progressive Monitoring
```yaml
# Different checks for different environments
- name: Quick size check
  run: npm run size:check
  
- name: Detailed analysis (main branch only)
  if: github.ref == 'refs/heads/main'
  run: npm run size:analyze
```

### 3. Team Communication
- PR comments showing size changes
- Slack notifications for budget violations
- Monthly reports on bundle size trends

## Common Mistakes to Avoid

❌ **Don't say:** "Bundle size doesn't matter with modern internet speeds"
✅ **Do say:** "Bundle size directly impacts user experience, especially on mobile devices"

❌ **Don't say:** "We'll optimize later when it becomes a problem"
✅ **Do say:** "Bundle budgets prevent performance issues from accumulating"

❌ **Don't say:** "Users don't notice a few hundred KB difference"
✅ **Do say:** "Every KB affects parse time, memory usage, and user experience"

## Advanced Optimization Techniques

### 1. Advanced Code Splitting
```javascript
// Route-based splitting
const Home = lazy(() => import('./pages/Home'))
const Profile = lazy(() => import('./pages/Profile'))

// Feature-based splitting
const AdminPanel = lazy(() => 
  import('./admin/AdminPanel').then(module => ({
    default: module.AdminPanel
  }))
)
```

### 2. Dependency Optimization
```javascript
// webpack-bundle-analyzer alternatives for Vite
import { analyzer } from 'vite-bundle-analyzer'

// Custom chunk optimization
const optimizeChunks = (id) => {
  if (id.includes('node_modules')) {
    return 'vendor'
  }
  if (id.includes('src/utils')) {
    return 'utils'
  }
}
```

### 3. Runtime Performance
- Preload critical chunks
- Prefetch likely-needed chunks
- Implement service worker caching
- Use CDN for static assets

---

*This guide is part of the React/Frontend interview training project.*