/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      "i.dummyjson.com",
      "fakestoreapi.com",
      "cdn.dummyjson.com",
      "robohash.org",
    ],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**i.dummyjson.com",
      },
    ],
  },
};

module.exports = nextConfig;
