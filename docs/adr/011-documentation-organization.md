# ADR-011: Documentation Organization Structure

## Status
Accepted

## Context
Multiple types of documentation need clear organization for team navigation and maintenance. As the project grows, contributors need to understand where different types of documentation belong and how to find existing information.

## Problem
- Contributors confused about where to put new documentation
- Documentation scattered across multiple top-level folders
- Different purposes mixed together (decisions vs. how-to guides)
- Non-standard GitHub project structure making navigation harder

## Decision
Organize all documentation under a single `docs/` folder with purpose-based subfolders:

```
docs/
├── decisions/          # ADRs (what was decided)
├── implementation/     # Journey docs (how we decided)  
├── best-practices/     # Usage guides (how to use)
└── interview-guide/    # Communication (how to talk about it)
```

**Implementation Details:** See `docs/implementation/2k-documentation-organization.md`

## Alternatives Considered

### Option 1: Status Quo (Separate Top-level Folders)
**Pros:**
- Clear separation at highest level
- Easy to find specific document types
- No file path changes needed

**Cons:**
- Multiple entry points for documentation
- Non-standard GitHub structure
- Cognitive load of remembering 4+ top-level folders

### Option 2: Single docs/ Folder (Chosen)
**Pros:**
- Single entry point for all documentation
- Conventional GitHub structure
- Easier contributor onboarding
- Maintains separation of concerns with subfolders

**Cons:**
- Requires file path updates
- One level deeper for navigation

### Option 3: Minimal Approach (README-only)
**Pros:**
- Very simple structure
- No complex organization

**Cons:**
- Poor scalability
- Mixed purposes in single files
- Hard to find specific information

### Option 4: Tool-specific Organization
**Pros:**
- Technology-focused navigation
- Matches mental model of "how do I use React?"

**Cons:**
- Cross-cutting concerns are hard to organize
- Duplicated information across tools
- Doesn't match documentation purpose patterns

## Consequences

**Positive:**
- **Clearer navigation**: Single entry point for all documentation
- **Standard structure**: Matches common GitHub project expectations
- **Maintained separation**: Purpose-based subfolders preserve clear boundaries
- **Easier onboarding**: New contributors have one place to look for docs

**Negative:**
- **File path changes**: Need to update all existing references
- **Deeper navigation**: One additional level to reach specific documents
- **Migration effort**: Requires moving files and updating links

**Neutral:**
- **Same content organization**: The 4-type system remains unchanged
- **Same boundaries**: Purpose separation is preserved