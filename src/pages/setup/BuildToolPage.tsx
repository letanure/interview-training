import {
	Card,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@components/ui/card";

export function BuildToolPage() {
	return (
		<div className="flex flex-1 flex-col gap-4 p-4">
			<h1 className="text-2xl font-bold">Build Tool</h1>
			<p className="text-muted-foreground">
				Vite configuration for modern React development with TypeScript and SWC.
			</p>

			<div className="space-y-6 mt-6">
				<section>
					<h2 className="text-xl font-semibold mb-3">Why Vite?</h2>
					<ul className="list-disc pl-6 space-y-2 text-sm">
						<li>
							Lightning-fast development server with Hot Module Replacement
						</li>
						<li>Optimized build process with Rollup</li>
						<li>Native ESM support for better development experience</li>
						<li>TypeScript support out of the box</li>
						<li>SWC for faster compilation than Babel</li>
					</ul>
				</section>

				<section>
					<h2 className="text-xl font-semibold mb-3">Key Features</h2>
					<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
						<Card>
							<CardHeader>
								<CardTitle className="text-base">Fast Development</CardTitle>
								<CardDescription>
									Instant server start and sub-second HMR updates.
								</CardDescription>
							</CardHeader>
						</Card>

						<Card>
							<CardHeader>
								<CardTitle className="text-base">Optimized Builds</CardTitle>
								<CardDescription>
									Tree-shaking, code splitting, and asset optimization.
								</CardDescription>
							</CardHeader>
						</Card>

						<Card>
							<CardHeader>
								<CardTitle className="text-base">TypeScript</CardTitle>
								<CardDescription>
									First-class TypeScript support with type checking.
								</CardDescription>
							</CardHeader>
						</Card>

						<Card>
							<CardHeader>
								<CardTitle className="text-base">SWC</CardTitle>
								<CardDescription>
									Rust-based compiler for faster builds than Babel.
								</CardDescription>
							</CardHeader>
						</Card>
					</div>
				</section>

				<section>
					<h2 className="text-xl font-semibold mb-3">Configuration</h2>
					<Card className="bg-muted">
						<CardHeader>
							<CardDescription>
								See our implementation guide for detailed setup steps and
								configuration options.
							</CardDescription>
						</CardHeader>
					</Card>
				</section>
			</div>
		</div>
	);
}
