# Bundle Size Budgets Implementation

## Overview

This guide describes how we evaluated and implemented bundle size budgets for proactive performance monitoring, preventing bundle size regressions through automated CI enforcement.

## Available Options Analysis

### Option 1: No Bundle Size Monitoring
**Tools**: No automated monitoring

**Pros**:
- **Zero setup cost**: No configuration or maintenance required
- **No build overhead**: Build process remains fast
- **Simple workflow**: No additional steps for developers

**Cons**:
- **Performance blindness**: No visibility into bundle size growth
- **Regression risk**: Bundle size can grow unnoticed over time
- **No early warning**: Issues discovered only in production
- **Manual checking**: Requires developer discipline to monitor manually

### Option 2: Bundle Analyzers (On-Demand)
**Tools**: rollup-plugin-visualizer, vite-bundle-visualizer, webpack-bundle-analyzer

**Pros**:
- **Visual insights**: Interactive treemaps showing bundle composition
- **Problem identification**: Easy to spot large dependencies and duplicates
- **Flexible usage**: Run only when investigating issues
- **No performance impact**: Only runs when explicitly executed

**Cons**:
- **Reactive approach**: Only helps after problems already exist
- **Manual process**: Requires developer to remember to check
- **No prevention**: Doesn't block problematic changes from merging
- **Analysis paralysis**: Data without actionable enforcement

### Option 3: Bundle Size Budgets (Automated)
**Tools**: Vite build configuration, CI/CD integration, size-limit

**Pros**:
- **Proactive protection**: Prevents bundle size regressions automatically
- **CI integration**: Fails builds when budgets are exceeded
- **Early detection**: Catches issues before they reach production
- **Team enforcement**: Automatic compliance without manual checking
- **Performance focus**: Directly ties to user experience metrics

**Cons**:
- **Initial setup**: Requires configuration and baseline establishment
- **Maintenance overhead**: Budgets need updates as features grow
- **Build complexity**: Additional step in CI/CD pipeline
- **False positives**: Legitimate size increases may require budget updates

### Option 4: Hybrid Approach (Budgets + On-Demand Analysis)
**Tools**: Automated budgets for protection + analyzers for investigation

**Pros**:
- **Best of both worlds**: Prevention + investigation capabilities
- **Balanced approach**: Automated protection with debugging tools
- **Flexible response**: Budgets catch issues, analyzers help solve them

**Cons**:
- **Higher complexity**: Multiple tools to maintain
- **Learning curve**: Team needs to understand both approaches

## Community Standards Analysis (2025)

**Current Trends**:
- **Budget-first approach**: Most production teams use automated budgets over manual analysis
- **CI integration**: Bundle size checks are standard in modern CI/CD pipelines
- **Performance budgets**: Web Vitals and Core Web Vitals drive size budget decisions
- **On-demand analysis**: Analyzers used for troubleshooting, not regular monitoring

**Industry Practices**:
- **Growth-aware budgets**: Teams set realistic budgets that allow for feature development
- **Progressive tightening**: Budgets become stricter as optimization improves
- **Feature-based budgets**: Different limits for different parts of the application
- **Performance correlation**: Bundle sizes tied to actual performance metrics
- **Early-stage flexibility**: Avoid overly restrictive budgets based on minimal code

## Decision & Reasoning

### Final Choice: Bundle Size Budgets with On-Demand Analysis

**Reasoning**:
- **Proactive protection**: Prevent performance regressions before they reach users
- **Team productivity**: Automated enforcement removes manual overhead
- **Performance focus**: Directly supports Core Web Vitals and user experience
- **Cost-effective**: Better ROI than reactive analysis tools
- **Interview relevance**: Shows understanding of performance monitoring in production systems

**Implementation Strategy**:
- **Growth-oriented budgets**: Set reasonable limits that allow for feature development
- **Early-stage consideration**: Avoid setting budgets based on minimal starter code
- **CI enforcement**: Fail builds when budgets are exceeded with clear reporting
- **PR feedback**: Automated comments showing size changes and impacts
- **On-demand debugging**: Use bundle analyzers when investigating specific issues

## Bundle Size Strategy

### Performance Budget Philosophy

**Core Principles**:
- **User-first**: Bundle size directly impacts user experience
- **Automatic enforcement**: Catch regressions without manual checking
- **Measurable goals**: Clear metrics tied to Web Vitals
- **Team ownership**: Make performance everyone's responsibility

