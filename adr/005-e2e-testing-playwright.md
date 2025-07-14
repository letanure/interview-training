# ADR-005: E2E Testing Infrastructure Selection

## Status
Accepted

## Context
Need to establish end-to-end testing infrastructure for React application to test complete user journeys and critical workflows. Modern E2E testing tools have evolved significantly, with Playwright emerging as a strong alternative to Cypress for cross-browser testing.

## Decision
Use Playwright for end-to-end testing.

**Implementation Details:** See `journey/2d-e2e-testing-playwright.md`

**Key Decisions:**
- **Browser Selection:** Chromium only for development (prioritizing speed over comprehensive coverage)
- **Test Directory:** `e2e/` (following community standard)

## Consequences

**Positive:**
- Excellent cross-browser support (Chromium, Firefox, Safari)
- Fast and reliable test execution
- Auto-wait functionality reduces flaky tests
- Built-in screenshots, videos, and traces for debugging
- Microsoft-backed with active development and long-term support
- Modern approach aligned with 2025 community standards
- Better performance than alternatives

**Negative:**
- Newer tool with smaller community compared to Cypress
- Different API from Cypress requires learning curve
- Less Stack Overflow content and tutorials available
- Team members might need training on new tool

**Neutral:**
- Growing adoption means increasing community support over time
- Microsoft backing provides stability and continued development