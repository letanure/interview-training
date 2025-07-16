import { Loader2 } from "lucide-react";

export function PageLoader() {
	return (
		<div className="flex flex-1 items-center justify-center">
			<div className="flex items-center gap-2 text-muted-foreground">
				<Loader2 className="h-4 w-4 animate-spin" />
				<span>Loading...</span>
			</div>
		</div>
	);
}
