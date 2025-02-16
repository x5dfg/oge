import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ["i.imgur.com"],
    minimumCacheTTL: 60, 
    loader: "default",
  },
};

export default nextConfig;
