import type { MetadataRoute } from "next";
import { SITE_URL } from "./lib/site";

const routes = ["", "/beginner-guide/", "/gameplay-loop/", "/mistakes/", "/endings/", "/faq/", "/sources/"];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route, index) => ({ url: `${SITE_URL}${route}`, lastModified: "2026-08-19", changeFrequency: index === 0 ? "weekly" : "monthly", priority: index === 0 ? 1 : route === "/beginner-guide/" ? 0.9 : 0.7 }));
}
