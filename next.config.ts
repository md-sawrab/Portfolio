import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: "export", // → ensures pure static HTML/CSS/JS
  images: { unoptimized: true }, // optional, prevents image optimization issues on GitHub Pages
  basePath: "", // keep empty for root deployment
  allowedDevOrigins: ["192.168.1.114"], // Allow cross-origin requests from local network
};

export default nextConfig;
