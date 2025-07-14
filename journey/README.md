# Journey Documentation

This directory contains detailed implementation guides for setting up a modern React development environment. Each document walks through the decision-making process, available options, and step-by-step implementation.

## Setup Journey

### 1. React App Creation
**[1-react-app-creation.md](1-react-app-creation.md)**
- Setting up Vite with TypeScript + SWC
- Comparing build tools (Vite vs Next.js vs CRA)
- Template selection and configuration decisions
- Initial project structure

### 2. Project Setup Essentials

#### 2a. Code Quality & Formatting
**[2a-code-quality-formatting.md](2a-code-quality-formatting.md)**
- Comparing ESLint + Prettier vs Biome
- Community standards analysis (2025)
- Biome installation and configuration
- Package scripts setup

#### 2b. Development Workflow & Git Hooks
**[2b-dev-workflow-git-hooks.md](2b-dev-workflow-git-hooks.md)**
- Git hooks with Husky + lint-staged + commitlint
- Pre-commit and commit-msg hook setup
- Conventional commit enforcement
- Testing the workflow

#### 2c. Unit Testing
**[2c-unit-testing-vitest.md](2c-unit-testing-vitest.md)**
- Vitest vs Jest comparison
- React Testing Library setup
- Test file organization strategies
- Component folder structure with colocation
- Git hooks integration for testing

#### 2d. E2E Testing
**[2d-e2e-testing-playwright.md](2d-e2e-testing-playwright.md)**
- Playwright vs Cypress comparison
- E2E testing setup and configuration
- Browser selection and test directory structure
- CI/CD integration with GitHub Actions

#### 2e. Optional Docker Setup
**[2e-optional-docker-setup.md](2e-optional-docker-setup.md)**
- Docker vs native development analysis
- Team comfort considerations
- Hybrid development approach
- Docker implementation with development focus
- Development workflow comparison

#### 2f. Dead Code Detection
**[2f-dead-code-detection-knip.md](2f-dead-code-detection-knip.md)**
- Comprehensive dead code analysis with Knip
- Comparison with TypeScript compiler and ESLint alternatives
- When and how to run dead code detection
- CI integration and team workflow
- Configuration for TypeScript + Vite projects

## Document Structure

Each journey document follows a consistent structure:

1. **Introduction** - Context and purpose
2. **Available Options Analysis** - Comparing different approaches
3. **Community Standards Analysis** - Current trends and adoption
4. **My Decision & Reasoning** - Chosen approach with rationale
5. **Implementation Process** - Step-by-step setup instructions
6. **Interview Relevance** - Why this knowledge matters for interviews

## How to Use These Guides

### For Learning
- **Read sequentially** - Each document builds on previous decisions
- **Understand the "why"** - Focus on reasoning behind choices
- **Try alternatives** - Experiment with different approaches mentioned

### For Interview Preparation
- **Practice explaining trade-offs** - Be able to discuss pros/cons of each option
- **Understand current trends** - Know what's popular in 2025 and why
- **Prepare for follow-up questions** - Each decision leads to deeper technical discussions

### For Project Setup
- **Follow the commands** - Each guide includes copy-paste setup instructions
- **Adapt to your needs** - Guides explain when to choose different options
- **Document your decisions** - Use these as templates for your own projects

## Related Documentation

- **[ADR Directory](../adr/README.md)** - Architectural Decision Records for quick reference
- **[Interview Topics](../interview-topics.md)** - Complete list of topics to cover
- **[CLAUDE.md](../CLAUDE.md)** - Project context and development rules

## Contributing

When adding new journey documents:
1. Follow the established structure and format
2. Include both decision reasoning and implementation steps
3. Add copy-paste commands for easy setup
4. Update this README index
5. Create corresponding ADR if it's an architectural decision