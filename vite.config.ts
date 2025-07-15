import react from "@vitejs/plugin-react-swc";
import { defineConfig } from "vite";

// https://vite.dev/config/
export default defineConfig({
	plugins: [react()],
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
