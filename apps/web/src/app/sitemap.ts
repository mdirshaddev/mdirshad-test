import { type MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      changeFrequency: "weekly",
      lastModified: new Date(),
      priority: 1,
      url: "https://mdirshad.vercel.app",
    },
    {
      changeFrequency: "monthly",
      lastModified: new Date(),
      priority: 0.8,
      url: "https://mdirshad.vercel.app/blog",
    },
    {
      changeFrequency: "never",
      lastModified: new Date(),
      priority: 0.5,
      url: "https://mdirshad.vercel.app/about",
    },
  ];
}
