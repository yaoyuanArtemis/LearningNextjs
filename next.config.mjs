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
