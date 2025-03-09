import type { MetadataRoute } from "next"

// Add this line to make it compatible with static exports
export const dynamic = 'force-static'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: "https://pittprat.github.io/sitemap.xml",
  }
}