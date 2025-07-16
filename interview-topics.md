# React/Frontend Interview Topics - Master List

## Phase 1: Foundation (Current Focus) 🎯

### ✅ Completed

- [x] **Creating a React app in 2025** - Vite, TypeScript, modern tooling
- [x] **Code Quality & Formatting** - Biome setup and configuration
- [x] **Development Workflow** - Git hooks, conventional commits
- [x] **Testing Infrastructure** - Vitest + RTL, Playwright E2E
- [x] **Docker Setup** - Optional containerized development
- [x] **Dead Code Detection** - Knip configuration
- [x] **Bundle Size Budgets** - CI monitoring with PR reporting
- [x] **NPM Scripts Convention** - category:action pattern
- [x] **CSS/Styling Solutions** - CSS Modules, Vanilla Extract, Tailwind, shadcn/ui

### 🚧 Next Up (Priority Order)

- [x] **Routing** - React Router vs TanStack Router implementation
- [x] **Files** - how to organize file
- [x] **Alias** - how to organize alias
- [ ] **lazy load** - and other react performance?
- [ ] **State Management** - Context API, Zustand, Redux Toolkit comparison
- [ ] **Environment Variables** - Type-safe env handling with Vite
- [ ] **Error Boundaries** - Error handling strategies and fallback UIs

### 📋 Foundation Backlog

- [ ] **Performance Monitoring** - Core Web Vitals tracking
- [ ] **CI/CD Pipeline** - GitHub Actions automation
- [ ] **Code Generators** - Component/hook scaffolding

## Phase 2: Core React Patterns

### React Core Concepts

- [ ] **React Component Lifecycle Methods** - explain componentDidMount, componentDidUpdate, componentWillUnmount and their hooks equivalents
- [ ] **State Management** - useState, useReducer, Context API, when to use each
- [ ] **Virtual DOM** - how it works, diffing algorithm, performance benefits
- [ ] **Rules of Hooks** - why they exist, common violations, custom hooks
- [ ] **React Performance** - React.memo, useMemo, useCallback, lazy loading
- [ ] **Async Operations** - useEffect for data fetching, handling loading states, error handling

### React Rendering & Reconciliation

- [ ] React rendering lifecycle — what causes re-renders
- [ ] Reconciliation and diffing — how React updates the DOM
- [ ] React Fiber architecture — goals, benefits, and key concepts

### Event Handling

- [ ] **Event Handling** - SyntheticEvents, event delegation, preventDefault/stopPropagation

### Forms and Controlled Components

- [ ] **Forms and Controlled Components** - controlled vs uncontrolled, form validation

### Refs and DOM Manipulation

- [ ] **Refs and DOM Manipulation** - useRef, forwardRef, when to use refs

### Error Boundaries

- [ ] **Error Boundaries** - componentDidCatch, error handling in React

## Phase 3: Production React

### React Router

- [ ] **React Router** - routing concepts, protected routes, programmatic navigation

### Custom Hooks and Hook Factories

- [ ] Custom Hooks — how to write reusable and composable hooks
- [ ] Hook Factories — parameterized hooks for common logic

### Testing Strategy

- [ ] Unit, Integration, and E2E — when to use each
- [ ] Jest + React Testing Library — patterns and pitfalls
- [ ] Cypress and Playwright — setup and use cases
- [ ] Mocking fetch, timers, and browser APIs

### Key Prop and Prop Drilling

- [ ] **Key Prop** - why keys are important, common mistakes, best practices
- [ ] **Prop Drilling** - problem and solutions (Context, state management libraries)

### Accessibility

- [ ] **Accessibility (a11y)** - ARIA attributes, semantic HTML, keyboard navigation

### TypeScript in React

- [ ] Generics in components and hooks
- [ ] Utility types (Partial, Pick, Record, etc.)
- [ ] Type-safe props and events
- [ ] Declaration files and external types

### Data Fetching & Caching

