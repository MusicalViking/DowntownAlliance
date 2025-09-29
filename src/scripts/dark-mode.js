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

    // Add dark mode class to html element immediately to prevent flash of light theme
    if (localStorage.getItem('theme') !== 'light') {
      document.documentElement.classList.add('dark-mode');
    }

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
      // Update UI immediately for better responsiveness
      this.updateToggleUI(false);
    } else {
      console.log('DarkMode: Switching to dark mode');
      this.enableDarkMode();
      // Update UI immediately for better responsiveness
      this.updateToggleUI(true);
    }
    
    // Force a reflow to ensure the transition happens smoothly
    document.body.offsetHeight;
    
    // Add a small delay to ensure the DOM has updated
    requestAnimationFrame(() => {
      // Update UI again to ensure consistency
      this.updateToggleUI(!isDark);
    });
  }

  applyTheme(forceDark = null) {
    const savedTheme = localStorage.getItem('theme');
    
    // Default to dark mode (true) unless explicitly set to light
    let isDark = true;

    // Check for saved theme preference
    if (savedTheme === 'light') {
      isDark = false;
    } else if (savedTheme === 'dark') {
      isDark = true;
    }
    
    // Allow force override
    if (forceDark === true) isDark = true;
    if (forceDark === false) isDark = false;

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
      if (!icon) return;
      
      console.log(`DarkMode: Updating icon ${index}`, icon);
      
      // Remove all possible icon classes first
      icon.classList.remove('bi-moon', 'bi-sun');
      
      // Add the appropriate icon class
      if (isDarkMode) {
        icon.classList.add('bi-sun');
        icon.classList.remove('bi-moon');
      } else {
        icon.classList.add('bi-moon');
        icon.classList.remove('bi-sun');
      }
      
      console.log('DarkMode: Icon classes after update:', icon.className);
    });

    // Update all theme text elements
    this.themeTexts.forEach((text, index) => {
      if (!text) return;
      
      console.log(`DarkMode: Updating text ${index}`, text);
      const newText = isDarkMode ? 'Light Mode' : 'Dark Mode';
      console.log(`DarkMode: Setting text to '${newText}'`);
      text.textContent = newText;
    });

    // Update all toggle buttons
    this.themeToggles.forEach(toggle => {
      if (!toggle) return;
      
      const label = isDarkMode ? 'Switch to light mode' : 'Switch to dark mode';
      const pressed = isDarkMode ? 'true' : 'false';
      
      // Update ARIA attributes for accessibility
      toggle.setAttribute('aria-label', label);
      toggle.setAttribute('title', label);
      toggle.setAttribute('aria-pressed', pressed);
      
      // Add data-theme attribute for additional styling if needed
      toggle.setAttribute('data-theme', isDarkMode ? 'dark' : 'light');
    });
    
    // Dispatch a custom event in case other components need to react to theme changes
    document.dispatchEvent(new CustomEvent('themeChange', { 
      detail: { isDarkMode } 
    }));
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
