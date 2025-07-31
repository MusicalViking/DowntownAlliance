# Dark Mode Implementation Plan

## Notes

- The site uses CSS custom properties (variables) for colors and fonts in `main.css`.
- There are `.light-background` and `.dark-background` classes for color overrides, but no global dark mode toggle.
- Site uses SCSS (`style.scss`) and main CSS (`main.css`).
- JavaScript entry is `src/main.js` and the main HTML is `index.html`.
- The navigation and footer are present on all pages, so placing a toggle there will make it accessible site-wide.

## Task List

- [x] Analyze project directory and identify relevant files (HTML, CSS, JS)
- [x] Review CSS for color variables and dark mode support
- [x] Review JS for possible integration points
- [x] Review HTML structure for toggle placement
- [x] Design the dark mode toggle mechanism (CSS class, localStorage, etc.)
- [x] Update CSS/SCSS to support global dark mode (e.g., `.dark-mode` class on `<body>`)
- [x] Implement toggle button in HTML (e.g., in header/nav)
- [x] Write JS to handle toggle, persist preference, and switch classes
- [ ] Test across multiple pages for consistency

## Current Goal

Test dark mode across multiple pages
