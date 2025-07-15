# shadcn/ui Interview Guide

## Key Talking Points

**What is shadcn/ui?**
"shadcn/ui is a copy-paste component library built on Radix UI for accessibility and Tailwind CSS for styling. Unlike npm packages, you copy components into your codebase and own them completely."

**Why choose shadcn/ui?**
"It gives you the speed of a component library with full customization control. You get accessible components out-of-the-box but can modify anything without dependency constraints."

**How does it differ from other UI libraries?**
"Traditional libraries like Material-UI are npm dependencies with limited customization. shadcn/ui components become part of your codebase - you can modify anything and never worry about breaking updates."

## Common Interview Questions

### Q1: How do you integrate shadcn/ui into a project?

**Answer**: "First, I install the CLI and initialize the project configuration. Then I add specific components using `npx shadcn@latest add button`. This copies the component code into `src/components/ui/` where I can customize it."

**Follow-up**: "What gets installed?"
"The component file, utility functions like the `cn` helper, and dependencies like class-variance-authority for type-safe variants and Radix UI primitives for accessibility."

### Q2: How do you customize shadcn/ui components?

**Answer**: "I customize through CSS variables in the global stylesheet and by modifying the component variants. For example, to match our design system, I update the CSS custom properties for colors and spacing, then adjust the CVA configuration if needed."

**Code Example**:
```css
:root {
  --primary: #3b82f6;
  --primary-foreground: #ffffff;
}
```

### Q3: What are the trade-offs of shadcn/ui?

**Answer**: 
- **Pros**: Full control, accessibility built-in, no dependency lock-in, type-safe variants
- **Cons**: Initial setup overhead, requires Tailwind knowledge, larger bundle than plain HTML, need to maintain copied code

### Q4: How do you ensure accessibility with shadcn/ui?

**Answer**: "shadcn/ui components are built on Radix UI primitives, which handle ARIA attributes, keyboard navigation, and focus management automatically. I test with screen readers and verify the accessibility features aren't broken during customization."

### Q5: When would you NOT use shadcn/ui?

**Answer**: "I wouldn't use it if the team isn't familiar with Tailwind CSS, if bundle size is extremely critical, or if the design requirements are so unique that I'd end up rewriting most of the component anyway."

## Technical Deep Dive Questions

### Q6: Explain the component architecture

**Answer**: "shadcn/ui uses a three-layer architecture:
1. **Radix UI** provides unstyled, accessible primitives
2. **class-variance-authority** handles type-safe variant management  
3. **Tailwind CSS** provides the styling utilities

This separation means I get accessibility guarantees, type safety, and styling flexibility."

### Q7: How do you handle component variants?

**Answer**: "I use CVA (class-variance-authority) to define type-safe variants. It compiles variant combinations at build time and provides TypeScript autocomplete."

**Code Example**:
```typescript
const buttonVariants = cva("base-classes", {
  variants: {
    variant: { primary: "bg-blue-500", secondary: "bg-gray-500" },
    size: { sm: "px-2 py-1", lg: "px-4 py-2" }
  }
});
```

### Q8: How does shadcn/ui compare to building components from scratch?

**Answer**: "Building from scratch gives maximum control but requires implementing accessibility, state management, and cross-browser compatibility. shadcn/ui provides those foundations while still allowing full customization. It's faster to start with shadcn/ui and modify than to build accessible components from zero."

## Red Flags in Interviews

**Avoid saying**:
- "It's just another UI library" (misses the copy-paste philosophy)
- "You can't customize it" (opposite of shadcn/ui's main benefit)  
- "It's better than everything else" (show nuanced understanding)

**Show understanding**:
- Know when to use it vs. alternatives
- Understand the underlying technologies (Radix UI, CVA, Tailwind)
- Can explain trade-offs clearly
- Demonstrate practical experience with customization