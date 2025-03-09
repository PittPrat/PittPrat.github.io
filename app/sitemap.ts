import type { MetadataRoute } from "next"

// Add this line to make it compatible with static exports
export const dynamic = 'force-static'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://pittprat.github.io",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: "https://pittprat.github.io/projects",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: "https://pittprat.github.io/case-studies",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: "https://pittprat.github.io/contact",
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.5,
    },
    // Add the AI content page
    {
      url: "https://pittprat.github.io/ai-content",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    },
  ]
}