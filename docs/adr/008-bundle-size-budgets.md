# ADR-008: Bundle Size Budgets and Performance Monitoring

## Status
Accepted

## Context
Need to prevent bundle size regressions and maintain application performance as the project grows. Bundle size directly impacts user experience through download time, parse time, and Time to Interactive. Without automated monitoring, bundle size can grow unnoticed, leading to performance degradation.

## Decision
Implement automated bundle size budgets with CI enforcement, using on-demand bundle analyzers for investigation.

**Implementation Details:** See `journey/2g-bundle-size-budgets.md`

**Key Decisions:**
- **Two-tier approach**: 
  - Vite's built-in warnings for developer feedback (soft limits)
  - Custom scripts for CI enforcement (hard limits that fail builds)
- **Budget targets**: 500KB total for small apps (appropriate for growth)
- **CI integration**: Fail builds when budgets are exceeded
- **On-demand analysis**: Use bundle analyzers (vite-bundle-visualizer) for troubleshooting
- **Reporting**: PR comments with size changes and budget status
- **Early-stage consideration**: Avoid restrictive budgets based on minimal starter code

**Why Custom Scripts vs Built-in Tools:**
- **Vite's `chunkSizeWarningLimit`**: Only warns, doesn't fail builds
- **Vite's `reportCompressedSize`**: Only displays info, no programmatic access
- **Custom scripts provide**: CI enforcement, PR comparisons, automated reporting

**Alternatives Considered:**
- **No monitoring**: Risk of unnoticed performance regressions
- **Bundle analyzers only**: Reactive approach, doesn't prevent issues
- **Manual monitoring**: Relies on developer discipline, not scalable

## Consequences

**Positive:**
- Proactive prevention of bundle size regressions
- Automated enforcement without manual overhead
- Early detection of performance issues in CI/CD
- Direct correlation to user experience and Web Vitals
- Team accountability for performance impact
- Cost-effective compared to reactive debugging
- Interview-relevant demonstration of production performance thinking

**Negative:**
- Initial setup and configuration required
- Budget maintenance as legitimate features are added
- Additional step in CI/CD pipeline
- Potential false positives requiring budget adjustments
- Learning curve for team on budget tools

**Neutral:**
- Aligns with industry standard practices for performance monitoring
- Complements existing code quality tools (Biome, TypeScript, Knip)
- Can be enhanced with more sophisticated monitoring as project grows
- Supports gradual performance optimization improvements