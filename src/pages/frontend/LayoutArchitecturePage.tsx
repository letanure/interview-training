import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@components/ui/card";

export function LayoutArchitecturePage() {
	return (
		<div className="flex flex-1 flex-col gap-4 p-4">
			<h1 className="text-2xl font-bold">Layout Architecture</h1>
			<p className="text-muted-foreground">
				Component-based layout patterns for scalable React applications.
			</p>

			<div className="grid gap-4 mt-6">
				<Card>
					<CardHeader>
						<CardTitle>Layout Component Pattern</CardTitle>
						<CardDescription>
							Reusable layout components for consistent UI structure
						</CardDescription>
					</CardHeader>
					<CardContent>
						<div className="space-y-4">
							<div>
								<h3 className="font-semibold text-sm mb-2">RootLayout</h3>
								<p className="text-sm text-muted-foreground">
									Main layout wrapper that provides sidebar and header
									structure.
								</p>
							</div>
							<div>
								<h3 className="font-semibold text-sm mb-2">Header Component</h3>
								<p className="text-sm text-muted-foreground">
									Breadcrumb navigation and responsive design patterns.
								</p>
							</div>
							<div>
								<h3 className="font-semibold text-sm mb-2">
									Sidebar Navigation
								</h3>
								<p className="text-sm text-muted-foreground">
									Hierarchical navigation with collapsible sections.
								</p>
							</div>
						</div>
					</CardContent>
				</Card>

				<Card>
					<CardHeader>
						<CardTitle>Documentation</CardTitle>
						<CardDescription>
							Learn more about layout architecture decisions
						</CardDescription>
					</CardHeader>
					<CardContent>
						<p className="text-sm text-muted-foreground">
							See <code>docs/07-layout-architecture/</code> for detailed ADR and
							implementation guide.
						</p>
					</CardContent>
				</Card>
			</div>
		</div>
	);
}
