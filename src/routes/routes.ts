import { CssOverviewPage } from "@pages/css/CssOverviewPage";
import { ModulesPage } from "@pages/css/ModulesPage";
import { ShadcnPage } from "@pages/css/ShadcnPage";
import { TailwindPage } from "@pages/css/TailwindPage";
import { VanillaExtractPage } from "@pages/css/VanillaExtractPage";
import { HomePage } from "@pages/HomePage";
import { BuildToolPage } from "@pages/setup/BuildToolPage";
import { BundleSizePage } from "@pages/setup/BundleSizePage";
import { CodeQualityPage } from "@pages/setup/CodeQualityPage";
import { DevEnvPage } from "@pages/setup/DevEnvPage";
import { GitHooksPage } from "@pages/setup/GitHooksPage";
import { SetupOverviewPage } from "@pages/setup/SetupOverviewPage";
import { TestingPage } from "@pages/setup/TestingPage";
import { Package, Palette } from "lucide-react";
import type { ComponentType } from "react";

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

// Route names - single source of truth
export const ROUTE_NAMES = {
	HOME: "home",
	PROJECT_SETUP: "projectSetup",
	BUILD_TOOL: "buildTool",
	CODE_QUALITY: "codeQuality",
	TESTING: "testing",
	GIT_HOOKS: "gitHooks",
	BUNDLE_SIZE: "bundleSize",
	DEV_ENV: "devEnv",
	CSS_OVERVIEW: "cssOverview",
	CSS_MODULES: "cssModules",
	TAILWIND: "tailwind",
	SHADCN: "shadcn",
	VANILLA_EXTRACT: "vanillaExtract",
} as const;

// Extract route names for type
const routeNames = Object.values(ROUTE_NAMES);

// Nested route configuration with named routes
export const routes: RouteConfig[] = [
	{
		name: ROUTE_NAMES.HOME,
		path: "/",
		component: HomePage,
		title: "Home",
	},
	{
		name: ROUTE_NAMES.PROJECT_SETUP,
		path: "/setup",
		component: SetupOverviewPage,
		title: "Project Setup",
		children: [
			{
				name: ROUTE_NAMES.BUILD_TOOL,
				path: "build-tool",
				component: BuildToolPage,
				title: "Build Tool",
			},
			{
				name: ROUTE_NAMES.CODE_QUALITY,
				path: "code-quality",
				component: CodeQualityPage,
				title: "Code Quality",
			},
			{
				name: ROUTE_NAMES.TESTING,
				path: "testing",
				component: TestingPage,
				title: "Testing",
			},
			{
				name: ROUTE_NAMES.GIT_HOOKS,
				path: "git-hooks",
				component: GitHooksPage,
				title: "Git Hooks",
			},
			{
				name: ROUTE_NAMES.BUNDLE_SIZE,
				path: "bundle-size",
				component: BundleSizePage,
				title: "Bundle Size",
			},
			{
				name: ROUTE_NAMES.DEV_ENV,
				path: "dev-env",
				component: DevEnvPage,
				title: "Development Environment",
			},
		],
	},
	{
		name: ROUTE_NAMES.CSS_OVERVIEW,
		path: "/css",
		component: CssOverviewPage,
		title: "CSS Styling",
		children: [
			{
				name: ROUTE_NAMES.CSS_MODULES,
				path: "modules",
				component: ModulesPage,
				title: "CSS Modules",
			},
			{
				name: ROUTE_NAMES.VANILLA_EXTRACT,
				path: "vanilla-extract",
				component: VanillaExtractPage,
				title: "Vanilla Extract",
			},
			{
				name: ROUTE_NAMES.TAILWIND,
				path: "tailwind",
				component: TailwindPage,
				title: "Tailwind CSS",
			},
			{
				name: ROUTE_NAMES.SHADCN,
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

// Type for all available route names (generated from ROUTE_NAMES constant)
type RouteName = (typeof routeNames)[number];

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
