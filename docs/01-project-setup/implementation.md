# Setting Up a React App in 2025: My Journey and Decisions

## Introduction

This post documents my journey setting up a React application in 2025, exploring the available options and explaining my decision-making process.

## The Current Landscape (2025)

### What Changed?

- **Create React App (CRA) is officially deprecated** by the React team
- **Vite has become the new standard** for React development
- React now officially recommends frameworks for production apps

### Available Options Research

#### Build Tools

1. **Vite** - Modern, fast build tool using native ES modules
2. **Next.js** - Full-stack React framework with SSR/SSG
3. **Create React App** - ❌ Deprecated, not recommended for new projects

#### Why Vite Won

- Near-instant startup times
- Lightning-fast Hot Module Replacement (HMR)
- Modern architecture with native ES modules
- Officially recommended by React team for custom setups

## My Setup Process

### Step 1: Choosing the Build Tool

**Decision**: Vite
**Reasoning**: Best performance, modern architecture, officially recommended

### Step 2: Template Selection

When running `npm create vite@latest`, I was presented with these options:

```
│  ○ TypeScript
│  ○ TypeScript + SWC
│  ● JavaScript
│  ○ JavaScript + SWC
│  ○ React Router v7 ↗
│  ○ TanStack Router ↗
│  ○ RedwoodSDK ↗
│  ○ RSC ↗
```

#### Language Options Analysis:

- **TypeScript**: Type safety, better IDE support, catches errors early
- **TypeScript + SWC**: Same as above + faster compilation (Rust-based)
- **JavaScript**: Simpler, faster to write, no type checking
- **JavaScript + SWC**: Same as above + faster compilation

#### Framework/Router Options Analysis:

- **React Router v7**: Traditional routing, now with server capabilities
- **TanStack Router**: Type-safe routing with advanced features
- **RedwoodSDK**: Full-stack framework with GraphQL and database
- **RSC**: React Server Components for server-side rendering

### Step 3: My Decision

**Choice**: TypeScript + SWC
**Reasoning**:

- **TypeScript**: Provides type safety, better IDE support, and catches errors at compile time
- **SWC**: Speedy Web Compiler written in Rust - significantly faster than Babel for transpilation and minification
- **Perfect for testing/learning**: Gets the benefits of modern tooling while maintaining type safety
- **Performance advantage**: SWC's speed will improve development experience with faster builds and HMR

## Implementation Steps

### Step 1: Creating the Project

**Command**: `npm create vite@latest .`

**Process**:

```bash
> npx
> "create-vite" .
│
◇  Select a framework:
│  React
│
◇  Select a variant:
│  TypeScript + SWC
│
◇  Scaffolding project in /Users/letanure/Development/letanure/interview-training...
│
└  Done. Now run:

  npm install
  npm run dev
```

### Step 2: Next Commands

```bash
npm install
npm run dev
```

## Lessons Learned

### Familiarity with Modern Tooling
- **Setup feels familiar**: The TypeScript + SWC combination aligns with what I've been using recently
- **Evolution, not revolution**: Vite has become the standard gradually, making the transition smooth
- **Importance of staying current**: Regular evaluation of new options ensures you're using optimal tooling

### Key Takeaway
The React ecosystem has stabilized around Vite as the build tool of choice. While the setup process is familiar, it's crucial to periodically review new options to understand:
- What's genuinely new vs. marketing hype
- When it's time to migrate existing projects
- How to make informed decisions for different project types

### Interview Relevance
This experience reinforces the importance of:
- Understanding the "why" behind tooling choices
- Being able to explain trade-offs between options
- Staying informed about ecosystem changes without chasing every trend

## Conclusion

[TO BE WRITTEN AFTER COMPLETION]

---

_This post is part of my React/Frontend interview training project, documenting real-world setup decisions and implementation choices._
