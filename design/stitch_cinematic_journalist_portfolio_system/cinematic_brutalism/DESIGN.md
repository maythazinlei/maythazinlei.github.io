---
name: Cinematic Brutalism
colors:
  surface: '#131313'
  surface-dim: '#131313'
  surface-bright: '#3a3939'
  surface-container-lowest: '#0e0e0e'
  surface-container-low: '#1c1b1b'
  surface-container: '#201f1f'
  surface-container-high: '#2a2a2a'
  surface-container-highest: '#353534'
  on-surface: '#e5e2e1'
  on-surface-variant: '#c4c7c8'
  inverse-surface: '#e5e2e1'
  inverse-on-surface: '#313030'
  outline: '#8e9192'
  outline-variant: '#444748'
  surface-tint: '#c6c6c7'
  primary: '#ffffff'
  on-primary: '#2f3131'
  primary-container: '#e2e2e2'
  on-primary-container: '#636565'
  inverse-primary: '#5d5f5f'
  secondary: '#ffdb9d'
  on-secondary: '#412d00'
  secondary-container: '#feb700'
  on-secondary-container: '#6b4b00'
  tertiary: '#ffffff'
  on-tertiary: '#313030'
  tertiary-container: '#e5e2e1'
  on-tertiary-container: '#656464'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#e2e2e2'
  primary-fixed-dim: '#c6c6c7'
  on-primary-fixed: '#1a1c1c'
  on-primary-fixed-variant: '#454747'
  secondary-fixed: '#ffdea8'
  secondary-fixed-dim: '#ffba20'
  on-secondary-fixed: '#271900'
  on-secondary-fixed-variant: '#5e4200'
  tertiary-fixed: '#e5e2e1'
  tertiary-fixed-dim: '#c8c6c5'
  on-tertiary-fixed: '#1c1b1b'
  on-tertiary-fixed-variant: '#474746'
  background: '#131313'
  on-background: '#e5e2e1'
  surface-variant: '#353534'
typography:
  display-lg:
    fontFamily: Archivo Narrow
    fontSize: 80px
    fontWeight: '700'
    lineHeight: 90px
    letterSpacing: -0.04em
  display-lg-mobile:
    fontFamily: Archivo Narrow
    fontSize: 48px
    fontWeight: '700'
    lineHeight: 52px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Archivo Narrow
    fontSize: 40px
    fontWeight: '600'
    lineHeight: 48px
    letterSpacing: -0.01em
  headline-md:
    fontFamily: Archivo Narrow
    fontSize: 32px
    fontWeight: '600'
    lineHeight: 40px
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  label-caps:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '700'
    lineHeight: 16px
    letterSpacing: 0.1em
  mono-label:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '500'
    lineHeight: 20px
spacing:
  margin-desktop: 80px
  margin-tablet: 40px
  margin-mobile: 20px
  gutter: 24px
  stack-sm: 8px
  stack-md: 24px
  stack-lg: 64px
  stack-xl: 120px
---

## Brand & Style

The design system is built upon the concept of **Cinematic Brutalism**. It prioritizes the "Raw Truth" of journalism while maintaining the "Polished Execution" of indie filmmaking. The aesthetic is intentionally high-contrast and stripped of unnecessary decoration, allowing the video content to serve as the primary visual driver.

The brand personality is authoritative yet underground—evoking the feeling of a film festival poster or a high-end investigative broadsheet. It utilizes heavy whitespace to create "breathing room" between intense visual narratives, ensuring that the user's focus is never diverted from the storytelling. The emotional response should be one of intrigue, respect for the craft, and immediate professional trust.

## Colors

This design system utilizes a stark, high-contrast palette optimized for OLED displays and cinematic immersion.

- **Backgrounds:** The foundation is `Deep Black` (#050505), providing an infinite-depth feel that makes video thumbnails pop.
- **Surfaces:** `Dark Gray` (#1A1A1A) is used for subtle container differentiation, such as project cards or background sections.
- **Typography:** `Crisp White` (#FFFFFF) is the primary engine for legibility, ensuring an uncompromising editorial feel.
- **Accents:** `Raw Amber` (#FFB800) is used sparingly as a "director's mark." It highlights active states, call-to-action buttons, and essential metadata (like video duration or category tags). 

Avoid gradients. Colors should be applied in flat, solid blocks to maintain the brutalist integrity.

## Typography

The typography strategy pairs industrial structure with Swiss-style clarity.

**Headlines:** Archivo Narrow provides a "newsroom" authority. Its condensed nature allows for massive, high-impact titling that mimics film credits or documentary headers. Display sizes should use aggressive negative letter spacing to create a tightly-packed, structural block of text.

**Body:** Inter is used for all long-form reading and descriptions. It is set with generous line height to ensure maximum readability against the dark background.

**Metadata:** Labels use uppercase Inter with increased letter spacing to differentiate technical data (ISO, Date, Role) from narrative text.

## Elevation & Depth

In line with brutalist-minimalism, this design system avoids shadows entirely. Depth is achieved through **Contrast and Layering**.

1.  **Z-Index Layering:** Video content and imagery sit on the base layer (`#050505`).
2.  **Overlays:** Text and interactive elements "float" directly on top of imagery using 1px white or amber borders to define their boundaries.
3.  **Outlines:** Instead of shadows to indicate elevation, use a `1px` solid border (`#FFFFFF` at 20% opacity) for cards and containers. This creates a "glass-sheet" look without using blurs.
4.  **Interactions:** Hover states should involve "Hard Swaps" (e.g., a black background instantly turning into a Raw Amber background) rather than soft transitions, reinforcing the raw, authentic atmosphere.

## Shapes

The shape language is **Strictly Orthogonal**. 

All buttons, cards, video containers, and input fields must have a `0px` border radius. Sharp corners reflect the precision of filmmaking and the "unfiltered" nature of journalism. 

The only exception to the "square" rule is the use of thin vertical or horizontal lines (rules) used to separate content, which should always be 1px in weight.

## Components

### Buttons
Primary buttons are solid `Raw Amber` with black text, strictly rectangular. Secondary buttons are transparent with a `1px` white border. Hover states should invert colors immediately.

### Video Cards
Project previews must maintain a `16:9` aspect ratio. On hover, the thumbnail should scale slightly (1.05x) while the `label-caps` metadata appears in the corner. 

### Input Fields
Forms should be styled as single horizontal lines (bottom-border only) with labels appearing in `mono-label` style. This minimizes visual clutter.

### Progress Indicators
For video playback or scroll progress, use a `2px` line in `Raw Amber`. It should be the only vibrant element on the screen.

### Navigation
The navigation should be a simple, fixed header with text-only links. Use `label-caps` for nav items. The active page is indicated by a small `Raw Amber` dot or a simple underline.

### Lists
Lists (like a filmography or awards) should use `1px` horizontal dividers in `Dark Gray`. Each list item should have a high-contrast hover state that changes the text color to `Raw Amber`.