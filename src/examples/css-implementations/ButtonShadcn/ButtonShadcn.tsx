import type React from "react";
import { Button } from "@/components/ui/button";

interface ButtonProps {
	variant?: "primary" | "secondary";
	size?: "small" | "medium" | "large";
	disabled?: boolean;
	children: React.ReactNode;
	onClick?: () => void;
}

/**
 * ButtonShadcn - Demonstrates shadcn/ui customization workflow
 *
 * IMPORTANT: This is a wrapper component for demo purposes only.
 * In a real project, you would use the raw Button from @/components/ui/button directly.
 *
 * shadcn/ui components are installed in src/components/ui/ (industry standard),
 * while our other examples are in src/examples/css-implementations/ for comparison.
 *
 * This wrapper exists only to:
 * 1. Demonstrate shadcn/ui alongside our other CSS approaches
 * 2. Show how to adapt shadcn/ui's API to match your component interface
 * 3. Maintain consistent props across all our button examples
 *
 * Key customizations made to the raw Button component:
 * - Updated CSS variables in index.css to match our color scheme
 * - Modified button variants to add borders and hover effects
 * - Adjusted sizing to match our other button implementations
 *
 * Source: https://ui.shadcn.com/docs/components/button
 */
export const ButtonShadcn: React.FC<ButtonProps> = ({
	variant = "primary",
	size = "medium",
	disabled = false,
	children,
	onClick,
}) => {
	// Map our component API to shadcn/ui's API
	const shadcnVariant = variant === "primary" ? "default" : "secondary";
	const shadcnSize =
		size === "small" ? "sm" : size === "large" ? "lg" : "default";

	return (
		<Button
			variant={shadcnVariant}
			size={shadcnSize}
			disabled={disabled}
			onClick={onClick}
		>
			{children}
		</Button>
	);
};
