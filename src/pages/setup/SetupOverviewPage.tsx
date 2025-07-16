import { Link } from "react-router-dom";
import {
	Card,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { ROUTE_NAMES, route } from "@/routes/routes";

export function SetupOverviewPage() {
	return (
		<div className="flex flex-1 flex-col gap-4 p-4">
			<h1 className="text-2xl font-bold">Project Setup</h1>
			<p className="text-muted-foreground">
				Overview of tools and configurations for modern React development.
			</p>

			<div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
				<Card className="hover:bg-muted/50 transition-colors">
					<CardHeader>
						<CardTitle>
							<Link
								to={route(ROUTE_NAMES.BUILD_TOOL)}
								className="hover:underline"
							>
								Build Tool
							</Link>
						</CardTitle>
						<CardDescription>
							Vite configuration for fast development and optimized builds.
						</CardDescription>
					</CardHeader>
				</Card>

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
							<Link to={route(ROUTE_NAMES.TESTING)} className="hover:underline">
								Testing
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
								to={route(ROUTE_NAMES.BUNDLE_SIZE)}
								className="hover:underline"
							>
								Bundle Size
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
							<Link to={route(ROUTE_NAMES.DEV_ENV)} className="hover:underline">
								Development Environment
							</Link>
						</CardTitle>
						<CardDescription>
							Docker setup and development workflow options.
						</CardDescription>
					</CardHeader>
				</Card>
			</div>
		</div>
	);
}
