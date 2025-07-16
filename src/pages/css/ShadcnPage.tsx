import { Card, CardDescription, CardHeader } from "@/components/ui/card";

export function ShadcnPage() {
	return (
		<div className="flex flex-1 flex-col gap-4 p-4">
			<h1 className="text-2xl font-bold">shadcn/ui</h1>
			<p className="text-muted-foreground">
				Copy-paste component library built on Tailwind CSS and Radix UI
				primitives.
			</p>

			<div className="space-y-6 mt-6">
				<section>
					<h2 className="text-xl font-semibold mb-3">
						Component Library Approach
					</h2>
					<p className="text-sm text-muted-foreground">
						Not a traditional npm package - copy components directly into your
						codebase for full control.
					</p>
				</section>

				<section>
					<h2 className="text-xl font-semibold mb-3">Implementation Details</h2>
					<Card className="bg-muted">
						<CardHeader>
							<CardDescription>
								Content loaded from documentation and working examples.
							</CardDescription>
						</CardHeader>
					</Card>
				</section>
			</div>
		</div>
	);
}
