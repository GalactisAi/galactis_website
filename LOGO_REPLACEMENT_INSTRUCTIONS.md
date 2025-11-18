# Logo Replacement Instructions - Galactis Website

## Quick Summary

If you provide a new SVG file to replace the logo, you need to:
1. **Replace 1 file**: `/public/galactis-logo.svg` (or `/public/Galactis-logo.svg` depending on your file name)
2. **Update 4 code files** where the logo path is referenced

---

## Current Logo File Location

**File to Replace:**
- `/public/galactis-logo.svg` (lowercase - current file)
- **OR** `/public/Galactis-logo.svg` (uppercase - if you name it this way)

**Note:** The file name is case-sensitive. Make sure the code references match the exact file name you use.

---

## All Logo Locations & Replacement Instructions

### 1. **Main Navigation Bar (Desktop & Mobile Header)**

**File:** `components/Navbar.tsx`  
**Line:** 51  
**Current Path:** `/galactis-logo.svg`  
**Usage:** Displayed in top-left corner on every page  

**What to Replace:**
```tsx
<img 
  src="/galactis-logo.svg"  // ← Change this path if needed
  alt="Galactis Logo" 
  className="h-8 w-8 flex-shrink-0"
  style={{ objectFit: "contain", display: "block" }}
/>
```

**Action Required:** 
- If your new SVG file is named `galactis-logo.svg` → No code change needed, just replace the file
- If your new SVG file has a different name (e.g., `Galactis-logo.svg`) → Update the `src` path to match

---

### 2. **Mobile Menu Header**

**File:** `components/MobileMenu.tsx`  
**Line:** 133  
**Current Path:** `/galactis-logo.svg`  
**Usage:** Displayed in mobile menu drawer header  

**What to Replace:**
```tsx
<img 
  src="/galactis-logo.svg"  // ← Change this path if needed
  alt="Galactis Logo" 
  className="h-7 w-7 flex-shrink-0"
  style={{ objectFit: "contain", display: "block" }}
/>
```

**Action Required:**
- If your new SVG file is named `galactis-logo.svg` → No code change needed, just replace the file
- If your new SVG file has a different name → Update the `src` path to match

---

### 3. **Homepage SEO Structured Data (Search Engines)**

**File:** `app/page.tsx`  
**Line:** 133  
**Current Path:** `https://galactis.ai/logo.png`  
**Usage:** JSON-LD schema for Organization logo (invisible to users, used by Google/Bing)  

**What to Replace:**
```tsx
logo: "https://galactis.ai/logo.png",  // ← Change to your SVG path
```

**Action Required:**
- Update to: `logo: "https://galactis.ai/galactis-logo.svg",` (or whatever your file name is)

---

### 4. **Careers Page SEO Structured Data (Search Engines)**

**File:** `app/company/careers/page.tsx`  
**Line:** 274  
**Current Path:** `https://galactis.ai/galactis-logo.svg`  
**Usage:** JSON-LD schema for Organization logo on careers page  

**What to Replace:**
```tsx
logo: "https://galactis.ai/galactis-logo.svg",  // ← Verify this matches your file name
```

**Action Required:**
- If your new SVG file is named `galactis-logo.svg` → No code change needed
- If your new SVG file has a different name → Update the URL path to match

---

## Step-by-Step Replacement Process

### Option A: If Your SVG File is Named `galactis-logo.svg`

1. **Replace the file:**
   ```
   Copy your new SVG file to: /public/galactis-logo.svg
   (This replaces the existing file)
   ```

2. **Update homepage SEO reference:**
   - Open `app/page.tsx`
   - Find line 133
   - Change: `logo: "https://galactis.ai/logo.png",`
   - To: `logo: "https://galactis.ai/galactis-logo.svg",`

3. **Done!** Navbar and MobileMenu already reference `/galactis-logo.svg`, so no changes needed.

---

### Option B: If Your SVG File Has a Different Name (e.g., `Galactis-logo.svg`)

