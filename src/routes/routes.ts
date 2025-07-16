// Home - Keep direct import for immediate loading
import { HomePage } from "@pages/HomePage";
import { lazy } from "react";

// Architecture & Setup - Lazy loaded
const ArchitectureOverviewPage = lazy(() =>
	import("@pages/architecture/ArchitectureOverviewPage").then((m) => ({
		default: m.ArchitectureOverviewPage,
	})),
);
const FileOrganizationPage = lazy(() =>
	import("@pages/architecture/FileOrganizationPage").then((m) => ({
		default: m.FileOrganizationPage,
	})),
);
const PathAliasesPage = lazy(() =>
	import("@pages/architecture/PathAliasesPage").then((m) => ({
		default: m.PathAliasesPage,
	})),
);

// CSS Styling - Lazy loaded
const CssOverviewPage = lazy(() =>
	import("@pages/css/CssOverviewPage").then((m) => ({
		default: m.CssOverviewPage,
	})),
);
const ModulesPage = lazy(() =>
	import("@pages/css/ModulesPage").then((m) => ({ default: m.ModulesPage })),
);
const ShadcnPage = lazy(() =>
	import("@pages/css/ShadcnPage").then((m) => ({ default: m.ShadcnPage })),
);
const TailwindPage = lazy(() =>
	import("@pages/css/TailwindPage").then((m) => ({ default: m.TailwindPage })),
);
const VanillaExtractPage = lazy(() =>
	import("@pages/css/VanillaExtractPage").then((m) => ({
		default: m.VanillaExtractPage,
	})),
);

// Documentation - Lazy loaded
const DocumentationOverviewPage = lazy(() =>
	import("@pages/documentation/DocumentationOverviewPage").then((m) => ({
		default: m.DocumentationOverviewPage,
	})),
);
const DocOrganizationPage = lazy(() =>
	import("@pages/documentation/DocOrganizationPage").then((m) => ({
		default: m.DocOrganizationPage,
	})),
);
const NamingConventionsPage = lazy(() =>
	import("@pages/documentation/NamingConventionsPage").then((m) => ({
		default: m.NamingConventionsPage,
	})),
);

// Frontend Implementation - Lazy loaded
const FrontendOverviewPage = lazy(() =>
	import("@pages/frontend/FrontendOverviewPage").then((m) => ({
		default: m.FrontendOverviewPage,
	})),
);
const LayoutArchitecturePage = lazy(() =>
	import("@pages/frontend/LayoutArchitecturePage").then((m) => ({
		default: m.LayoutArchitecturePage,
	})),
);
const RoutingPage = lazy(() =>
	import("@pages/frontend/RoutingPage").then((m) => ({
		default: m.RoutingPage,
	})),
);

// Performance - Lazy loaded
const PerformanceOverviewPage = lazy(() =>
	import("@pages/performance/PerformanceOverviewPage").then((m) => ({
		default: m.PerformanceOverviewPage,
	})),
);
const ReactPerformancePage = lazy(() =>
	import("@pages/performance/ReactPerformancePage").then((m) => ({
		default: m.ReactPerformancePage,
	})),
);

// Setup (legacy - now under workflow) - Lazy loaded
const BuildToolPage = lazy(() =>
	import("@pages/setup/BuildToolPage").then((m) => ({
		default: m.BuildToolPage,
	})),
);
const BundleSizePage = lazy(() =>
	import("@pages/setup/BundleSizePage").then((m) => ({
		default: m.BundleSizePage,
	})),
);
const CodeQualityPage = lazy(() =>
	import("@pages/setup/CodeQualityPage").then((m) => ({
		default: m.CodeQualityPage,
	})),
);
const DevEnvPage = lazy(() =>
	import("@pages/setup/DevEnvPage").then((m) => ({ default: m.DevEnvPage })),
);
const GitHooksPage = lazy(() =>
	import("@pages/setup/GitHooksPage").then((m) => ({
		default: m.GitHooksPage,
	})),
);
const SetupOverviewPage = lazy(() =>
	import("@pages/setup/SetupOverviewPage").then((m) => ({
		default: m.SetupOverviewPage,
	})),
);
const TestingPage = lazy(() =>
	import("@pages/setup/TestingPage").then((m) => ({ default: m.TestingPage })),
);

