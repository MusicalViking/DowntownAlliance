const fs = require('fs');
const path = require('path');

// Standard theme toggle HTML
const standardToggle = `
  <li class="ms-lg-3">
    <button 
      id="theme-toggle" 
      class="theme-toggle btn btn-link p-0 border-0 bg-transparent" 
      aria-label="Toggle dark mode"
      aria-pressed="false"
    >
      <i id="theme-icon" class="bi bi-moon"></i>
      <span id="theme-text" class="d-none d-lg-inline ms-1">Dark Mode</span>
    </button>
  </li>`;

// List of HTML files to update (excluding node_modules and template files)
const htmlFiles = [
  'index.html',
  'about.html',
  'contact.html',
  'events.html',
  'get_involved.html',
  'information.html',
  'news.html',
  'privacy.html',
  'shopping.html',
  'sponsors.html',
  'terms-of-service.html',
  '404.html'
];

// Function to update theme toggle in a file
function updateThemeToggle(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Pattern to find the theme toggle button
    const togglePattern = /<button[^>]*id=["']theme-toggle["'][\s\S]*?<\/button>/i;
    const hasToggle = togglePattern.test(content);
    
    if (hasToggle) {
      // Replace existing toggle with standardized version
      content = content.replace(togglePattern, standardToggle);
      
      // Ensure dark mode script is included
      if (!content.includes('src="/src/main.js"')) {
        const bodyCloseTag = '</body>';
        if (content.includes(bodyCloseTag)) {
          content = content.replace(
            bodyCloseTag, 
            `  <script type="module" src="/src/main.js"></script>\n${bodyCloseTag}`
          );
        }
      }
      
      // Write the updated content back to the file
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`✅ Updated: ${filePath}`);
    } else {
      console.log(`ℹ️  No theme toggle found in: ${filePath}`);
    }
  } catch (error) {
    console.error(`❌ Error processing ${filePath}:`, error.message);
  }
}

// Process all HTML files
htmlFiles.forEach(file => {
  const filePath = path.join(__dirname, file);
  if (fs.existsSync(filePath)) {
    updateThemeToggle(filePath);
  } else {
    console.log(`⚠️  File not found: ${filePath}`);
  }
});

console.log('\n🎉 Theme toggle standardization complete!');
