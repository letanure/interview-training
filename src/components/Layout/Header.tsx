import React from "react";
import { Link } from "react-router-dom";
import {
	Breadcrumb,
	BreadcrumbItem,
	BreadcrumbLink,
	BreadcrumbList,
	BreadcrumbPage,
	BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Separator } from "@/components/ui/separator";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { ROUTE_NAMES, route } from "@/routes/routes";

interface HeaderProps {
	title?: string;
	breadcrumbs?: Array<{
		label: string;
		href?: string;
	}>;
}

export function Header({ title = "Home", breadcrumbs }: HeaderProps) {
	const defaultBreadcrumbs = [
		{ label: "React Training", href: route(ROUTE_NAMES.HOME) },
		{ label: title },
	];

	const items = breadcrumbs || defaultBreadcrumbs;

	return (
		<header className="flex h-16 shrink-0 items-center gap-2 border-b">
			<div className="flex items-center gap-2 px-3">
				<SidebarTrigger />
				<Separator orientation="vertical" className="mr-2 h-4" />
				<Breadcrumb>
					<BreadcrumbList>
						{items.map((item, index) => (
							<React.Fragment key={item.label}>
								{index > 0 && (
									<BreadcrumbSeparator className="hidden md:block" />
								)}
								<BreadcrumbItem
									className={index === 0 ? "hidden md:block" : ""}
								>
									{item.href ? (
										<BreadcrumbLink asChild>
											<Link to={item.href}>{item.label}</Link>
										</BreadcrumbLink>
									) : (
										<BreadcrumbPage>{item.label}</BreadcrumbPage>
									)}
								</BreadcrumbItem>
							</React.Fragment>
						))}
					</BreadcrumbList>
				</Breadcrumb>
			</div>
		</header>
	);
}
