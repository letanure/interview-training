import { render } from "@testing-library/react";
import { userEvent } from "@testing-library/user-event";
import { expect, test, vi } from "vitest";
import { Button } from "./Button";

test("renders button with text", () => {
	const { getByRole } = render(<Button>Click me</Button>);
	expect(getByRole("button", { name: "Click me" })).toBeInTheDocument();
});

test("calls onClick when clicked", async () => {
	const handleClick = vi.fn();
	const { getByRole } = render(
		<Button onClick={handleClick}>Test Button</Button>,
	);

	await userEvent.click(getByRole("button", { name: "Test Button" }));
	expect(handleClick).toHaveBeenCalledOnce();
});
