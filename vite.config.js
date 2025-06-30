import path from "path";
import { defineConfig } from "vite";
import { createHtmlPlugin } from "vite-plugin-html";

const mainScript = "/src/main.js";

export default defineConfig({
  plugins: [
    createHtmlPlugin({
      minify: true,
      entry: mainScript,
      template: "index.html",
      inject: {
        data: {
          title: "Home - Augusta Downtown",
          description: "Welcome to Augusta Downtown Alliance - Your community partner in downtown development and revitalization.",
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
          description: "Learn more about Augusta Downtown Alliance and our mission to enhance the downtown community.",
        },
      },
    }),
    createHtmlPlugin({
      minify: true,
      entry: mainScript,
      template: "admissions.html",
      inject: {
        data: {
          title: "Admissions - Augusta Downtown",
          description: "Information about admissions and enrollment at Augusta Downtown.",
        },
      },
    }),
    createHtmlPlugin({
      minify: true,
      entry: mainScript,
      template: "academics.html",
      inject: {
        data: {
          title: "Academics - Augusta Downtown",
          description: "Explore our academic programs and curriculum at Augusta Downtown.",
        },
      },
    }),
    createHtmlPlugin({
      minify: true,
      entry: mainScript,
      template: "faculty-staff.html",
      inject: {
        data: {
          title: "Faculty & Staff - Augusta Downtown",
          description: "Meet our dedicated faculty and staff at Augusta Downtown.",
        },
      },
    }),
    createHtmlPlugin({
      minify: true,
      entry: mainScript,
      template: "campus-facilities.html",
      inject: {
        data: {
          title: "Campus & Facilities - Augusta Downtown",
          description: "Tour our state-of-the-art campus and facilities.",
        },
      },
    }),
    createHtmlPlugin({
      minify: true,
      entry: mainScript,
      template: "students-life.html",
      inject: {
        data: {
          title: "Student Life - Augusta Downtown",
          description: "Experience student life and activities at Augusta Downtown.",
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
      template: "alumni.html",
      inject: {
        data: {
          title: "Alumni - Augusta Downtown",
          description: "Stay connected with the Augusta Downtown alumni community.",
        },
      },
    }),
    createHtmlPlugin({
      minify: true,
      entry: mainScript,
      template: "news-details.html",
      inject: {
        data: {
          title: "News Details - Augusta Downtown",
          description: "Detailed news article from Augusta Downtown.",
        },
      },
    }),
    createHtmlPlugin({
      minify: true,
      entry: mainScript,
      template: "event-details.html",
      inject: {
        data: {
          title: "Event Details - Augusta Downtown",
          description: "Detailed information about an event at Augusta Downtown.",
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
      template: "starter-page.html",
      inject: {
        data: {
          title: "Starter Page - Augusta Downtown",
          description: "Starter template page for Augusta Downtown.",
        },
      },
    }),
  ],
  build: {
    rollupOptions: {
      input: {
        index: path.resolve(__dirname, "index.html"),
        about: path.resolve(__dirname, "about.html"),
        admissions: path.resolve(__dirname, "admissions.html"),
        academics: path.resolve(__dirname, "academics.html"),
        faculty: path.resolve(__dirname, "faculty-staff.html"),
        campus: path.resolve(__dirname, "campus-facilities.html"),
        studentLife: path.resolve(__dirname, "students-life.html"),
        news: path.resolve(__dirname, "news.html"),
        events: path.resolve(__dirname, "events.html"),
        alumni: path.resolve(__dirname, "alumni.html"),
        newsDetails: path.resolve(__dirname, "news-details.html"),
        eventDetails: path.resolve(__dirname, "event-details.html"),
        privacy: path.resolve(__dirname, "privacy.html"),
        terms: path.resolve(__dirname, "terms-of-service.html"),
        notFound: path.resolve(__dirname, "404.html"),
        starter: path.resolve(__dirname, "starter-page.html"),
      },
    },
  },
});
