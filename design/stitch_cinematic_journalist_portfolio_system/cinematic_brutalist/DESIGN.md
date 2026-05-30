---
name: Cinematic Brutalist
colors:
  surface: '#0c1324'
  surface-dim: '#0c1324'
  surface-bright: '#33394c'
  surface-container-lowest: '#070d1f'
  surface-container-low: '#151b2d'
  surface-container: '#191f31'
  surface-container-high: '#23293c'
  surface-container-highest: '#2e3447'
  on-surface: '#dce1fb'
  on-surface-variant: '#bdc8d1'
  inverse-surface: '#dce1fb'
  inverse-on-surface: '#2a3043'
  outline: '#87929a'
  outline-variant: '#3e484f'
  surface-tint: '#7bd0ff'
  primary: '#8ed5ff'
  on-primary: '#00354a'
  primary-container: '#38bdf8'
  on-primary-container: '#004965'
  inverse-primary: '#00668a'
  secondary: '#bec6e0'
  on-secondary: '#283044'
  secondary-container: '#3f465c'
  on-secondary-container: '#adb4ce'
  tertiary: '#ffc176'
  on-tertiary: '#472a00'
  tertiary-container: '#f1a02b'
  on-tertiary-container: '#613b00'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#c4e7ff'
  primary-fixed-dim: '#7bd0ff'
  on-primary-fixed: '#001e2c'
  on-primary-fixed-variant: '#004c69'
  secondary-fixed: '#dae2fd'
  secondary-fixed-dim: '#bec6e0'
  on-secondary-fixed: '#131b2e'
  on-secondary-fixed-variant: '#3f465c'
  tertiary-fixed: '#ffddb8'
  tertiary-fixed-dim: '#ffb960'
  on-tertiary-fixed: '#2a1700'
  on-tertiary-fixed-variant: '#653e00'
  background: '#0c1324'
  on-background: '#dce1fb'
  surface-variant: '#2e3447'
typography:
  display-lg:
    fontFamily: Archivo Narrow
    fontSize: 72px
    fontWeight: '700'
    lineHeight: '1.1'
    letterSpacing: -0.04em
  headline-lg:
    fontFamily: Archivo Narrow
    fontSize: 32px
    fontWeight: '600'
    lineHeight: '1.2'
    letterSpacing: -0.02em
  headline-lg-mobile:
    fontFamily: Archivo Narrow
    fontSize: 24px
    fontWeight: '600'
    lineHeight: '1.2'
    letterSpacing: -0.01em
  body-md:
    fontFamily: Archivo Narrow
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.5'
    letterSpacing: 0em
  label-sm:
    fontFamily: Archivo Narrow
    fontSize: 12px
    fontWeight: '600'
    lineHeight: '1'
    letterSpacing: 0.05em
spacing:
  unit: 4px
  gutter: 16px
  margin-mobile: 16px
  margin-desktop: 48px
  container-max: 1440px
---

## Brand & Style
The design system is defined by a "Cinematic Brutalist" aesthetic—a fusion of raw, industrial efficiency and high-fidelity tech. It is built for power users who value information density and uncompromising clarity. The personality is authoritative, cold, and precise.

By stripping away decorative flourishes and relying on heavy strokes, monospaced rhythms, and the sharp "Blue Light" accent, the UI evokes the feeling of a sophisticated command center. This is a high-contrast environment where whitespace is used as a functional separator rather than just an aesthetic choice.

## Colors
The palette is rooted in a deep, "obsidian" dark mode foundation. The primary color, **Blue Light (#38bdf8)**, acts as a high-energy signal against the dark void of the background. 

- **Primary:** #38bdf8 is reserved exclusively for interactive states, primary CTAs, and critical milestones.
- **Backgrounds:** The base layer uses #020617, with elevated surfaces using #0f172a to maintain a subtle tonal hierarchy.
- **Typography:** Primary text is #f8fafc for maximum readability, while secondary metadata uses a muted slate to recede.

## Typography
This design system utilizes **Archivo Narrow** across all levels to reinforce the condensed, utilitarian nature of the interface. The typography is treated as a structural element.

Headlines should be set with tight tracking (letter-spacing) to create a dense, "blocky" feel. Labels and small captions should use increased tracking and uppercase styling to ensure legibility despite their condensed forms. Avoid any serif or rounded typefaces; the objective is a consistent, technical rhythm.

## Layout & Spacing
The layout follows a rigid 12-column fixed grid for desktop, transitioning to a fluid 4-column grid for mobile. Spacing is strictly mathematical, built on a 4px baseline shift. 

Margins and gutters are kept tight to maximize information density. Large "hero" sections should maintain significant vertical padding to allow the "Blue Light" elements to breathe, but functional data views should use compact spacing to emphasize the brutalist, efficient nature of the design system.

## Elevation & Depth
In keeping with the Brutalist-Minimalist philosophy, traditional soft shadows are prohibited. Depth is communicated through:
1.  **Hard Borders:** Use 1px or 2px solid borders (#1e293b) to define containers.
2.  **Tonal Stacking:** Surfaces move from #020617 (base) to #0f172a (elevated).
3.  **Active Strokes:** Focused or active elements receive a 2px "Blue Light" (#38bdf8) border, creating a "glow" effect purely through high color contrast rather than blur.

## Shapes
The shape language is strictly **Sharp (0)**. There are no rounded corners in this design system. Every button, input field, card, and modal must have 90-degree angles. This reinforces the "unrefined" and technical character of the brand.

## Components
- **Buttons:** Primary buttons use a solid #38bdf8 background with #020617 text. Secondary buttons use a 1px #38bdf8 border with transparent backgrounds. Hover states should invert the colors or increase stroke weight.
- **Input Fields:** Sharp-edged boxes with a 1px slate border. Upon focus, the border changes to 2px #38bdf8.
- **Milestone Markers:** Used in timelines or progress trackers, these are 8px x 8px solid #38bdf8 squares (not circles).
- **Chips/Tags:** Small rectangular boxes with uppercase Archivo Narrow text. Use #38bdf8 for "active" or "success" states.
- **Cards:** Defined by a 1px border (#1e293b). No shadows. Headers within cards should be separated by a solid horizontal rule.
- **CTAs:** Large, full-width blocks utilizing the primary blue to command immediate attention.