import { Package, Palette } from "lucide-react";
import type { ComponentType } from "react";
import { CssOverviewPage } from "@/pages/css/CssOverviewPage";
import { ModulesPage } from "@/pages/css/ModulesPage";
import { ShadcnPage } from "@/pages/css/ShadcnPage";
import { TailwindPage } from "@/pages/css/TailwindPage";
import { VanillaExtractPage } from "@/pages/css/VanillaExtractPage";
import { HomePage } from "@/pages/HomePage";
import { BuildToolPage } from "@/pages/setup/BuildToolPage";
import { BundleSizePage } from "@/pages/setup/BundleSizePage";
import { CodeQualityPage } from "@/pages/setup/CodeQualityPage";
import { DevEnvPage } from "@/pages/setup/DevEnvPage";
import { GitHooksPage } from "@/pages/setup/GitHooksPage";
import { SetupOverviewPage } from "@/pages/setup/SetupOverviewPage";
import { TestingPage } from "@/pages/setup/TestingPage";

export interface RouteConfig {
	name: string;
	path: string;
	component: ComponentType;
	title: string;
	children?: RouteConfig[];
}

export interface NavigationSection {
	title: string;
	url: string;
	icon: ComponentType;
	subitems: RouteConfig[];
}

// Nested route configuration with named routes
export const routes: RouteConfig[] = [
	{
		name: "home",
		path: "/",
		component: HomePage,
		title: "Home",
	},
	{
		name: "projectSetup",
		path: "/setup",
		component: SetupOverviewPage,
		title: "Project Setup",
		children: [
			{
				name: "buildTool",
				path: "build-tool",
				component: BuildToolPage,
				title: "Build Tool",
			},
			{
				name: "codeQuality",
				path: "code-quality",
				component: CodeQualityPage,
				title: "Code Quality",
			},
			{
				name: "gitHooks",
				path: "git-hooks",
				component: GitHooksPage,
				title: "Git Hooks",
			},
			{
				name: "testing",
				path: "testing",
				component: TestingPage,
				title: "Testing",
			},
			{
				name: "bundleSize",
				path: "bundle-size",
				component: BundleSizePage,
				title: "Bundle Size",
			},
			{
				name: "devEnv",
				path: "dev-env",
				component: DevEnvPage,
				title: "Development Environment",
			},
		],
	},
	{
		name: "cssStyling",
		path: "/css",
		component: CssOverviewPage,
		title: "CSS Styling",
		children: [
			{
				name: "cssModules",
				path: "modules",
				component: ModulesPage,
				title: "CSS Modules",
			},
			{
				name: "vanillaExtract",
				path: "vanilla-extract",
				component: VanillaExtractPage,
				title: "Vanilla Extract",
			},
			{
				name: "tailwind",
				path: "tailwind",
				component: TailwindPage,
				title: "Tailwind CSS",
			},
			{
				name: "shadcn",
				path: "shadcn",
				component: ShadcnPage,
				title: "shadcn/ui",
			},
		],
	},
];

// Navigation sections for sidebar
export const navigationSections: NavigationSection[] = [
	{
		title: "Project Setup",
		url: "/setup",
		icon: Package,
		subitems: routes.find((r) => r.path === "/setup")?.children || [],
	},
	{
		title: "CSS Styling",
		url: "/css",
		icon: Palette,
		subitems: routes.find((r) => r.path === "/css")?.children || [],
	},
];

// Flat routes for React Router (all routes flattened with full paths)
export const flatRoutes: RouteConfig[] = routes.reduce<RouteConfig[]>(
	(acc, route) => {
		acc.push(route);
		if (route.children) {
			const childrenWithFullPaths = route.children.map((child) => ({
				...child,
				path: `${route.path}/${child.path}`,
			}));
			acc.push(...childrenWithFullPaths);
		}
		return acc;
	},
	[],
);

// Helper type to extract all route names from the routes array
type ExtractRouteNames<T extends readonly RouteConfig[]> = {
	[K in keyof T]: T[K] extends { name: infer N; children?: infer C }
		? N extends string
			? C extends readonly RouteConfig[]
				? N | ExtractRouteNames<C>
				: N
			: never
		: never;
}[number];

// Type for all available route names (generated from routes)
type RouteName = ExtractRouteNames<typeof routes>;

// Named route resolver - Vue Router inspired
export const route = (name: RouteName): string => {
	const findRoute = (
		routes: RouteConfig[],
		targetName: string,
	): RouteConfig | null => {
		for (const route of routes) {
			if (route.name === targetName) return route;
			if (route.children) {
				const found = findRoute(route.children, targetName);
				if (found) return found;
			}
		}
		return null;
	};

	const found = findRoute(routes, name);
	if (!found) return "/";

	// For child routes, build full path
	if (found.path.startsWith("/")) {
		return found.path;
	}

	// Find parent route to build full path
	const parentRoute = routes.find((r) =>
		r.children?.some((c) => c.name === name),
	);
	if (parentRoute) {
		return `${parentRoute.path}/${found.path}`;
	}

	return found.path;
};
