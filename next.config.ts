import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  redirects: async () => [
    {
      source: '/',
      destination: '/home',
      permanent: true,
    },
    { source: '/ro', destination: '/home', permanent: true },
    {
      source: '/ru',
      destination: '/home',
      permanent: true,
    },
  ],

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
