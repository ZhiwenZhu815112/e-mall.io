/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true
  },
  assetPrefix: process.env.NODE_ENV === 'production' ? '/e-mall.io' : '',
  basePath: process.env.NODE_ENV === 'production' ? '/e-mall.io' : '',
  distDir: 'out',
  generateBuildId: async () => {
    return 'build-' + Date.now()
  }
}

module.exports = nextConfig
