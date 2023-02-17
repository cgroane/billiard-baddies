/** @type {import('next').NextConfig} */
const process = require('dotenv');

const nextConfig = {
  reactStrictMode: true,
  async headers() {
    return [
      {
        source: "/about",
        headers: [
          {
            key: "Cache-Control",
            value: "no-cache, no-store, max-age=0, must-revalidate",
          },
        ],
      },
    ];
  },
  compiler: {
    styledComponents: true
  }
}

module.exports = nextConfig
