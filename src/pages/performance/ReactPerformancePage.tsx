import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@components/ui/card";

export function ReactPerformancePage() {
	return (
		<div className="flex flex-1 flex-col gap-4 p-4">
			<h1 className="text-2xl font-bold">React Code Splitting</h1>
			<p className="text-muted-foreground">
				Route-based code splitting strategies for reducing initial bundle size.
			</p>

			<div className="grid gap-4 mt-6">
				<Card>
					<CardHeader>
						<CardTitle>Code Splitting & Lazy Loading</CardTitle>
						<CardDescription>
							Route-based and component-based code splitting strategies
						</CardDescription>
					</CardHeader>
					<CardContent>
						<div className="space-y-4">
							<div>
								<h3 className="font-semibold text-sm mb-2">React.lazy()</h3>
								<p className="text-sm text-muted-foreground">
									Dynamic imports for components to reduce initial bundle size.
								</p>
							</div>
							<div>
								<h3 className="font-semibold text-sm mb-2">Suspense</h3>
								<p className="text-sm text-muted-foreground">
									Declarative loading states for lazy-loaded components.
								</p>
							</div>
							<div>
								<h3 className="font-semibold text-sm mb-2">
									Route-based Splitting
								</h3>
								<p className="text-sm text-muted-foreground">
									Split code at route boundaries for optimal user experience.
								</p>
							</div>
						</div>
					</CardContent>
				</Card>

				<Card>
					<CardHeader>
						<CardTitle>Performance Monitoring</CardTitle>
						<CardDescription>
							Tools and techniques for measuring performance
						</CardDescription>
					</CardHeader>
					<CardContent>
						<div className="space-y-4">
							<div>
								<h3 className="font-semibold text-sm mb-2">Bundle Analysis</h3>
								<p className="text-sm text-muted-foreground">
									Analyze bundle composition and identify optimization
									opportunities.
								</p>
							</div>
							<div>
								<h3 className="font-semibold text-sm mb-2">
									Loading Performance
								</h3>
								<p className="text-sm text-muted-foreground">
									Measure and optimize First Contentful Paint and Largest
									Contentful Paint.
								</p>
							</div>
							<div>
								<h3 className="font-semibold text-sm mb-2">
									Runtime Performance
								</h3>
								<p className="text-sm text-muted-foreground">
									Profile render performance and identify bottlenecks.
								</p>
							</div>
						</div>
					</CardContent>
				</Card>

				<Card>
					<CardHeader>
						<CardTitle>Documentation</CardTitle>
						<CardDescription>
							Learn more about React performance optimization
						</CardDescription>
					</CardHeader>
					<CardContent>
						<p className="text-sm text-muted-foreground">
							See <code>docs/13-react-performance/</code> for detailed ADR,
							implementation guide, and best practices.
						</p>
					</CardContent>
				</Card>
			</div>
		</div>
	);
}
