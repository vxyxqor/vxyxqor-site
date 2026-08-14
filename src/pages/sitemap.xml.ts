import type { APIRoute } from "astro";
import { tools, comparisons, workflows } from "../data/tools";

const site = "https://vxyxqor.com";

export const GET: APIRoute = () => {
  const pages = [
    { url: "/", priority: 1.0, changefreq: "weekly" },
    { url: "/tools", priority: 0.9, changefreq: "weekly" },
    { url: "/compare", priority: 0.8, changefreq: "weekly" },
    { url: "/workflows", priority: 0.8, changefreq: "weekly" },
    { url: "/disclosure", priority: 0.3, changefreq: "monthly" },
    ...tools.map((t) => ({ url: `/tools/${t.slug}`, priority: 0.8, changefreq: "weekly" })),
    ...comparisons.map((c) => ({ url: `/compare/${c.slug}`, priority: 0.7, changefreq: "weekly" })),
    ...workflows.map((w) => ({ url: `/workflows/${w.slug}`, priority: 0.7, changefreq: "monthly" })),
  ];

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages
  .map(
    (p) => `  <url>
    <loc>${site}${p.url}</loc>
    <priority>${p.priority}</priority>
    <changefreq>${p.changefreq}</changefreq>
    <lastmod>${new Date().toISOString().split("T")[0]}</lastmod>
  </url>`
  )
  .join("\n")}
</urlset>`;

  return new Response(xml, {
    headers: { "Content-Type": "application/xml" },
  });
};
