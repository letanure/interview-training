import {
	Collapsible,
	CollapsibleContent,
	CollapsibleTrigger,
} from "@components/ui/collapsible";
import {
	Sidebar,
	SidebarContent,
	SidebarGroup,
	SidebarGroupContent,
	SidebarGroupLabel,
	SidebarHeader,
	SidebarMenu,
	SidebarMenuButton,
	SidebarMenuItem,
	SidebarMenuSub,
	SidebarMenuSubButton,
	SidebarMenuSubItem,
} from "@components/ui/sidebar";
import { navigationSections } from "@routes/routes";
import { ChevronRight, Home } from "lucide-react";
import { Link } from "react-router-dom";

// Navigation items (not topics)
const navigationItems = [
	{
		title: "Home",
		url: "/",
		icon: Home,
	},
];

export function AppSidebar() {
	return (
		<Sidebar>
			<SidebarHeader>
				<div className="flex flex-col space-y-1 p-2">
					<h1 className="text-lg font-semibold">React Training</h1>
					<p className="text-sm text-muted-foreground">Frontend 2025</p>
				</div>
			</SidebarHeader>
			<SidebarContent>
				{/* Navigation Section */}
				<SidebarGroup>
					<SidebarGroupContent>
						<SidebarMenu>
							{navigationItems.map((item) => (
								<SidebarMenuItem key={item.title}>
									<SidebarMenuButton asChild>
										<Link to={item.url}>
											{item.icon && <item.icon />}
											<span>{item.title}</span>
										</Link>
									</SidebarMenuButton>
								</SidebarMenuItem>
							))}
						</SidebarMenu>
					</SidebarGroupContent>
				</SidebarGroup>

				{/* Topics Section */}
				<SidebarGroup>
					<SidebarGroupLabel>Topics</SidebarGroupLabel>
					<SidebarGroupContent>
						<SidebarMenu>
							{navigationSections.map((item) => (
								<SidebarMenuItem key={item.title}>
									{item.subitems ? (
										<Collapsible className="group/collapsible">
											<CollapsibleTrigger asChild>
												<SidebarMenuButton>
													{item.icon && <item.icon />}
													<span>{item.title}</span>
													<ChevronRight className="ml-auto transition-transform group-data-[state=open]/collapsible:rotate-90" />
												</SidebarMenuButton>
											</CollapsibleTrigger>
											<CollapsibleContent>
												<SidebarMenuSub>
													{item.subitems.map((subitem) => (
														<SidebarMenuSubItem key={subitem.title}>
															<SidebarMenuSubButton asChild>
																<Link to={`${item.url}/${subitem.path}`}>
																	<span>{subitem.title}</span>
																</Link>
															</SidebarMenuSubButton>
														</SidebarMenuSubItem>
													))}
												</SidebarMenuSub>
											</CollapsibleContent>
										</Collapsible>
									) : (
										<SidebarMenuButton asChild>
											<Link to={item.url}>
												{item.icon && <item.icon />}
												<span>{item.title}</span>
											</Link>
										</SidebarMenuButton>
									)}
								</SidebarMenuItem>
							))}
						</SidebarMenu>
					</SidebarGroupContent>
				</SidebarGroup>
			</SidebarContent>
		</Sidebar>
	);
}
