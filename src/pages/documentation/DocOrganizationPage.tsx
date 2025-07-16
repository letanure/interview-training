import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@components/ui/card";

export function DocOrganizationPage() {
	return (
		<div className="flex flex-1 flex-col gap-4 p-4">
			<h1 className="text-2xl font-bold">Documentation Organization</h1>
			<p className="text-muted-foreground">
				ADR structure and documentation strategy for technical decisions.
			</p>

			<div className="grid gap-4 mt-6">
				<Card>
					<CardHeader>
						<CardTitle>ADR Structure</CardTitle>
						<CardDescription>
							Architecture Decision Records for tracking technical choices
						</CardDescription>
					</CardHeader>
					<CardContent>
						<div className="space-y-4">
							<div>
								<h3 className="font-semibold text-sm mb-2">Document Types</h3>
								<div className="space-y-2 text-sm text-muted-foreground">
									<div>
										• <strong>adr.md</strong> - What was decided and why
									</div>
									<div>
										• <strong>implementation.md</strong> - Step-by-step guides
									</div>
									<div>
										• <strong>best-practices.md</strong> - How to use
										effectively
									</div>
									<div>
										• <strong>interview-guide.md</strong> - Key talking points
									</div>
								</div>
							</div>
							<div>
								<h3 className="font-semibold text-sm mb-2">
									Documentation Principles
								</h3>
								<div className="space-y-2 text-sm text-muted-foreground">
									<div>• Focus on decisions, not implementation details</div>
									<div>• Keep process blocks that show what happened</div>
									<div>• Remove code duplication that can become outdated</div>
									<div>• Preserve historical context and alternatives</div>
								</div>
							</div>
						</div>
					</CardContent>
				</Card>

				<Card>
					<CardHeader>
						<CardTitle>Documentation</CardTitle>
						<CardDescription>
							Learn more about documentation organization
						</CardDescription>
					</CardHeader>
					<CardContent>
						<p className="text-sm text-muted-foreground">
							See <code>docs/08-documentation-organization/</code> for detailed
							ADR and implementation guide.
						</p>
					</CardContent>
				</Card>
			</div>
		</div>
	);
}
