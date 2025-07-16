import {
	Card,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@components/ui/card";
import { ROUTE_NAMES, route } from "@routes/routes";
import { Link } from "react-router-dom";

export function ArchitectureOverviewPage() {
	return (
		<div className="flex flex-1 flex-col gap-4 p-4">
			<h1 className="text-2xl font-bold">Architecture & Setup</h1>
			<p className="text-muted-foreground">
				Foundational decisions for project structure and development setup.
			</p>

			<div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
				<Card className="hover:bg-muted/50 transition-colors">
					<CardHeader>
						<CardTitle>
							<Link
								to={route(ROUTE_NAMES.PROJECT_SETUP)}
								className="hover:underline"
							>
								Project Setup
							</Link>
						</CardTitle>
						<CardDescription>
							Initial React project configuration and setup decisions.
						</CardDescription>
					</CardHeader>
				</Card>

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
								to={route(ROUTE_NAMES.FILE_ORGANIZATION)}
								className="hover:underline"
							>
								File Organization
							</Link>
						</CardTitle>
						<CardDescription>
							Rules for organizing files and folders in any project.
						</CardDescription>
					</CardHeader>
				</Card>

				<Card className="hover:bg-muted/50 transition-colors">
					<CardHeader>
						<CardTitle>
							<Link
								to={route(ROUTE_NAMES.PATH_ALIASES)}
								className="hover:underline"
							>
								Path Aliases
							</Link>
						</CardTitle>
						<CardDescription>
							TypeScript path mapping for cleaner imports.
						</CardDescription>
					</CardHeader>
				</Card>
			</div>
		</div>
	);
}
