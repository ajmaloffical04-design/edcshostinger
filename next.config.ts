import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export", // Static HTML export for Hostinger shared hosting
  trailingSlash: true, // Ensures clean URLs on Apache (Hostinger uses Apache)
  images: {
    unoptimized: true, // Required for static export (no Node.js image optimizer)
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
};

export default nextConfig;
