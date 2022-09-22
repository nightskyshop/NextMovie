const { default: API_KEY } = require('./apikey');

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  async redirects() {
    return [{
      source: "/contact",
      destination: "https://naver.com",
      permanent: false,
      }]
  },
  async rewrites() {
    return [{
      source: "/api/movies/popular",
      destination: `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`,
    },
    {
      source: "/api/movies/:id",
      destination: `https://api.themoviedb.org/3/movie/:id?api_key=${API_KEY}`
    }]
  }
}

module.exports = nextConfig
