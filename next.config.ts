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
  },
  //  async redirects() {
  //   return [
  //     {
  //       source: '/oferta/branza/:slug',
  //       destination: '/oferta/:slug',
  //       permanent: true, // 301 redirect (zmień na false dla tymczasowego 307)
  //     },
  //   ];
  // },
};

export default nextConfig;
