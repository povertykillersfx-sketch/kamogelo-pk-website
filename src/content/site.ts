/**
 * Single source of truth for every piece of copy, link and media slot on the
 * site. Editing this file is enough to keep the site current — no component
 * needs to be touched.
 *
 * Anything marked TODO below is a placeholder that should be swapped for the
 * real handle, URL or asset before launch.
 */

/**
 * Preview deploys (GitHub Pages) serve the site from a different origin and
 * sub-path than production, so both are overridable at build time. Left unset,
 * the values below are used as-is.
 */
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "");
export const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

/** Marks preview builds so they never compete with production in search. */
export const noindex = process.env.NEXT_PUBLIC_NOINDEX === "true";

export const site = {
  name: "KAMO PK",
  legalName: "Kamogelo PK",
  role: "Trader. Entrepreneur. Creator.",
  roleList: ["Trader", "Entrepreneur", "Creator"],
  statement:
    "Building businesses. Trading the financial markets. Creating the life I want.",
  location: "Pretoria, South Africa",
  locationShort: "South Africa",
  // TODO: replace with the production domain.
  url: siteUrl ?? "https://kamopk.com",
  email: "business@kamopk.com",
  description:
    "Kamogelo PK — trader, entrepreneur and creator from South Africa. Building businesses, trading the financial markets and documenting the journey.",
} as const;

export const nav = [
  { label: "About", href: "#about" },
  { label: "Journey", href: "#journey" },
  { label: "What I Do", href: "#what-i-do" },
  { label: "Content", href: "#content" },
  { label: "PKFX", href: "#pkfx" },
  { label: "Contact", href: "#follow" },
] as const;

export const social = {
  // TODO: replace placeholder handles with the live profiles.
  instagram: { label: "Instagram", handle: "@kamo.pk", href: "https://instagram.com/" },
  youtube: { label: "YouTube", handle: "@kamopk", href: "https://youtube.com/" },
  telegram: { label: "Telegram", handle: "PKFX Inner Circle", href: "https://t.me/" },
  pkfx: { label: "PKFX", handle: "povertykillersfx.com", href: "https://povertykillersfx.com" },
} as const;

/* -------------------------------------------------------------------------- */
/* Hero                                                                        */
/* -------------------------------------------------------------------------- */

export const hero = {
  headline: "Kamo PK",
  subheadline: "Trader. Entrepreneur. Creator.",
  supporting:
    "Building businesses. Trading the financial markets. Creating the life I want.",
  primaryCta: { label: "Watch my journey", href: "#content" },
  secondaryCta: { label: "Work with me", href: "#follow" },
  /**
   * Drop a hero still at /images/hero.jpg and/or a muted loop at
   * /video/hero.mp4, then point these at them. Both are optional — the slot
   * renders as a composed cinematic still when empty.
   */
  media: {
    image: null as string | null,
    video: null as string | null,
    alt: "Kamogelo PK",
  },
  marquee: [
    "Trader",
    "Entrepreneur",
    "Creator",
    "Still building",
  ] as const,
} as const;

/* -------------------------------------------------------------------------- */
/* About                                                                       */
/* -------------------------------------------------------------------------- */

export const about = {
  eyebrow: "About",
  headline: "I'm building the life I once dreamed about.",
  // The headline is rendered in two parts so the closing phrase can carry the
  // editorial serif treatment.
  headlineLead: "I'm building the life",
  headlineAccent: "I once dreamed about.",
  paragraphs: [
    "I'm Kamogelo — a trader, entrepreneur and content creator from South Africa. I placed my first trade at 13, long before I understood what I was really signing up for. What started as curiosity turned into years of screen time, losses, discipline and slow, stubborn progress.",
    "Today my focus sits in four places: trading the financial markets, building businesses, creating content, and documenting the journey honestly — the wins and the parts nobody puts on a highlight reel.",
    "I'm 21. I'm not finished. I'm still early. And everything I'm building is designed to outlast the version of me that started it.",
  ],
  stats: [
    { value: "13", label: "Age I placed my first trade" },
    { value: "8", label: "Years in the markets" },
    { value: "21", label: "Age today, still building" },
  ],
  // Drop a portrait at this path to fill the slot. See public/images/README.md
  portrait: { src: null as string | null, alt: "Kamogelo PK portrait" },
} as const;

/* -------------------------------------------------------------------------- */
/* Journey                                                                     */
/* -------------------------------------------------------------------------- */

export const journey = [
  {
    age: "13",
    year: "The beginning",
    title: "Started trading",
    body: "A phone, a demo account and no idea what I was doing. I lost more than I made for years — but I never stopped showing up to the charts.",
  },
  {
    age: "17",
    year: "Independence",
    title: "First apartment",
    body: "Moved out and paid my own way. The first proof that the hours in front of the screen could turn into something real.",
  },
  {
    age: "19",
    year: "Momentum",
    title: "First car",
    body: "Not the milestone itself — what it represented. Consistency compounding into something you can put your hands on.",
  },
  {
    age: "20",
    year: "Perspective",
    title: "Travelled to Dubai",
    body: "First time seeing the scale of what's possible up close. I came home with a bigger blueprint and less patience for small thinking.",
  },
  {
    age: "21",
    year: "Now",
    title: "Building businesses, trading and creating",
    body: "Running Poverty Killers FX, trading the markets, creating content and documenting all of it in real time.",
  },
] as const;