- [ ] React Query — caching, stale time, pagination, mutations
- [ ] SWR — fetch-on-focus, stale-while-revalidate pattern
- [ ] Optimistic UI and background revalidation
- [ ] Retry strategies and error recovery

## Phase 4: Advanced Architecture

### React 18 & Concurrent Features

- [ ] Concurrent rendering — what's new in React 18
- [ ] Transitions, useDeferredValue, useTransition
- [ ] Automatic batching and how it changes state updates

### React Signals & Reactivity (Experimental)

- [ ] Signals vs State — differences, when and why to use signals
- [ ] Fine-grained reactivity — comparison to solid.js and other frameworks
- [ ] Experimental APIs — React Canary features and future direction

### Server Rendering & Hydration

- [ ] SSR, SSG, ISR — differences and when to use
- [ ] Hydration issues — debugging and performance tips

### Functional Programming in React

- [ ] Functional principles — purity, immutability, composition
- [ ] Avoiding side effects — handling logic in render vs effect
- [ ] Reusable functions — utility layers, hook composition patterns

### Frontend Security Basics

- [ ] XSS, CSRF — what they are and how to prevent them
- [ ] Content Security Policy (CSP)
- [ ] Secure headers and cookies
- [ ] Dependency security — auditing and supply chain awareness

### Frontend Architecture at Scale

- [ ] Monorepos — tools and structure (Turborepo, Nx)
- [ ] Shared design systems — structure and maintenance
- [ ] Scaling folder structures and app design
- [ ] Turbopack — replacing Webpack in Next.js, performance and caveats
- [ ] Module Federation — microfrontend communication and shared libraries

### Progressive Web Apps (PWA)

- [ ] Service Workers — lifecycle and caching strategies
- [ ] Manifest and installability

### React Server Components (RSC)

- [ ] React Server Components — concept, usage, and streaming
- [ ] RSC vs client components — performance and bundling
- [ ] RSC with Next.js — file conventions, rendering behavior

### Edge Rendering & Middleware

- [ ] Middleware in Next.js — auth, logging, redirects

### Declarative State Machines

- [ ] State machines — when to use them and why
- [ ] XState — actors, transitions, guards
- [ ] Integration with React — component-driven machines

### AI + Frontend Workflows

- [ ] AI UX patterns — chat UIs, prompt builders, streaming updates
- [ ] Using LLM APIs in React — prompt input, request handling
- [ ] AI results and app state — safe UI updates and fallback logic

## Phase 5: Ecosystem & Tools

- [ ] **CSS-in-JS vs CSS Modules vs Styled Components** - pros/cons, best practices
- [ ] Animation Techniques — Framer Motion, CSS transitions
- [ ] Form Libraries — React Hook Form vs Formik

- [ ] Internationalization (i18n) — react-i18next, next-intl basics

- [ ] JavaScript Data Structures & Utilities — debounce, throttle, deep clone
- [ ] Component API Design — slots, variants, polymorphic `as` prop
- [ ] Tailwind Variants and reusable styling patterns
- [ ] Code Generation Tools — Hygen, Plop
- [ ] Storybook or similar tools for component development
- [ ] Editor & Dev Tools — VS Code, formatters, linters, snippets
- [ ] React Portals — how to render modals/toasts outside DOM hierarchy
- [ ] React DevTools — inspecting props, hooks, and re-renders
- [ ] Error Monitoring Tools — using Sentry, LogRocket, or custom loggers
- [ ] Schema-based Validation — Zod or Yup with React Hook Form
- [ ] Design Tokens — shared themes with Tailwind or CSS variables
- [ ] Build Targets — browserslist, esbuild/SWC, output formats

### Accessibility & Internationalization Deep Dive

- [ ] Accessibility testing — Lighthouse, axe DevTools, screen readers
- [ ] WCAG principles — perceivable, operable, understandable, robust
- [ ] Designing inclusive UIs — color contrast, motion preferences
- [ ] Language switcher patterns — persistence, routing
- [ ] Pluralization and number/date formatting
- [ ] Handling RTL and localized layout changes
- [ ] Linting for a11y and i18n

