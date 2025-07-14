interface ButtonProps {
	children: React.ReactNode;
	onClick?: () => void;
	variant?: "primary" | "secondary";
}

export function Button({
	children,
	onClick,
	variant = "primary",
}: ButtonProps) {
	return (
		<button type="button" onClick={onClick} className={`btn btn-${variant}`}>
			{children}
		</button>
	);
}
