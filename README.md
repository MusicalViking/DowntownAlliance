# Augusta Downtown Alliance

> **Developer:** Arthur Belanger (GitHub: [MusicalViking](https://github.com/MusicalViking))
> **Status:** 🚧 Work in Progress/local development
> **Location:** Augusta, Maine
> **Website:** [Downtown Augusta](https://downtownaugusta.org)

---

## Project Overview

Official website for the Augusta Downtown Alliance, a non-profit organization dedicated to the economic and cultural development of downtown Augusta, Maine. This website serves as a digital hub for community events, local business information, and downtown revitalization efforts.

Our mission is to create a vibrant downtown district that is the heart of the greater Augusta community, supporting local businesses, hosting community events, and preserving the historic character of our downtown area.

## Contributing

We welcome contributions from the community! Here's how you can help:

1. **Report Bugs**: Open an issue on [GitHub](https://github.com/MusicalViking/DowntownAlliance/issues)
2. **Suggest Features**: Create a feature request issue
3. **Submit Code**: Open a pull request with your changes

### Development Workflow

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/your-feature-name`
3. Commit your changes: `git commit -m 'Add some feature'`
4. Push to the branch: `git push origin feature/your-feature-name`
5. Open a pull request

### Code Standards

- Follow existing code style and patterns
- Write clear, concise commit messages
- Update documentation when adding new features
- Test your changes thoroughly

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

## Development Setup

### Prerequisites

- [Node.js](https://nodejs.org/) (LTS version recommended)
- [npm](https://www.npmjs.com/) (comes with Node.js)
- [XAMPP](https://www.apachefriends.org/) or similar local development server (for PHP support)
- [Git](https://git-scm.com/) (for version control)

### Local Development

1. **Clone the repository**:

   ```bash
   git clone https://github.com/MusicalViking/DowntownAlliance.git
   cd DowntownAlliance
   ```

2. **Install dependencies**:

   ```bash
   npm install
   ```

3. **Start the development server**:
   ```bash
   npm run dev
   ```
   This will start Vite's development server with hot-reload enabled at `http://localhost:5173`

### XAMPP Setup (for PHP support)

1. **Install XAMPP** if you haven't already
2. **Clone the repository** into your `htdocs` directory:
   ```bash
   cd C:/xampp/htdocs/
   git clone https://github.com/MusicalViking/DowntownAlliance.git site3
   ```
3. **Access the site** at:
   - Development: `http://localhost:5173` (Vite dev server)
   - Production: `http://localhost/site3` (XAMPP server)

### Building for Production

1. **Create a production build**:

   ```bash
   npm run build
   ```

   This will create optimized assets in the `dist` directory.

2. **For XAMPP deployment**:
   - Copy the contents of the `dist` directory to your web server's root directory
   - Ensure all PHP files and the `public` directory are also copied

### Development Scripts

- `npm run dev` - Start development server with hot-reload
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint to check code quality

## Environment Variables

Create a `.env` file in the root directory for local development:

```env
VITE_API_BASE_URL=http://localhost:8000/api
# Add other environment variables as needed
```

## Code Style

- Follow [Prettier](https://prettier.io/) for code formatting
- Use [ESLint](https://eslint.org/) for JavaScript/TypeScript linting
- Follow [BEM](http://getbem.com/) methodology for CSS class naming

---

## Project Structure

```
├── public/                 # Public assets (copied as-is to build)
│   ├── forms/             # Form handling
│   │   └── contact.php    # Contact form processor
│   ├── img/               # Image assets
│   │   ├── blog/          # Blog post images
│   │   ├── education/     # Educational content images
│   │   ├── misc/          # Miscellaneous images
│   │   ├── person/        # Team member photos
│   │   ├── apple-touch-icon.png  # iOS home screen icon
│   │   ├── favicon.png    # Site favicon
│   │   └── logo.webp      # Website logo
│   └── vite.svg           # Vite logo
│
├── src/                    # Source files
│   ├── main.js            # Main JavaScript entry point
│   │
│   ├── scripts/           # JavaScript modules
│   │   ├── about.js       # About page scripts
│   │   ├── contact.js     # Contact page scripts
│   │   ├── forms.js       # Form handling scripts
│   │   ├── navbar.js      # Navigation functionality
│   │   ├── services.js    # Services page scripts
│   │   └── utils.js       # Utility functions
│   │
│   └── styles/            # SCSS source files
│       ├── main.css       # Compiled CSS
│       └── style.scss     # Main SCSS file
│
├── *.html                 # HTML page templates
│   ├── 404.html           # 404 error page
│   ├── about.html         # About page
│   ├── contact.html       # Contact page
│   ├── dt_businesses.html # Downtown businesses directory
│   ├── events.html        # Events calendar
│   ├── get_involved.html  # Get involved/volunteer page
│   ├── index.html         # Homepage
│   ├── information.html   # General information
│   ├── news.html          # News and updates
│   ├── people.html        # Team/people page
│   ├── privacy.html       # Privacy policy
│   ├── seasonal.html      # Seasonal events
│   ├── services.html      # Services page
│   ├── shopping.html      # Shopping information
│   ├── sponsors.html      # Sponsors page
│   ├── terms-of-service.html # Terms of service
│   ├── thingstodo.html    # Things to do in Augusta
│   └── upcoming.html      # Upcoming events page
│
├── .gitignore            # Git ignore file
├── package.json          # Project configuration and dependencies
├── package-lock.json     # Lock file for dependencies
├── postcss.config.js     # PostCSS configuration
└── vite.config.js        # Vite configuration
```

---

## Project Customization

### Styling

- **Theme Colors**: Update colors in `src/styles/_variables.scss`
- **Typography**: Modify font settings in `src/styles/_typography.scss`
- **Components**: Edit component styles in their respective SCSS files

### JavaScript

- **Page-specific scripts**: Add to `src/scripts/` directory
- **Shared utilities**: Add to `src/scripts/utils.js`
- **Form handling**: See `src/scripts/forms.js` for form-related functionality

### Content Updates

- **HTML Pages**: Edit the respective `.html` files in the root directory
- **Images**: Add images to `public/img/` and reference them with relative paths
- **Contact Form**: Configure form handling in `public/forms/contact.php`

### Adding New Pages

1. Create a new `.html` file in the root directory
2. Add the page to the navigation in `src/scripts/navbar.js`
3. Create any necessary JavaScript in `src/scripts/`
4. Add styles in the appropriate SCSS file

## Deployment

### Production Deployment

1. Run `npm run build`
2. Upload the entire project to your web server
3. Ensure the server is configured to handle:
   - Clean URLs (remove .html extensions)
   - PHP for form processing
   - Proper MIME types for modern web features

### Deployment to Shared Hosting

1. Build the project: `npm run build`
2. Upload the following to your hosting:
   - All `.html` files
   - The `public/` directory
   - The `dist/` directory
3. Configure your web server to point to the root directory

---

## Contact

For more information about the Augusta Downtown Alliance, please visit our [website](https://downtownaugusta.org) or contact us at:

- **Email:** info@downtownaugusta.org
- **Phone:** (207) 458-9551
- **Address:** New Address Coming Soon

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

_This README will evolve alongside the template as new features and improvements are added._
