#!/usr/bin/env node

import fs from "node:fs";

// Read environment variables
const currentMainSize = parseInt(process.env.CURRENT_MAIN_SIZE || "0");
const currentCssSize = parseInt(process.env.CURRENT_CSS_SIZE || "0");
const currentTotalSize = parseInt(process.env.CURRENT_TOTAL_SIZE || "0");

const baseMainSize = parseInt(process.env.BASE_MAIN_SIZE || "0");
const baseCssSize = parseInt(process.env.BASE_CSS_SIZE || "0");
const baseTotalSize = parseInt(process.env.BASE_TOTAL_SIZE || "0");

// Calculate differences
const mainDiff = currentMainSize - baseMainSize;
const cssDiff = currentCssSize - baseCssSize;
const totalDiff = currentTotalSize - baseTotalSize;

// Calculate percentage change
let percentChange = 0;
if (baseTotalSize > 0) {
	percentChange = Math.round((totalDiff * 100) / baseTotalSize);
}

// Output for GitHub Actions
if (process.env.GITHUB_OUTPUT) {
	const output = fs.createWriteStream(process.env.GITHUB_OUTPUT, {
		flags: "a",
	});
	output.write(`main_diff=${mainDiff}\n`);
	output.write(`css_diff=${cssDiff}\n`);
	output.write(`total_diff=${totalDiff}\n`);
	output.write(`percent_change=${percentChange}\n`);
	output.end();
}

// Console output
console.log("Bundle Size Comparison:");
console.log(
	`Main JS: ${currentMainSize}KB (${mainDiff >= 0 ? "+" : ""}${mainDiff}KB)`,
);
console.log(
	`CSS: ${currentCssSize}KB (${cssDiff >= 0 ? "+" : ""}${cssDiff}KB)`,
);
console.log(
	`Total: ${currentTotalSize}KB (${totalDiff >= 0 ? "+" : ""}${totalDiff}KB)`,
);
console.log(`Change: ${percentChange >= 0 ? "+" : ""}${percentChange}%`);
