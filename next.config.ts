import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: "export", // → ensures pure static HTML/CSS/JS
  images: { unoptimized: true }, // optional, prevents image optimization issues on GitHub Pages
  basePath: process.env.NODE_ENV === "production" ? "/Portfolio" : "", // GitHub Pages subdirectory path only in production
  assetPrefix: process.env.NODE_ENV === "production" ? "/Portfolio/" : "", // Ensure assets are loaded from correct path
  allowedDevOrigins: ["192.168.1.114"], // Allow cross-origin requests from local network
};

export default nextConfig;
