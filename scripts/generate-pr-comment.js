#!/usr/bin/env node

// Read environment variables
const mainSize = parseInt(process.env.MAIN_SIZE || "0");
const cssSize = parseInt(process.env.CSS_SIZE || "0");
const totalSize = parseInt(process.env.TOTAL_SIZE || "0");
const baseMainSize = parseInt(process.env.BASE_MAIN_SIZE || "0");
const baseCssSize = parseInt(process.env.BASE_CSS_SIZE || "0");
const baseTotalSize = parseInt(process.env.BASE_TOTAL_SIZE || "0");
const mainDiff = parseInt(process.env.MAIN_DIFF || "0");
const cssDiff = parseInt(process.env.CSS_DIFF || "0");
const totalDiff = parseInt(process.env.TOTAL_DIFF || "0");
const percentChange = parseInt(process.env.PERCENT_CHANGE || "0");
const budgetExceeded = process.env.BUDGET_EXCEEDED === "true";

function formatSize(kb) {
	return `${kb} KB`;
}

function formatDiff(diff) {
	if (diff > 0) return `+${diff} KB 📈`;
	if (diff < 0) return `${diff} KB 📉`;
	return "0 KB";
}

let statusEmoji = totalDiff <= 0 ? "✅" : totalDiff > 10 ? "⚠️" : "📊";
if (budgetExceeded) statusEmoji = "🚫";

const body = `## ${statusEmoji} Bundle Size Report

${budgetExceeded ? "**⚠️ Budget Exceeded!** The total bundle size exceeds the 500KB budget.\n" : ""}

| File | Size | Base | Diff |
|------|------|------|------|
| **JS** | ${formatSize(mainSize)} | ${formatSize(baseMainSize)} | ${formatDiff(mainDiff)} |
| **CSS** | ${formatSize(cssSize)} | ${formatSize(baseCssSize)} | ${formatDiff(cssDiff)} |
| **Total** | **${formatSize(totalSize)}** | **${formatSize(baseTotalSize)}** | **${formatDiff(totalDiff)}** |

**Total change:** ${percentChange >= 0 ? "+" : ""}${percentChange}%

${totalDiff > 20 ? "### 💡 Consider using bundle analyzer\n\nThe bundle size has increased significantly. Run `npm run analyze` locally to identify large dependencies." : ""}

<details>
<summary>Bundle size budget details</summary>

- **Current budget:** 500KB
- **Current size:** ${totalSize}KB
- **Status:** ${budgetExceeded ? "❌ Over budget" : "✅ Within budget"}

</details>`;

// Output the comment body for GitHub Actions to use
console.log(body);
