import type React from "react";
import { ButtonCssModules } from "./ButtonCssModules/ButtonCssModules";
import { ButtonShadcn } from "./ButtonShadcn/ButtonShadcn";
import { ButtonTailwind } from "./ButtonTailwind/ButtonTailwind";
import { ButtonVanillaExtract } from "./ButtonVanillaExtract/ButtonVanillaExtract";

export const ButtonShowcase: React.FC = () => {
	return (
		<div style={{ padding: "2rem", fontFamily: "system-ui" }}>
			<h1>Button Implementations Showcase</h1>
			<p>
				Demonstrating different CSS styling approaches for the same component
			</p>

			<section style={{ marginBottom: "3rem" }}>
				<h2>CSS Modules Implementation</h2>
				<p style={{ color: "#666", marginBottom: "1rem" }}>
					Traditional scoped CSS with module imports
				</p>
				<div
					style={{
						display: "flex",
						gap: "1rem",
						flexWrap: "wrap",
						marginBottom: "1rem",
					}}
				>
					<ButtonCssModules variant="primary" size="small">
						Small Primary
					</ButtonCssModules>
					<ButtonCssModules variant="primary" size="medium">
						Medium Primary
					</ButtonCssModules>
					<ButtonCssModules variant="primary" size="large">
						Large Primary
					</ButtonCssModules>
				</div>

				<div
					style={{
						display: "flex",
						gap: "1rem",
						flexWrap: "wrap",
						marginBottom: "1rem",
					}}
				>
					<ButtonCssModules variant="secondary" size="small">
						Small Secondary
					</ButtonCssModules>
					<ButtonCssModules variant="secondary" size="medium">
						Medium Secondary
					</ButtonCssModules>
					<ButtonCssModules variant="secondary" size="large">
						Large Secondary
					</ButtonCssModules>
				</div>

				<div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
					<ButtonCssModules variant="primary" disabled>
						Disabled Primary
					</ButtonCssModules>
					<ButtonCssModules variant="secondary" disabled>
						Disabled Secondary
					</ButtonCssModules>
				</div>
			</section>

			<section style={{ marginBottom: "3rem" }}>
				<h2>Vanilla Extract Implementation</h2>
				<p style={{ color: "#666", marginBottom: "1rem" }}>
					Zero-runtime CSS-in-TypeScript with full type safety
				</p>
				<div
					style={{
						display: "flex",
						gap: "1rem",
						flexWrap: "wrap",
						marginBottom: "1rem",
					}}
				>
					<ButtonVanillaExtract variant="primary" size="small">
						Small Primary
					</ButtonVanillaExtract>
					<ButtonVanillaExtract variant="primary" size="medium">
						Medium Primary
					</ButtonVanillaExtract>
					<ButtonVanillaExtract variant="primary" size="large">
						Large Primary
					</ButtonVanillaExtract>
				</div>

				<div
					style={{
						display: "flex",
						gap: "1rem",
						flexWrap: "wrap",
						marginBottom: "1rem",
					}}
				>
					<ButtonVanillaExtract variant="secondary" size="small">
						Small Secondary
					</ButtonVanillaExtract>
					<ButtonVanillaExtract variant="secondary" size="medium">
						Medium Secondary
					</ButtonVanillaExtract>
					<ButtonVanillaExtract variant="secondary" size="large">
						Large Secondary
					</ButtonVanillaExtract>
				</div>

				<div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
					<ButtonVanillaExtract variant="primary" disabled>
						Disabled Primary
					</ButtonVanillaExtract>
					<ButtonVanillaExtract variant="secondary" disabled>
						Disabled Secondary
					</ButtonVanillaExtract>
				</div>
			</section>

			<section style={{ marginBottom: "3rem" }}>
				<h2>Tailwind CSS Implementation</h2>
				<p style={{ color: "#666", marginBottom: "1rem" }}>
					Utility-first CSS framework with rapid development
				</p>
				<div
					style={{
						display: "flex",
						gap: "1rem",
						flexWrap: "wrap",
						marginBottom: "1rem",
					}}
				>
					<ButtonTailwind variant="primary" size="small">
						Small Primary
					</ButtonTailwind>
					<ButtonTailwind variant="primary" size="medium">
						Medium Primary
					</ButtonTailwind>
					<ButtonTailwind variant="primary" size="large">
						Large Primary
					</ButtonTailwind>
				</div>

				<div
					style={{
						display: "flex",
						gap: "1rem",
						flexWrap: "wrap",
						marginBottom: "1rem",
					}}
				>
					<ButtonTailwind variant="secondary" size="small">
						Small Secondary
					</ButtonTailwind>
					<ButtonTailwind variant="secondary" size="medium">
						Medium Secondary
					</ButtonTailwind>
					<ButtonTailwind variant="secondary" size="large">
						Large Secondary
					</ButtonTailwind>
				</div>

				<div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
					<ButtonTailwind variant="primary" disabled>
						Disabled Primary
					</ButtonTailwind>
					<ButtonTailwind variant="secondary" disabled>
						Disabled Secondary
					</ButtonTailwind>
				</div>
			</section>

			<section style={{ marginBottom: "3rem" }}>
				<h2>shadcn/ui Implementation</h2>
				<p style={{ color: "#666", marginBottom: "1rem" }}>
					Copy-paste component library built on Radix UI + Tailwind CSS
				</p>
				<div
					style={{
						display: "flex",
						gap: "1rem",
						flexWrap: "wrap",
						marginBottom: "1rem",
					}}
				>
					<ButtonShadcn variant="primary" size="small">
						Small Primary
					</ButtonShadcn>
					<ButtonShadcn variant="primary" size="medium">
						Medium Primary
					</ButtonShadcn>
					<ButtonShadcn variant="primary" size="large">
						Large Primary
					</ButtonShadcn>
				</div>

				<div
					style={{
						display: "flex",
						gap: "1rem",
						flexWrap: "wrap",
						marginBottom: "1rem",
					}}
				>
					<ButtonShadcn variant="secondary" size="small">
						Small Secondary
					</ButtonShadcn>
					<ButtonShadcn variant="secondary" size="medium">
						Medium Secondary
					</ButtonShadcn>
					<ButtonShadcn variant="secondary" size="large">
						Large Secondary
					</ButtonShadcn>
				</div>

				<div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
					<ButtonShadcn variant="primary" disabled>
						Disabled Primary
					</ButtonShadcn>
					<ButtonShadcn variant="secondary" disabled>
						Disabled Secondary
					</ButtonShadcn>
				</div>
			</section>
		</div>
	);
};
