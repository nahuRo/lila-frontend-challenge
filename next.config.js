/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  eslint: { dirs: ['.'] },
  // basePath: '/public',
};

module.exports = nextConfig;
