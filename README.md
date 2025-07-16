# React/Frontend Interview Training

A comprehensive React and frontend interview preparation project with practical implementations, architectural decisions, and modern development practices.

## Overview

This project serves as both a functional React application and a documentation resource for frontend interview preparation. It includes real-world setup decisions, implementation examples, and explanations of modern development practices.

## Quick Start

### Native Development (Recommended)

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Run tests
npm run test

# Run linting
npm run lint
```

### Docker Development (Optional)

```bash
# See journey/2e-optional-docker-setup.md for setup
docker-compose up --build  # First time
docker-compose up          # Subsequent runs
```

## Project Structure

```
├── README.md              # This file
├── CONTRIBUTING.md        # Guidelines for adding interview topics
├── interview-topics.md    # Complete list of React/Frontend topics
├── docs/                  # All documentation (organized by topic)
│   ├── 01-project-setup/  # React setup with Vite, TypeScript
│   ├── 02-code-quality/   # Biome, linting, formatting
│   ├── 03-css-styling/    # CSS solutions comparison
│   └── [topic-folders]/   # Each contains: adr.md, implementation.md, etc.
├── src/                   # React application source code
└── e2e/                   # End-to-end test files
```

## Technology Stack

- **Build Tool**: Vite with TypeScript + SWC
- **Code Quality**: Biome (linting + formatting)
- **Git Hooks**: Husky + lint-staged + commitlint
- **Unit Testing**: Vitest + React Testing Library
- **E2E Testing**: Playwright
- **Development**: Optional Docker setup
- **Bundle Size**: 500KB budget with CI enforcement (PR checks will fail if exceeded)
- **CSS/Styling**: Multiple solutions for demonstration - CSS Modules, Vanilla Extract, Tailwind CSS v4, shadcn/ui

> **Note**: This is a demo/interview training project. In production, choose one primary CSS solution. We implement multiple approaches to demonstrate trade-offs and interview preparation. See [CSS Styling Comparison](docs/03-css-styling/adr.md) for recommendations.

## Documentation Framework

This project uses a **clear 4-tier documentation system** to organize knowledge:

| Doc Type                                              | Purpose                | Example                                                   |
| ----------------------------------------------------- | ---------------------- | --------------------------------------------------------- |
| **[ADR](docs/01-project-setup/adr.md)**                         | What was decided       | "We chose Tailwind CSS over styled-components"            |
| **[Implementation](docs/01-project-setup/implementation.md)**   | Why and how we decided | "Here are 4 CSS options, pros/cons, implementation steps" |
| **[Best Practices](docs/03-css-styling/best-practices.md)**            | How to use it properly | "Use `cn()` for conditional classes, avoid `@apply`"      |
| **[Interview Guide](docs/01-project-setup/interview-guide.md)** | How to talk about it   | "When asked about CSS, say: 'I use utility-first...'"     |

### Quick Navigation

- **[Documentation Overview](docs/README.md)** - Topic-based organization with all 4 document types
- **[Topic Folders](docs/)** - Each topic contains ADR, implementation, best practices, interview guide
- **[Interview Topics List](interview-topics.md)** - Comprehensive React/Frontend topics to cover

## Commands Reference

```bash
# Install dependencies
npm install                              # Native
# Docker doesn't need separate install

# Start development server
npm run dev                              # Native
docker-compose up                        # Docker

# Run tests
npm run test                             # Native
docker-compose exec react-app npm test   # Docker

# Code quality checks
npm run format:check                     # Check code style (tabs, quotes, spacing)
npm run format:fix                       # Fix code style issues
npm run lint:check                       # Check code quality (unused vars, logic errors)
npm run lint:fix                         # Fix code quality issues
npm run lint:ts                          # Check TypeScript types
npm run lint:dead-code                   # Check for dead code

# Build and test
npm run build                            # Build for production
npx playwright test                      # E2E tests

# Bundle size monitoring (budget: 500KB)
npm run size:check                       # Check if bundle exceeds budget
npm run size:analyze                     # Visual bundle composition analysis
npm run size:info                        # Show file sizes in terminal
```

## Learning Path

1. **Review ADRs** - Learn what decisions were made and basic context
2. **Read Journey docs** - Understand the full reasoning and implementation details
3. **Study Best Practices** - Learn how to use tools and patterns properly in this project
4. **Practice Interview Responses** - Use the interview guide for talking points
5. **Implement Features** - Add new components following established patterns

This path takes you from **decisions → reasoning → usage → communication → practice**.

## Project Purpose

This project demonstrates:

- **Modern React development** practices and tooling
- **Professional workflow** setup and automation
- **Architectural thinking** through documented decisions
- **Interview preparation** with practical examples
- **Team collaboration** considerations and trade-offs

## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md) for guidelines on adding new interview topics and documentation.

## License

This project is for educational purposes - interview training and learning modern React development practices.
