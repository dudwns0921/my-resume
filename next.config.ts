import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";

const nextConfig: NextConfig = {
  output: "standalone",
  assetPrefix: isProd ? "/my-resume/" : "",
};

export default nextConfig;
