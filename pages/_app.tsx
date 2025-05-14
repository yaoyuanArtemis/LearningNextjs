import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { MDXProvider } from "@mdx-js/react";
import { useRouter } from "next/router";
import { useEffect } from "react";
import Head from "next/head";
import NProgress from 'nprogress'; //nprogress module
import 'nprogress/nprogress.css';

const components = {
  // img: (props: any) => <img {...props} />, // 强制使用原生img标签
  // 也可以使用Next.js的Image组件
  // img: (props:any) => <Image {...props} width={500} height={300} />
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
        console.log("routeChangeComplete");
        NProgress.done()
      };
      // 可选：加载其他语言
      // await import("prismjs/components/prism-yaml");
      // await import("prismjs/components/prism-bash.js"); // 加载 Bash 支持
      // await import("prismjs/components/prism-json.js"); // 加载 JSON 支持
      router.events.on('routeChangeStart', () => {
        console.log("routeChangeStart");
        NProgress.start()
      });

      router.events.on('routeChangeError', () => {
        console.log("routeChangeError");
        NProgress.done()
      });

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
      <SpeedInsights />
      <Component {...pageProps} />
    </>
  );
}
