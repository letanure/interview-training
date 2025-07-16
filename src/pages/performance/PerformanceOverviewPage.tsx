import {
	Card,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@components/ui/card";
import { ROUTE_NAMES, route } from "@routes/routes";
import { Link } from "react-router-dom";

export function PerformanceOverviewPage() {
	return (
		<div className="flex flex-1 flex-col gap-4 p-4">
			<h1 className="text-2xl font-bold">Performance & Monitoring</h1>
			<p className="text-muted-foreground">
				Strategies for monitoring and optimizing application performance.
			</p>

			<div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
				<Card className="hover:bg-muted/50 transition-colors">
					<CardHeader>
						<CardTitle>
							<Link
								to={route(ROUTE_NAMES.BUNDLE_SIZE)}
								className="hover:underline"
							>
								Bundle Size Budgets
							</Link>
						</CardTitle>
						<CardDescription>
							Performance budgets and monitoring strategies.
						</CardDescription>
					</CardHeader>
				</Card>

				<Card className="hover:bg-muted/50 transition-colors">
					<CardHeader>
						<CardTitle>
							<Link
								to={route(ROUTE_NAMES.REACT_PERFORMANCE)}
								className="hover:underline"
							>
								React Code Splitting
							</Link>
						</CardTitle>
						<CardDescription>
							Route-based code splitting and lazy loading strategies.
						</CardDescription>
					</CardHeader>
				</Card>
			</div>
		</div>
	);
}
