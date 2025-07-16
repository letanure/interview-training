import { Card, CardDescription, CardHeader } from "@/components/ui/card";

export function TestingPage() {
	return (
		<div className="flex flex-1 flex-col gap-4 p-4">
			<h1 className="text-2xl font-bold">Testing</h1>
			<p className="text-muted-foreground">
				Vitest and React Testing Library setup for comprehensive testing
				strategy.
			</p>

			<div className="space-y-6 mt-6">
				<section>
					<h2 className="text-xl font-semibold mb-3">Modern Testing Stack</h2>
					<p className="text-sm text-muted-foreground">
						Fast unit tests with Vitest and component testing with React Testing
						Library.
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
