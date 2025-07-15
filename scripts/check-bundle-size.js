#!/usr/bin/env node

import fs from "node:fs";
import path from "node:path";

const BUDGET_KB = 500;

function getFileSizeInKB(filePath) {
	const stats = fs.statSync(filePath);
	return Math.ceil(stats.size / 1024);
}

function findBundleFiles(dir) {
	const files = fs.readdirSync(dir);
	return {
		js: files.filter((f) => f.endsWith(".js")),
		css: files.filter((f) => f.endsWith(".css")),
	};
}

function analyzeBundle() {
	const distAssetsPath = path.join(process.cwd(), "dist", "assets");

	if (!fs.existsSync(distAssetsPath)) {
		console.error("Error: dist/assets directory not found. Run build first.");
		process.exit(1);
	}

	const bundles = findBundleFiles(distAssetsPath);

	let mainSize = 0;
	let cssSize = 0;

	// Get main JS bundle size
	if (bundles.js.length > 0) {
		const mainBundle = bundles.js[0]; // Assuming first JS is main
		mainSize = getFileSizeInKB(path.join(distAssetsPath, mainBundle));
	}

	// Get CSS bundle size
	if (bundles.css.length > 0) {
		const cssBundle = bundles.css[0];
		cssSize = getFileSizeInKB(path.join(distAssetsPath, cssBundle));
	}

	const totalSize = mainSize + cssSize;
	const budgetExceeded = totalSize > BUDGET_KB;

	// Output for GitHub Actions
	if (process.env.GITHUB_OUTPUT) {
		const output = fs.createWriteStream(process.env.GITHUB_OUTPUT, {
			flags: "a",
		});
		output.write(`main_size=${mainSize}\n`);
		output.write(`css_size=${cssSize}\n`);
		output.write(`total_size=${totalSize}\n`);
		output.write(`budget_exceeded=${budgetExceeded}\n`);
		output.end();
	}

	// Console output
	console.log(`Bundle Size Analysis:`);
	console.log(`- JS: ${mainSize}KB`);
	console.log(`- CSS: ${cssSize}KB`);
	console.log(`- Total: ${totalSize}KB`);
	console.log(`- Budget: ${BUDGET_KB}KB`);
	console.log(
		`- Status: ${budgetExceeded ? "❌ Over budget" : "✅ Within budget"}`,
	);

	if (budgetExceeded) {
		process.exit(1);
	}
}

analyzeBundle();