// Workflow - Lazy loaded
const WorkflowOverviewPage = lazy(() =>
	import("@pages/workflow/WorkflowOverviewPage").then((m) => ({
		default: m.WorkflowOverviewPage,
	})),
);

import { BarChart3, BookOpen, Palette, Settings, Workflow } from "lucide-react";
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
	// Architecture & Setup
	ARCHITECTURE_SETUP: "architectureSetup",
	PROJECT_SETUP: "projectSetup",
	BUILD_TOOL: "buildTool",
	FILE_ORGANIZATION: "fileOrganization",
	PATH_ALIASES: "pathAliases",
	// Development Workflow
	DEV_WORKFLOW: "devWorkflow",
	CODE_QUALITY: "codeQuality",
	TESTING: "testing",
	GIT_HOOKS: "gitHooks",
	DEV_ENV: "devEnv",
	NAMING_CONVENTIONS: "namingConventions",
	// Frontend Implementation
	FRONTEND_IMPL: "frontendImpl",
	CSS_OVERVIEW: "cssOverview",
	CSS_MODULES: "cssModules",
	TAILWIND: "tailwind",
	SHADCN: "shadcn",
	VANILLA_EXTRACT: "vanillaExtract",
	LAYOUT_ARCHITECTURE: "layoutArchitecture",
	ROUTING: "routing",
	// Performance & Monitoring
	PERFORMANCE: "performance",
	BUNDLE_SIZE: "bundleSize",
	REACT_PERFORMANCE: "reactPerformance",
	// Documentation Strategy
	DOCUMENTATION: "documentation",
	DOC_ORGANIZATION: "docOrganization",
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
		name: ROUTE_NAMES.ARCHITECTURE_SETUP,
		path: "/architecture",
		component: ArchitectureOverviewPage,
		title: "Architecture & Setup",
		children: [
			{
				name: ROUTE_NAMES.PROJECT_SETUP,
				path: "project-setup",
				component: SetupOverviewPage,
				title: "Project Setup",
			},
			{
				name: ROUTE_NAMES.BUILD_TOOL,
				path: "build-tool",
				component: BuildToolPage,
				title: "Build Tool",
			},
			{
				name: ROUTE_NAMES.FILE_ORGANIZATION,
				path: "file-organization",
				component: FileOrganizationPage,
				title: "File Organization",
			},
			{
				name: ROUTE_NAMES.PATH_ALIASES,
				path: "path-aliases",
				component: PathAliasesPage,
				title: "Path Aliases",
			},
		],
	},
	{
		name: ROUTE_NAMES.DEV_WORKFLOW,
		path: "/workflow",
		component: WorkflowOverviewPage,
		title: "Development Workflow",
		children: [
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
				title: "Testing Strategy",
			},
			{
				name: ROUTE_NAMES.GIT_HOOKS,
				path: "git-hooks",
				component: GitHooksPage,
				title: "Git Hooks",
			},
			{
				name: ROUTE_NAMES.DEV_ENV,
				path: "dev-env",
				component: DevEnvPage,
				title: "Development Environment",
			},
			{
				name: ROUTE_NAMES.NAMING_CONVENTIONS,
				path: "naming-conventions",
				component: NamingConventionsPage,
				title: "Naming Conventions",
			},
		],
	},
	{
		name: ROUTE_NAMES.FRONTEND_IMPL,
		path: "/frontend",
		component: FrontendOverviewPage,
		title: "Frontend Implementation",
		children: [
			{
				name: ROUTE_NAMES.CSS_OVERVIEW,
				path: "css",
				component: CssOverviewPage,
				title: "CSS Styling",
			},
			{
				name: ROUTE_NAMES.LAYOUT_ARCHITECTURE,
				path: "layout-architecture",
				component: LayoutArchitecturePage,
				title: "Layout Architecture",
			},
			{
				name: ROUTE_NAMES.ROUTING,
				path: "routing",
				component: RoutingPage,
				title: "Routing",
			},
		],
	},
	{
		name: ROUTE_NAMES.PERFORMANCE,
		path: "/performance",
		component: PerformanceOverviewPage,
		title: "Performance & Monitoring",
		children: [
			{
				name: ROUTE_NAMES.BUNDLE_SIZE,
				path: "bundle-size",
				component: BundleSizePage,
				title: "Bundle Size Budgets",
			},
			{
				name: ROUTE_NAMES.REACT_PERFORMANCE,
				path: "react-performance",
				component: ReactPerformancePage,
				title: "React Code Splitting",
			},
		],
	},
	{
		name: ROUTE_NAMES.DOCUMENTATION,
		path: "/documentation",
		component: DocumentationOverviewPage,
		title: "Documentation Strategy",
		children: [
			{
				name: ROUTE_NAMES.DOC_ORGANIZATION,
				path: "doc-organization",
				component: DocOrganizationPage,
				title: "Documentation Organization",
			},
		],
	},
	// Keep legacy CSS routes for backward compatibility
	{
		name: ROUTE_NAMES.CSS_MODULES,
		path: "/css/modules",
		component: ModulesPage,
		title: "CSS Modules",
	},
	{
		name: ROUTE_NAMES.VANILLA_EXTRACT,
		path: "/css/vanilla-extract",
		component: VanillaExtractPage,
		title: "Vanilla Extract",
	},
	{
		name: ROUTE_NAMES.TAILWIND,
		path: "/css/tailwind",
		component: TailwindPage,
		title: "Tailwind CSS",
	},
	{
		name: ROUTE_NAMES.SHADCN,
		path: "/css/shadcn",
		component: ShadcnPage,
		title: "shadcn/ui",
	},
];

