import { Link } from "react-router-dom";
import {
	Card,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { route } from "@/routes/routes";

export function CssOverviewPage() {
	return (
		<div className="flex flex-1 flex-col gap-4 p-4">
			<h1 className="text-2xl font-bold">CSS Styling</h1>
			<p className="text-muted-foreground">
				Comprehensive comparison of modern CSS solutions for React applications.
			</p>

			<div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
				<Card className="hover:bg-muted/50 transition-colors">
					<CardHeader>
						<CardTitle>
							<Link to={route("cssModules")} className="hover:underline">
								CSS Modules
							</Link>
						</CardTitle>
						<CardDescription>
							Scoped CSS with local class names and build-time optimization.
						</CardDescription>
					</CardHeader>
				</Card>

				<Card className="hover:bg-muted/50 transition-colors">
					<CardHeader>
						<CardTitle>
							<Link to={route("vanillaExtract")} className="hover:underline">
								Vanilla Extract
							</Link>
						</CardTitle>
						<CardDescription>
							Zero-runtime CSS-in-TypeScript with type-safe styling.
						</CardDescription>
					</CardHeader>
				</Card>

				<Card className="hover:bg-muted/50 transition-colors">
					<CardHeader>
						<CardTitle>
							<Link to={route("tailwind")} className="hover:underline">
								Tailwind CSS
							</Link>
						</CardTitle>
						<CardDescription>
							Utility-first CSS framework for rapid UI development.
						</CardDescription>
					</CardHeader>
				</Card>

				<Card className="hover:bg-muted/50 transition-colors">
					<CardHeader>
						<CardTitle>
							<Link to={route("shadcn")} className="hover:underline">
								shadcn/ui
							</Link>
						</CardTitle>
						<CardDescription>
							Copy-paste component library built on Tailwind and Radix UI.
						</CardDescription>
					</CardHeader>
				</Card>
			</div>
		</div>
	);
}
