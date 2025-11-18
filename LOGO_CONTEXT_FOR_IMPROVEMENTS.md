# Logo Files Context - For AI Improvements

This document provides comprehensive context about the Galactis website logo implementation that can be fed to Claude or other AI assistants to request improvements.

---

## 📁 Current Logo File

### Primary Logo SVG
- **File Path:** `/public/galactis-logo.svg`
- **File Size:** ~81KB
- **Format:** SVG (Scalable Vector Graphics)
- **Dimensions:**
  - `width="1080" height="1350"`
  - `viewBox="0 0 810 1012.49997"`
  - **Aspect Ratio:** ~0.8:1 (taller than wide, portrait orientation)

### Logo Design Details
- **Type:** Blue/purple gradient geometric "G" logo
- **Colors:** Multiple linear gradients with blue/purple tones (RGB percentages ranging from ~8-22% red, 30-66% green, 56-87% blue)
- **Complexity:** Highly detailed SVG with:
  - Multiple `<linearGradient>` definitions
  - Multiple `<clipPath>` definitions
  - Complex geometric shapes
  - Gradient transforms
- **Background:** Transparent (no fill background)
- **Structure:** Single-line SVG (no formatting/indentation)

---

## 🎨 Current Usage & Display

### 1. Navigation Bar (Desktop)
**File:** `components/Navbar.tsx` (lines 50-55)

```tsx
<img 
  src="/galactis-logo.svg" 
  alt="Galactis Logo" 
  className="h-10 w-auto flex-shrink-0"
  style={{ objectFit: "contain", display: "block", backgroundColor: "transparent" }}
/>
```

- **Display Size:** `h-10` (40px height, width auto-scales)
- **Gap from Text:** `gap-1.5` (6px spacing)
- **Container:** Inside a `motion.div` with hover scale animations
- **Context:** Appears next to "Galactis.ai" text with purple-emerald gradient

### 2. Mobile Menu Header
**File:** `components/MobileMenu.tsx` (lines 132-137)

```tsx
<img 
  src="/galactis-logo.svg" 
  alt="Galactis Logo" 
  className="h-8 w-auto flex-shrink-0"
  style={{ objectFit: "contain", display: "block", backgroundColor: "transparent" }}
/>
```

- **Display Size:** `h-8` (32px height, width auto-scales)
- **Gap from Text:** `gap-1.5` (6px spacing)
- **Context:** Mobile drawer header next to "Galactis.ai" text

### 3. SEO Structured Data (Homepage)
**File:** `app/page.tsx` (line 133)

```tsx
logo: "https://galactis.ai/galactis-logo.svg"
```

- **Purpose:** JSON-LD schema for search engines (Google Knowledge Graph)

### 4. SEO Structured Data (Careers Page)
**File:** `app/company/careers/page.tsx` (line 274)

```tsx
logo: "https://galactis.ai/galactis-logo.svg"
```

- **Purpose:** JSON-LD schema for job listings

### 5. Favicon Configuration
**File:** `app/layout.tsx` (lines 77-86)

```tsx
icons: {
  icon: [
    { url: "/galactis-logo.svg", type: "image/svg+xml" },
    { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
  ],
  apple: [
    { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
  ],
  shortcut: "/favicon.ico",
}
```

**Note:** PNG and ICO favicon files are referenced but **do not exist yet**. Only the SVG is currently available.

---

## 🎯 Current Display Characteristics

### Sizing Strategy
- **Aspect Ratio Preserved:** Using `w-auto` to maintain natural proportions
- **Height-Based Scaling:** Fixed height values (`h-10`, `h-8`) let width scale automatically
- **Reason:** Logo is taller than wide (0.8:1 aspect ratio), so fixed square sizes would stretch/compress the logo

### Spacing
- **Gap from Text:** 6px (`gap-1.5`) - recently optimized to sit closer to website name
- **Padding:** No explicit padding on logo itself

### Visual Style
- **Transparent Background:** Ensures logo works on any background color
- **Object Fit:** `contain` ensures entire logo is visible without cropping
- **Display:** `block` prevents inline spacing issues

---

## ⚠️ Known Issues & Limitations

### 1. File Size
- **Current:** ~81KB SVG
- **Issue:** Large for an SVG file (typical SVGs are 5-20KB)
- **Cause:** Extensive gradient definitions with many color stops, complex clip paths
- **Impact:** Slower initial page load, especially on mobile

### 2. Missing Favicon Files
- **Referenced but Missing:**
  - `/public/favicon-16x16.png`
  - `/public/favicon-32x32.png`
  - `/public/apple-touch-icon.png`
  - `/public/favicon.ico`
- **Impact:** Browser tab shows default icon or no icon in older browsers

### 3. SVG Optimization
- **Current State:** Single-line, unoptimized
- **Missing:**
  - No SVG minification
  - No path simplification
  - No duplicate gradient/clipPath consolidation
  - No metadata removal

### 4. Accessibility
- **Alt Text:** Present ("Galactis Logo") but could be more descriptive
- **Color Contrast:** Gradient colors may have contrast issues on certain backgrounds

### 5. Responsive Scaling
- **Current:** Fixed heights (40px desktop, 32px mobile)
- **Consideration:** Could benefit from responsive sizing (sm/md/lg breakpoints)

---

## 🎨 Brand Context

### Website Brand Colors
- **Primary Gradient:** Purple to Emerald (`from-purple-600 to-emerald-600`)
- **Logo Colors:** Blue/purple gradient tones
- **Backgrounds:**
  - Light mode: White/light backgrounds
  - Dark mode: Black/dark backgrounds

