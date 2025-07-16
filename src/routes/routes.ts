// Architecture & Setup
import { ArchitectureOverviewPage } from "@pages/architecture/ArchitectureOverviewPage";
import { FileOrganizationPage } from "@pages/architecture/FileOrganizationPage";
import { PathAliasesPage } from "@pages/architecture/PathAliasesPage";

// CSS Styling
import { CssOverviewPage } from "@pages/css/CssOverviewPage";
import { ModulesPage } from "@pages/css/ModulesPage";
import { ShadcnPage } from "@pages/css/ShadcnPage";
import { TailwindPage } from "@pages/css/TailwindPage";
import { VanillaExtractPage } from "@pages/css/VanillaExtractPage";
import { DocOrganizationPage } from "@pages/documentation/DocOrganizationPage";
// Documentation
import { DocumentationOverviewPage } from "@pages/documentation/DocumentationOverviewPage";
import { NamingConventionsPage } from "@pages/documentation/NamingConventionsPage";

// Frontend Implementation
import { FrontendOverviewPage } from "@pages/frontend/FrontendOverviewPage";
import { LayoutArchitecturePage } from "@pages/frontend/LayoutArchitecturePage";
import { RoutingPage } from "@pages/frontend/RoutingPage";

// Home
import { HomePage } from "@pages/HomePage";

// Performance
import { PerformanceOverviewPage } from "@pages/performance/PerformanceOverviewPage";

// Setup (legacy - now under workflow)
import { BuildToolPage } from "@pages/setup/BuildToolPage";
import { BundleSizePage } from "@pages/setup/BundleSizePage";
import { CodeQualityPage } from "@pages/setup/CodeQualityPage";
import { DevEnvPage } from "@pages/setup/DevEnvPage";
import { GitHooksPage } from "@pages/setup/GitHooksPage";
import { SetupOverviewPage } from "@pages/setup/SetupOverviewPage";
import { TestingPage } from "@pages/setup/TestingPage";

// Workflow
import { WorkflowOverviewPage } from "@pages/workflow/WorkflowOverviewPage";
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
