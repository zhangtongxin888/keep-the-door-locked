import type { MetadataRoute } from "next";
import { SITE_URL } from "./lib/site";

const routes = ["/", "/codes/", "/beginner-guide/", "/gameplay-loop/", "/mistakes/", "/endings/", "/faq/", "/sources/"];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route, index) => ({ url: `${SITE_URL}${route}`, lastModified: route === "/" || route === "/codes/" ? "2026-10-28" : "2026-10-11", changeFrequency: index === 0 ? "weekly" : "monthly", priority: index === 0 ? 1 : route === "/beginner-guide/" || route === "/codes/" ? 0.9 : 0.7 }));
}
