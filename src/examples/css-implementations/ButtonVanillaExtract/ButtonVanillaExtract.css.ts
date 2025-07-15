import { style, styleVariants } from "@vanilla-extract/css";

// Base button styles
export const button = style({
	alignItems: "center",
	borderRadius: "0.375rem",
	border: "none",
	cursor: "pointer",
	display: "inline-flex",
	fontFamily: "inherit",
	fontSize: "1rem",
	fontWeight: 500,
	gap: "0.5rem",
	justifyContent: "center",
	lineHeight: 1.5,
	outline: "none",
	padding: "0.75rem 1.5rem",
	textDecoration: "none",
	transition: "all 0.2s ease",
	userSelect: "none",

	// Focus styles for accessibility
	":focus-visible": {
		outline: "2px solid #3b82f6",
		outlineOffset: "2px",
	},
});

// Variant styles using styleVariants for better type safety
export const variants = styleVariants({
	primary: {
		backgroundColor: "#3b82f6",
		color: "white",

		":hover:not(:disabled)": {
			backgroundColor: "#2563eb",
			transform: "translateY(-1px)",
		},

		":active:not(:disabled)": {
			backgroundColor: "#1d4ed8",
			transform: "translateY(0)",
		},
	},
	secondary: {
		backgroundColor: "#f3f4f6",
		color: "#374151",
		border: "1px solid #d1d5db",

		":hover:not(:disabled)": {
			backgroundColor: "#e5e7eb",
			borderColor: "#9ca3af",
		},

		":active:not(:disabled)": {
			backgroundColor: "#d1d5db",
		},
	},
});

// Size variants
export const sizes = styleVariants({
	small: {
		padding: "0.5rem 1rem",
		fontSize: "0.875rem",
		borderRadius: "0.25rem",
	},
	medium: {
		// Default size - no additional styles needed
	},
	large: {
		padding: "1rem 2rem",
		fontSize: "1.125rem",
		borderRadius: "0.5rem",
	},
});

// Disabled state
export const disabled = style({
	opacity: 0.5,
	cursor: "not-allowed",
	pointerEvents: "none",
});
