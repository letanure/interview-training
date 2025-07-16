import {
	Breadcrumb,
	BreadcrumbItem,
	BreadcrumbLink,
	BreadcrumbList,
	BreadcrumbPage,
	BreadcrumbSeparator,
} from "@components/ui/breadcrumb";
import { Separator } from "@components/ui/separator";
import { SidebarTrigger } from "@components/ui/sidebar";
import { buildBreadcrumbs } from "@routes/routes";
import React from "react";
import { Link, useLocation } from "react-router-dom";

export function Header() {
	const location = useLocation();
	const breadcrumbs = buildBreadcrumbs(location.pathname);

	return (
		<header className="flex h-16 shrink-0 items-center gap-2 border-b">
			<div className="flex items-center gap-2 px-3">
				<SidebarTrigger />
				<Separator orientation="vertical" className="mr-2 h-4" />
				<Breadcrumb>
					<BreadcrumbList>
						{breadcrumbs.map((item, index) => (
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
