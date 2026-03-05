import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactCompiler: true,
  output: "export",
  basePath: "/portfolio",
  env: {
    NEXT_PUBLIC_BASE_PATH: "/portfolio",
  },
  images: {
    loaderFile: "./src/lib/image-loader.ts",
  },
};

export default nextConfig;
