import {
	Card,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@components/ui/card";
import { ROUTE_NAMES, route } from "@routes/routes";
import { Link } from "react-router-dom";

export function WorkflowOverviewPage() {
	return (
		<div className="flex flex-1 flex-col gap-4 p-4">
			<h1 className="text-2xl font-bold">Development Workflow</h1>
			<p className="text-muted-foreground">
				Tools and processes for maintaining code quality and developer
				productivity.
			</p>

			<div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
				<Card className="hover:bg-muted/50 transition-colors">
					<CardHeader>
						<CardTitle>
							<Link
								to={route(ROUTE_NAMES.CODE_QUALITY)}
								className="hover:underline"
							>
								Code Quality
							</Link>
						</CardTitle>
						<CardDescription>
							Biome setup for linting, formatting, and code standards.
						</CardDescription>
					</CardHeader>
				</Card>

				<Card className="hover:bg-muted/50 transition-colors">
					<CardHeader>
						<CardTitle>
							<Link to={route(ROUTE_NAMES.TESTING)} className="hover:underline">
								Testing Strategy
							</Link>
						</CardTitle>
						<CardDescription>
							Vitest and React Testing Library for unit tests.
						</CardDescription>
					</CardHeader>
				</Card>

				<Card className="hover:bg-muted/50 transition-colors">
					<CardHeader>
						<CardTitle>
							<Link
								to={route(ROUTE_NAMES.GIT_HOOKS)}
								className="hover:underline"
							>
								Git Hooks
							</Link>
						</CardTitle>
						<CardDescription>
							Husky and lint-staged for automated quality checks.
						</CardDescription>
					</CardHeader>
				</Card>

				<Card className="hover:bg-muted/50 transition-colors">
					<CardHeader>
						<CardTitle>
							<Link to={route(ROUTE_NAMES.DEV_ENV)} className="hover:underline">
								Development Environment
							</Link>
						</CardTitle>
						<CardDescription>
							Docker setup and development workflow options.
						</CardDescription>
					</CardHeader>
				</Card>

				<Card className="hover:bg-muted/50 transition-colors">
					<CardHeader>
						<CardTitle>
							<Link
								to={route(ROUTE_NAMES.NAMING_CONVENTIONS)}
								className="hover:underline"
							>
								Naming Conventions
							</Link>
						</CardTitle>
						<CardDescription>
							Consistent naming patterns for files, components, and variables.
						</CardDescription>
					</CardHeader>
				</Card>
			</div>
		</div>
	);
}
