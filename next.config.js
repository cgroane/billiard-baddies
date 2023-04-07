/** @type {import('next').NextConfig} */
const process = require('dotenv');

const nextConfig = {
  trailingSlash: true,
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
  }
}

module.exports = nextConfig
