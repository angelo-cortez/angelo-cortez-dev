import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  basePath: '/angelo-cortez-dev', // Replace with your repository name
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
