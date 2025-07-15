# React/Frontend Interview Topics - TODO List

## 1. React Project Foundations

## Project Setup Essentials

- [ ] **CSS/Styling Solution** - CSS Modules, Tailwind, or Styled Components
- [ ] **State Management Setup** - Context API, Zustand, or Redux Toolkit
- [ ] **Routing Setup** - React Router or TanStack Router
- [ ] **Environment Variables** - .env files and type-safe env handling
- [ ] **Error Boundaries** - implementation and error handling strategy
- [ ] **Performance Monitoring** - Core Web Vitals tracking and optimization
- [ ] **Bundle Analyzer** - setup and optimization workflow
- [ ] **CI/CD Pipeline** - GitHub Actions or similar automation

## Current Status

- ✅ **Creating a React app in 2025** - document setup process, options, and decisions
- ✅ **Code Quality & Formatting** - ESLint vs Prettier vs Biome analysis and decision
- ✅ **Development Workflow** - pre-commit hooks, conventional commits, CI/CD
- 🔄 **Testing Infrastructure** - framework selection, structure, coverage

## 2. React Basics

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

## 3. Real-World React

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

## 4. Advanced React & Architecture

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
- [ ] Microfrontends — pros, cons, module federation
- [ ] Shared design systems — structure and maintenance
- [ ] Scaling folder structures and app design

### Progressive Web Apps (PWA)

- [ ] Service Workers — lifecycle and caching strategies
- [ ] Manifest and installability
- [ ] Offline support and update flow

## 5. Ecosystem & Practice

- [ ] **CSS-in-JS vs CSS Modules vs Styled Components** - pros/cons, best practices
- [ ] Animation Techniques — Framer Motion, CSS transitions
- [ ] Form Libraries — React Hook Form vs Formik

- [ ] Internationalization (i18n) — react-i18next, next-intl basics

- [ ] JavaScript Data Structures & Utilities — debounce, throttle, deep clone
- [ ] Interview-style algorithm tasks — small coding challenges in JS

## JavaScript & Browser Fundamentals

### JavaScript Fundamentals

- [ ] **JavaScript Fundamentals** - closures, hoisting, event loop, promises, async/await

### Frontend Fundamentals

- [ ] **ES6+ Features** - destructuring, spread operator, arrow functions, template literals
- [ ] **Browser Concepts** - DOM, BOM, event bubbling/capturing, browser rendering process
- [ ] **Web Performance** - bundle splitting, tree shaking, lazy loading, caching strategies
- [ ] **Accessibility (a11y)** - ARIA attributes, semantic HTML, keyboard navigation

---

**Legend:**

- ✅ Completed
- 🔄 In Progress
- [ ] Pending

_This list tracks all React/Frontend interview topics to be covered in this training project._
