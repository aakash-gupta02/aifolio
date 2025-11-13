import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */

  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "media.theresanaiforthat.com",
  
      },
    ],
  },


};

export default nextConfig;
