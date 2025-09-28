/**
 * Dark Mode Functionality
 * Handles theme switching between light and dark modes
 */

class DarkMode {
  constructor() {
    // Store all theme toggles on the page
    this.themeToggles = document.querySelectorAll('#theme-toggle');
    this.themeIcons = document.querySelectorAll('#theme-icon');
    this.themeTexts = document.querySelectorAll('#theme-text');
    this.htmlElement = document.documentElement;
    this.prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');
    
    // Bind methods to maintain 'this' context
    this.toggleTheme = this.toggleTheme.bind(this);
    
    // Initialize dark mode
    this.init();
  }

  init() {
    // Add event listeners to all theme toggles
    this.themeToggles.forEach(toggle => {
      // Remove any existing listeners to prevent duplicates
      toggle.removeEventListener('click', this.toggleTheme);
      
      // Add click event
      toggle.addEventListener('click', this.toggleTheme);
    });

    // Apply saved theme or system preference
    this.applyTheme();

    // Listen for system theme changes
    this.prefersDarkScheme.addEventListener('change', (e) => {
      // Only apply system theme if user hasn't set a preference
      if (!localStorage.getItem('theme')) {
        this.applyTheme(e.matches);
      }
    });

    // Dispatch initial theme event
    this.dispatchThemeChange();
  }

  toggleTheme(e) {
    if (e) e.preventDefault();
    
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

    // Priority: 1. Force parameter 2. Saved preference 3. System preference
    if (forceDark !== null) {
      isDark = forceDark;
    } else if (savedTheme) {
      isDark = savedTheme === 'dark';
    } else {
      isDark = systemPrefersDark;
    }

    // Apply the theme
    if (isDark) {
      document.documentElement.classList.add('dark-mode');
    } else {
      document.documentElement.classList.remove('dark-mode');
    }
    
    // Update UI if toggles exist
    if (this.themeToggles.length > 0) {
      this.updateToggleUI(isDark);
    }
    
    // Dispatch theme change event
    this.dispatchThemeChange(isDark);
  }

  updateToggleUI(isDark) {
    this.themeIcons.forEach(icon => {
      if (icon) {
        icon.className = isDark ? 'bi bi-sun' : 'bi bi-moon';
      }
    });
    
    this.themeTexts.forEach(text => {
      if (text) {
        text.textContent = isDark ? 'Light Mode' : 'Dark Mode';
      }
    });
    
    this.themeToggles.forEach(toggle => {
      if (toggle) {
        toggle.setAttribute('aria-pressed', isDark ? 'true' : 'false');
      }
    });
  }

  dispatchThemeChange(isDark = null) {
    if (isDark === null) {
      isDark = document.documentElement.classList.contains('dark-mode');
    }
    document.dispatchEvent(new CustomEvent('themeChange', { 
      detail: { isDark } 
    }));
  }

  enableDarkMode() {
    localStorage.setItem('theme', 'dark');
    this.applyTheme(true);
  }

  enableLightMode() {
    localStorage.setItem('theme', 'light');
    this.applyTheme(false);
  }
}

// Initialize dark mode when the DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  // Only initialize if not already initialized
  if (!window.darkMode) {
    window.darkMode = new DarkMode();
  }
});
        } else {
            document.body.classList.remove('dark-mode');
            if (themeIcon) themeIcon.className = 'bi bi-moon';
            if (themeText) themeText.textContent = 'Dark Mode';
            if (themeToggle) themeToggle.setAttribute('aria-pressed', 'false');
        }
        
        // Dispatch a custom event in case other scripts need to know about theme changes
        document.dispatchEvent(new CustomEvent('themeChange', { detail: { theme } }));
    }
    
    // Initialize any components that need theme awareness
    initializeThemeAwareComponents();
});

/**
 * Initialize any components that need to be aware of the current theme
 */
function initializeThemeAwareComponents() {
    // Example: Update any charts or visualizations when theme changes
    document.addEventListener('themeChange', (e) => {
        const theme = e.detail.theme;
        console.log(`Theme changed to ${theme}`);
        // Add any theme-aware component updates here
    });
}

// Make the setTheme function available globally for manual theme switching
window.setTheme = function(theme) {
    localStorage.setItem('theme', theme);
    document.dispatchEvent(new CustomEvent('themeChange', { detail: { theme } }));
    
    // Update the toggle UI if it exists
    const themeToggle = document.getElementById('theme-toggle');
    const themeIcon = document.getElementById('theme-icon');
    const themeText = document.getElementById('theme-text');
    
    if (theme === 'dark') {
        document.body.classList.add('dark-mode');
        if (themeIcon) themeIcon.className = 'bi bi-sun';
        if (themeText) themeText.textContent = 'Light Mode';
        if (themeToggle) themeToggle.setAttribute('aria-pressed', 'true');
    } else {
        document.body.classList.remove('dark-mode');
        if (themeIcon) themeIcon.className = 'bi bi-moon';
        if (themeText) themeText.textContent = 'Dark Mode';
        if (themeToggle) themeToggle.setAttribute('aria-pressed', 'false');
    }
};
