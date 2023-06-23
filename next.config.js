// const withTM = require("next-transpile-modules")(["ky"]);
/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
  };
  
  module.exports = {
    images: {
      domains: [
        "fakestoreapi.com" ,
        "localhost",
        "example.com",
      ],
    },
    eslint: {
      ignoreDuringBuilds: true,
    },
  };
  
  nextConfig;
  