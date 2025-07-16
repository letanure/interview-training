import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@components/ui/card";

export function NamingConventionsPage() {
	return (
		<div className="flex flex-1 flex-col gap-4 p-4">
			<h1 className="text-2xl font-bold">Naming Conventions</h1>
			<p className="text-muted-foreground">
				Consistent naming patterns for files, components, and variables.
			</p>

			<div className="grid gap-4 mt-6">
				<Card>
					<CardHeader>
						<CardTitle>Component Naming</CardTitle>
						<CardDescription>
							PascalCase naming for React components and files
						</CardDescription>
					</CardHeader>
					<CardContent>
						<div className="space-y-4">
							<div>
								<h3 className="font-semibold text-sm mb-2">File Names</h3>
								<div className="space-y-2 text-sm text-muted-foreground">
									<div>
										• <code>ButtonComponent.tsx</code> - PascalCase for
										components
									</div>
									<div>
										• <code>useLocalStorage.ts</code> - camelCase for hooks
									</div>
									<div>
										• <code>api-client.ts</code> - kebab-case for utilities
									</div>
								</div>
							</div>
							<div>
								<h3 className="font-semibold text-sm mb-2">
									Component Structure
								</h3>
								<div className="space-y-2 text-sm text-muted-foreground">
									<div>• Component name matches file name</div>
									<div>• Export matches component name</div>
									<div>• Props interface follows ComponentProps pattern</div>
								</div>
							</div>
						</div>
					</CardContent>
				</Card>

				<Card>
					<CardHeader>
						<CardTitle>Documentation</CardTitle>
						<CardDescription>
							Learn more about naming conventions
						</CardDescription>
					</CardHeader>
					<CardContent>
						<p className="text-sm text-muted-foreground">
							See <code>docs/10-component-naming/</code> for detailed ADR and
							implementation guide.
						</p>
					</CardContent>
				</Card>
			</div>
		</div>
	);
}
