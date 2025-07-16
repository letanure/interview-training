import { Card, CardDescription, CardHeader } from "@components/ui/card";

export function GitHooksPage() {
	return (
		<div className="flex flex-1 flex-col gap-4 p-4">
			<h1 className="text-2xl font-bold">Git Hooks</h1>
			<p className="text-muted-foreground">
				Husky and lint-staged configuration for automated quality checks.
			</p>

			<div className="space-y-6 mt-6">
				<section>
					<h2 className="text-xl font-semibold mb-3">
						Automated Quality Gates
					</h2>
					<p className="text-sm text-muted-foreground">
						Pre-commit hooks ensure code quality before commits reach the
						repository.
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
