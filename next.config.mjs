// next.config.mjs
const isProd = process.env.NODE_ENV === 'production';

export default {
  output: 'export',
  basePath: '',
  assetPrefix: '',
  trailingSlash: true, // Required for GitHub Pages
  images: {
    unoptimized: true, // Required for static export
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  experimental: {
    appDir: true, // Enable app directory support for Next.js 13+
  },
};
