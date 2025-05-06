/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        // hostname: "raw.githubusercontent.com",
        // hostname: "tbz.ltyuanfang.cn",
        hostname: "hub.gitmirror.com",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

module.exports = nextConfig;
