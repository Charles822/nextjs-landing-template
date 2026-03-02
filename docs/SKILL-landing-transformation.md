---
name: landing-transformation
description: Transform outdated French professional services websites (consulting, RH, formation, B2B services) into modern Next.js landing pages using JSON-driven architecture. Full 4-step workflow with human-in-the-loop checkpoints at each phase. Use when user wants to modernize a business website, extract content from an existing site, rewrite copy for B2B professional services, or create a new landing page from an old website URL.
---

# Landing Transformation Skill

Transforms outdated French professional services websites into modern Next.js landing pages using a **JSON-driven architecture**.

## Architecture Overview (CRITICAL)

**DO NOT create new React components or page folders for each project.**

All demo landing pages use a **single shared template** driven by JSON config:
- **One dynamic route**: `src/app/[slug]/` handles all projects
- **Shared components**: `src/components/` receive project config as props
- **JSON configs**: `src/config/projects/{slug}.json` defines all content
- **Images**: Live in `public/` (paths in JSON must match files in public/)

## Workflow Overview

**4 Steps with human-in-the-loop checkpoints:**
1. **Extraction** → Scrape website content and assets
2. **Copywriting** → Rewrite French copy (professional, B2B-focused)
3. **LandingMachine** → Create JSON config + add images to public/
4. **AssetsMachine** → Generate unique images

**Optional Step 1.5:** Asset Download → Download partner logos, blog images, etc.

**Pause after each step** for human review and approval before continuing.

---

## New Optional Sections (Template Update)

Four optional config blocks were added. They render only when present:

| Section | Purpose | JSON fields (per item) |
|---------|---------|------------------------|
| **partners** | Partner logos displayed in Hero marquee (below CTA) | name, logo (path), url, description |
| **testimonials** | Quote cards | quote, author, company, role |
| **offers** | Offers distinct from services | id, title, description, cta, href |
| **blog** | Blog teasers | id, title, excerpt, image, href, date |

**Note:** Partners are shown in the **Hero marquee** (below the CTA). When `partners` has items with logos, they scroll in the marquee. When no partners, placeholder logos are shown. There is no standalone Partners section.

### Page Section Order

Sections are rendered in this order:
```
Hero (incl. partners marquee) → Offers → ValueProposition → Testimonials → Services → Methodology → Blog → Contact → Footer
```

---

## Step 1: Extraction Process

**Input:** Website URL

**Actions:**
1. Create project working folder: `~/workspace-tonio/projects/{slug}/` (for research only)
2. Create `business.md` with:
   - Business summary (activity, target, positioning)
   - Page structure analysis
   - Objectives of the page
   - Key brand colors (hex codes if detectable)
3. Create `copy.md` with all extracted text:
   - Hero/headline copy
   - Service descriptions
   - About section
   - CTAs and buttons
   - Navigation labels
   - Footer content
4. Extract additional content (if present on source site):
   - **Company logo** (nav/header) – extract first; if not found or unusable, note in "Where I need your help"
   - **Offers** (distinct from core services)
   - **Testimonials** (quote, author, company, role) – extract all; you will select only 3 best for the config
   - **Blog** (titles, excerpts, image URLs, dates)
   - **Partners/Clients (logos)** – HIGH PRIORITY for B2B sites (see below)
5. Create `assets.md` with URLs to download:
   - Company logo URL
   - Partner/client logo URLs
   - Blog image URLs
   - Any other visual assets from source site

### Clients/Partners (logos) – High Priority

It is **common for B2B professional services** to showcase client logos. Always look for:
- Section headings: "Nos clients", "Ils nous font confiance", "Partenaires", "Références", "Ils nous ont fait confiance"
- Logo grids, carousels, or trust badges
- Extract: Company name, logo image URL (from `img` src), optional URL, optional description
- Add each logo URL to `assets.md`

**When you cannot extract the company logo or client/partner logos** (no logos on site, images in JS/CSS, blocked, or unclear):
- State this explicitly in your post-extraction response
- Suggest the human provide logo URLs or image files if available elsewhere
- List it under "Where I need your help" (e.g. "Company logo: not found. If you have the logo file, please share it." / "Partner logos: none found. Please share logo files or URLs if available.")