/* -------------------------------------------------------------------------- */
/* What I do                                                                   */
/* -------------------------------------------------------------------------- */

export const pillars = [
  {
    index: "01",
    title: "Trading",
    summary:
      "Eight years in the financial markets. Risk first, patience second, everything else after that.",
    points: ["Risk management", "Market structure", "Process over prediction"],
  },
  {
    index: "02",
    title: "Entrepreneurship",
    summary:
      "Building companies that solve real problems — starting with Poverty Killers FX and everything that comes after it.",
    points: ["Poverty Killers FX", "Brand & product", "Systems that scale"],
  },
  {
    index: "03",
    title: "Content",
    summary:
      "Documenting the build in public. Not a highlight reel — the actual process, in real time.",
    points: ["Long-form YouTube", "Short-form daily", "Journey documentation"],
  },
] as const;

/* -------------------------------------------------------------------------- */
/* Content                                                                     */
/* -------------------------------------------------------------------------- */

export const contentCategories = [
  "All",
  "Vlogs",
  "Trading",
  "Business",
  "Lifestyle",
] as const;

export type ContentCategory = (typeof contentCategories)[number];

export type ContentPiece = {
  id: string;
  title: string;
  category: Exclude<ContentCategory, "All">;
  meta: string;
  /** YouTube video id — the player only loads after a click. */
  videoId?: string;
  /** Optional local poster, e.g. "/images/content/dubai.jpg" */
  poster?: string;
  href?: string;
  featured?: boolean;
};

// TODO: replace with real uploads. Add `videoId` to make a card playable
// in-page; without one the card links out to the channel.
export const contentPieces: ContentPiece[] = [
  {
    id: "c1",
    title: "A week of building — trading, meetings and late nights",
    category: "Vlogs",
    meta: "Vlog · Long form",
    featured: true,
  },
  {
    id: "c2",
    title: "How I actually manage risk on every trade",
    category: "Trading",
    meta: "Trading · Breakdown",
  },
  {
    id: "c3",
    title: "Building Poverty Killers FX from nothing",
    category: "Business",
    meta: "Business · Documentary",
  },
  {
    id: "c4",
    title: "Dubai — what that trip actually taught me",
    category: "Lifestyle",
    meta: "Lifestyle · Travel",
  },
  {
    id: "c5",
    title: "The session routine I run every morning",
    category: "Trading",
    meta: "Trading · Process",
  },
  {
    id: "c6",
    title: "21 and still early — a year in review",
    category: "Vlogs",
    meta: "Vlog · Year in review",
  },
];

/* -------------------------------------------------------------------------- */
/* PKFX                                                                        */
/* -------------------------------------------------------------------------- */

export const pkfx = {
  eyebrow: "Businesses / 01",
  name: "Poverty Killers FX",
  short: "PKFX",
  headline: "One of the businesses I'm building.",
  body: "Poverty Killers FX is a trading ecosystem built for people who want the real version of this industry — structure, accountability and honest guidance instead of noise. It's the first company I've built, and it's still being built every single day.",
  features: [
    {
      title: "AI Market Scanner",
      body: "Scans the market continuously and surfaces the setups worth a second look.",
    },
    {
      title: "PKFX Academy",
      body: "A structured path from first chart to consistent process — no shortcuts sold.",
    },
    {
      title: "Trading Journal",
      body: "Track every trade, review every decision, and let the data correct you.",
    },
    {
      title: "Trading Community",
      body: "Real traders, real accounts, real conversations. Accountability you can feel.",
    },
  ],
  cta: { label: "Explore PKFX", href: social.pkfx.href },
} as const;

/* -------------------------------------------------------------------------- */
/* Philosophy                                                                  */
/* -------------------------------------------------------------------------- */

export const philosophy = {
  eyebrow: "Philosophy",
  headline: ["Think bigger.", "Work harder.", "Build your own life."],
  principles: [
    {
      index: "01",
      title: "Discipline over motivation.",
      body: "Motivation shows up when it feels like it. Discipline shows up at 4am on the days it doesn't.",
    },
    {
      index: "02",
      title: "Long-term over quick results.",
      body: "Anything built fast breaks fast. I'm playing a game measured in years, not weeks.",
    },
    {
      index: "03",
      title: "Building over talking.",
      body: "The work speaks louder than the caption. Build first, post the receipts later.",
    },
  ],
} as const;

/* -------------------------------------------------------------------------- */
/* Final CTA                                                                   */
/* -------------------------------------------------------------------------- */

export const finalCta = {
  headline: "Follow the journey.",
  body: "I'm still building. And we're only getting started.",
} as const;
