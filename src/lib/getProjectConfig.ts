import type { ProjectConfig } from "@/types/project";
import landingmachine from "@/config/landingmachine.json";
import acfaty from "@/config/projects/acfaty.json";
import katalyse from "@/config/projects/katalyse.json";
import restauconseil from "@/config/projects/restauconseil.json";
import bonsensconseilV2 from "@/config/projects/bonsensconseil-v2.json";
import greenconseilV2 from "@/config/projects/greenconseil-v2.json";
import fidemconseil from "@/config/projects/fidemconseil.json";
import altiusconseil from "@/config/projects/altiusconseil.json";

const PROJECT_CONFIGS: Record<string, ProjectConfig> = {
  acfaty: acfaty as ProjectConfig,
  katalyse: katalyse as ProjectConfig,
  restauconseil: restauconseil as ProjectConfig,
  "bonsensconseil-v2": bonsensconseilV2 as ProjectConfig,
  "greenconseil-v2": greenconseilV2 as ProjectConfig,
  fidemconseil: fidemconseil as ProjectConfig,
  altiusconseil: altiusconseil as ProjectConfig,
};

const PROJECT_SLUGS = Object.keys(PROJECT_CONFIGS) as ProjectSlug[];

export type ProjectSlug =
  | "acfaty"
  | "katalyse"
  | "restauconseil"
  | "bonsensconseil-v2"
  | "greenconseil-v2"
  | "fidemconseil"
  | "altiusconseil";

export function getProjectConfig(slug: string): ProjectConfig | null {
  return PROJECT_CONFIGS[slug] ?? null;
}

export function getAllProjectSlugs(): ProjectSlug[] {
  return [...PROJECT_SLUGS];
}

export function isValidSlug(slug: string): slug is ProjectSlug {
  return slug in PROJECT_CONFIGS;
}

/** LandingMachine template config – isolated from projects, shows all sections */
export function getLandingMachineConfig(): ProjectConfig {
  return landingmachine as ProjectConfig;
}
