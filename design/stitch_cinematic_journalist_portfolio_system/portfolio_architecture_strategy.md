# Information Architecture & UX Strategy: Cinematic Journalist Portfolio

## 1. Information Architecture Map
- **Home (Landing)**
  - Hero: Dual Identity Statement + Muted Showreel
  - Work Filter: [All] | [Journalism/Docs] | [Short Films]
  - Featured Work Grid
  - Quick-access Timeline
  - Footer (Manifesto Snippet + Contact)
- **Project Detail (Dynamic)**
  - Full-width Video Header
  - Project Metadata (Role, Year, Tech Stack)
  - Long-form Context/Process
  - Related Projects
- **About/Manifesto**
  - Artist Statement
  - Technical Toolkit
  - Biography
- **Archive** (Filterable list of all minor works)
- **Contact** (Streamlined Form)

## 2. Low-Fidelity Wireframe (Home)
- **Header**: Left: [Name/Identity] | Right: [Navigation: Work, Milestones, About, Contact]
- **Section 1 (Hero)**: Large split text "TRUTH / VISION" overlaying a full-bleed video background with 30% opacity.
- **Section 2 (Work)**: Toggle switcher centered. Grid below (2 or 3 columns). 
  - Cards: Image-heavy, minimal text showing only Title and Year on hover.
- **Section 3 (Timeline)**: Vertical line centered. Alternating years/milestones on left/right. High-contrast accent color for 'Award' icons.
- **Section 4 (Contact)**: Large typography "LET'S BUILD SOMETHING REAL." Email link + simplified form.

## 3. UI Component Specification
- **Video Cards**: 16:9 aspect ratio. Default state: Grayscale/Low-sat image with a 'grain' overlay. Hover state: Full color, remove grain, reveal metadata.
- **Micro-interactions**: 
  - Mouse-tracking cursor that transforms into a 'PLAY' button over video cards.
  - Smooth parallax on timeline milestones during scroll.
- **Typography**: Headers in uppercase, tracked-out sans-serif. Body text in 18px line-height 1.6 for readability.

## 4. UX Strategy Notes
- **Video Performance**: Use lazy-loading for thumbnails. Host videos on Vimeo/YouTube but use a custom-skinned 'Lightbox' player to maintain brand aesthetic.
- **Mobile Optimization**: Stack the 'split' hero vertically. Ensure touch targets for filters are at least 44px. Convert timeline to a single-column left-aligned list.
