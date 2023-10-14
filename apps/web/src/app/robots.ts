import { type MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: "/about",
    },
    sitemap: "https://mdirshad.vercel.app/sitemap.xml",
  };
}
