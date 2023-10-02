/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['employmenthero.com', 'vinova.sg']
  },
  env: {
    API_URL: 'https://ac.tcyrus.dev'
  }
}

module.exports = nextConfig
