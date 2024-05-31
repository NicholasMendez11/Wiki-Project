export interface Feed {
  tfa: Tfa;
  mostread: Mostread;
  image: FeedImage;
  onthisday: Onthisday[];
  news: News[];
}

export interface News {
  links: Link[];
  story: string;
}
export interface Link {
  type: string;
  title: string;
  displaytitle: string;
  namespace: Namespace2;
  wikibase_item: string;
  titles: Titles2;
  pageid: number;
  thumbnail?: Thumbnail3;
  originalimage?: Originalimage2;
  lang: string;
  dir: string;
  revision: string;
  tid: string;
  timestamp: string;
  content_urls: ContentUrls2;
  extract: string;
  extract_html: string;
  normalizedtitle: string;
  description?: string;
  description_source?: string;
  coordinates?: Coordinates2;
}
export interface Coordinates2 {
  lat: number;
  lon: number;
}
export interface Namespace2 {
  id: number;
  text: string;
}

export interface Titles2 {
  canonical: string;
  normalized: string;
  display: string;
}

export interface Thumbnail3 {
  source: string;
  width: number;
  height: number;
}

export interface Originalimage2 {
  source: string;
  width: number;
  height: number;
}

export interface ContentUrls2 {
  desktop: Desktop;
  mobile: Mobile;
}
export interface Mobile {
  page: string;
  revisions: string;
  edit: string;
  talk: string;
}
export interface FeedImage {
  title: string;
  thumbnail: ThumbnailClass;
  image: ThumbnailClass;
  file_page: string;
  artist: Artist;
  credit: Credit;
  license: License;
  description: Description;
  wb_entity_id: string;
  structured: Structured;
}

export interface Artist {
  html: string;
  text: string;
  name: string;
  user_page: string;
}

export interface Credit {
  html: string;
  text: string;
}

export interface Description {
  html: string;
  text: string;
  lang: Lang;
}

export enum Lang {
  En = 'en',
}

export interface ThumbnailClass {
  source: string;
  width: number;
  height: number;
}

export interface License {
  type: string;
  code: string;
  url: string;
}

export interface Structured {
  captions: Captions;
}

export interface Captions {
  en: string;
  fr: string;
}

export interface Mostread {
  date: DateEnum;
  articles: Tfa[];
}

export interface Tfa {
  views?: number;
  rank?: number;
  view_history?: ViewHistory[];
  type: Type;
  title: string;
  displaytitle: string;
  namespace: Namespace;
  wikibase_item: string;
  titles: Titles;
  pageid: number;
  thumbnail?: ThumbnailClass;
  originalimage?: ThumbnailClass;
  lang: Lang;
  dir: Dir;
  revision: string;
  tid: string;
  timestamp: Date;
  description?: string;
  description_source?: DescriptionSource;
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
  Local = 'local',
}

export enum Dir {
  LTR = 'ltr',
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

export enum Type {
  Standard = 'standard',
}

export interface ViewHistory {
  date: DateEnum;
  views: number;
}

export enum DateEnum {
  The20230524Z = '2023-05-24Z',
  The20230525Z = '2023-05-25Z',
  The20230526Z = '2023-05-26Z',
  The20230527Z = '2023-05-27Z',
  The20230528Z = '2023-05-28Z',
}

export interface Onthisday {
  text: string;
  pages: Tfa[];
  year: number;
}
