import { type MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://mdirshad.vercel.app",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: "https://mdirshad.vercel.app/blog",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: "https://mdirshad.vercel.app/about",
      lastModified: new Date(),
      changeFrequency: "never",
      priority: 0.5,
    },
  ];
}
