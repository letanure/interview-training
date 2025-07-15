# Best Practices Index

This document organizes all best practices and "how-to" guides for this project, categorized by area of development.

## Purpose

**Best practices docs answer:** "How should I use this tool/pattern in this project?"

**NOT:** "Why did we choose this?" (that's in Journey docs) or "What did we decide?" (that's in ADRs)

## Categories

### 🎨 **Styling & CSS**
- [Tailwind Best Practices](tailwind-best-practices.md) - How to use Tailwind CSS effectively
- *Coming soon: CSS Modules patterns, Vanilla Extract usage*

### 🧪 **Testing**
- *Coming soon: Vitest patterns, Playwright best practices*

### 🔧 **Code Quality**
- *Coming soon: Biome configuration, Git hooks usage*

### 📦 **Build & Performance**
- *Coming soon: Bundle optimization, Vite configuration*

### 🏗️ **Architecture**
- *Coming soon: Component patterns, folder structure*

### 🔄 **Git & Workflow**
- *Coming soon: Commit conventions, PR guidelines*

## How This Differs from Other Docs

| Doc Type | Purpose | Example |
|----------|---------|---------|
| **ADR** | What was decided | "We chose Tailwind CSS over styled-components" |
| **Journey** | Why and how we decided | "Here are 4 CSS options we considered, pros/cons, and implementation steps" |
| **Best Practices** | How to use it properly | "Use `cn()` for conditional classes, avoid `@apply`" |
| **Interview Guide** | How to talk about it | "When asked about CSS, say: 'I use utility-first with component variants...'" |

## When to Add New Best Practices

Create a new best practices doc when:
- ✅ You've implemented a tool/pattern and learned how to use it effectively
- ✅ There are specific "do's and don'ts" for this project
- ✅ New team members need guidance on usage patterns
- ✅ You've discovered anti-patterns to avoid

Don't create best practices docs for:
- ❌ General tool documentation (link to official docs instead)
- ❌ Decision-making process (that belongs in Journey docs)
- ❌ Interview talking points (that belongs in Interview Guide)

---

*This index is part of the React/Frontend interview training project documentation structure.*