import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    output: 'export',
    trailingSlash: true,
    basePath: undefined,
    assetPrefix: undefined,
    reactStrictMode: true,
    images: { unoptimized: true },
};

export default nextConfig;
