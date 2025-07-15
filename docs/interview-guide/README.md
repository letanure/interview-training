# Interview Guide

This folder contains concise, interview-ready explanations and talking points for common frontend development topics.

## Purpose

- **Quick reference** for interview preparation
- **Concise explanations** that demonstrate understanding
- **Real-world examples** that show practical experience
- **Confident talking points** for technical discussions

## Structure

Each topic includes:
- **Key talking points** - What to say
- **Code examples** - What to show
- **Follow-up questions** - What they might ask next
- **Common mistakes** - What to avoid

## Topics Covered

### ✅ Implemented
- [React Setup in 2025](./react-setup-2025.md) - Modern project setup with Vite, TypeScript, and SWC
- [CSS Styling Solutions](./css-styling-solutions.md) - Comparing CSS Modules, Vanilla Extract, Tailwind, shadcn/ui
- [Tailwind CSS Strategies](./tailwind-strategies.md) - Implementation patterns and community standards
- [Code Quality Tools](./code-quality-tools.md) - Biome vs ESLint/Prettier, automation, and team adoption
- [Testing Strategies](./testing-strategies.md) - Vitest, Playwright, and testing best practices
- [Bundle Size & Performance](./bundle-size-performance.md) - Monitoring, budgets, and optimization

### 🚧 Coming Soon
- [Git Automation](./git-automation.md) - Husky, lint-staged, and team workflows
- [Documentation Strategies](./documentation-strategies.md) - ADR, Journey docs, and knowledge management
- [Component Architecture](./component-architecture.md) - Design patterns and organization
- [State Management](./state-management.md) - Context, Zustand, and state patterns
- [CI/CD & Deployment](./cicd-deployment.md) - GitHub Actions, Docker, and deployment strategies

## How This Connects to Our Implementation

Each interview guide is based on **real decisions and implementations** in this project:

- **React Setup 2025**: Based on our [ADR-001 Build Tool](../adr/001-build-tool-choice.md) and [Journey 2a](../journey/2a-initial-project-setup.md)
- **CSS Styling**: Based on our [ADR-010 CSS Solution](../adr/010-css-styling-solution.md) and working examples in `src/examples/css-implementations/`
- **Code Quality**: Based on our [ADR-002 Code Quality](../adr/002-code-quality-tools.md) and actual Biome configuration
- **Testing**: Based on our [ADR-003 Testing](../adr/003-unit-testing-framework.md) and [ADR-004 E2E Testing](../adr/004-e2e-testing-framework.md)
- **Bundle Size**: Based on our [ADR-008 Bundle Size](../adr/008-bundle-size-budgets.md) and working CI scripts in `scripts/`

This means you can **demonstrate** what you're talking about with actual working code, not just theoretical knowledge.

## Usage

1. **Before interviews**: Review relevant topics
2. **During interviews**: Reference key talking points and show actual code
3. **After interviews**: Update based on questions asked
4. **For practice**: Use the working examples to reinforce explanations

---

*This guide is part of the React/Frontend interview training project.*