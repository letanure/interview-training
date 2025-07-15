# shadcn/ui Best Practices

## How We Use shadcn/ui in This Project

### File Structure
- **Raw components**: `src/components/ui/` (shadcn/ui default, industry standard)
- **Demo wrapper**: `src/examples/css-implementations/ButtonShadcn/` (for comparison only)

**Important**: In production, use components from `src/components/ui/` directly. The wrapper exists only for our demo comparison.

### Adding New Components

1. **Install component**:
   ```bash
   npx shadcn@latest add [component-name]
   ```

2. **Customize if needed**:
   - Update CSS variables in `src/index.css`
   - Modify variants in the component file
   - Keep changes minimal and documented

3. **Use directly**:
   ```typescript
   import { Button } from "@/components/ui/button"
   // Not: import { ButtonShadcn } from "examples/..."
   ```

### Why We Keep the Original Folder Structure

- **Industry Standard**: Most teams expect `src/components/ui/`
- **Tool Compatibility**: shadcn/ui CLI, IDE extensions work with this structure
- **Documentation**: Official examples assume this path
- **Team Onboarding**: New developers know where to find components

### Customization Guidelines

**Do:**
- Update CSS variables for design tokens
- Modify variants for your specific use cases
- Document any changes you make
- Test accessibility after customizations

**Don't:**
- Move components out of `src/components/ui/`
- Heavily modify the base component structure
- Remove accessibility features
- Override Radix UI behavior without understanding impact

### Dependencies Management

**Core Dependencies** (keep):
- `@radix-ui/react-*` - Accessibility primitives
- `class-variance-authority` - Type-safe variants
- `clsx` - Conditional classes
- `tailwind-merge` - Class merging

**Optional Dependencies**:
- `lucide-react` - Icons (add when needed, remove if unused)

### Performance Considerations

- shadcn/ui components are **zero-runtime** (CSS extracted at build time)
- Bundle impact comes from Radix UI primitives (worth it for accessibility)
- Use tree-shaking friendly imports: `import { Button } from "@/components/ui/button"`

### Maintenance

- **Version Updates**: You own the code, no automatic updates
- **Security**: Monitor Radix UI dependency updates
- **Consistency**: Establish team conventions for customizations
- **Documentation**: Keep local changes documented for team

## When NOT to Use shadcn/ui

- **Heavy Customization**: If you need to change everything, build from scratch
- **Non-Tailwind Projects**: Requires Tailwind CSS
- **Bundle Size Critical**: Plain HTML buttons are smaller
- **Team Unfamiliarity**: If team doesn't know Tailwind + Radix UI