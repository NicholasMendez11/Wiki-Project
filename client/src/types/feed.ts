export interface Feed {
  date: Date;
  events: Event[];
  news: News[];
  totalEvents: number;
  totalNews: number;
}

export interface News {
  links: Link[];
  story: string;
}

export interface Link {
  type: string;
  title: string;
  displaytitle: string;
  namespace: Namespace;
  wikibase_item: string;
  titles: Titles;
  pageid: number;
  thumbnail?: Thumbnail;
  originalimage?: Originalimage;
  lang: string;
  dir: string;
  revision: string;
  tid: string;
  timestamp: string;
  description: string;
  description_source: string;
  content_urls: ContentUrls;
  extract: string;
  extract_html: string;
  normalizedtitle: string;
}

export interface Namespace {
  id: number;
  text: string;
}

export interface Titles {
  canonical: string;
  normalized: string;
  display: string;
}

export interface Thumbnail {
  source: string;
  width: number;
  height: number;
}

export interface Originalimage {
  source: string;
  width: number;
  height: number;
}

export interface ContentUrls {
  desktop: Desktop;
  mobile: Mobile;
}

export interface Desktop {
  page: string;
  revisions: string;
  edit: string;
  talk: string;
}

export interface Mobile {
  page: string;
  revisions: string;
  edit: string;
  talk: string;
}

export interface Event {
  text: string;
  pages: Page[];
  year: number;
}

export interface Page {
  type: Type;
  title: string;
  displaytitle: string;
  namespace: Namespace;
  wikibase_item: string;
  titles: Titles;
  pageid: number;
  thumbnail?: Originalimage;
  originalimage?: Originalimage;
  lang: Lang;
  dir: Dir;
  revision: string;
  tid: string;
  timestamp: Date;
  description: string;
  description_source: DescriptionSource;
  content_urls: ContentUrls;
  extract: string;
  extract_html: string;
  normalizedtitle: string;
  coordinates?: Coordinates;
}

export interface ContentUrls {
  desktop: Desktop;
  mobile: Desktop;
}

export interface Desktop {
  page: string;
  revisions: string;
  edit: string;
  talk: string;
}

export interface Coordinates {
  lat: number;
  lon: number;
}

export enum DescriptionSource {
  Local = "local",
}

export enum Dir {
  LTR = "ltr",
}

export enum Lang {
  En = "en",
}

export interface Namespace {
  id: number;
  text: string;
}

export interface Originalimage {
  source: string;
  width: number;
  height: number;
}

export interface Titles {
  canonical: string;
  normalized: string;
  display: string;
}

export enum Type {
  Standard = "standard",
}
