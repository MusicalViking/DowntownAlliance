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
    // Store reference to the instance
    const instance = this;
    
    // Initialize when DOM is ready
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', () => instance.initializeDarkMode());
    } else {
      // If DOM is already loaded, initialize immediately
      setTimeout(() => instance.initializeDarkMode(), 0);
    }
  }
  
  initializeDarkMode() {
    console.log('DarkMode: Initializing...');
    // Store all theme toggles on the page
    this.themeToggles = document.querySelectorAll('#theme-toggle');
    this.themeIcons = document.querySelectorAll('#theme-icon');
    this.themeTexts = document.querySelectorAll('#theme-text');
    this.prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');

    console.log('DarkMode: Elements found:', {
      toggles: this.themeToggles.length,
      icons: this.themeIcons.length,
      texts: this.themeTexts.length
    });

    // Initialize dark mode
    this.init();
  }

  init() {
    // Apply saved theme or system preference
    this.applyTheme();

    // Use event delegation for the theme toggle
    document.addEventListener('click', (event) => {
      // Check if the clicked element or any of its parents is a theme toggle
      const toggle = event.target.closest('#theme-toggle');
      if (toggle) {
        event.preventDefault();
        this.toggleTheme();
      }
    });

    // Listen for system theme changes
    this.prefersDarkScheme.addListener((e) => {
      if (!localStorage.getItem('theme')) {
        this.applyTheme(e.matches);
      }
    });
  }

  toggleTheme() {
    console.log('DarkMode: Toggling theme...');
    const isDark = document.documentElement.classList.contains('dark-mode');
    console.log('DarkMode: Current theme is dark?', isDark);
    
    if (isDark) {
      console.log('DarkMode: Switching to light mode');
      this.enableLightMode();
    } else {
      console.log('DarkMode: Switching to dark mode');
      this.enableDarkMode();
    }
    
    // Force update the UI after a small delay to ensure the class has been toggled
    setTimeout(() => {
      this.updateToggleUI(!isDark);
    }, 10);
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
    console.log('DarkMode: Updating UI for dark mode?', isDarkMode);
    // Update all theme icons and texts on the page
    this.themeIcons.forEach((icon, index) => {
      console.log(`DarkMode: Updating icon ${index}`, icon);
      icon.classList.toggle('bi-moon', !isDarkMode);
      icon.classList.toggle('bi-sun', isDarkMode);
      console.log('DarkMode: Icon classes after update:', icon.className);
    });

    this.themeTexts.forEach((text, index) => {
      console.log(`DarkMode: Updating text ${index}`, text);
      const newText = isDarkMode ? 'Light Mode' : 'Dark Mode';
      console.log(`DarkMode: Setting text to '${newText}'`);
      text.textContent = newText;
    });

    // Update all toggle buttons
    this.themeToggles.forEach(toggle => {
      const label = isDarkMode ? 'Switch to light mode' : 'Switch to dark mode';
      toggle.setAttribute('aria-label', label);
      toggle.setAttribute('title', label);
    });
  }
}

// Export a function to initialize dark mode
export function initDarkMode() {
  // Only initialize if not already initialized
  if (!window.darkModeInitialized) {
    window.darkModeInitialized = true;
    new DarkMode();
  }
}

// Initialize dark mode when the module is imported
if (typeof document !== 'undefined') {
  initDarkMode();
}