**Bundle Size Impact on User Experience**:
```
Bundle Size → Download Time → Parse Time → Time to Interactive
     ↓              ↓            ↓              ↓
  Network Cost → Battery Usage → CPU Usage → User Satisfaction
```

### Recommended Budget Targets (2025)

**Initial Bundle (Critical Path)**:
- **Desktop**: < 200KB gzipped
- **Mobile**: < 150KB gzipped
- **Rationale**: ~1-2 seconds load time on 3G networks

**Total Bundle (All Chunks)**:
- **Small app**: < 500KB gzipped
- **Medium app**: < 1MB gzipped
- **Large app**: < 2MB gzipped (with code splitting)

**Individual Chunks**:
- **Route chunks**: < 100KB gzipped each
- **Vendor chunks**: < 300KB gzipped
- **Common chunks**: < 50KB gzipped

## Implementation Process

### Overview: Two-Tier Bundle Size Strategy

We implement a two-tier approach for bundle size monitoring:

1. **Development Tier (Vite Config)**
   - Provides immediate feedback during builds
   - Shows compressed sizes
   - Warns when chunks exceed limits
   - **Does NOT block builds**

2. **CI/CD Tier (Custom Scripts)**
   - Enforces hard limits in CI
   - Fails builds when budgets exceeded
   - Compares sizes between branches
   - Posts automated PR comments

### Step 1: Baseline Measurement
```bash
# Build and check current bundle size
npm run build

# Check dist/ folder size
du -sh dist/
ls -la dist/assets/
```

### Step 2: Vite Bundle Analysis Configuration
Update your `vite.config.ts` to enable bundle size reporting:
```typescript
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        // Split vendor code for better caching
        manualChunks: {
          vendor: ["react", "react-dom"],
        },
      },
    },
    // Enable compressed size reporting
    reportCompressedSize: true,
    // Warn when chunks exceed 500KB
    chunkSizeWarningLimit: 500,
  },
});
```

**Important: Why Vite Config + Custom Scripts?**
- **Vite config provides developer feedback**: Shows sizes and warnings during build
- **Custom scripts provide CI enforcement**: Actually fail builds and block merges
- This two-tier approach gives developers early warnings while ensuring CI compliance

### Step 3: Package Scripts for Bundle Monitoring
```bash
npx json -I -f package.json -e 'this.scripts["build:analyze"] = "npm run build && ls -la dist/assets/ && du -sh dist/"'
npx json -I -f package.json -e 'this.scripts["build:size"] = "npm run build && find dist -name \"*.js\" -o -name \"*.css\" | xargs wc -c | tail -1"'
```

### Step 4: Custom Scripts for CI Enforcement

Since Vite only provides warnings (not enforcement), we create custom scripts:

**scripts/check-bundle-size.js** - Analyzes bundle and enforces limits
- Scans `dist/assets/` for JS and CSS files
- Calculates total size in KB
- Exits with code 1 if exceeds 500KB budget
- Outputs size data for GitHub Actions consumption

**scripts/compare-bundle-sizes.js** - Compares PR vs base branch
- Reads current and base branch sizes from environment
- Calculates absolute and percentage differences
- Outputs comparison data for PR comments

**scripts/generate-pr-comment.js** - Creates formatted PR comment
- Generates markdown table showing size changes
- Includes budget status and recommendations
- Outputs ready-to-post comment body

These scripts are called by the GitHub Actions workflow in sequence to provide complete bundle size monitoring.

### Step 5: CI Integration
Create `.github/workflows/bundle-size.yml`:
```yaml
- Builds PR branch
- Runs check-bundle-size.js
- Builds base branch
- Compares sizes
- Posts PR comment
- Fails if budget exceeded
```

### Step 6: On-Demand Bundle Analysis
```bash
# Add script for detailed analysis when needed
npx json -I -f package.json -e 'this.scripts["analyze:bundle"] = "npx vite-bundle-visualizer"'
```

## Budget Configuration Examples

### Conservative Budgets (Strict Performance)
```json
{
  "size-limit": [
    {
      "path": "dist/assets/index-*.js",
      "limit": "150 KB",
      "gzip": true
    },
    {
      "path": "dist/assets/vendor-*.js", 
      "limit": "200 KB",
      "gzip": true
    },
    {
      "path": "dist/assets/*.css",
      "limit": "30 KB",
      "gzip": true
    }
  ]
}
```

