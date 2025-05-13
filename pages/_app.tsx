import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { MDXProvider } from "@mdx-js/react";
import { useRouter } from "next/router";
import { useEffect } from "react";
import Head from "next/head";

const components = {
  img: (props: any) => <img {...props} />, // 强制使用原生img标签
  // 也可以使用Next.js的Image组件
  // img: (props) => <Image {...props} width={500} height={300} />
};

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  useEffect(() => {
    const loadPrism = async () => {
      const prism = await import("prismjs");
      prism.highlightAll();
      const handleRouteChange = () => {
        setTimeout(() => {
          prism.highlightAll();
        }, 0);
      };
      // 可选：加载其他语言
      // await import("prismjs/components/prism-yaml");
      // await import("prismjs/components/prism-bash.js"); // 加载 Bash 支持
      // await import("prismjs/components/prism-json.js"); // 加载 JSON 支持
      router.events.on("routeChangeComplete", handleRouteChange);
      // 组件卸载时取消监听
      return () => {
        router.events.off("routeChangeComplete", handleRouteChange);
      };
    };

    loadPrism();
  }, [router.events]);
  return (
    <>
      <Head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/prism/1.29.0/themes/prism.min.css"
        />
        <script src="https://cdnjs.cloudflare.com/ajax/libs/prism/1.29.0/prism.min.js"></script>
      </Head>
      <SpeedInsights />
      <Component {...pageProps} />
    </>
  );
}
