import { ChevronRight, Home, Package, Palette } from "lucide-react";

import {
	Collapsible,
	CollapsibleContent,
	CollapsibleTrigger,
} from "@/components/ui/collapsible";
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
} from "@/components/ui/sidebar";

// Navigation items (not topics)
const navigationItems = [
	{
		title: "Home",
		url: "#",
		icon: Home,
	},
];

// Topic items
const topicItems = [
	{
		title: "Project Setup",
		url: "#setup",
		icon: Package,
		subitems: [
			{ title: "Build Tool", url: "#setup/build-tool" },
			{ title: "Code Quality", url: "#setup/code-quality" },
			{ title: "Git Hooks", url: "#setup/git-hooks" },
			{ title: "Testing", url: "#setup/testing" },
			{ title: "Bundle Size", url: "#setup/bundle-size" },
			{ title: "Development Environment", url: "#setup/dev-env" },
		],
	},
	{
		title: "CSS Styling",
		url: "#css",
		icon: Palette,
		subitems: [
			{ title: "CSS Modules", url: "#css/modules" },
			{ title: "Vanilla Extract", url: "#css/vanilla-extract" },
			{ title: "Tailwind CSS", url: "#css/tailwind" },
			{ title: "shadcn/ui", url: "#css/shadcn" },
		],
	},
];

export function AppSidebar() {
	return (
		<Sidebar>
			<SidebarHeader>
				<div className="flex flex-col space-y-1 p-2">
					<h1 className="text-lg font-semibold">React Interview Training</h1>
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
										<a href={item.url}>
											{item.icon && <item.icon />}
											<span>{item.title}</span>
										</a>
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
							{topicItems.map((item) => (
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
																<a href={subitem.url}>
																	<span>{subitem.title}</span>
																</a>
															</SidebarMenuSubButton>
														</SidebarMenuSubItem>
													))}
												</SidebarMenuSub>
											</CollapsibleContent>
										</Collapsible>
									) : (
										<SidebarMenuButton asChild>
											<a href={item.url}>
												{item.icon && <item.icon />}
												<span>{item.title}</span>
											</a>
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