### Developer Experience & Support

- [ ] Developer onboarding — project structure, docs, reusable generators
- [ ] DX-first UI systems — props contracts, documentation with JSDoc/Storybook
- [ ] Error UX — human-friendly fallback UIs, graceful degradation

### Modern Libraries & Design Systems

- [ ] UI frameworks — Material UI, Radix UI, Chakra UI, shadcn/ui
- [ ] Headless UI principles — separation of logic and rendering
- [ ] Design systems at scale — tokens, theming, release strategies

### Data Visualization & Interaction

- [ ] Data visualization — Recharts, Victory, Nivo, D3 (when and why)
- [ ] Motion & UX — Framer Motion patterns, gesture-driven interfaces
- [ ] UI performance profiling — React Profiler, flamegraphs

### AI in UI

- [ ] AI-assisted UX — autocomplete, suggestions, dynamic UIs
- [ ] Prompt design in UI — safe input handling, streaming feedback
- [ ] Integrating LLMs — OpenAI API, Claude, or local models in apps
- [ ] Guardrails & fallback — invalid input, hallucination prevention, user trust
- [ ] Using AI SDKs — OpenAI, Anthropic, HuggingFace for frontend workflows
- [ ] AI-powered IDEs — Cursor, Codeium, GitHub Copilot, Claude Code
- [ ] Building with Claude Code — structure, iteration, and pairing best practices

## JavaScript & Browser Fundamentals

### JavaScript Fundamentals

- [ ] **JavaScript Fundamentals** - closures, hoisting, event loop, promises, async/await

### Frontend Fundamentals

- [ ] **ES6+ Features** - destructuring, spread operator, arrow functions, template literals
- [ ] **Browser Concepts** - DOM, BOM, event bubbling/capturing, browser rendering process
- [ ] **Web Performance** - bundle splitting, tree shaking, lazy loading, caching strategies
- [ ] **Accessibility (a11y)** - ARIA attributes, semantic HTML, keyboard navigation

## Learning Resources & Influences

### How to Learn Effectively

- [ ] Learn in public — blog, tweet, or share what you build
- [ ] Build small projects — test ideas with live examples
- [ ] Teach while learning — explain topics to others
- [ ] Pair with AI tools — use Claude Code, ChatGPT, Cursor
- [ ] Join dev communities — Discord, GitHub, Twitter, local meetups

### What to Read

- [ ] Official React docs — https://react.dev
- [ ] Kent C. Dodds’ blog — modern React patterns
- [ ] Josh Comeau’s blog — deep dives into CSS, animation, UX
- [ ] Dan Abramov’s blog — insights on React internals and design
- [ ] Tailwind docs — best-in-class docs for utility-first CSS
- [ ] EpicReact.Dev — advanced React learning platform

### Who to Follow

- [ ] @dan_abramov — React team, insights on internals and tooling
- [ ] @swyx — learning in public, React + DX + AI
- [ ] @cassidoo — dev education, career, React tips
- [ ] @kentcdodds — testing, modern patterns, accessibility
- [ ] @shadcn — Tailwind + UI libraries, component architecture
- [ ] @thekitze — React best practices and tools
- [ ] @rauchg — Vercel co-founder, Next.js and DX insights
- [ ] @acemarke — Redux maintainer, React architecture tips

---

**Legend:**

- ✅ Completed
- 🔄 In Progress
- [ ] Pending

_This list tracks all React/Frontend interview topics to be covered in this training project._

## Technical Debt & Tooling

### 🔧 Project Maintenance

- [ ] **TypeScript Path Aliases ADR** - Document @ import decision
- [ ] **Markdown Link Linter** - Check internal documentation links
- [ ] **Documentation Generator** - Auto-sync folder descriptions
- [ ] **Interview Guide Updates** - Expand for new implementations

### 🎯 Implementation Notes

- Focus on Phase 1 before moving to Phase 2
- Each topic should include: Implementation, Documentation, Interview Guide
- Prioritize high-value interview topics
- Keep technical debt manageable
