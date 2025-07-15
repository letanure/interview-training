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
├── README.md                 # This file
├── CONTRIBUTING.md           # Guidelines for adding interview topics
├── interview-topics.md       # Complete list of React/Frontend topics
├── docs/                     # Current applied rules and best practices
├── journey/                  # Implementation details with options considered
├── adr/                      # Decision log (what, when, why)
├── src/                      # React application source code
└── e2e/                      # End-to-end test files
```

## Technology Stack

- **Build Tool**: Vite with TypeScript + SWC
- **Code Quality**: Biome (linting + formatting)
- **Git Hooks**: Husky + lint-staged + commitlint
- **Unit Testing**: Vitest + React Testing Library
- **E2E Testing**: Playwright
- **Development**: Optional Docker setup
- **Bundle Size**: 500KB budget with CI enforcement (PR checks will fail if exceeded)
- **CSS/Styling**: Multiple solutions implemented for demonstration and practice

## Documentation

### Implementation Guides
- [Journey Documentation](journey/README.md) - Step-by-step implementation details with options considered and reasoning

### Current Applied Rules
- [Documentation](docs/README.md) - Best practices, patterns, and development guidelines currently in use

### Decision Log
- [ADR Index](adr/README.md) - Historical record of architectural decisions (what, when, why)

### Interview Topics
- [Interview Topics List](interview-topics.md) - Comprehensive React/Frontend topics to cover
- Organized by priority and completion status

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
docker-compose exec react-app npm test  # Docker

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

1. **Start with the journey docs** - Understand setup decisions and implementation
2. **Review ADRs** - Learn the reasoning behind architectural choices
3. **Practice interview topics** - Work through the topics list systematically
4. **Implement features** - Add new components following established patterns

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