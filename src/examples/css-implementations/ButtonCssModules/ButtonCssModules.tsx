import type React from "react";
import styles from "./ButtonCssModules.module.css";

interface ButtonProps {
	variant?: "primary" | "secondary";
	size?: "small" | "medium" | "large";
	disabled?: boolean;
	children: React.ReactNode;
	onClick?: () => void;
}

export const ButtonCssModules: React.FC<ButtonProps> = ({
	variant = "primary",
	size = "medium",
	disabled = false,
	children,
	onClick,
}) => {
	const buttonClasses = [
		styles.button,
		styles[variant],
		size !== "medium" && styles[size],
		disabled && styles.disabled,
	]
		.filter(Boolean)
		.join(" ");

	return (
		<button
			className={buttonClasses}
			disabled={disabled}
			onClick={onClick}
			type="button"
		>
			{children}
		</button>
	);
};
