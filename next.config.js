/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images:{
    domains:['mhfed.appiness.cc']
  }
}

module.exports = nextConfig
