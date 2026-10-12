import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  poweredByHeader: false,
  trailingSlash: true,
  async redirects() {
    return [
      {
        source: "/",
        has: [{ type: "host", value: "www.keepthedoorlocked-wiki.wiki" }],
        destination: "https://keepthedoorlocked-wiki.wiki/",
        permanent: true,
      },
      {
        source: "/:path((?:.*\\.[a-zA-Z0-9]+))",
        has: [{ type: "host", value: "www.keepthedoorlocked-wiki.wiki" }],
        destination: "https://keepthedoorlocked-wiki.wiki/:path",
        permanent: true,
      },
      {
        source: "/:path([^.]*[^./])",
        has: [{ type: "host", value: "www.keepthedoorlocked-wiki.wiki" }],
        destination: "https://keepthedoorlocked-wiki.wiki/:path/",
        permanent: true,
      },
      {
        source: "/:path([^.]*/)",
        has: [{ type: "host", value: "www.keepthedoorlocked-wiki.wiki" }],
        destination: "https://keepthedoorlocked-wiki.wiki/:path",
        permanent: true,
      },
    ];
  },
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "X-Frame-Options", value: "DENY" },
          { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
          { key: "Cross-Origin-Opener-Policy", value: "same-origin" },
        ],
      },
    ];
  },
};

export default nextConfig;
