/**
 * Dark Mode Toggle Functionality
 *
 * This script handles the dark mode functionality including:
 * - Toggling between light and dark themes
 * - Saving user preference to localStorage
 * - Checking system preference
 * - Updating the UI accordingly
 */

export class DarkMode {
  constructor() {
    // Store all theme toggles on the page
    this.themeToggles = document.querySelectorAll('#theme-toggle');
    this.themeIcons = document.querySelectorAll('#theme-icon');
    this.themeTexts = document.querySelectorAll('#theme-text');
    this.prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');

    // Initialize dark mode
    this.init();
  }

  init() {
    // Apply saved theme or system preference
    this.applyTheme();

    // Add event listeners to all theme toggles
    this.themeToggles.forEach(toggle => {
      // Remove any existing listeners to prevent duplicates
      const newToggle = toggle.cloneNode(true);
      toggle.parentNode.replaceChild(newToggle, toggle);

      // Add click event
      newToggle.addEventListener('click', () => this.toggleTheme());
    });

    // Listen for system theme changes
    this.prefersDarkScheme.addListener((e) => {
      if (!localStorage.getItem('theme')) {
        this.applyTheme(e.matches);
      }
    });
  }

  toggleTheme() {
    const isDark = document.documentElement.classList.contains('dark-mode');
    if (isDark) {
      this.enableLightMode();
    } else {
      this.enableDarkMode();
    }
  }

  applyTheme(forceDark = null) {
    const savedTheme = localStorage.getItem('theme');
    const systemPrefersDark = this.prefersDarkScheme.matches;

    let isDark = false;

    if (savedTheme === 'dark' || (savedTheme === null && systemPrefersDark) || forceDark === true) {
      isDark = true;
    }

    if (isDark) {
      document.documentElement.classList.add('dark-mode');
      this.updateToggleUI(true);
    } else {
      document.documentElement.classList.remove('dark-mode');
      this.updateToggleUI(false);
    }
  }

  enableDarkMode() {
    localStorage.setItem('theme', 'dark');
    this.applyTheme(true);
  }

  enableLightMode() {
    localStorage.setItem('theme', 'light');
    this.applyTheme(false);
  }

  updateToggleUI(isDarkMode) {
    // Update all theme icons and texts on the page
    this.themeIcons.forEach(icon => {
      icon.classList.toggle('bi-moon', !isDarkMode);
      icon.classList.toggle('bi-sun', isDarkMode);
    });

    this.themeTexts.forEach(text => {
      text.textContent = isDarkMode ? 'Light Mode' : 'Dark Mode';
    });

    // Update all toggle buttons
    this.themeToggles.forEach(toggle => {
      const label = isDarkMode ? 'Switch to light mode' : 'Switch to dark mode';
      toggle.setAttribute('aria-label', label);
      toggle.setAttribute('title', label);
    });
  }
}

// Initialize dark mode when the module is imported
if (document.getElementById('theme-toggle')) {
  new DarkMode();
}
