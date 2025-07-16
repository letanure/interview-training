import {
	Card,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@components/ui/card";
import { ROUTE_NAMES, route } from "@routes/routes";
import { Link } from "react-router-dom";

export function FrontendOverviewPage() {
	return (
		<div className="flex flex-1 flex-col gap-4 p-4">
			<h1 className="text-2xl font-bold">Frontend Implementation</h1>
			<p className="text-muted-foreground">
				React-specific patterns and implementation strategies.
			</p>

			<div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
				<Card className="hover:bg-muted/50 transition-colors">
					<CardHeader>
						<CardTitle>
							<Link
								to={route(ROUTE_NAMES.CSS_OVERVIEW)}
								className="hover:underline"
							>
								CSS Styling
							</Link>
						</CardTitle>
						<CardDescription>
							Comparison of CSS solutions: Tailwind, CSS Modules, and more.
						</CardDescription>
					</CardHeader>
				</Card>

				<Card className="hover:bg-muted/50 transition-colors">
					<CardHeader>
						<CardTitle>
							<Link
								to={route(ROUTE_NAMES.LAYOUT_ARCHITECTURE)}
								className="hover:underline"
							>
								Layout Architecture
							</Link>
						</CardTitle>
						<CardDescription>
							Component-based layout patterns and organization.
						</CardDescription>
					</CardHeader>
				</Card>

				<Card className="hover:bg-muted/50 transition-colors">
					<CardHeader>
						<CardTitle>
							<Link to={route(ROUTE_NAMES.ROUTING)} className="hover:underline">
								Routing
							</Link>
						</CardTitle>
						<CardDescription>
							React Router implementation with named routes.
						</CardDescription>
					</CardHeader>
				</Card>
			</div>
		</div>
	);
}
