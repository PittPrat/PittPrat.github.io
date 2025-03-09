// next.config.mjs
const isProd = process.env.NODE_ENV === 'production';

export default {
  output: 'export',
  basePath: '',
  assetPrefix: '',
  trailingSlash: true, // Ensure all routes work properly
  images: {
    unoptimized: true, // Required for static export
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
};
