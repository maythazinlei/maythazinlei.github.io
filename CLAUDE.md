# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a static profile website designed for GitHub Pages deployment. The site showcases personal projects, skills, and contact information using vanilla HTML, CSS, and JavaScript.

## Architecture

- **Static Site Structure**: Pure HTML/CSS/JS with no build process or frameworks
- **Entry Point**: `src/index.html` - main HTML document served by GitHub Pages
- **Styling**: `src/css/style.css` - single CSS file with basic responsive styling
- **Interactivity**: `src/js/main.js` - currently empty, intended for future JavaScript functionality
- **Deployment**: Configured for GitHub Pages hosting

## Development Workflow

### Local Development
```bash
# No build process required - open directly in browser
open src/index.html
# or serve locally with any static server
python3 -m http.server 8000  # then visit http://localhost:8000/src/
```

### Content Updates
- Edit `src/index.html` to update profile information, projects, and contact details
- Modify `src/css/style.css` for styling changes
- Add JavaScript functionality to `src/js/main.js` as needed

### Deployment
Changes pushed to the main branch automatically deploy to GitHub Pages. No manual deployment steps required.

## Key Files
- `src/index.html`: Main page with profile, projects, and contact sections
- `src/css/style.css`: Complete styling for the site
- `src/js/main.js`: JavaScript file (currently unused)

## GitHub Pages Configuration
The site is configured to serve from the root directory, with `src/index.html` as the main entry point.