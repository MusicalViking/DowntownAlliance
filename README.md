# Augusta Downtown Alliance

> **Developer:** Arthur Belanger (GitHub: [MusicalViking](https://github.com/MusicalViking))
> **Status:** 🚧 Work in Progress
> **Location:** Augusta, Maine
> **Website:** [Downtown Augusta](https://downtownaugusta.org)

---

## Project Overview

Official website for the Augusta Downtown Alliance, a non-profit organization dedicated to the economic and cultural development of downtown Augusta, Maine. This website serves as a digital hub for community events, local business information, and downtown revitalization efforts.

Our mission is to create a vibrant downtown district that is the heart of the greater Augusta community, supporting local businesses, hosting community events, and preserving the historic character of our downtown area.

## Contributing

We welcome contributions from the community! If you're interested in helping with the development of the Augusta Downtown Alliance website, please contact us through our [GitHub repository](https://github.com/MusicalViking/DowntownAlliance).

## Tech Stack

- **Frontend:** HTML5, CSS3, JavaScript (ES6+)
- **CSS Framework:** Bootstrap 5 with custom SCSS
- **Build Tool:** Vite for modern frontend tooling
- **Icons:** Bootstrap Icons
- **Responsive Design:** Mobile-first approach with responsive breakpoints
- **Module Bundling:** Native ES Modules
- **Hosting:** XAMPP local development environment

## Features

- **Multi-page website** with consistent navigation and branding
- **Responsive design** that works on all devices
- **Modern, accessible** UI components
- **Event calendar** showcasing downtown events and activities
- **Local business directory** to promote downtown merchants
- **News and updates** section for community announcements
- **Contact forms** for visitor inquiries and feedback
- **Optimized assets** for fast loading times

## Getting Started

### Prerequisites

- Node.js (LTS version recommended)
- npm (comes with Node.js)
- XAMPP or similar local development server

### Local Development Setup

1. Clone the repository:

   ```bash
   git clone https://github.com/MusicalViking/DowntownAlliance.git
   cd DowntownAlliance
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the development server:

   ```bash
   npm run dev
   ```

4. For XAMPP setup:
   - Place the project folder in your `htdocs` directory
   - Access the site at `http://localhost/site3`

### Building for Production

To create a production build:

```bash
npm run build
```

The built files will be in the `dist` directory. For XAMPP deployment, you can copy these files to your web server's root directory(htdocs).

---

## Project Structure

```
├── public/                 # Public assets (copied as-is to build)
│   ├── css/               # Compiled CSS
│   ├── img/               # Image assets
│   ├── js/                # JavaScript files
│   └── forms/             # Form-related assets
│   └── vite.svg           # Vite logo
│
├── src/                    # Source files
│   ├── main.js            # Main JavaScript entry point
│   │
│   ├── scripts/           # JavaScript modules
│   │   ├── about.js       # About page scripts
│   │   ├── contact.js     # Contact page scripts
│   │   ├── forms.js       # Form handling
│   │   ├── navbar.js      # Navigation functionality
│   │   ├── services.js    # Services page scripts
│   │   └── utils.js       # Utility functions
│   │
│   └── styles/            # SCSS source files
│       ├── main.css       # Compiled CSS
│       └── style.scss     # Main SCSS file
│
├── index.html             # Home page
├── about.html             # About Augusta Downtown Alliance
├── events.html            # Events listing
├── event-details.html     # Individual event pages
├── news.html              # News articles
├── news-details.html      # Individual news articles
├── faculty-staff.html     # Team and staff information
├── students-life.html     # Community and student life
├── campus-facilities.html # Downtown facilities
├── academics.html         # Educational programs
├── admissions.html        # Membership information
├── alumni.html            # Success stories
├── services.html          # Services offered
├── contact.html           # Contact information
├── privacy.html           # Privacy policy
├── terms-of-service.html  # Terms of service
├── starter-page.html      # Starter template
├── 404.html              # Custom 404 page
│
├── node_modules/         # NPM dependencies (auto-generated)
├── package.json          # Project configuration
├── package-lock.json     # Lock file for dependencies
├── postcss.config.js     # PostCSS configuration
└── vite.config.js        # Vite configuration
```

---

## Customization

- Modify theme colors and fonts in `src/scss/style.scss`.
- Add or update page-specific JS in `src/js/`.
- Update navbar links and footer branding in the HTML files.
- Extend the contact form to connect to your backend or email service.

---

## Contact

For more information about the Augusta Downtown Alliance, please visit our [website](https://downtownaugusta.org) or contact us at:

- **Email:** info@downtownaugusta.org
- **Phone:** (207) 626-2405
- **Address:** 1 Cony Street, Augusta, ME 04330

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

_This README will evolve alongside the template as new features and improvements are added._
