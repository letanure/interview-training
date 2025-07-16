# Contributing to React/Frontend Interview Training

This document provides guidelines for contributors to add new interview topics, documentation, and implementations to this training project.

## Documentation Structure

This project uses a **4-tier documentation system**. Before contributing, understand where your content belongs:

| Doc Type                                              | Purpose                | Example                                                   |
| ----------------------------------------------------- | ---------------------- | --------------------------------------------------------- |
| **[ADR](docs/01-project-setup/adr.md)**                         | What was decided       | "We chose Tailwind CSS over styled-components"            |
| **[Implementation](docs/01-project-setup/implementation.md)**   | Why and how we decided | "Here are 4 CSS options, pros/cons, implementation steps" |
| **[Best Practices](docs/03-css-styling/best-practices.md)**            | How to use it properly | "Use `cn()` for conditional classes, avoid `@apply`"      |
| **[Interview Guide](docs/01-project-setup/interview-guide.md)** | How to talk about it   | "When asked about CSS, say: 'I use utility-first...'"     |

## Adding New Content

### 1. Update Interview Topics List

Add your new topic to `interview-topics.md`:

```markdown
- [ ] **Your Topic Name** - Brief description of what it covers
```

### 2. Choose the Right Documentation Type

**For architectural decisions:**

- Location: `docs/[topic-number]-[topic-name]/adr.md`
- Format: Follow ADR template with context, decision, alternatives, consequences

**For implementation guides:**

- Location: `docs/[topic-number]-[topic-name]/implementation.md`
- Format: Step-by-step with options considered and reasoning

**For usage guidelines:**

- Location: `docs/[topic-number]-[topic-name]/best-practices.md`
- Format: How-to guides with do's and don'ts

**For interview preparation:**

- Location: `docs/[topic-number]-[topic-name]/interview-guide.md`
- Format: Common questions with talking points and code examples

### 3. Implementation Structure

Follow this structure for topic implementations:

```
src/topics/[topic-name]/
├── README.md           # Theory and explanation
├── implementation.md   # Code examples
├── questions.md        # Interview Q&A
├── Component.tsx       # Working example (if applicable)
└── Component.test.tsx  # Tests for the example
```

### 4. Documentation Standards

#### README.md Format

```markdown
# Topic Name

## Overview

Brief explanation of the concept

## Key Concepts

- Bullet points of important ideas
- Use clear, concise language

## When to Use

Practical scenarios and use cases

## Common Pitfalls

What to avoid and why

## Interview Relevance

Why this topic matters in interviews
```

#### Implementation.md Format

```markdown
# Implementation Examples

## Basic Example

Simple, clear code showing the concept

## Advanced Example

More complex real-world usage

## Best Practices

- Do this
- Don't do that
- Performance considerations
```

#### Questions.md Format

````markdown
# Interview Questions & Answers

## Q1: Basic Question

**Question:** What is [concept]?

**Answer:** Clear, technical explanation that demonstrates understanding.

**Follow-up:** How would you implement this?

**Code Example:**

```js
// Working code that solves the problem
```
````

## Development Workflow

### Before Adding New Content

1. **Check existing topics** - Ensure the topic isn't already covered
2. **Update todo list** - Add the topic to the project todo list
3. **Follow project conventions** - Use existing patterns and structure

### Implementation Process

1. **Create topic branch**

   ```bash
   git checkout -b topic/[topic-name]
   ```

2. **Add topic to interview-topics.md**

   ```bash
   # Mark as in-progress
   - [x] **Your Topic** - Description (IN PROGRESS)
   ```

3. **Create implementation files** following the structure above

4. **Write working code examples** that:

   - Compile without errors
   - Follow project coding standards
   - Include proper TypeScript types
   - Have corresponding tests

5. **Test your implementation**

   ```bash
   npm run test
   npm run lint
   npm run lint:ts
   ```

6. **Update main documentation**
   - Add links to README.md if needed
   - Update any relevant journey docs

### Code Standards

#### TypeScript

- Use strict TypeScript settings
- Provide proper type annotations
- Avoid `any` types

#### React Components

- Use function components with hooks
- Follow component folder structure
- Include PropTypes or TypeScript interfaces
- Add proper error handling

#### Testing

- Write tests for all components
- Cover both happy path and edge cases
- Use React Testing Library patterns
- Follow existing test structure

#### Code Style

- Use Biome for formatting
- Follow existing code patterns
- Add meaningful comments for complex logic
- Keep functions small and focused

## Review Process

### Self-Review Checklist

Before submitting:

- [ ] Code compiles without errors
- [ ] All tests pass
- [ ] Linting passes
- [ ] TypeScript checks pass
- [ ] Documentation is clear and complete
- [ ] Examples are working and tested
- [ ] Interview questions are relevant and well-answered

### Content Quality Standards

#### Technical Accuracy

- Explanations are correct and up-to-date
- Code examples follow current best practices
- Performance considerations are mentioned when relevant

#### Interview Relevance

- Content reflects real interview scenarios
- Questions match actual interview difficulty
- Answers demonstrate deep understanding

#### Clarity and Completeness

- Explanations are clear for different skill levels
- Examples progress from simple to complex
- Common mistakes and edge cases are covered

## Topic Suggestions

### High Priority (Core React)

- Component lifecycle and hooks equivalents
- State management patterns
- Performance optimization techniques
- Testing strategies

### Medium Priority (Frontend Fundamentals)

- JavaScript concepts (closures, prototypes, async)
- Browser APIs and performance
- CSS architecture and responsive design
- Accessibility best practices

### Advanced Topics

- Custom hooks design patterns
- Advanced TypeScript patterns
- Micro-frontends architecture
- Server-side rendering considerations

## Getting Help

### Questions About Content

- Check existing documentation first
- Review similar topics for patterns
- Ask specific questions about implementation

### Technical Issues

- Ensure you're following the project setup in README.md
- Check that all dependencies are installed
- Review CLAUDE.md for project context

### Documentation Issues

- Follow the established format and structure
- Keep explanations concise but complete
- Include practical examples

## Project Goals

Remember that this project aims to:

1. **Prepare for real interviews** - Content should reflect actual interview scenarios
2. **Demonstrate practical skills** - Include working code, not just theory
3. **Document decision-making** - Explain why choices were made
4. **Maintain quality** - Follow professional development practices

## File Structure Reference

```
interview-training/
├── README.md                   # Project overview
├── CONTRIBUTING.md            # This file
├── interview-topics.md        # Master list of topics
├── docs/                      # All documentation (topic-based)
│   ├── 01-project-setup/     # React setup with Vite, TypeScript
│   ├── 02-code-quality/      # Biome, linting, formatting
│   ├── 03-css-styling/       # CSS solutions comparison
│   └── [topic-folders]/      # Each contains: adr.md, implementation.md, etc.
├── src/
│   ├── examples/            # Working code examples
│   └── components/          # Reusable components
└── e2e/                    # End-to-end tests
```

## Questions?

If you have questions about contributing:

1. Check existing documentation and examples
2. Review similar implementations in the project
3. Follow the established patterns and conventions

The goal is to create high-quality, interview-relevant content that helps developers prepare for frontend interviews with practical, working examples.
