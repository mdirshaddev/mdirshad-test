/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: false,
  },
  experimental: {
    webVitalsAttribution: ["CLS", "FCP", "FID", "INP", "LCP", "TTFB"],
  },
  swcMinify: true,
  typescript: {
    ignoreBuildErrors: false,
  },
};

module.exports = nextConfig;
