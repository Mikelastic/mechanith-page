export type LinkKey =
  | 'steam' | 'switch' | 'itch' | 'paddle'
  | 'discord' | 'x' | 'youtube';

export interface ExternalLinkEntry {
  label: string;
  /** null = destination not live yet → buttons point to /link/<key> placeholder */
  url: string | null;
}

export const externalLinks: Record<LinkKey, ExternalLinkEntry> = {
  steam:   { label: 'Steam',   url: null },
  switch:  { label: 'Switch',  url: null },
  itch:    { label: 'itch.io', url: null },
  paddle:  { label: 'Direct',  url: null },   // direct purchase (future)
  discord: { label: 'Discord', url: null },
  x:       { label: 'X',       url: null },
  youtube: { label: 'YouTube', url: null },
};

// The day a destination goes live, e.g.:
//   steam: { label: 'Steam', url: 'https://store.steampowered.com/app/XXXXX' },
// …every button on the whole site becomes a direct link automatically.