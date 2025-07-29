// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      'i.scdn.co', // Spotify images
      'mosaic.scdn.co', // Spotify playlist covers
      'lineup-images.scdn.co', // Spotify artist images
      'platform-lookaside.fbsbx.com', // Social media images
      'images.unsplash.com', // Unsplash placeholders
    ],
    formats: ['image/webp', 'image/avif'],
  },
  // Removido experimental.optimizeCss que causaba el error de critters
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'Referrer-Policy',
            value: 'origin-when-cross-origin',
          },
        ],
      },
    ]
  },
}

module.exports = nextConfig