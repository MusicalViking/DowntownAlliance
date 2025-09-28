import path from 'path';
import { defineConfig } from 'vite';
import { createHtmlPlugin } from 'vite-plugin-html';

const BASE_URL = process.env.NODE_ENV === 'production' ? '/' : '/';
const mainScript = '/src/main.js';

export default defineConfig({
	// Base public path when served in development or production
	base: BASE_URL,

	server: {
		host: true,
		port: 5173,
		open: true,
	},

	// Resolve aliases for cleaner imports
	resolve: {
		alias: {
			'@': path.resolve(__dirname, './src'),
			'@public': path.resolve(__dirname, './public'),
		},
	},

	// Build configuration
	build: {
		// Output directory for the build
		outDir: 'dist',
		// Emit assets in the correct directory structure
		assetsDir: 'assets',
		// Minify the output
		minify: 'terser',
		// Generate source maps for production
		sourcemap: process.env.NODE_ENV !== 'production',
		// Rollup options
		rollupOptions: {
			output: {
				// Ensure consistent chunk naming
				chunkFileNames: 'assets/js/[name]-[hash].js',
				entryFileNames: 'assets/js/[name]-[hash].js',
				assetFileNames: (assetInfo) => {
					const info = assetInfo.name.split('.');
					const ext = info[info.length - 1];
					if (['png', 'jpe?g', 'svg', 'gif', 'webp'].includes(ext)) {
						return `assets/images/[name]-[hash][extname]`;
					}
					if (['css'].includes(ext)) {
						return `assets/css/[name]-[hash][extname]`;
					}
					return `assets/[name]-[hash][extname]`;
				},
			},
			input: {
				main: path.resolve(__dirname, 'index.html'),
				about: path.resolve(__dirname, 'about.html'),
				downtownBusinesses: path.resolve(__dirname, 'dt_businesses.html'),
				contact: path.resolve(__dirname, 'contact.html'),
				sponsors: path.resolve(__dirname, 'sponsors.html'),
				information: path.resolve(__dirname, 'information.html'),
				shopping: path.resolve(__dirname, 'shopping.html'),
				getInvolved: path.resolve(__dirname, 'get_involved.html'),
				news: path.resolve(__dirname, 'news.html'),
				events: path.resolve(__dirname, "events.html"),
				thingsToDo: path.resolve(__dirname, "thingstodo.html"),
				people: path.resolve(__dirname, "people.html"),
				upcoming: path.resolve(__dirname, "upcoming.html"),
				seasonal: path.resolve(__dirname, "seasonal.html"),
				services: path.resolve(__dirname, "services.html"),
				terms: path.resolve(__dirname, "terms-of-service.html"),
				notFound: path.resolve(__dirname, "404.html"),
			},
		},
	},
});