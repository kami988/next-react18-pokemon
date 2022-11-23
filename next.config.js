/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ['img.pokemondb.net'],
  },
}

module.exports = nextConfig
