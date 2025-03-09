// next.config.mjs
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  assetPrefix: '/',
  basePath: '',
  images: {
      unoptimized: true,
  },
  experimental: {
      appDir: true,
  },
};

export default nextConfig;
