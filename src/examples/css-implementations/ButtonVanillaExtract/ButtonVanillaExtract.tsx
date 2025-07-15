import type React from "react";
import { button, disabled, sizes, variants } from "./ButtonVanillaExtract.css";

interface ButtonProps {
	variant?: "primary" | "secondary";
	size?: "small" | "medium" | "large";
	disabled?: boolean;
	children: React.ReactNode;
	onClick?: () => void;
}

export const ButtonVanillaExtract: React.FC<ButtonProps> = ({
	variant = "primary",
	size = "medium",
	disabled: isDisabled = false,
	children,
	onClick,
}) => {
	// Build className with type safety - notice the autocompletion!
	const className = [
		button,
		variants[variant], // TypeScript knows these are valid variants
		sizes[size], // TypeScript knows these are valid sizes
		isDisabled && disabled,
	]
		.filter(Boolean)
		.join(" ");

	return (
		<button
			className={className}
			disabled={isDisabled}
			onClick={onClick}
			type="button"
		>
			{children}
		</button>
	);
};
