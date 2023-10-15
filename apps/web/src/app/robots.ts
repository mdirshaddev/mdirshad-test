import { type MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      allow: "/",
      disallow: "/about",
      userAgent: "*",
    },
    sitemap: "https://mdirshad.vercel.app/sitemap.xml",
  };
}
