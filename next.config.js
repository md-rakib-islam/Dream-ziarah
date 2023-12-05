/** @type {import('next').NextConfig} */

const prodConfig =  {
  protocol: 'https',
  hostname: 'ziarahapi.dreamtourism.co.uk',
  port: '',
  pathname: '**/media/**',
}
const localConfig =  {
  protocol: 'http',
  hostname: '192.168.0.100',
  port: '8000',
  pathname: '**/media/**',
}

const nextConfig = {
    images: {
        remotePatterns: [
          prodConfig
          // {
          //   protocol: 'https',
          //   hostname: 'ziarahapi.dreamtourism.co.uk',
          //   port: '',
          //   pathname: '**/media/**',
          // },
        ],
        imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
        formats: ['image/avif', 'image/webp'],
      },
      output: 'standalone',
}

module.exports = nextConfig
