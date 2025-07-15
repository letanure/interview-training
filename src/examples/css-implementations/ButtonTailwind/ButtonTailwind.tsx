import type React from "react";
import { cn } from "../../../utils/cn";

interface ButtonProps {
	variant?: "primary" | "secondary";
	size?: "small" | "medium" | "large";
	disabled?: boolean;
	children: React.ReactNode;
	onClick?: () => void;
}

export const ButtonTailwind: React.FC<ButtonProps> = ({
	variant = "primary",
	size = "medium",
	disabled: isDisabled = false,
	children,
	onClick,
}) => {
	const baseClasses = [
		"inline-flex",
		"items-center",
		"justify-center",
		"gap-[0.5rem]",
		"font-[500]",
		"transition-all",
		"duration-[0.2s]",
		"ease-[ease]",
		"border-0",
		"cursor-pointer",
		"select-none",
		"no-underline",
		"outline-none",
		"leading-[1.5]",
		"font-[inherit]",
		"focus-visible:outline-2",
		"focus-visible:outline-offset-2",
		"focus-visible:outline-blue-500",
		"disabled:opacity-50",
		"disabled:cursor-not-allowed",
		"disabled:pointer-events-none",
	];

	const variantClasses = {
		primary: [
			"bg-[#3b82f6]",
			"text-[#ffffff]",
			"hover:bg-[#2563eb]",
			"hover:-translate-y-px",
			"active:bg-[#1d4ed8]",
			"active:translate-y-0",
		],
		secondary: [
			"bg-[#f3f4f6]",
			"text-[#374151]",
			"border-[1px]",
			"border-solid",
			"border-[#d1d5db]",
			"hover:bg-[#e5e7eb]",
			"hover:border-[#9ca3af]",
			"active:bg-[#d1d5db]",
		],
	};

	const sizeClasses = {
		small: ["px-[1rem]", "py-[0.5rem]", "text-[0.875rem]", "rounded-[0.25rem]"],
		medium: [
			"px-[1.5rem]",
			"py-[0.75rem]",
			"text-[1rem]",
			"rounded-[0.375rem]",
		],
		large: ["px-[2rem]", "py-[1rem]", "text-[1.125rem]", "rounded-[0.5rem]"],
	};

	const className = cn(baseClasses, variantClasses[variant], sizeClasses[size]);

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
