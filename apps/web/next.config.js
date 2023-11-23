/* eslint-disable canonical/sort-keys */
/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: false
  },
  experimental: {
    webVitalsAttribution: ['CLS', 'FCP', 'FID', 'INP', 'LCP', 'TTFB'],
    serverComponentsExternalPackages: ['@prisma/client']
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'avatars.githubusercontent.com' // GitHub Avatar
      },
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com' // Cloudinary
      },
      {
        protocol: 'https',
        hostname: 'i.scdn.co' // Spotify Album
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com' // Unsplash Images
      }
    ]
  },
  modularizeImports: {
    lodash: {
      transform: 'lodash/{{member}}'
    },
    'date-fns': {
      transform: 'date-fns/{{member}}'
    },
    'react-icons': {
      transform: 'react-icons/{{member}}'
    }
  },
  swcMinify: true,
  typescript: {
    ignoreBuildErrors: false
  }
};

if (process.env.IS_VERCEL == 'false') {
  console.log('Docker build for Next.js application image');
  nextConfig['output'] = 'standalone'; // for docker it is required
  module.exports = nextConfig;
} else {
  console.log('Vercel or Locally build for Next.js deployment or development');
  module.exports = nextConfig;
}
