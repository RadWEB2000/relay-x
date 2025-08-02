import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        hostname: '4real.pl'
      },
      {
        hostname: 'cms.relayx.pl'
      },
      {
        hostname: 'images.pexels.com'
      }
    ]
  }
};

export default nextConfig;
