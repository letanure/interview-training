import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@components/ui/card";

export function RoutingPage() {
	return (
		<div className="flex flex-1 flex-col gap-4 p-4">
			<h1 className="text-2xl font-bold">Routing</h1>
			<p className="text-muted-foreground">
				React Router implementation with Vue Router-inspired named routes.
			</p>

			<div className="grid gap-4 mt-6">
				<Card>
					<CardHeader>
						<CardTitle>Named Routes System</CardTitle>
						<CardDescription>
							Type-safe routing with centralized route configuration
						</CardDescription>
					</CardHeader>
					<CardContent>
						<div className="space-y-4">
							<div>
								<h3 className="font-semibold text-sm mb-2">
									Route Configuration
								</h3>
								<p className="text-sm text-muted-foreground">
									Centralized route definitions with nested structure support.
								</p>
							</div>
							<div>
								<h3 className="font-semibold text-sm mb-2">Type Safety</h3>
								<p className="text-sm text-muted-foreground">
									TypeScript integration for compile-time route validation.
								</p>
							</div>
							<div>
								<h3 className="font-semibold text-sm mb-2">
									Navigation Helper
								</h3>
								<p className="text-sm text-muted-foreground">
									<code>route(ROUTE_NAMES.PAGE_NAME)</code> function for
									consistent navigation.
								</p>
							</div>
						</div>
					</CardContent>
				</Card>

				<Card>
					<CardHeader>
						<CardTitle>Documentation</CardTitle>
						<CardDescription>
							Learn more about routing implementation
						</CardDescription>
					</CardHeader>
					<CardContent>
						<p className="text-sm text-muted-foreground">
							See <code>docs/09-routing/</code> for detailed ADR, implementation
							guide, and best practices.
						</p>
					</CardContent>
				</Card>
			</div>
		</div>
	);
}
