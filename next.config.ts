import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  output: 'standalone',
  experimental: {
    optimizePackageImports: ['@mantine/core', '@mantine/hooks'],

    turbo: {
      rules: {
        '*.svg': {
          loaders: ['@svgr/webpack'],
          as: '*.ts',
        },
      },
    },
  },
}

export default nextConfig
