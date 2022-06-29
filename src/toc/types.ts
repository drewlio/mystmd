import { ProjectFrontmatter } from '../frontmatter/types';
import { SiteAnalytics, SiteAction, SiteNavItem } from '../config/types';

// Types for local Project
//
// Files are local paths relative to the current directory.
// These are autogenerated based on curvenote.yml

export type PageLevels = 1 | 2 | 3 | 4 | 5 | 6;

export type LocalProjectFolder = {
  title: string;
  level: PageLevels;
};

export type LocalProjectPage = {
  file: string;
  slug: string;
  level: PageLevels;
};

export type LocalProject = {
  path: string;
  /** The local path to the local index file. */
  file: string;
  /** The slug that the index get's renamed to for the JSON */
  index: string;
  citations: string[];
  pages: (LocalProjectPage | LocalProjectFolder)[];
};

// Manifest shipped with site content
//
// Combines info from config, local project.
// Removes local path info

export type ManifestProjectFolder = {
  title: string;
  level: PageLevels;
};

export type ManifestProjectPage = {
  slug: string;
} & ManifestProjectFolder;

export type ManifestProject = ProjectFrontmatter & {
  slug: string;
  index: string;
  title: string;
  pages: (ManifestProjectPage | ManifestProjectFolder)[];
};

export type SiteManifest = {
  title: string;
  twitter?: string;
  logo?: string;
  logoText?: string;
  nav: SiteNavItem[];
  actions: SiteAction[];
  projects: ManifestProject[];
  analytics?: SiteAnalytics;
};
