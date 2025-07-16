# Documentation Best Practices

## Overview

This guide covers best practices for writing and maintaining documentation in our topic-based structure.

## Content Guidelines

### Implementation Documents

**Purpose:** Describe what was built, why it was built, and where it lives.

**Best Practices:**
- Describe the process and reasoning behind decisions
- Focus on what was created, why it was created, where it lives
- Avoid copying full code implementations that can become outdated
- Point users to actual files for current implementation details
- Use simple examples only to illustrate key concepts

**Example Structure:**
```markdown
## What Was Created
- List of files and components created
- Brief description of their purpose

## Why This Approach
- Reasoning behind architectural decisions
- Trade-offs considered
- Benefits achieved

## Key Implementation Details
- High-level description of how things work
- Important patterns used
- Integration points with other systems
```

### ADR Documents

**Purpose:** Document architectural decisions and their rationale.

**Best Practices:**
- Focus on the decision-making process and trade-offs
- Show simple examples from actual components when helpful
- Avoid large code blocks that can become stale
- Explain alternatives considered and why they were rejected
- Use brief code snippets only when necessary for clarity

**Example Structure:**
```markdown
## Problem
- Clear statement of what needed to be decided

## Decision
- What was chosen and why

## Alternatives Considered
- Other options evaluated
- Pros and cons of each

## Consequences
- Positive and negative outcomes
- Future implications
```

### Best Practices Documents

**Purpose:** Guide effective usage of implemented systems.

**Best Practices:**
- Describe patterns and approaches, not full implementations
- Use brief code snippets only when necessary for clarity
- Focus on dos and don'ts with clear explanations
- Point to actual files for complete implementations
- Include common pitfalls and how to avoid them

**Example Structure:**
```markdown
## ✅ Good Patterns
- Recommended approaches with brief examples
- Why these patterns work well

## ❌ Anti-Patterns
- What to avoid with explanations
- Common mistakes and their consequences

## Common Use Cases
- Typical scenarios and how to handle them
- Reference to actual implementations
```

### Interview Guide Documents

**Purpose:** Provide talking points for technical discussions.

**Best Practices:**
- Focus on concepts and decision-making process
- Use simple examples to illustrate key ideas
- Avoid complex code blocks that distract from discussion
- Emphasize understanding over implementation details
- Include potential questions and thoughtful answers

**Example Structure:**
```markdown
## Key Concepts
- Main ideas to understand and explain

## Common Questions
- Typical interview questions about this topic
- Thoughtful answers that demonstrate understanding

## Technical Deep Dive
- More detailed explanations for senior discussions
- Trade-offs and architectural considerations
```

## Writing Style

### Tone and Voice
- **Concise and clear**: Avoid unnecessary complexity
- **Explanatory**: Focus on the "why" behind decisions
- **Practical**: Include actionable guidance
- **Maintenance-friendly**: Write content that stays relevant

### Code Examples
- **Minimal**: Use only when necessary for understanding
- **Current**: Reference actual files rather than copying code
- **Simple**: Show key concepts, not complete implementations
- **Contextual**: Explain why the example matters

### Structure
- **Consistent**: Follow established patterns across documents
- **Scannable**: Use headers, lists, and formatting effectively
- **Logical**: Organize information in a helpful sequence
- **Complete**: Cover all necessary aspects of the topic

## Maintenance

### Keeping Documentation Current
- **Regular reviews**: Check for outdated information
- **File references**: Update links when files are moved
- **Decision updates**: Add new ADRs when decisions change
- **Process improvements**: Update best practices as we learn

### Avoiding Staleness
- **Describe, don't copy**: Focus on what exists, not how it's implemented
- **Link to source**: Reference actual files for current details
- **Update triggers**: Know when documentation needs updates
- **Version awareness**: Consider how changes affect existing docs

## Quality Checklist

### Before Publishing
- [ ] Content describes what exists and why
- [ ] Code examples are minimal and necessary
- [ ] Links to actual files are correct
- [ ] Structure follows established patterns
- [ ] Language is clear and concise

### Regular Maintenance
- [ ] Information is still accurate
- [ ] Links to files still work
- [ ] Examples reflect current implementation
- [ ] Structure matches current standards
- [ ] Content serves its intended purpose

## Common Pitfalls

### What to Avoid
- **Code duplication**: Don't copy full implementations into docs
- **Outdated examples**: Avoid code that can become stale
- **Over-documentation**: Don't document every implementation detail
- **Unclear purpose**: Each document should have a clear role
- **Maintenance burden**: Avoid content that's hard to keep current

### Better Approaches
- **Reference actual files**: Point to source code for current details
- **Focus on decisions**: Document why things were built this way
- **Use simple examples**: Show concepts, not complete implementations
- **Maintain purpose**: Keep each document type focused on its role
- **Design for change**: Write content that adapts to code evolution

## Related Documentation
- [ADR-011: Documentation Organization Structure](./adr.md)
- [Project Guidelines](../../CLAUDE.md)