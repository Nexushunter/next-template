const path = require('path');
/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    outputFileTracingRoot: path.join(__dirname, "../../")
  },
  images: {
    unoptimized: true,
  },
  output: 'standalone'
}

module.exports = nextConfig
