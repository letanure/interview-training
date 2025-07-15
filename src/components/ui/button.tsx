import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import * as React from "react";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
	"inline-flex items-center justify-center gap-[0.5rem] font-[500] transition-all duration-[0.2s] ease-[ease] border-0 cursor-pointer select-none no-underline outline-none leading-[1.5] font-[inherit] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500 disabled:opacity-50 disabled:cursor-not-allowed disabled:pointer-events-none",
	{
		variants: {
			variant: {
				default:
					"bg-[#3b82f6] text-[#ffffff] hover:bg-[#2563eb] hover:-translate-y-px active:bg-[#1d4ed8] active:translate-y-0",
				destructive:
					"bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
				outline:
					"border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",
				secondary:
					"bg-[#f3f4f6] text-[#374151] border border-solid border-[#d1d5db] hover:bg-[#e5e7eb] hover:border-[#9ca3af] active:bg-[#d1d5db]",
				ghost: "hover:bg-accent hover:text-accent-foreground",
				link: "text-primary underline-offset-4 hover:underline",
			},
			size: {
				default: "px-[1.5rem] py-[0.75rem] text-[1rem] rounded-[0.375rem]", // medium: 1.5rem 0.75rem, 1rem, 0.375rem
				sm: "px-[1rem] py-[0.5rem] text-[0.875rem] rounded-[0.25rem]", // small: 1rem 0.5rem, 0.875rem, 0.25rem
				lg: "px-[2rem] py-[1rem] text-[1.125rem] rounded-[0.5rem]", // large: 2rem 1rem, 1.125rem, 0.5rem
				icon: "h-9 w-9",
			},
		},
		defaultVariants: {
			variant: "default",
			size: "default",
		},
	},
);

export interface ButtonProps
	extends React.ButtonHTMLAttributes<HTMLButtonElement>,
		VariantProps<typeof buttonVariants> {
	asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
	({ className, variant, size, asChild = false, ...props }, ref) => {
		const Comp = asChild ? Slot : "button";
		return (
			<Comp
				className={cn(buttonVariants({ variant, size, className }))}
				ref={ref}
				{...props}
			/>
		);
	},
);
Button.displayName = "Button";

export { Button, buttonVariants };
