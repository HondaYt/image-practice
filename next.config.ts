import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */

};

module.exports = {
  output: 'standalone',
  images: {
    remotePatterns: [new URL('https://chatgpt.com/**')],
  },
}

export default nextConfig;
