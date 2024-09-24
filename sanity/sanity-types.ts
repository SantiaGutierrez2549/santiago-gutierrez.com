/**
 * ---------------------------------------------------------------------------------
 * This file has been generated by Sanity TypeGen.
 * Command: `sanity typegen generate`
 *
 * Any modifications made directly to this file will be overwritten the next time
 * the TypeScript definitions are generated. Please make changes to the Sanity
 * schema definitions and/or GROQ queries if you need to update these types.
 *
 * For more information on how to use Sanity TypeGen, visit the official documentation:
 * https://www.sanity.io/docs/sanity-typegen
 * ---------------------------------------------------------------------------------
 */

// Source: schema.json
export type SanityImagePaletteSwatch = {
  _type: "sanity.imagePaletteSwatch";
  background?: string;
  foreground?: string;
  population?: number;
  title?: string;
};

export type SanityImagePalette = {
  _type: "sanity.imagePalette";
  darkMuted?: SanityImagePaletteSwatch;
  lightVibrant?: SanityImagePaletteSwatch;
  darkVibrant?: SanityImagePaletteSwatch;
  vibrant?: SanityImagePaletteSwatch;
  dominant?: SanityImagePaletteSwatch;
  lightMuted?: SanityImagePaletteSwatch;
  muted?: SanityImagePaletteSwatch;
};

export type SanityImageDimensions = {
  _type: "sanity.imageDimensions";
  height?: number;
  width?: number;
  aspectRatio?: number;
};

export type Geopoint = {
  _type: "geopoint";
  lat?: number;
  lng?: number;
  alt?: number;
};

