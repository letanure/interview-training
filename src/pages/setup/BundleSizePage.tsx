import { Card, CardDescription, CardHeader } from "@/components/ui/card";

export function BundleSizePage() {
	return (
		<div className="flex flex-1 flex-col gap-4 p-4">
			<h1 className="text-2xl font-bold">Bundle Size</h1>
			<p className="text-muted-foreground">
				Performance budgets and monitoring strategies for optimal user
				experience.
			</p>

			<div className="space-y-6 mt-6">
				<section>
					<h2 className="text-xl font-semibold mb-3">Performance Budgets</h2>
					<p className="text-sm text-muted-foreground">
						Automated monitoring and CI enforcement to prevent performance
						regressions.
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