### Logo Purpose
- Represents "G" for Galactis
- Used across:
  - Website navigation (every page)
  - Mobile menu
  - Browser favicon (should be)
  - Search engine results (structured data)
  - Social media cards (potentially)

---

## 🔧 Improvement Opportunities

### 1. SVG Optimization
- **Reduce file size** from 81KB to <20KB
- **Minify** SVG code (remove whitespace, consolidate gradients)
- **Simplify** paths where possible without visual loss
- **Remove** unused clip paths or gradients
- **Optimize** gradient color stops

### 2. Favicon Generation
- Generate multi-size favicon set from SVG:
  - `favicon.ico` (16x16, 32x32, 48x48)
  - `favicon-16x16.png`
  - `favicon-32x32.png`
  - `apple-touch-icon.png` (180x180)
- Ensure icons work on:
  - Browser tabs
  - Bookmarks
  - iOS home screen
  - Android home screen

### 3. Logo Variants
- **Monochrome version** for dark backgrounds
- **Simplified version** for small sizes (favicon)
- **Square variant** for social media avatars
- **Horizontal variant** for email signatures

### 4. Performance
- **Lazy loading** for logo (if not critical above-fold)
- **Preload** hint for faster rendering
- **WebP fallback** option (if converting to raster)

### 5. Responsive Sizing
- **Desktop:** Current `h-10` (40px) - may want `h-12` (48px) or `h-14` (56px)
- **Tablet:** Medium breakpoint sizing
- **Mobile:** Current `h-8` (32px) - could adjust
- **Consider:** Logo may appear too small at current sizes

### 6. Dark Mode Optimization
- **Test** logo visibility on dark backgrounds
- **Consider** lighter variant for dark mode
- **Ensure** gradient colors have sufficient contrast

### 7. Animation/Interaction
- **Current:** Logo has hover scale animation (1.05x)
- **Could Add:**
  - Subtle color transition on hover
  - Micro-interactions
  - Loading animation variant

---

## 📋 Code References Summary

| File | Line | Purpose | Current State |
|------|------|---------|---------------|
| `public/galactis-logo.svg` | - | Main logo file | ✅ Exists (81KB) |
| `components/Navbar.tsx` | 51 | Desktop nav logo | ✅ Working |
| `components/MobileMenu.tsx` | 133 | Mobile menu logo | ✅ Working |
| `app/page.tsx` | 133 | Homepage SEO logo | ✅ Working |
| `app/company/careers/page.tsx` | 274 | Careers SEO logo | ✅ Working |
| `app/layout.tsx` | 79-86 | Favicon config | ⚠️ PNG/ICO missing |

---

## 🎯 Example Prompts for AI Improvements

### For SVG Optimization:
```
Optimize the SVG file at /public/galactis-logo.svg. The file is currently 81KB and contains complex gradients and clip paths. Reduce the file size while maintaining visual quality. Simplify gradients, remove duplicate definitions, and minify the SVG code.
```

### For Favicon Generation:
```
Generate favicon files from the logo SVG at /public/galactis-logo.svg. Create favicon.ico (multi-size: 16x16, 32x32, 48x48), favicon-16x16.png, favicon-32x32.png, and apple-touch-icon.png (180x180). Ensure the "G" logo is clearly visible and centered at small sizes.
```

### For Logo Size Optimization:
```
Analyze the logo sizing in the navigation components. Currently using h-10 (40px) for desktop and h-8 (32px) for mobile. The logo has a 0.8:1 aspect ratio (taller than wide). Recommend optimal sizes for better visibility while maintaining design balance.
```

### For Performance:
```
The logo SVG is 81KB which impacts page load performance. Suggest optimizations including lazy loading strategies, preload hints, and file size reduction techniques without compromising visual quality.
```

### For Accessibility:
```
Review logo accessibility. Current alt text is "Galactis Logo". Ensure the logo has proper ARIA attributes, color contrast for dark/light modes, and accessible sizing for users with visual impairments.
```

---

## 🔍 Technical Details

### SVG Structure
- **Format:** SVG 1.0
- **Namespaces:** `xmlns="http://www.w3.org/2000/svg"`, `xmlns:xlink`
- **Preserve Aspect Ratio:** `xMidYMid meet`
- **Gradient Units:** `userSpaceOnUse`
- **Clip Paths:** Multiple clip paths for geometric masking
- **Transform Matrices:** Gradient transforms for precise positioning

### CSS Classes Used
- `h-10 w-auto` - Desktop sizing
- `h-8 w-auto` - Mobile sizing
- `flex-shrink-0` - Prevents logo from shrinking in flex layouts
- `gap-1.5` - Spacing between logo and text

### Inline Styles
- `objectFit: "contain"` - Ensures logo scales proportionally
- `display: "block"` - Prevents inline spacing issues
- `backgroundColor: "transparent"` - Explicit transparency

---

## 📝 Notes for Improvements

1. **Priority:** File size reduction should be high priority (81KB is large)
2. **Favicons:** Generate missing PNG/ICO files for better browser support
3. **Testing:** Test logo at various sizes (16px to 200px) to ensure readability
4. **Dark Mode:** Verify logo visibility on both light and dark backgrounds
5. **Performance:** Consider if logo can be inlined or optimized further
6. **Future:** May want to create logo variants for different use cases

---

**Last Updated:** Based on current codebase as of latest logo replacement

