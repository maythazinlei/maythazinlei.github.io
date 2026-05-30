---
name: Cinematic Press
colors:
  surface: '#131313'
  surface-dim: '#131313'
  surface-bright: '#393939'
  surface-container-lowest: '#0e0e0e'
  surface-container-low: '#1b1c1c'
  surface-container: '#1f2020'
  surface-container-high: '#2a2a2a'
  surface-container-highest: '#353535'
  on-surface: '#e4e2e1'
  on-surface-variant: '#bdc8d1'
  inverse-surface: '#e4e2e1'
  inverse-on-surface: '#303030'
  outline: '#87929a'
  outline-variant: '#3e484f'
  surface-tint: '#7bd0ff'
  primary: '#8ed5ff'
  on-primary: '#00354a'
  primary-container: '#38bdf8'
  on-primary-container: '#004965'
  inverse-primary: '#00668a'
  secondary: '#c6c6c7'
  on-secondary: '#2f3131'
  secondary-container: '#454747'
  on-secondary-container: '#b4b5b5'
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
  secondary-fixed: '#e2e2e2'
  secondary-fixed-dim: '#c6c6c7'
  on-secondary-fixed: '#1a1c1c'
  on-secondary-fixed-variant: '#454747'
  tertiary-fixed: '#ffddb8'
  tertiary-fixed-dim: '#ffb960'
  on-tertiary-fixed: '#2a1700'
  on-tertiary-fixed-variant: '#653e00'
  background: '#131313'
  on-background: '#e4e2e1'
  surface-variant: '#353535'
typography:
  display-lg:
    fontFamily: Playfair Display
    fontSize: 72px
    fontWeight: '700'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Playfair Display
    fontSize: 48px
    fontWeight: '700'
    lineHeight: '1.2'
  headline-lg-mobile:
    fontFamily: Playfair Display
    fontSize: 32px
    fontWeight: '700'
    lineHeight: '1.2'
  headline-md:
    fontFamily: Playfair Display
    fontSize: 32px
    fontWeight: '600'
    lineHeight: '1.3'
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.5'
  metadata-sm:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '600'
    lineHeight: '1'
    letterSpacing: 0.1em
  label-md:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '500'
    lineHeight: '1'
spacing:
  base: 8px
  gutter: 24px
  margin-mobile: 16px
  margin-desktop: 64px
  section-gap: 128px
---

## Brand & Style

The design system is engineered for the intersection of investigative journalism and independent filmmaking. It evokes the raw, unvarnished truth of a documentary lens while maintaining the authoritative weight of a broadsheet editorial. 

The aesthetic is **Cinematic Brutalism**: a high-contrast, dark-mode foundation that utilizes aggressive whitespace and structural rigidity. It avoids the "slickness" of consumer tech, opting instead for a "work-in-progress" archival feel that suggests the interface is a tool for deep discovery. The emotional response is one of serious intent, high-stakes storytelling, and technical precision.

## Colors

The palette is anchored in a deep, non-pure black (`#131313`) to provide a cinematic canvas that doesn't wash out high-resolution imagery. 

- **Primary (Blue Light):** Used exclusively for interactive cues, progress indicators, and "active" states. It represents the glow of a monitor in a dark editing suite.
- **Secondary (High-Contrast White):** Reserved for core editorial content and primary headlines to ensure maximum readability and impact.
- **Neutrals:** Subtle grays are used for structural borders and secondary metadata to maintain the brutalist grid without overwhelming the primary content.

## Typography

This design system employs a high-contrast typographic pairing to signal its dual nature. 

**Playfair Display** provides the journalistic authority. It is used for large-scale headlines and editorial titles. Its high stroke contrast brings a luxury, "legacy media" feel to the digital space.

**Inter** handles the technical heavy lifting. Used for body copy, project metadata, and navigation, its neutral, systematic nature provides the "filmmaker's edge"—efficient, legible, and unobtrusive. Use `metadata-sm` for timestamps, camera specs, and file paths to reinforce the archival aesthetic.

## Layout & Spacing

The layout follows a **Fixed Grid** philosophy with exaggerated margins to create a "letterboxed" cinematic effect. 

- **Desktop:** A 12-column grid with a maximum container width of 1440px. Use wide 64px side margins to isolate content.
- **Mobile:** A 4-column fluid grid. Margins shrink to 16px to maximize real estate for media.
- **Rhythm:** Spacing is strictly mathematical, based on an 8px scale. Use large `section-gap` values to separate different "acts" or chapters of content, ensuring the brutalist whitespace feels intentional rather than empty.

## Elevation & Depth

In keeping with the brutalist aesthetic, this design system rejects traditional shadows and blurs. Depth is achieved through **Tonal Layers** and **Bold Borders**.

- **Surface Levels:** The base background is the darkest layer. Elements "rise" by shifting to slightly lighter shades of gray (e.g., `#1A1A1A`), rather than casting shadows.
- **Structural Outlines:** Use 1px or 2px solid borders (`#262626`) to define containers. This creates a "blueprint" or "contact sheet" feel.
- **Focus States:** High-contrast reversals (white background with black text) indicate active selection, rather than elevation.

## Shapes

The shape language is strictly **Sharp (0)**. Every container, button, and image frame uses 90-degree corners. This reinforces the technical, unyielding nature of the brutalist style and mimics the frames of a film strip or the columns of a newspaper. Rounded corners are prohibited to maintain the professional, "no-nonsense" tone.

## Components

- **Buttons:** Rectangular with a 2px border. Primary buttons use the Blue Light accent for the border or text, never a solid fill unless on hover.
- **Project Metadata:** Displayed in Inter (uppercase) with a subtle vertical separator. These should look like technical specs on a film canister.
- **Editorial Cards:** Images are always sharp-edged. Headlines sit directly below or overlay with a 100% opaque black background bar to ensure legibility.
- **Interactive Links:** Use a solid "Blue Light" underline that animates to a full background fill on hover, reversing the text color to black.
- **Input Fields:** Minimalist underlines or full-box outlines. Focus is indicated by the Blue Light border-color.
- **Media Player:** Custom controls using Inter for timestamps and Playfair Display for the current chapter title. Use the Blue Light accent for the scrub bar.