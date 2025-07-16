import { Card, CardDescription, CardHeader } from "@/components/ui/card";

export function ModulesPage() {
	return (
		<div className="flex flex-1 flex-col gap-4 p-4">
			<h1 className="text-2xl font-bold">CSS Modules</h1>
			<p className="text-muted-foreground">
				Scoped CSS with local class names and build-time optimization.
			</p>

			<div className="space-y-6 mt-6">
				<section>
					<h2 className="text-xl font-semibold mb-3">Key Benefits</h2>
					<p className="text-sm text-muted-foreground">
						Automatic class name scoping prevents style conflicts and enables
						modular CSS architecture.
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
