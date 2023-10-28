/* eslint-disable canonical/sort-keys */
/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: false,
  },
  experimental: {
    webVitalsAttribution: ["CLS", "FCP", "FID", "INP", "LCP", "TTFB"],
    serverComponentsExternalPackages: ["@prisma/client"],
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "avatars.githubusercontent.com", // GitHub Avatar
      },
      {
        protocol: "https",
        hostname: "res.cloudinary.com", // Cloudinary
      },
      {
        protocol: "https",
        hostname: "i.scdn.co", // Spotify Album
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com", // Unsplash Images
      },
    ],
  },
  modularizeImports: {
    lodash: {
      transform: "lodash/{{member}}",
    },
    "date-fns": {
      transform: "date-fns/{{member}}",
    },
    "react-icons": {
      transform: "react-icons/{{member}}",
    },
  },
  output: "standalone", // for docker it is required
  swcMinify: true,
  typescript: {
    ignoreBuildErrors: false,
  },
};

module.exports = nextConfig;
