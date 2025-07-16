import {
	Card,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@components/ui/card";
import { ROUTE_NAMES, route } from "@routes/routes";
import { Link } from "react-router-dom";

export function DocumentationOverviewPage() {
	return (
		<div className="flex flex-1 flex-col gap-4 p-4">
			<h1 className="text-2xl font-bold">Documentation Strategy</h1>
			<p className="text-muted-foreground">
				Strategies for maintaining consistent technical documentation and
				decision tracking.
			</p>

			<div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
				<Card className="hover:bg-muted/50 transition-colors">
					<CardHeader>
						<CardTitle>
							<Link
								to={route(ROUTE_NAMES.DOC_ORGANIZATION)}
								className="hover:underline"
							>
								Documentation Organization
							</Link>
						</CardTitle>
						<CardDescription>
							ADR structure and technical documentation strategy.
						</CardDescription>
					</CardHeader>
				</Card>
			</div>
		</div>
	);
}
