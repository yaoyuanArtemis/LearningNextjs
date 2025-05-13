/** @type {import('next').NextConfig} */
import createMDX from "@next/mdx";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";
import rehypeHighlight from "rehype-highlight";
const withMDX = createMDX({
  extension: /\.(md|mdx)$/,
  options: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [rehypeRaw, rehypeHighlight],
  },
});
const nextConfig = {
  pageExtensions: ["js", "jsx", "md", "mdx", "ts", "tsx"],
  webpack: (config) => {
    config.module.rules.push({
      test: /\.svg$/,
      use: [
        {
          loader: "@svgr/webpack",
          options: {
            icon: true, // 自动将 SVG 视为图标
          },
        },
      ],
    });
    return config;
  },
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