### Testimonials: Max 3

Extract all testimonials from the source. When creating the JSON config (Step 3), **select only the 3 best or most representative** even when more are available. Simplicity over quantity.

**Output files:**
- `projects/{slug}/business.md`
- `projects/{slug}/copy.md`
- `projects/{slug}/assets.md`

**Checkpoint response format** – You MUST include:

```
Extraction complete. Review business.md, copy.md, and assets.md.

**Where I need your help:**
- [List any section that could not be fully extracted, e.g. "Client logos: none found on the site. If you have logo files, please share URLs or paths."]
- [Any unclear or missing content]
- [Asset URLs that failed or need manual verification]

Continue to copywriting?
```

Populate "Where I need your help" with: sections that could not be extracted, missing assets (e.g. partner logos), other ambiguities.

---

## Step 1.5: Asset Download (Optional)

**Input:** `assets.md` from Step 1

**Actions:**
1. Read `assets.md` for URLs to download
2. Run the fetch script:
   ```bash
   cd landerMachine
   python3 scripts/fetch-assets.py --slug {slug}
   ```
3. Images are downloaded to `projects/{slug}/assets/`
4. Optional: `assets-map.json` is created mapping URLs to local paths

**Prerequisites:**
- Python 3 with `requests` library
- URLs listed in `assets.md`

**Output:**
- `projects/{slug}/assets/` folder with downloaded images
- `projects/{slug}/assets-map.json` (optional)

**Checkpoint:** Stop and wait for user approval: *"Assets downloaded. Review and continue to copywriting?"*

---

## Step 2: Copywriting Machine

**Input:** `copy.md` from Step 1

**Actions:**
Read [references/copywriter-prompt.md](references/copywriter-prompt.md) for the full French copywriting instructions.

**Key principles:**
- No marketing fluff or bullshit
- No exaggerated promises or unrealistic numbers
- Keep it professional, credible for DRH/decision-makers
- Improve clarity, structure, and value proposition
- Structure content for JSON config (sections → JSON fields)

**Output:**
- `projects/{slug}/new_copy.md` (structured for JSON mapping)

**Checkpoint:** Stop and wait for user approval: *"Copywriting complete. Review new_copy.md. Continue to building the site?"*

---

## Step 3: LandingMachine (JSON-Driven)

**CRITICAL: Do NOT create new folders under `src/app/` for each project.**

**Input:** `business.md`, `new_copy.md`

**Actions:**

### 3.1 Create JSON Config File
Create `landerMachine/src/config/projects/{slug}.json`:
- Copy an existing config (e.g., `acfaty.json`) as template
- Use `schema.json` as reference for all required fields
- Map content from `new_copy.md` to JSON structure
- **Required fields**: slug, name, brandColor, hero, navigation, services, valueProposition, methodology, partnersMarquee, contact, footer
- **Optional fields** (include if present in source): partners, testimonials, offers, blog

**Reminders:**
- **Partners/Clients**: If extracted, include `partners` in the JSON. Use **actual logo graphics** (company logos, simple marks), not service/hero images. Path pattern: `/{slug}/partner-{slug}-{index}.png` or use `/placeholders/logo-*.svg` for demos. If logos were not extracted, leave `partners` empty and note in the extraction "Where I need your help" for the human to provide later.
- **Testimonials**: Include only **3 testimonials** in the config. Choose the 3 best or most representative.

### 3.2 Register the Slug
Edit `landerMachine/src/lib/getProjectConfig.ts`:
- Add import: `import {slug} from "@/config/projects/{slug}.json";`
- Add to PROJECT_CONFIGS: `"{slug}": {slug} as ProjectConfig`
- Add slug to `ProjectSlug` type union

### 3.3 Add Images to public/
Generate or copy images to `landerMachine/public/{slug}/`:

