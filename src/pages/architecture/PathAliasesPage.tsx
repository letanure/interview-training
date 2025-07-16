import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@components/ui/card";

export function PathAliasesPage() {
	return (
		<div className="flex flex-1 flex-col gap-4 p-4">
			<h1 className="text-2xl font-bold">Path Aliases</h1>
			<p className="text-muted-foreground">
				TypeScript path mapping for cleaner imports and better developer
				experience.
			</p>

			<div className="grid gap-4 mt-6">
				<Card>
					<CardHeader>
						<CardTitle>Semantic Aliases</CardTitle>
						<CardDescription>
							Domain-specific import paths for better code organization
						</CardDescription>
					</CardHeader>
					<CardContent>
						<div className="space-y-4">
							<div>
								<h3 className="font-semibold text-sm mb-2">
									Current Configuration
								</h3>
								<div className="bg-muted p-3 rounded-md text-sm font-mono">
									<div>@components/* → src/components/*</div>
									<div>@pages/* → src/pages/*</div>
									<div>@hooks/* → src/hooks/*</div>
									<div>@utils/* → src/utils/*</div>
									<div>@types/* → src/types/*</div>
									<div>@routes/* → src/routes/*</div>
									<div>@styles/* → src/styles/*</div>
								</div>
							</div>
							<div>
								<h3 className="font-semibold text-sm mb-2">Benefits</h3>
								<ul className="text-sm text-muted-foreground space-y-1">
									<li>• Shorter import paths</li>
									<li>• Better IDE autocomplete</li>
									<li>• Easier refactoring</li>
									<li>• Clear domain separation</li>
								</ul>
							</div>
						</div>
					</CardContent>
				</Card>

				<Card>
					<CardHeader>
						<CardTitle>Documentation</CardTitle>
						<CardDescription>
							Learn more about path aliases strategy
						</CardDescription>
					</CardHeader>
					<CardContent>
						<p className="text-sm text-muted-foreground">
							See <code>docs/12-path-aliases/</code> for detailed ADR, community
							standards, and migration tools.
						</p>
					</CardContent>
				</Card>
			</div>
		</div>
	);
}
