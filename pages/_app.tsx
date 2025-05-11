import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { SpeedInsights } from "@vercel/speed-insights/next";
import Footer from "./components/Footer";
import { MDXProvider } from "@mdx-js/react";

const components = {
  img: (props: any) => <img {...props} />, // 强制使用原生img标签
  // 也可以使用Next.js的Image组件
  // img: (props) => <Image {...props} width={500} height={300} />
};

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <SpeedInsights />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}
