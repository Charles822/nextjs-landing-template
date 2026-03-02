# LanderMachine - Agent Integration Guide

This document describes how agents should create or update demo landing pages when revamping URLs based on the master template.

## Architecture Overview

- **One main app** with a single dynamic route `/[slug]`
- **Shared components** in `src/components/` receive project config as props
- **Project configs** in `src/config/projects/*.json` define all content per project
- **Images** live in `public/` (root level for now; can use `public/{slug}/` for organization)

## Adding a New Project

1. **Create config file**: `src/config/projects/{slug}.json`
   - Use `src/config/projects/schema.json` as reference
   - Copy an existing config (e.g. `acfaty.json`) and adapt

2. **Register the slug** in `src/lib/getProjectConfig.ts`:
   - Add import: `import newProject from "@/config/projects/{slug}.json";`
   - Add to `PROJECT_CONFIGS`: `"{slug}": newProject as ProjectConfig`
   - Add slug to `ProjectSlug` type union

3. **Add images** to `public/`:
   - `hero-{slug}.jpg` (or project-specific naming)
   - `service-*.jpg` for each service that has an image
   - `logo.svg` or `logo.png` if using logo image

4. **Update home page** in `src/app/page.tsx` to add a link to the new project

## Updating an Existing Project

1. Edit the JSON config in `src/config/projects/{slug}.json`
2. Add or replace images in `public/` as needed
3. No code changes required for content updates

## Config Schema

See `src/config/projects/schema.json` for the full JSON schema. Key points:

- **brandColor**: Hex color (e.g. `#0065c2`) used for buttons, accents, links
- **hero.heroVariant**: Use `"gradient"` for projects without a hero image
- **services.items[].image**: Omit for icon-only service cards (e.g. BonSens Conseil)
- **methodology.variant**: Use `"checklist"` for the alternate methodology layout (e.g. GREEN Conseil)
- **Icon names**: Use Lucide React icon names (PascalCase): Car, Users, Search, etc. See `src/lib/icons.ts` for available icons.

## Image Naming Conventions

| Asset | Path | Example |
|-------|------|---------|
| Hero | `/{slug}/hero-{slug}.png` | `/acfaty/hero-acfaty.png` |
| Service | `/{slug}/service-{name}.png` | `/acfaty/service-vtc.png` |
| Logo | `/logo.svg` or `/{slug}/logo.svg` | `/logo.svg` |

## Image Generation

Use `scripts/generate-image.py` to create images via OpenRouter (Google Gemini 2.5 Flash Image).

**Prerequisites:**
- `OPENROUTER_API_KEY` in environment, or in `.env` at landerMachine root (uses python-dotenv)
- Python 3 with `pip install -r scripts/requirements.txt` (requests, python-dotenv)

**Usage:**
```bash
cd landerMachine
python scripts/generate-image.py "prompt" output_name [--slug SLUG]
```

**Examples:**
```bash
# Hero for project acfaty → public/acfaty/hero-acfaty.png
python scripts/generate-image.py "Professional B2B office" hero-acfaty --slug acfaty

# Service images → public/acfaty/service-vtc.png, service-taxi.png
python scripts/generate-image.py "VTC taxi driver" service-vtc --slug acfaty
python scripts/generate-image.py "Taxi car" service-taxi --slug acfaty
```

**Options:**
- `--slug SLUG` — Save to `public/{slug}/`. Creates directory if needed.
- `--project-dir DIR` — Override output directory
- `--format png|jpg` — Output format (default: png)

**Config paths:** After generation, use `/{slug}/filename.png` in your JSON config (e.g. `"/acfaty/hero-acfaty.png"`).

## Asset Download (fetch-assets.py)

Use `scripts/fetch-assets.py` to download partner logos, blog images, and other assets from URLs listed in `projects/{slug}/assets.md`. Used in the landing transformation workflow (Step 1.5).

**Usage:**
```bash
cd landerMachine  # or workspace root
python scripts/fetch-assets.py --slug {slug}
```

**Behavior:**
- Reads `projects/{slug}/assets.md` for URLs (lines starting with `- https://...`)
- Downloads each to `projects/{slug}/assets/{slug}-{index}.{ext}`
- Writes `projects/{slug}/assets-map.json` mapping original URLs to local paths
- Use `--no-map` to skip writing the mapping file

**Dependencies:** `requests` (in `scripts/requirements.txt`)

## Optional Config Sections

The template supports optional sections that render when present in the JSON config:
- **partners** – Partner logos with optional name, description, URL
- **testimonials** – Quote cards (quote, author, company, role)
- **offers** – Offer cards (title, description, CTA, href)
- **blog** – Blog teasers (title, excerpt, image, href, date)

See `docs/SKILL-landing-transformation.md` for schema examples.

## Validation

After creating or updating a config, run `npm run build` to ensure:
- JSON is valid
- All required fields are present
- Slug is registered in getProjectConfig.ts
