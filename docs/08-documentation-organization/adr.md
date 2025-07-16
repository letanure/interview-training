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
Organize all documentation under a single `docs/` folder with topic-based subfolders containing the 4 document types:

```
docs/
├── 01-project-setup/
│   ├── adr.md              # What was decided
│   ├── implementation.md   # How we implemented
│   ├── best-practices.md   # How to use
│   └── interview-guide.md  # How to discuss
├── 02-code-quality/
│   ├── adr.md
│   ├── implementation.md
│   ├── best-practices.md
│   └── interview-guide.md
├── 03-css-styling/
│   ├── adr.md
│   ├── implementation.md
│   ├── best-practices.md
│   └── interview-guide.md
└── [topic-number]-[topic-name]/
    ├── adr.md
    ├── implementation.md
    ├── best-practices.md    # (optional)
    └── interview-guide.md
```

**Rationale**: Each architectural decision generates related documentation across all 4 types. Topic-based folders keep related documents together while maintaining clear document type boundaries.

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

### Option 2: Topic-Based Folders (Chosen)
**Pros:**
- Single entry point for all documentation
- Related documents grouped together by topic
- Clear topic boundaries prevent document scatter
- Scales naturally as topics are added
- Maintains 4-type document boundaries within each topic

**Cons:**
- Requires file path updates
- Two levels deeper for navigation
- Need to decide topic numbering/naming

### Option 3: Purpose-Based Folders
```
docs/
├── adr/
├── implementation/
├── best-practices/
└── interview-guide/
```
**Pros:**
- Clear separation by document type
- Easy to find all ADRs or all best practices
- Familiar structure for documentation

**Cons:**
- Related topic documents scattered across folders
- Hard to find all docs about one topic
- No clear topic boundaries

### Option 4: Minimal Approach (README-only)
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