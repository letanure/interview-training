import { Card, CardDescription, CardHeader } from "@components/ui/card";

export function CodeQualityPage() {
	return (
		<div className="flex flex-1 flex-col gap-4 p-4">
			<h1 className="text-2xl font-bold">Code Quality</h1>
			<p className="text-muted-foreground">
				Biome setup for linting, formatting, and maintaining consistent code
				standards.
			</p>

			<div className="space-y-6 mt-6">
				<section>
					<h2 className="text-xl font-semibold mb-3">
						Biome vs ESLint + Prettier
					</h2>
					<Card>
						<CardHeader>
							<CardDescription>
								All-in-one toolchain for faster linting and formatting with
								better performance.
							</CardDescription>
						</CardHeader>
					</Card>
				</section>

				<section>
					<h2 className="text-xl font-semibold mb-3">Implementation Details</h2>
					<Card className="bg-muted">
						<CardHeader>
							<CardDescription>
								Content loaded from documentation and working examples.
							</CardDescription>
						</CardHeader>
					</Card>
				</section>
			</div>
		</div>
	);
}