### Moderate Budgets (Balanced)
```json
{
  "size-limit": [
    {
      "path": "dist/assets/index-*.js",
      "limit": "250 KB",
      "gzip": true
    },
    {
      "path": "dist/assets/vendor-*.js",
      "limit": "400 KB", 
      "gzip": true
    },
    {
      "path": "dist/assets/*.css",
      "limit": "50 KB",
      "gzip": true
    }
  ]
}
```

### Progressive Budgets (Growth-Friendly)
```json
{
  "size-limit": [
    {
      "path": "dist/assets/index-*.js",
      "limit": "400 KB",
      "gzip": true
    },
    {
      "path": "dist/assets/vendor-*.js",
      "limit": "600 KB",
      "gzip": true
    },
    {
      "path": "dist/assets/*.css",
      "limit": "75 KB",
      "gzip": true
    }
  ]
}
```

## Bundle Size Optimization Strategies

### Code Splitting Techniques
```typescript
// Route-based splitting
const HomePage = lazy(() => import('./pages/HomePage'));
const AboutPage = lazy(() => import('./pages/AboutPage'));

// Feature-based splitting
const AdvancedFeature = lazy(() => import('./features/AdvancedFeature'));

// Library splitting
const ChartComponent = lazy(() => import('./components/Chart'));
```

### Tree Shaking Optimization
```typescript
// Good: Named imports
import { debounce } from 'lodash-es';

// Bad: Full library import
import _ from 'lodash';

// Good: Specific utility imports
import debounce from 'lodash/debounce';
```

### Bundle Analysis Commands
```bash
# Check if bundle exceeds budget (fails if over 500KB)
npm run size:check

# Visual bundle composition analysis (opens in browser)
npm run size:analyze

# Show file sizes in terminal
npm run size:info
```

## Common Bundle Size Issues

### Large Dependencies
- **Problem**: Popular libraries with large footprints
- **Solution**: Find smaller alternatives or use specific imports
- **Example**: date-fns instead of moment.js

### Duplicate Dependencies
- **Problem**: Same library bundled multiple times
- **Solution**: Configure bundle splitting and deduplication
- **Detection**: Bundle analyzer shows duplicate modules

### Unused Code
- **Problem**: Dead code increases bundle size
- **Solution**: Tree shaking, knip for unused exports
- **Prevention**: Regular dead code analysis

### Images and Assets
- **Problem**: Large assets bundled with JavaScript
- **Solution**: Asset optimization, lazy loading, CDN usage
- **Tools**: Image optimization plugins

## Monitoring and Alerts

### Build-Time Monitoring
```bash
# Set bundle size warnings in Vite
build: {
  chunkSizeWarningLimit: 500,
  rollupOptions: {
    onwarn(warning, warn) {
      if (warning.code === 'LARGE_BUNDLE') {
        console.error('Bundle size exceeded limit!');
      }
      warn(warning);
    }
  }
}
```

### CI/CD Integration
- **Pre-merge checks**: Bundle size validation before merging PRs
- **Performance regression alerts**: Notifications when budgets are exceeded
- **Historical tracking**: Monitor bundle size trends over time

## Interview Relevance

Understanding bundle size budgets demonstrates:
- **Performance awareness**: Knowledge of how bundle size affects user experience
- **Proactive monitoring**: Using automated tools to prevent performance regressions
- **Production thinking**: Considering real-world constraints and user impact
- **Tool selection**: Choosing the right approach for different scenarios

**Common Interview Questions**:
- "How do you monitor and control bundle size in production applications?"
- "What's your approach to preventing performance regressions?"
- "How do you balance feature development with performance requirements?"
- "What tools would you use to investigate bundle size issues?"

## What Was Created

**Bundle size monitoring system:**
- Vite configuration with size warnings and chunk splitting
- Custom scripts for CI enforcement and PR size comparisons
- GitHub Actions workflow for automated budget checks
- Package scripts for on-demand bundle analysis

**Performance budgets:**
- Growth-oriented budget limits allowing feature development
- CI enforcement that fails builds when budgets exceeded
- PR comments showing size changes and impacts
- On-demand bundle analyzer for troubleshooting

## Related Documentation
- [ADR-008: Bundle Size Budget Configuration](./adr.md)
- [Bundle Size Budget Interview Guide](./interview-guide.md)