1. **Place your file:**
   ```
   Copy your new SVG file to: /public/Galactis-logo.svg
   (Use the exact name of your file)
   ```

2. **Update Navbar component:**
   - Open `components/Navbar.tsx`
   - Find line 51
   - Change: `src="/galactis-logo.svg"`
   - To: `src="/Galactis-logo.svg"` (match your file name exactly)

3. **Update MobileMenu component:**
   - Open `components/MobileMenu.tsx`
   - Find line 133
   - Change: `src="/galactis-logo.svg"`
   - To: `src="/Galactis-logo.svg"` (match your file name exactly)

4. **Update homepage SEO:**
   - Open `app/page.tsx`
   - Find line 133
   - Change: `logo: "https://galactis.ai/logo.png",`
   - To: `logo: "https://galactis.ai/Galactis-logo.svg",` (match your file name)

5. **Update careers page SEO:**
   - Open `app/company/careers/page.tsx`
   - Find line 274
   - Change: `logo: "https://galactis.ai/galactis-logo.svg",`
   - To: `logo: "https://galactis.ai/Galactis-logo.svg",` (match your file name)

---

## File Naming Recommendations

**Best Practice:** Use lowercase with hyphens for consistency
- ✅ `galactis-logo.svg` (recommended)
- ⚠️ `Galactis-logo.svg` (works, but requires updating all 4 code references)
- ❌ `Galactis Logo.svg` (spaces in file names can cause issues)

---

## Current File Status

**Existing Logo File:**
- `/public/galactis-logo.svg` (exists)

**Current References:**
- ✅ `components/Navbar.tsx` → `/galactis-logo.svg`
- ✅ `components/MobileMenu.tsx` → `/galactis-logo.svg`
- ❌ `app/page.tsx` → `https://galactis.ai/logo.png` (needs update)
- ✅ `app/company/careers/page.tsx` → `https://galactis.ai/galactis-logo.svg`

**Action Needed:** Update `app/page.tsx` line 133 to use `.svg` instead of `.png`

---

## Checklist for Logo Replacement

- [ ] New SVG file ready (transparent background recommended)
- [ ] File named `galactis-logo.svg` (or note the exact name)
- [ ] File placed in `/public/` folder
- [ ] If file name differs, updated `components/Navbar.tsx` line 51
- [ ] If file name differs, updated `components/MobileMenu.tsx` line 133
- [ ] Updated `app/page.tsx` line 133 (SEO reference)
- [ ] If file name differs, updated `app/company/careers/page.tsx` line 274
- [ ] Tested logo display on homepage
- [ ] Tested logo display in mobile menu
- [ ] Verified logo works in light mode
- [ ] Verified logo works in dark mode

---

## Additional Notes

### Logo Display Sizes
- **Navbar:** `h-8 w-8` (32px × 32px) - Desktop header
- **Mobile Menu:** `h-7 w-7` (28px × 28px) - Mobile drawer header

### Logo Styling
- Logo has transparent background by default (SVG)
- Logo scales automatically (responsive)
- Logo has hover animation (scale 1.05x) in Navbar

### SEO Importance
- The JSON-LD logo references help search engines identify your brand
- Used in Google Knowledge Graph, social media cards, etc.
- Important to keep these references updated and accurate

---

## Quick Reference: All Files to Check/Update

1. **File to Replace:**
   - `/public/galactis-logo.svg`

2. **Code Files to Update (if file name changes):**
   - `components/Navbar.tsx` (line 51)
   - `components/MobileMenu.tsx` (line 133)
   - `app/page.tsx` (line 133) - **Always update this one**
   - `app/company/careers/page.tsx` (line 274) - Only if file name changes

---

## After Replacement

Once you've replaced the file and updated the references:
1. Restart your development server (`npm run dev`)
2. Clear browser cache if needed
3. Check logo appears in:
   - Desktop navigation bar (top-left)
   - Mobile menu header
   - Verify no 404 errors in browser console

---

**Last Updated:** Based on current codebase structure as of today.

