import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";

const routes: { path: string; priority: number }[] = [
  { path: "", priority: 1 },
  { path: "/home-plans", priority: 0.9 },
  { path: "/business-plans", priority: 0.9 },
  { path: "/plans", priority: 0.8 },
  { path: "/booking", priority: 0.8 },
  { path: "/about", priority: 0.6 },
  { path: "/contact", priority: 0.6 },
  { path: "/privacy-policy", priority: 0.3 },
  { path: "/refund-policy", priority: 0.3 },
  { path: "/terms-and-conditions", priority: 0.3 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map(({ path, priority }) => ({
    url: `${SITE_URL}${path}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority,
  }));
}
