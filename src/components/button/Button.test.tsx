import { render, screen } from "@testing-library/react";
import { userEvent } from "@testing-library/user-event";
import { expect, test, vi } from "vitest";
import { Button } from "./Button";

test("renders button with text", () => {
	render(<Button>Click me</Button>);
	expect(screen.getByRole("button", { name: "Click me" })).toBeInTheDocument();
});

test("calls onClick when clicked", async () => {
	const handleClick = vi.fn();
	render(<Button onClick={handleClick}>Test Button</Button>);

	await userEvent.click(screen.getByRole("button", { name: "Test Button" }));
	expect(handleClick).toHaveBeenCalledOnce();
});
