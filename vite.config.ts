import path from "node:path";
import tailwindcss from "@tailwindcss/vite";
import { vanillaExtractPlugin } from "@vanilla-extract/vite-plugin";
import react from "@vitejs/plugin-react-swc";
import { defineConfig } from "vite";

// https://vite.dev/config/
export default defineConfig({
	plugins: [react(), vanillaExtractPlugin(), tailwindcss()],
	resolve: {
		alias: {
			"@": path.resolve(__dirname, "./src"),
			"@components": path.resolve(__dirname, "./src/components"),
			"@pages": path.resolve(__dirname, "./src/pages"),
			"@hooks": path.resolve(__dirname, "./src/hooks"),
			"@utils": path.resolve(__dirname, "./src/utils"),
			"@types": path.resolve(__dirname, "./src/types"),
			"@routes": path.resolve(__dirname, "./src/routes"),
			"@styles": path.resolve(__dirname, "./src/styles"),
		},
	},
	build: {
		rollupOptions: {
			output: {
				// Split vendor code for better caching
				manualChunks: {
					vendor: ["react", "react-dom"],
				},
			},
		},
		// Enable compressed size reporting
		reportCompressedSize: true,
		// Warn when chunks exceed 500KB
		chunkSizeWarningLimit: 500,
	},
});