| Asset Type | Path Pattern | Required? |
|------------|--------------|-----------|
| Hero image | `/{slug}/hero-{slug}.png` | If hero.image is set in JSON |
| Service images | `/{slug}/service-{name}.png` | If services.items[].image is set |
| Partner logos | `/{slug}/partner-{slug}-{index}.png` | If partners marquee shows logos |
| Blog images | `/{slug}/blog-{slug}-{postId}.png` | If blog section exists |
| Logo | `/{slug}/logo-{slug}.svg` | Optional |

**CRITICAL RULE**: Every image path in the JSON must exist in `public/`. If a path is wrong or missing, the image won't display.

**Organization:** Create a subfolder per project for cleaner structure:
```
public/
├── {slug1}/
│   ├── hero-{slug1}.png
│   ├── service-*.png
│   ├── partner-{slug1}-*.png
│   └── blog-{slug1}-*.png
└── {slug2}/
    ├── hero-{slug2}.png
│   ├── service-*.png
│   ├── partner-{slug2}-*.png
│   └── blog-{slug2}-*.png
```

**Beyond Template Rule:** If the source has offers, partners (with logos), testimonials, or blog, include them in the JSON; do not drop them for being "non-standard".

### 3.4 Add Link to Home Page
Edit `landerMachine/src/app/page.tsx`:
- Add a `<Link href="/{slug}">` component for the new project

### 3.5 Build and Verify
```bash
cd landerMachine && npm run build
```

**Output:**
- `landerMachine/src/config/projects/{slug}.json`
- Images in `landerMachine/public/`
- Updated `getProjectConfig.ts` and `page.tsx`

**Checkpoint:** Stop and wait for user approval: *"Site built successfully. Ready for assets generation?"*

---

## Step 4: AssetsMachine

**Input:** Image generation model access (OpenRouter with `google/gemini-2.5-flash-image`)

**Prerequisites:**
- `OPENROUTER_API_KEY` in `landerMachine/.env`
- Python 3 with `requests` and `python-dotenv` installed

### Image Generation Rules

**STRICT REQUIREMENTS (added to prompts):**
1. **NO text, NO logos, NO company names, NO brand names** in any generated images
2. **NO readable signage** or text on backgrounds
3. Clean professional backgrounds without text
4. High-end commercial photography style
5. 1024×1024px output (PNG)

### How to Generate Images

**Script location:** `landerMachine/scripts/generate-image.py`

**Usage:**
```bash
cd landerMachine
source .env  # Load OPENROUTER_API_KEY
python3 scripts/generate-image.py "prompt" output_name --slug {slug}
```

**Examples (for project `corvezgestionplus`):**
```bash
# Hero image → public/corvezgestionplus/hero-corvezgestionplus.png
python3 scripts/generate-image.py "Professional office, B2B consulting" hero-corvezgestionplus --slug corvezgestionplus

# Service images → public/corvezgestionplus/service-*.png
python3 scripts/generate-image.py "Consulting meeting" service-conseil --slug corvezgestionplus
```

### Output Structure

Images are saved to `public/{slug}/`:
```
landerMachine/public/
└── {slug}/
    ├── hero-{slug}.png
    ├── service-{name1}.png
    └── service-{name2}.png
```

### JSON Config Paths

After generation, set image paths in the JSON config as:
```json
{
  "hero": {
    "image": "/{slug}/hero-{slug}.png",
    "imageAlt": "..."
  },
  "services": {
    "items": [
      {
        "image": "/{slug}/service-{name}.png"
      }
    ]
  }
}
```

**Example:** `/corvezgestionplus/hero-corvezgestionplus.png`

### After Generation Checklist

1. ✅ Images are in `public/{slug}/`
2. ✅ JSON config has correct paths (`/{slug}/filename.png`)
3. ✅ Run `npm run build` to verify
4. ✅ Check that images appear in `dist/{slug}/`

### Sending Images to User for Validation

To share generated images in Telegram/chat for user validation:

```bash
# Copy image to /tmp/ (allowed directory for messaging)
cp /path/to/image.png /tmp/image.png

# Then use the message tool with media parameter
# The user will receive the image directly in chat
```

**Important:** Direct paths from workspace are not allowed. Always copy to `/tmp/` first.

### Script Features

