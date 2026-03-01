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

**Pause after each step** for human review and approval before continuing.

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

**Output files:**
- `projects/{slug}/business.md`
- `projects/{slug}/copy.md`

**Checkpoint:** Stop and wait for user approval: *"Extraction complete. Review business.md and copy.md. Continue to copywriting?"*

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

### 3.2 Register the Slug
Edit `landerMachine/src/lib/getProjectConfig.ts`:
- Add import: `import {slug} from "@/config/projects/{slug}.json";`
- Add to PROJECT_CONFIGS: `"{slug}": {slug} as ProjectConfig`
- Add slug to `ProjectSlug` type union

### 3.3 Add Images to public/
Generate or copy images to `landerMachine/public/` (or `public/{slug}/` for project-organized assets):

| Asset Type | Path Pattern | Required? |
|------------|--------------|-----------|
| Hero image | `/{slug}/hero-{slug}.png` or `/hero-{slug}.jpg` | If hero.image is set in JSON |
| Service images | `/{slug}/service-{name}.png` or `/service-{name}.jpg` | If services.items[].image is set |
| Logo | `/logo-{slug}.svg` | Optional |

**CRITICAL RULE**: Every image path in the JSON must exist in `public/`. If a path is wrong or missing, the image won't display. Use Step 4 (AssetsMachine) to generate images with the script.

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

**Prerequisite:** Set `OPENROUTER_API_KEY` environment variable (required).

**Actions:**

### Image Generation Rules

**STRICT REQUIREMENTS (added to prompts):**
1. **NO text, NO logos, NO company names, NO brand names** in any generated images
2. **NO readable signage** or text on backgrounds
3. Clean professional backgrounds without text
4. High-end commercial photography style
5. 1024×1024px output

**Script:** `landerMachine/scripts/generate-image.py` (or `generate-image.sh` wrapper)
- Requires `OPENROUTER_API_KEY` env var
- Outputs PNG to `public/{slug}/` when `--slug` is used
- Creates directory automatically

**Usage:**
```bash
cd landerMachine
export OPENROUTER_API_KEY="your-key"   # or ensure already set

# Hero image → public/{slug}/hero-{slug}.png
python scripts/generate-image.py "professional office, B2B, no text" hero-{slug} --slug {slug}

# Service images → public/{slug}/service-{id}.png
python scripts/generate-image.py "VTC taxi driver" service-vtc --slug {slug}
python scripts/generate-image.py "..." service-taxi --slug {slug}
```

### Generated Images

| Type | Filename | Config Path | Purpose |
|------|----------|-------------|---------|
| Hero | `hero-{slug}.png` | `/{slug}/hero-{slug}.png` | Main hero section image |
| Service 1 | `service-{id1}.png` | `/{slug}/service-{id1}.png` | First service card |
| Service 2 | `service-{id2}.png` | `/{slug}/service-{id2}.png` | Second service card |
| etc. | ... | ... | ... |

**After generation:**
1. Images land in `landerMachine/public/{slug}/` (no manual copy needed)
2. Update JSON config with paths: `"/{slug}/hero-{slug}.png"`, `"/{slug}/service-vtc.png"`, etc.
3. Rebuild: `npm run build`

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
│   ├── {slug}/              # Per-project folder (recommended)
│   │   ├── hero-{slug}.png
│   │   └── service-*.png
│   ├── hero-*.jpg           # Or root-level (legacy)
│   └── service-*.jpg
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
  "image": "/{slug}/hero-{slug}.png",
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
      "image": "/{slug}/service-service1.png",
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

- [ ] Step 1: Extract content → `business.md`, `copy.md`
- [ ] Step 2: Rewrite copy → `new_copy.md`
- [ ] Step 3: Create JSON config → `src/config/projects/{slug}.json`
- [ ] Step 3: Register slug → `src/lib/getProjectConfig.ts`
- [ ] Step 3: Add images → `public/`
- [ ] Step 3: Add home link → `src/app/page.tsx`
- [ ] Step 3: Build → `npm run build` (no errors)
- [ ] Step 4: Set OPENROUTER_API_KEY
- [ ] Step 4: Generate hero image: `python scripts/generate-image.py "..." hero-{slug} --slug {slug}`
- [ ] Step 4: Generate service images with `--slug {slug}`
- [ ] Step 4: Update JSON config paths to `/{slug}/filename.png` and rebuild

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
