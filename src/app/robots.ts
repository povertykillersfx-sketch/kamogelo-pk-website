import type { MetadataRoute } from "next";
import { noindex, site } from "@/content/site";

// Required so the route can be emitted by `output: export`.
export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  if (noindex) {
    return { rules: [{ userAgent: "*", disallow: "/" }] };
  }

  return {
    rules: [{ userAgent: "*", allow: "/" }],
    sitemap: `${site.url}/sitemap.xml`,
    host: site.url,
  };
}
