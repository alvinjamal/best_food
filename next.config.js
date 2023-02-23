/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: "/:slug*",
        destination: `${process.env.URL_BASE}/:slug*`,
      },
    ];
  },
  env: {
    URL_BASE: process.env.URL_BASE,
  },
  images: {
    domains: ["res.cloudinary.com"],
  },
};

module.exports = nextConfig;
