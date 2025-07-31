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
    this.themeToggle = document.getElementById('theme-toggle');
    this.themeIcon = document.getElementById('theme-icon');
    this.themeText = document.getElementById('theme-text');
    this.prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');
    this.init();
  }

  init() {
    // Check for saved user preference or system preference
    const savedTheme = localStorage.getItem('theme');
    const systemPrefersDark = this.prefersDarkScheme.matches;
    
    // Set initial theme
    if (savedTheme === 'dark' || (!savedTheme && systemPrefersDark)) {
      this.enableDarkMode();
    } else {
      this.enableLightMode();
    }

    // Add event listeners
    if (this.themeToggle) {
      this.themeToggle.addEventListener('click', () => this.toggleTheme());
    }

    // Listen for system theme changes
    this.prefersDarkScheme.addListener((e) => {
      if (!localStorage.getItem('theme')) {
        if (e.matches) {
          this.enableDarkMode();
        } else {
          this.enableLightMode();
        }
      }
    });
  }

  toggleTheme() {
    if (document.documentElement.classList.contains('dark-mode')) {
      this.enableLightMode();
    } else {
      this.enableDarkMode();
    }
  }

  enableDarkMode() {
    document.documentElement.classList.add('dark-mode');
    localStorage.setItem('theme', 'dark');
    this.updateToggleUI(true);
  }

  enableLightMode() {
    document.documentElement.classList.remove('dark-mode');
    localStorage.setItem('theme', 'light');
    this.updateToggleUI(false);
  }

  updateToggleUI(isDarkMode) {
    if (!this.themeIcon || !this.themeText) return;
    
    if (isDarkMode) {
      this.themeIcon.classList.remove('bi-moon');
      this.themeIcon.classList.add('bi-sun');
      this.themeText.textContent = 'Light Mode';
      if (this.themeToggle) {
        this.themeToggle.setAttribute('aria-label', 'Switch to light mode');
        this.themeToggle.setAttribute('title', 'Switch to light mode');
      }
    } else {
      this.themeIcon.classList.remove('bi-sun');
      this.themeIcon.classList.add('bi-moon');
      this.themeText.textContent = 'Dark Mode';
      if (this.themeToggle) {
        this.themeToggle.setAttribute('aria-label', 'Switch to dark mode');
        this.themeToggle.setAttribute('title', 'Switch to dark mode');
      }
    }
  }
}

// Initialize dark mode when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  // Check if we're on a page with the theme toggle
  if (document.getElementById('theme-toggle')) {
    new DarkMode();
  }
});
