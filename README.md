# MusicalViking Web Template

This repository contains a clean, modern, and scalable multi-page web template built with **Bootstrap 5** and **Vite**. It is designed as a foundational starting point for building fast, responsive websites with consistent styling and tooling.

> **Template Owner:** Arthur Belanger (GitHub: [MusicalViking](https://github.com/MusicalViking))  
> **Purpose:** A reusable starter template for future web projects with modern front-end best practices.

---

## Features

- **Multi-page setup:** Includes `index.html`, `about.html`, `services.html`, and `contact.html` with consistent navigation.
- **Responsive Bootstrap 5 navbar and layout** for mobile-first design.
- **Vite-powered build system** for lightning-fast development and optimized production builds.
- **SCSS styling with CSS variables:** Centralized theme colors and typography in `src/styles/style.scss`.
- **Shared JS module:** All pages import a common `main.js` for shared JavaScript functionality.
- **Modern, accessible contact form:** With Bootstrap validation and a promotional section highlighting MusicalViking branding.
- **Consistent footer with GitHub link** for branding and contact.
- Ready for easy customization and scaling.

---

## Getting Started

### Prerequisites

- Node.js (LTS version recommended)
- npm (comes with Node.js)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/MusicalViking/ViteBuildTemplate.git
   cd ViteBuildTemplate
   ```

````

2. Install dependencies:

   ```bash
   npm install
   ```

### Development Server

Run the development server with hot module replacement (HMR):

```bash
npm run dev
```

Open your browser at `http://localhost:3000` (or the port shown in the terminal).

### Building for Production

Build an optimized production version into the `dist` folder:

```bash
npm run build
```

You can preview the production build locally:

```bash
npm run preview
```

---

## Project Structure

```
.
├── dist/                  # Production-ready compiled site after build
├── public/                # Static assets served as-is (images, fonts, vendor scripts)
├── src/
│   ├── styles/
│   │   └── style.scss     # Main SCSS stylesheet with theme variables
│   ├── scripts/
│   │   ├── main.js        # Shared JS for all pages
│   │   ├── about.js       # Page-specific JS for About page
│   │   ├── services.js    # Page-specific JS for Services page
│   │   └── contact.js     # Page-specific JS for Contact page
│   ├── index.html         # Home page
│   ├── about.html         # About page
│   ├── services.html      # Services page
│   └── contact.html       # Contact page with form and MusicalViking branding
├── package.json           # npm dependencies and scripts
├── vite.config.js         # Vite configuration
└── README.md              # This file
```

---

## Customization

* Modify theme colors and fonts in `src/styles/style.scss`.
* Add or update page-specific JS in `src/scripts/`.
* Update navbar links and footer branding in the HTML files.
* Extend the contact form to connect to your backend or email service.

---

## Deployment

* After running `npm run build`, deploy the entire contents of the `dist` folder to your hosting provider.
* Compatible with static hosting services such as GitHub Pages, Netlify, Vercel, GoDaddy, Cloudflare Pages, or traditional web hosts.

---

## Contact

For questions or collaborations, visit my GitHub: [MusicalViking](https://github.com/MusicalViking).

---

## License

This template is open source and free to use for personal and commercial projects.

---

*This README will evolve alongside the template as new features and improvements are added.*
````
