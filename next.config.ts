import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // External image domains for media content
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'picsum.photos',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'assets.mixkit.co',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;