// Navigation sections for sidebar
export const navigationSections: NavigationSection[] = [
	{
		title: "Architecture & Setup",
		url: "/architecture",
		icon: Settings,
		subitems: routes.find((r) => r.path === "/architecture")?.children || [],
	},
	{
		title: "Development Workflow",
		url: "/workflow",
		icon: Workflow,
		subitems: routes.find((r) => r.path === "/workflow")?.children || [],
	},
	{
		title: "Frontend Implementation",
		url: "/frontend",
		icon: Palette,
		subitems: routes.find((r) => r.path === "/frontend")?.children || [],
	},
	{
		title: "Performance & Monitoring",
		url: "/performance",
		icon: BarChart3,
		subitems: routes.find((r) => r.path === "/performance")?.children || [],
	},
	{
		title: "Documentation Strategy",
		url: "/documentation",
		icon: BookOpen,
		subitems: routes.find((r) => r.path === "/documentation")?.children || [],
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

// Build breadcrumbs based on current route path
export const buildBreadcrumbs = (
	currentPath: string,
): Array<{ label: string; href?: string }> => {
	const breadcrumbs: Array<{ label: string; href?: string }> = [
		{ label: "Interview Prep", href: "/" },
	];

	// Handle home route
	if (currentPath === "/") {
		return [{ label: "Interview Prep" }];
	}

	// Find the matching route and its parents
	const findRouteWithParents = (
		routes: RouteConfig[],
		targetPath: string,
		parents: RouteConfig[] = [],
	): RouteConfig[] | null => {
		for (const route of routes) {
			const fullPath = route.path.startsWith("/")
				? route.path
				: `${parents[parents.length - 1]?.path}/${route.path}`;

			if (fullPath === targetPath) {
				return [...parents, route];
			}

			if (route.children) {
				const result = findRouteWithParents(route.children, targetPath, [
					...parents,
					route,
				]);
				if (result) return result;
			}
		}
		return null;
	};

	const routeHierarchy = findRouteWithParents(routes, currentPath);

	if (routeHierarchy) {
		// Build breadcrumbs from route hierarchy
		for (let i = 0; i < routeHierarchy.length; i++) {
			const routeItem = routeHierarchy[i];
			if (!routeItem) continue;

			const isLast = i === routeHierarchy.length - 1;

			// Build the full path for this route
			let fullPath = "";
			if (routeItem.path.startsWith("/")) {
				fullPath = routeItem.path;
			} else {
				// For child routes, build the full path from parents
				const parentPath = routeHierarchy[i - 1]?.path || "";
				fullPath = `${parentPath}/${routeItem.path}`;
			}

			breadcrumbs.push({
				label: routeItem.title,
				href: isLast ? undefined : fullPath,
			});
		}
	}

	return breadcrumbs;
};
