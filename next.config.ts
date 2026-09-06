import type { NextConfig } from "next";

/**
 * The default build targets a Node host (Vercel and friends): image
 * optimisation on, security headers served by Next.
 *
 * Setting NEXT_OUTPUT=export produces a fully static bundle instead, which is
 * what the GitHub Pages preview deploy uses. Static hosts can't run image
 * optimisation or emit headers, so both are dropped in that mode.
 */
const isExport = process.env.NEXT_OUTPUT === "export";
const basePath = process.env.NEXT_BASE_PATH ?? "";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  agentRules: false,
  images: {
    unoptimized: isExport,
    formats: ["image/avif", "image/webp"],
    remotePatterns: [{ protocol: "https", hostname: "i.ytimg.com" }],
  },
  ...(isExport
    ? {
        output: "export" as const,
        basePath: basePath || undefined,
        assetPrefix: basePath || undefined,
      }
    : {
        async headers() {
          return [
            {
              source: "/:path*",
              headers: [
                { key: "X-Content-Type-Options", value: "nosniff" },
                {
                  key: "Referrer-Policy",
                  value: "strict-origin-when-cross-origin",
                },
                { key: "X-DNS-Prefetch-Control", value: "on" },
              ],
            },
          ];
        },
      }),
};

export default nextConfig;
