import { Card, CardDescription, CardHeader } from "@/components/ui/card";

export function VanillaExtractPage() {
	return (
		<div className="flex flex-1 flex-col gap-4 p-4">
			<h1 className="text-2xl font-bold">Vanilla Extract</h1>
			<p className="text-muted-foreground">
				Zero-runtime CSS-in-TypeScript with type-safe styling and excellent
				performance.
			</p>

			<div className="space-y-6 mt-6">
				<section>
					<h2 className="text-xl font-semibold mb-3">Type-Safe Styling</h2>
					<p className="text-sm text-muted-foreground">
						Write CSS in TypeScript with compile-time type checking and zero
						runtime overhead.
					</p>
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
