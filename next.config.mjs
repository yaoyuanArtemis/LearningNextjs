/** @type {import('next').NextConfig} */
import createMDX from "@next/mdx";
const withMDX = createMDX({
  extension: /\.(md|mdx)$/,
});
const nextConfig = {
  pageExtensions: ["js", "jsx", "md", "mdx", "ts", "tsx"],
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
export default withMDX(nextConfig);
