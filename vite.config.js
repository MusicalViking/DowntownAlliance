import path from "path";
import { defineConfig } from "vite";
import { createHtmlPlugin } from "vite-plugin-html";

const mainScript = "/src/main.js";

export default defineConfig({
	server: {
		host: true,
		port: 5173,
		open: true,
	},
	plugins: [
		createHtmlPlugin({
			minify: true,
			entry: mainScript,
			template: "index.html",
			inject: {
				data: {
					title: "Home - Augusta Downtown",
					description:
						"Welcome to Augusta Downtown Alliance - Your community partner in downtown development and revitalization.",
				},
			},
		}),
		createHtmlPlugin({
			minify: true,
			entry: mainScript,
			template: "about.html",
			inject: {
				data: {
					title: "About Us - Augusta Downtown",
					description:
						"Learn more about Augusta Downtown Alliance and our mission to enhance the downtown community.",
				},
			},
		}),
		createHtmlPlugin({
			minify: true,
			entry: mainScript,
			template: "dt_businesses.html",
			inject: {
				data: {
					title: "Downtown Businesses - Augusta Downtown",
					description:
						"Information about businesses and companies in Augusta Downtown.",
				},
			},
		}),
		createHtmlPlugin({
			minify: true,
			entry: mainScript,
			template: "sponsors.html",
			inject: {
				data: {
					title: "Sponsors - Augusta Downtown",
					description:
						"Explore our sponsors for Augusta Downtown.",
				},
			},
		}),
		createHtmlPlugin({
			minify: true,
			entry: mainScript,
			template: "information.html",
			inject: {
				data: {
					title: "Information - Augusta Downtown",
					description:
						"Information on Augusta Downtown.",
				},
			},
		}),
		createHtmlPlugin({
			minify: true,
			entry: mainScript,
			template: "shopping.html",
			inject: {
				data: {
					title: "Shopping - Augusta Downtown",
					description: "Shopping within our beautiful capitol.",
				},
			},
		}),
		createHtmlPlugin({
			minify: true,
			entry: mainScript,
			template: "get_involved.html",
			inject: {
				data: {
					title: "Get Involved - Augusta Downtown",
					description:
						"Get Involved in life and activities at Augusta Downtown.",
				},
			},
		}),
		createHtmlPlugin({
			minify: true,
			entry: mainScript,
			template: "news.html",
			inject: {
				data: {
					title: "News - Augusta Downtown",
					description: "Latest news and updates from Augusta Downtown.",
				},
			},
		}),
		createHtmlPlugin({
			minify: true,
			entry: mainScript,
			template: "events.html",
			inject: {
				data: {
					title: "Events - Augusta Downtown",
					description: "Upcoming events and activities at Augusta Downtown.",
				},
			},
		}),
		createHtmlPlugin({
			minify: true,
			entry: mainScript,
			template: "people.html",
			inject: {
				data: {
					title: "People - Augusta Downtown",
					description:
						"Stay connected with the Augusta Downtown community.",
				},
			},
		}),
		createHtmlPlugin({
			minify: true,
			entry: mainScript,
			template: "upcoming.html",
			inject: {
				data: {
					title: "Upcoming - Augusta Downtown",
					description: "Upcoming events from Augusta Downtown.",
				},
			},
		}),
		createHtmlPlugin({
			minify: true,
			entry: mainScript,
			template: "seasonal.html",
			inject: {
				data: {
					title: "Seasonal Events - Augusta Downtown",
					description:
						"Detailed information about Seasonal events at Augusta Downtown.",
				},
			},
		}),
		createHtmlPlugin({
			minify: true,
			entry: mainScript,
			template: "privacy.html",
			inject: {
				data: {
					title: "Privacy Policy - Augusta Downtown",
					description: "Privacy policy for Augusta Downtown website.",
				},
			},
		}),
		createHtmlPlugin({
			minify: true,
			entry: mainScript,
			template: "services.html",
			inject: {
				data: {
					title: "Services - Augusta Downtown",
					description: "Services for Augusta Downtown website.",
				},
			},
		}),
		createHtmlPlugin({
			minify: true,
			entry: mainScript,
			template: "terms-of-service.html",
			inject: {
				data: {
					title: "Terms of Service - Augusta Downtown",
					description: "Terms of service for Augusta Downtown website.",
				},
			},
		}),
		createHtmlPlugin({
			minify: true,
			entry: mainScript,
			template: "404.html",
			inject: {
				data: {
					title: "Page Not Found - Augusta Downtown",
					description: "The requested page could not be found.",
				},
			},
		}),
		createHtmlPlugin({
			minify: true,
			entry: mainScript,
			template: "thingstodo.html",
			inject: {
				data: {
					title: "Things To Do - Augusta Downtown",
					description: "Things To Do in Augusta Downtown.",
				},
			},
		}),
	],
	build: {
		rollupOptions: {
			input: {
				index: path.resolve(__dirname, "index.html"),
				about: path.resolve(__dirname, "about.html"),
				downtownBusinesses: path.resolve(__dirname, "dt_businesses.html"),
				contact: path.resolve(__dirname, "contact.html"),
				sponsors: path.resolve(__dirname, "sponsors.html"),
				information: path.resolve(__dirname, "information.html"),
				shopping: path.resolve(__dirname, "shopping.html"),
				getInvolved: path.resolve(__dirname, "get_involved.html"),
				news: path.resolve(__dirname, "news.html"),
				events: path.resolve(__dirname, "events.html"),
				thingsToDo: path.resolve(__dirname, "thingstodo.html"),
				people: path.resolve(__dirname, "people.html"),
				upcoming: path.resolve(__dirname, "upcoming.html"),
				seasonal: path.resolve(__dirname, "seasonal.html"),
				privacy: path.resolve(__dirname, "privacy.html"),
				services: path.resolve(__dirname, "services.html"),
				terms: path.resolve(__dirname, "terms-of-service.html"),
				notFound: path.resolve(__dirname, "404.html"),
			},
		},
	},
});