- Uses `modalities: ["image", "text"]` so OpenRouter returns images
- Reads images from `message.images[].image_url.url`
- Forces PNG output
- Creates output directories if needed
- Loads `OPENROUTER_API_KEY` from `.env` via python-dotenv

---

## Project Structure (New Architecture)

```
landerMachine/
├── src/
│   ├── app/
│   │   ├── [slug]/          # Single dynamic route (all projects)
│   │   │   └── page.tsx
│   │   └── page.tsx         # Home with project links
│   ├── components/          # Shared components (NEVER modify per project)
│   ├── config/
│   │   └── projects/
│   │       ├── schema.json     # JSON schema reference
│   │       ├── acfaty.json     # Example configs
│   │       ├── {slug}.json     # YOUR NEW CONFIG
│   │       └── ...
│   └── lib/
│       ├── getProjectConfig.ts  # Register slugs here
│       └── icons.ts             # Available Lucide icons
├── public/                  # All images go here
│   ├── hero-{slug}.jpg
│   ├── service-*.jpg
│   └── logo-*.svg
└── scripts/
    └── generate-image.sh    # Image generation script
```

**Working folder for research (not deployed):**
```
projects/
└── {slug}/
    ├── business.md          # Business analysis
    ├── copy.md              # Original extracted copy
    └── new_copy.md          # Rewritten copy (JSON-ready)
```

---

## Config Reference

### Common Config Patterns

**Hero with image:**
```json
"hero": {
  "image": "/hero-{slug}.jpg",
  "imageAlt": "...",
  "headline": { "line1": "...", "line2": "...", "line3": "..." },
  ...
}
```

**Hero gradient only (no image):**
```json
"hero": {
  "heroVariant": "gradient",
  "headline": { ... },
  ...
}
```

**Services with images:**
```json
"services": {
  "items": [
    {
      "id": "service1",
      "icon": "Car",
      "image": "/service-service1.jpg",
      "title": "...",
      "description": "...",
      "cta": "..."
    }
  ]
}
```

**Services icons only (no images):**
```json
"services": {
  "items": [
    {
      "id": "service1",
      "icon": "Users",
      "title": "...",
      "description": "...",
      "cta": "..."
      // No "image" field
    }
  ]
}
```

**Methodology variants:**
- `"variant": "standard"` - Default step-by-step layout
- `"variant": "checklist"` - Alternative checklist layout (use for GREEN Conseil style)

**Icons:** Use Lucide icon names from `src/lib/icons.ts` (PascalCase): `Car`, `Users`, `Search`, `Shield`, etc.

---

## Checklist for Each Project

- [ ] Step 1: Extract content → `business.md`, `copy.md`, `assets.md`
- [ ] Step 1.5: Download assets (optional) → `projects/{slug}/assets/`
- [ ] Step 2: Rewrite copy → `new_copy.md`
- [ ] Step 3: Create JSON config → `src/config/projects/{slug}.json`
- [ ] Step 3: Register slug → `src/lib/getProjectConfig.ts`
- [ ] Step 3: Add images → `public/{slug}/`
- [ ] Step 3: Add home link → `src/app/page.tsx`
- [ ] Step 3: Build → `npm run build` (no errors)
- [ ] Step 4: Generate hero image (if needed)
- [ ] Step 4: Generate service images (if needed)
- [ ] Step 4: Copy images to `public/` and rebuild

---

## What NOT to Do

- ❌ **Do NOT create** new folders under `src/app/` for each project
- ❌ **Do NOT create** or modify components in `src/components/`
- ❌ **Do NOT hardcode** image paths in TS/TSX; only use paths from JSON config
- ❌ **Do NOT reference** images that are not present in `public/`
- ❌ **Do NOT modify** the dynamic route `[slug]/page.tsx`

---

## How to Start

**User says:** *"Transform https://example.com"*

**Determine the slug** (short, kebab-case, no spaces): `corvezgestionplus`, `acfaty`, etc.

**Execute Step 1 immediately**, then pause for approval.

---

## Full Reference

See `AGENT_INTEGRATION.md` in the landerMachine project root for complete documentation.
