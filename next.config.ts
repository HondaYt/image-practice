import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */

};

module.exports = {
  output: 'standalone',
  images: {
    remotePatterns: [new URL('https://chatgpt.com/**')],
    localPatterns: [
      {
        pathname: '/localPatternsTest/**',
        search: '',
      },
    ],
    // qualities: [25, 60, 74, 75, 76, 100],
    // deviceSizes: [375, 430, 768, 1024, 1200, 1440, 1920, 2560],
    // imageSizes: [32, 256],
    disableStaticImages: true
  },
}

export default nextConfig;
