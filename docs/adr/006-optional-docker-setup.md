# ADR-006: Optional Docker Development Setup

## Status
Accepted

## Context
Need to decide on development environment strategy for React application. Team members may have different operating systems, Node.js versions, and comfort levels with local development setup. Docker can provide environment consistency but adds complexity and performance overhead.

## Decision
Implement optional Docker setup with native development as the primary approach.

**Implementation Details:** See `journey/2e-optional-docker-setup.md`

**Key Decisions:**
- **Primary approach**: Native development for best performance and developer experience
- **Optional approach**: Docker setup for team members who need environment consistency
- **Hybrid strategy**: Native for React app, Docker for future external services
- **Team choice**: Let developers choose based on their needs and comfort level

## Consequences

**Positive:**
- Best performance with native development option
- Environment consistency available when needed
- Accommodates different team member preferences and skill levels
- Easy onboarding path for new developers
- Fallback option if native setup has issues
- Ready for future external services (databases, APIs)
- Reduces "works on my machine" problems when needed

**Negative:**
- Multiple setup paths to maintain and document
- Potential inconsistencies between team members using different approaches
- Additional complexity in documentation and support
- Docker learning curve for team members who choose that path

**Neutral:**
- Most modern development teams use similar hybrid approaches
- Can migrate individual services to Docker as needed
- Documentation overhead is manageable with clear guidelines