export type WorkInfo = {
  _type: "workInfo";
  name?: string;
  description?: Array<{
    children?: Array<{
      marks?: Array<string>;
      text?: string;
      _type: "span";
      _key: string;
    }>;
    style?: "normal";
    listItem?: "bullet" | "number";
    markDefs?: Array<{
      href?: string;
      _type: "link";
      _key: string;
    }>;
    level?: number;
    _type: "description";
    _key: string;
  }>;
  image?: {
    asset?: {
      _ref: string;
      _type: "reference";
      _weak?: boolean;
      [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
    };
    hotspot?: SanityImageHotspot;
    crop?: SanityImageCrop;
    alt: string;
    photoCredit?: string;
    _type: "imageInfo";
  };
};

export type RawAssetInfo = {
  _type: "rawAssetInfo";
  name?: string;
  linkType?: "link" | "file";
  uploadSource?: {
    asset?: {
      _ref: string;
      _type: "reference";
      _weak?: boolean;
      [internalGroqTypeReferenceTo]?: "sanity.fileAsset";
    };
    _type: "file";
  };
  linkSource?: string;
};

export type Description = {
  _type: "description";
  children?: Array<{
    marks?: Array<string>;
    text?: string;
    _type: "span";
    _key: string;
  }>;
  style?: "normal";
  listItem?: "bullet" | "number";
  markDefs?: Array<{
    href?: string;
    _type: "link";
    _key: string;
  }>;
  level?: number;
};

export type Content = Array<({
  _key: string;
} & Description) | ({
  _key: string;
} & AssetInfo)>;

export type ImageInfo = {
  _type: "imageInfo";
  asset?: {
    _ref: string;
    _type: "reference";
    _weak?: boolean;
    [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
  };
  hotspot?: SanityImageHotspot;
  crop?: SanityImageCrop;
  alt: string;
  photoCredit?: string;
};

export type AssetInfo = {
  _type: "assetInfo";
  assetType: "link" | "image" | "file" | "html";
  imageSource?: {
    asset?: {
      _ref: string;
      _type: "reference";
      _weak?: boolean;
      [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
    };
    hotspot?: SanityImageHotspot;
    crop?: SanityImageCrop;
    _type: "image";
  };
  uploadSource?: {
    asset?: {
      _ref: string;
      _type: "reference";
      _weak?: boolean;
      [internalGroqTypeReferenceTo]?: "sanity.fileAsset";
    };
    _type: "file";
  };
  linkSource?: string;
  htmlSource?: string;
  embed?: boolean;
  title?: string;
  description?: string;
};

export type Home = {
  _id: string;
  _type: "home";
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  slogan?: string;
  homeImage?: {
    asset?: {
      _ref: string;
      _type: "reference";
      _weak?: boolean;
      [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
    };
    hotspot?: SanityImageHotspot;
    crop?: SanityImageCrop;
    _type: "image";
  };
  upcomingWorks?: Array<{
    title?: string;
    subtitle?: string;
    info?: Content;
    date?: string;
    place?: string;
    banner?: BannerInfo;
    _key: string;
  }>;
  highlightsBackground?: {
    asset?: {
      _ref: string;
      _type: "reference";
      _weak?: boolean;
      [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
    };
    hotspot?: SanityImageHotspot;
    crop?: SanityImageCrop;
    _type: "image";
  };
  highlights?: Array<{
    _ref: string;
    _type: "reference";
    _weak?: boolean;
    [internalGroqTypeReferenceTo]?: "events";
  } | {
    _ref: string;
    _type: "reference";
    _weak?: boolean;
    [internalGroqTypeReferenceTo]?: "posts";
  }>;
  featuredWorks?: Array<{
    _ref: string;
    _type: "reference";
    _weak?: boolean;
    _key: string;
    [internalGroqTypeReferenceTo]?: "projects";
  }>;
};

export type Settings = {
  _id: string;
  _type: "settings";
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  siteTitle?: string;
  inspiration?: string;
  backgroundColor?: Color;
  backgroundAltColor?: Color;
  backgroundDarkColor?: Color;
  foregroundColor?: Color;
  foregroundDarkColor?: Color;
  accentColor?: Color;
  accentAltColor?: Color;
  bodyFont?: FontInfo;
  headingFont?: FontInfo;
  logo?: {
    asset?: {
      _ref: string;
      _type: "reference";
      _weak?: boolean;
      [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
    };
    hotspot?: SanityImageHotspot;
    crop?: SanityImageCrop;
    _type: "image";
  };
};

export type FontInfo = {
  _type: "fontInfo";
  name?: string;
  linkType?: "link" | "file";
  uploadSource?: {
    asset?: {
      _ref: string;
      _type: "reference";
      _weak?: boolean;
      [internalGroqTypeReferenceTo]?: "sanity.fileAsset";
    };
    _type: "file";
  };
  linkSource?: string;
};

export type About = {
  _id: string;
  _type: "about";
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  socials?: Array<{
    Site?: "Instagram" | "Facebook" | "X" | "SoundCloud" | "Bandcamp";
    Handle?: string;
    _key: string;
  }>;
  bannerAbout?: {
    asset?: {
      _ref: string;
      _type: "reference";
      _weak?: boolean;
      [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
    };
    hotspot?: SanityImageHotspot;
    crop?: SanityImageCrop;
    _type: "image";
  };
  bannerWork?: {
    asset?: {
      _ref: string;
      _type: "reference";
      _weak?: boolean;
      [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
    };
    hotspot?: SanityImageHotspot;
    crop?: SanityImageCrop;
    _type: "image";
  };
  bannerNews?: {
    asset?: {
      _ref: string;
      _type: "reference";
      _weak?: boolean;
      [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
    };
    hotspot?: SanityImageHotspot;
    crop?: SanityImageCrop;
    _type: "image";
  };
  bioShort: Array<{
    _key: string;
  } & Description>;
  bioMedium: Array<{
    _key: string;
  } & Description>;
  bioLong: Array<{
    _key: string;
  } & Description>;
  headshot: {
    asset?: {
      _ref: string;
      _type: "reference";
      _weak?: boolean;
      [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
    };
    hotspot?: SanityImageHotspot;
    crop?: SanityImageCrop;
    _type: "image";
  };
  work?: Array<{
    _key: string;
  } & WorkInfo>;
  cv?: {
    asset?: {
      _ref: string;
      _type: "reference";
      _weak?: boolean;
      [internalGroqTypeReferenceTo]?: "sanity.fileAsset";
    };
    _type: "file";
  };
  resume?: {
    asset?: {
      _ref: string;
      _type: "reference";
      _weak?: boolean;
      [internalGroqTypeReferenceTo]?: "sanity.fileAsset";
    };
    _type: "file";
  };
};

export type Projects = {
  _id: string;
  _type: "projects";
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  title: string;
  subtitle?: string;
  slug: Slug;
  type: "Orchestra" | "Chamber" | "Vocal" | "Arrangements & Orchestrations";
  instrumentation?: Array<"Open Instrumentation" | "Symphonic Percussion" | "Hand Percussion" | "Clarinet" | "Flute" | "Oboe" | "Bassoon" | "Trumpet" | "Horn" | "Trombone" | "Tuba" | "Violin" | "Viola" | "Cello" | "Contrabass" | "Drumset" | "Guitar" | "Saxophone" | "Voice" | "Soprano" | "Mezzo-Soprano" | "Alto" | "Tenor" | "Baritone" | "Bass" | "Countertenor" | "Electronics" | "Orchestra">;
  date: string;
  duration?: string;
  banner?: BannerInfo;
  content?: Content;
};

export type Posts = {
  _id: string;
  _type: "posts";
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  title: string;
  subtitle?: string;
  slug: Slug;
  date: string;
  banner?: BannerInfo;
  content: Content;
};

export type Events = {
  _id: string;
  _type: "events";
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  title: string;
  subtitle?: string;
  slug: Slug;
  date: string;
  banner?: BannerInfo;
  content?: Content;
};

export type SanityImageCrop = {
  _type: "sanity.imageCrop";
  top?: number;
  bottom?: number;
  left?: number;
  right?: number;
};

export type SanityImageHotspot = {
  _type: "sanity.imageHotspot";
  x?: number;
  y?: number;
  height?: number;
  width?: number;
};

export type SanityImageAsset = {
  _id: string;
  _type: "sanity.imageAsset";
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  originalFilename?: string;
  label?: string;
  title?: string;
  description?: string;
  altText?: string;
  sha1hash?: string;
  extension?: string;
  mimeType?: string;
  size?: number;
  assetId?: string;
  uploadId?: string;
  path?: string;
  url?: string;
  metadata?: SanityImageMetadata;
  source?: SanityAssetSourceData;
};

export type SanityImageMetadata = {
  _type: "sanity.imageMetadata";
  location?: Geopoint;
  dimensions?: SanityImageDimensions;
  palette?: SanityImagePalette;
  lqip?: string;
  blurHash?: string;
  hasAlpha?: boolean;
  isOpaque?: boolean;
};

export type SanityFileAsset = {
  _id: string;
  _type: "sanity.fileAsset";
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  originalFilename?: string;
  label?: string;
  title?: string;
  description?: string;
  altText?: string;
  sha1hash?: string;
  extension?: string;
  mimeType?: string;
  size?: number;
  assetId?: string;
  uploadId?: string;
  path?: string;
  url?: string;
  source?: SanityAssetSourceData;
};

export type SanityAssetSourceData = {
  _type: "sanity.assetSourceData";
  name?: string;
  id?: string;
  url?: string;
};

export type BannerInfo = {
  _type: "bannerInfo";
  bannerType: "none" | "gradient" | "image" | "video" | "custom";
  image?: ImageInfo;
  gradient?: {
    type: "radial" | "diagonal" | "horizontal" | "vertical";
    color1: Color;
    color2: Color;
  };
  video?: {
    asset?: {
      _ref: string;
      _type: "reference";
      _weak?: boolean;
      [internalGroqTypeReferenceTo]?: "sanity.fileAsset";
    };
    _type: "file";
  };
  custom?: string;
};

export type Slug = {
  _type: "slug";
  current: string;
  source?: string;
};

export type Color = {
  _type: "color";
  hex?: string;
  alpha?: number;
  hsl?: HslaColor;
  hsv?: HsvaColor;
  rgb?: RgbaColor;
};

export type RgbaColor = {
  _type: "rgbaColor";
  r?: number;
  g?: number;
  b?: number;
  a?: number;
};

export type HsvaColor = {
  _type: "hsvaColor";
  h?: number;
  s?: number;
  v?: number;
  a?: number;
};

export type HslaColor = {
  _type: "hslaColor";
  h?: number;
  s?: number;
  l?: number;
  a?: number;
};

export type AllSanitySchemaTypes = SanityImagePaletteSwatch | SanityImagePalette | SanityImageDimensions | Geopoint | WorkInfo | RawAssetInfo | Description | Content | ImageInfo | AssetInfo | Home | Settings | FontInfo | About | Projects | Posts | Events | SanityImageCrop | SanityImageHotspot | SanityImageAsset | SanityImageMetadata | SanityFileAsset | SanityAssetSourceData | BannerInfo | Slug | Color | RgbaColor | HsvaColor | HslaColor;
export declare const internalGroqTypeReferenceTo: unique symbol;
// Source: queries/index.ts
// Variable: settingsQuery
// Query: *[_type == 'settings'][0]
export type SettingsQueryResult = {
  _id: string;
  _type: "settings";
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  siteTitle?: string;
  inspiration?: string;
  backgroundColor?: Color;
  backgroundAltColor?: Color;
  backgroundDarkColor?: Color;
  foregroundColor?: Color;
  foregroundDarkColor?: Color;
  accentColor?: Color;
  accentAltColor?: Color;
  bodyFont?: FontInfo;
  headingFont?: FontInfo;
  logo?: {
    asset?: {
      _ref: string;
      _type: "reference";
      _weak?: boolean;
      [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
    };
    hotspot?: SanityImageHotspot;
    crop?: SanityImageCrop;
    _type: "image";
  };
} | null;
// Variable: socialsQuery
// Query: *[_type == 'about']{socials}[0]
export type SocialsQueryResult = {
  socials: Array<{
    Site?: "Bandcamp" | "Facebook" | "Instagram" | "SoundCloud" | "X";
    Handle?: string;
    _key: string;
  }> | null;
} | null;
// Variable: postsQuery
// Query: *[_type == 'posts']{_id, title, banner, 'slug': slug.current, subtitle, date, 'category': category->slug.current, content}
export type PostsQueryResult = Array<{
  _id: string;
  title: string;
  banner: BannerInfo | null;
  slug: string;
  subtitle: string | null;
  date: string;
  category: null;
  content: Content;
}>;
// Variable: postQuery
// Query: *[_type == 'posts' && slug.current == $slug][0]{_id, title, banner, 'slug': slug.current, subtitle, date, 'category': category->slug.current, content }
export type PostQueryResult = {
  _id: string;
  title: string;
  banner: BannerInfo | null;
  slug: string;
  subtitle: string | null;
  date: string;
  category: null;
  content: Content;
} | null;
// Variable: eventsQuery
// Query: *[_type == 'events']{_id, 'slug': slug.current, title, subtitle, banner, date, 'category': category->slug.current}
export type EventsQueryResult = Array<{
  _id: string;
  slug: string;
  title: string;
  subtitle: string | null;
  banner: BannerInfo | null;
  date: string;
  category: null;
}>;
// Variable: eventQuery
// Query: *[_type == 'events' && slug.current == $slug][0]{  _id, title, subtitle, banner, content, date, 'slug': slug.current, 'category': category->slug.current}
export type EventQueryResult = {
  _id: string;
  title: string;
  subtitle: string | null;
  banner: BannerInfo | null;
  content: Content | null;
  date: string;
  slug: string;
  category: null;
} | null;
// Variable: projectsQuery
// Query: *[_type == 'projects']{  ..., 'slug': slug.current}
export type ProjectsQueryResult = Array<{
  _id: string;
  _type: "projects";
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  title: string;
  subtitle?: string;
  slug: string;
  type: "Arrangements & Orchestrations" | "Chamber" | "Orchestra" | "Vocal";
  instrumentation?: Array<"Alto" | "Baritone" | "Bass" | "Bassoon" | "Cello" | "Clarinet" | "Contrabass" | "Countertenor" | "Drumset" | "Electronics" | "Flute" | "Guitar" | "Hand Percussion" | "Horn" | "Mezzo-Soprano" | "Oboe" | "Open Instrumentation" | "Orchestra" | "Saxophone" | "Soprano" | "Symphonic Percussion" | "Tenor" | "Trombone" | "Trumpet" | "Tuba" | "Viola" | "Violin" | "Voice">;
  date: string;
  duration?: string;
  banner?: BannerInfo;
  content?: Content;
}>;
// Variable: projectQuery
// Query: *[_type == 'projects' && slug.current == $slug][0]{  _id, title, subtitle, banner, date, 'slug': slug.current, 'category': category->slug.current, content}
export type ProjectQueryResult = {
  _id: string;
  title: string;
  subtitle: string | null;
  banner: BannerInfo | null;
  date: string;
  slug: string;
  category: null;
  content: Content | null;
} | null;
// Variable: aboutQuery
// Query: *[_type == 'about'][0]
export type AboutQueryResult = {
  _id: string;
  _type: "about";
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  socials?: Array<{
    Site?: "Bandcamp" | "Facebook" | "Instagram" | "SoundCloud" | "X";
    Handle?: string;
    _key: string;
  }>;
  bannerAbout?: {
    asset?: {
      _ref: string;
      _type: "reference";
      _weak?: boolean;
      [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
    };
    hotspot?: SanityImageHotspot;
    crop?: SanityImageCrop;
    _type: "image";
  };
  bannerWork?: {
    asset?: {
      _ref: string;
      _type: "reference";
      _weak?: boolean;
      [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
    };
    hotspot?: SanityImageHotspot;
    crop?: SanityImageCrop;
    _type: "image";
  };
  bannerNews?: {
    asset?: {
      _ref: string;
      _type: "reference";
      _weak?: boolean;
      [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
    };
    hotspot?: SanityImageHotspot;
    crop?: SanityImageCrop;
    _type: "image";
  };
  bioShort: Array<{
    _key: string;
  } & Description>;
  bioMedium: Array<{
    _key: string;
  } & Description>;
  bioLong: Array<{
    _key: string;
  } & Description>;
  headshot: {
    asset?: {
      _ref: string;
      _type: "reference";
      _weak?: boolean;
      [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
    };
    hotspot?: SanityImageHotspot;
    crop?: SanityImageCrop;
    _type: "image";
  };
  work?: Array<{
    _key: string;
  } & WorkInfo>;
  cv?: {
    asset?: {
      _ref: string;
      _type: "reference";
      _weak?: boolean;
      [internalGroqTypeReferenceTo]?: "sanity.fileAsset";
    };
    _type: "file";
  };
  resume?: {
    asset?: {
      _ref: string;
      _type: "reference";
      _weak?: boolean;
      [internalGroqTypeReferenceTo]?: "sanity.fileAsset";
    };
    _type: "file";
  };
} | null;
// Variable: aboutSelectQuery
// Query: { 'value': *[_type == 'about'][0][$key] }
export type AboutSelectQueryResult = {
  value: Array<{
    _id: string;
    _type: "about";
    _createdAt: string;
    _updatedAt: string;
    _rev: string;
    socials?: Array<{
      Site?: "Bandcamp" | "Facebook" | "Instagram" | "SoundCloud" | "X";
      Handle?: string;
      _key: string;
    }>;
    bannerAbout?: {
      asset?: {
        _ref: string;
        _type: "reference";
        _weak?: boolean;
        [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
      };
      hotspot?: SanityImageHotspot;
      crop?: SanityImageCrop;
      _type: "image";
    };
    bannerWork?: {
      asset?: {
        _ref: string;
        _type: "reference";
        _weak?: boolean;
        [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
      };
      hotspot?: SanityImageHotspot;
      crop?: SanityImageCrop;
      _type: "image";
    };
    bannerNews?: {
      asset?: {
        _ref: string;
        _type: "reference";
        _weak?: boolean;
        [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
      };
      hotspot?: SanityImageHotspot;
      crop?: SanityImageCrop;
      _type: "image";
    };
    bioShort: Array<{
      _key: string;
    } & Description>;
    bioMedium: Array<{
      _key: string;
    } & Description>;
    bioLong: Array<{
      _key: string;
    } & Description>;
    headshot: {
      asset?: {
        _ref: string;
        _type: "reference";
        _weak?: boolean;
        [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
      };
      hotspot?: SanityImageHotspot;
      crop?: SanityImageCrop;
      _type: "image";
    };
    work?: Array<{
      _key: string;
    } & WorkInfo>;
    cv?: {
      asset?: {
        _ref: string;
        _type: "reference";
        _weak?: boolean;
        [internalGroqTypeReferenceTo]?: "sanity.fileAsset";
      };
      _type: "file";
    };
    resume?: {
      asset?: {
        _ref: string;
        _type: "reference";
        _weak?: boolean;
        [internalGroqTypeReferenceTo]?: "sanity.fileAsset";
      };
      _type: "file";
    };
  }> | null;
};
// Variable: homeQuery
// Query: *[_type == 'home'][0]{ ..., 'highlights': highlights[]->, 'featuredWorks': featuredWorks[]-> }
export type HomeQueryResult = {
  _id: string;
  _type: "home";
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  slogan?: string;
  homeImage?: {
    asset?: {
      _ref: string;
      _type: "reference";
      _weak?: boolean;
      [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
    };
    hotspot?: SanityImageHotspot;
    crop?: SanityImageCrop;
    _type: "image";
  };
  upcomingWorks?: Array<{
    title?: string;
    subtitle?: string;
    info?: Content;
    date?: string;
    place?: string;
    banner?: BannerInfo;
    _key: string;
  }>;
  highlightsBackground?: {
    asset?: {
      _ref: string;
      _type: "reference";
      _weak?: boolean;
      [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
    };
    hotspot?: SanityImageHotspot;
    crop?: SanityImageCrop;
    _type: "image";
  };
  highlights: Array<{
    _id: string;
    _type: "events";
    _createdAt: string;
    _updatedAt: string;
    _rev: string;
    title: string;
    subtitle?: string;
    slug: Slug;
    date: string;
    banner?: BannerInfo;
    content?: Content;
  } | {
    _id: string;
    _type: "posts";
    _createdAt: string;
    _updatedAt: string;
    _rev: string;
    title: string;
    subtitle?: string;
    slug: Slug;
    date: string;
    banner?: BannerInfo;
    content: Content;
  }> | null;
  featuredWorks: Array<{
    _id: string;
    _type: "projects";
    _createdAt: string;
    _updatedAt: string;
    _rev: string;
    title: string;
    subtitle?: string;
    slug: Slug;
    type: "Arrangements & Orchestrations" | "Chamber" | "Orchestra" | "Vocal";
    instrumentation?: Array<"Alto" | "Baritone" | "Bass" | "Bassoon" | "Cello" | "Clarinet" | "Contrabass" | "Countertenor" | "Drumset" | "Electronics" | "Flute" | "Guitar" | "Hand Percussion" | "Horn" | "Mezzo-Soprano" | "Oboe" | "Open Instrumentation" | "Orchestra" | "Saxophone" | "Soprano" | "Symphonic Percussion" | "Tenor" | "Trombone" | "Trumpet" | "Tuba" | "Viola" | "Violin" | "Voice">;
    date: string;
    duration?: string;
    banner?: BannerInfo;
    content?: Content;
  }> | null;
} | null;

// Query TypeMap
import "@sanity/client";
declare module "@sanity/client" {
  interface SanityQueries {
    "*[_type == 'settings'][0]": SettingsQueryResult;
    "*[_type == 'about']{socials}[0]": SocialsQueryResult;
    "*[_type == 'posts']{_id, title, banner, 'slug': slug.current, subtitle, date, 'category': category->slug.current, content}": PostsQueryResult;
    "*[_type == 'posts' && slug.current == $slug][0]{_id, title, banner, 'slug': slug.current, subtitle, date, 'category': category->slug.current, content }": PostQueryResult;
    "*[_type == 'events']{_id, 'slug': slug.current, title, subtitle, banner, date, 'category': category->slug.current}": EventsQueryResult;
    "*[_type == 'events' && slug.current == $slug][0]{\n  _id, title, subtitle, banner, content, date, 'slug': slug.current, 'category': category->slug.current\n}": EventQueryResult;
    "*[_type == 'projects']{\n  ..., 'slug': slug.current\n}": ProjectsQueryResult;
    "*[_type == 'projects' && slug.current == $slug][0]{\n  _id, title, subtitle, banner, date, 'slug': slug.current, 'category': category->slug.current, content\n}": ProjectQueryResult;
    "*[_type == 'about'][0]": AboutQueryResult;
    "{ 'value': *[_type == 'about'][0][$key] }": AboutSelectQueryResult;
    "*[_type == 'home'][0]{ ..., 'highlights': highlights[]->, 'featuredWorks': featuredWorks[]-> }": HomeQueryResult;
  }
}
