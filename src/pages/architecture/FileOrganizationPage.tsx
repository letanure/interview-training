import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@components/ui/card";

export function FileOrganizationPage() {
	return (
		<div className="flex flex-1 flex-col gap-4 p-4">
			<h1 className="text-2xl font-bold">File Organization</h1>
			<p className="text-muted-foreground">
				Universal rules for organizing files and folders in any project.
			</p>

			<div className="grid gap-4 mt-6">
				<Card>
					<CardHeader>
						<CardTitle>Organization Rules</CardTitle>
						<CardDescription>
							Decision-making framework for file and folder structure
						</CardDescription>
					</CardHeader>
					<CardContent>
						<div className="space-y-4">
							<div>
								<h3 className="font-semibold text-sm mb-2">Single File Rule</h3>
								<p className="text-sm text-muted-foreground">
									If a component has only one file, don't create a folder. Keep
									it as a single file.
								</p>
							</div>
							<div>
								<h3 className="font-semibold text-sm mb-2">
									Multiple Files Rule
								</h3>
								<p className="text-sm text-muted-foreground">
									If a component has multiple files (component + test + docs),
									create a folder.
								</p>
							</div>
							<div>
								<h3 className="font-semibold text-sm mb-2">Avoid Clutter</h3>
								<p className="text-sm text-muted-foreground">
									Don't create folders with too many files. Split by domain or
									feature when needed.
								</p>
							</div>
						</div>
					</CardContent>
				</Card>

				<Card>
					<CardHeader>
						<CardTitle>Documentation</CardTitle>
						<CardDescription>
							Learn more about file organization decisions
						</CardDescription>
					</CardHeader>
					<CardContent>
						<p className="text-sm text-muted-foreground">
							See <code>docs/11-file-organization/</code> for detailed ADR,
							implementation guide, and best practices.
						</p>
					</CardContent>
				</Card>
			</div>
		</div>
	);
}
