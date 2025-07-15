import type React from "react";
import { ButtonCssModules } from "./ButtonCssModules/ButtonCssModules";
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

			{/* Placeholder sections for other implementations */}
			<section style={{ marginBottom: "3rem" }}>
				<h2>shadcn/ui Implementation</h2>
				<p style={{ color: "#666" }}>Coming next...</p>
			</section>

			<section style={{ marginBottom: "3rem" }}>
				<h2>Tailwind CSS Implementation</h2>
				<p style={{ color: "#666" }}>Coming next...</p>
			</section>
		</div>
	);
};
