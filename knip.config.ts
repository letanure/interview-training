import type { KnipConfig } from "knip";

export default {
	entry: [
		"src/main.tsx", // Vite entry point
		"commitlint.confi.js", // Commitlint config
	],
	project: ["src/**/*.{ts,tsx}"],
	ignore: [
		"dist/**", // Build output
		"coverage/**", // Test coverage
		"playwright-report/**", // E2E reports
		"test-results/**", // Playwright results
	],
	ignoreDependencies: [
		"@commitlint/config-conventional", // Used by commitlint config
	],
} satisfies KnipConfig;
