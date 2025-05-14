import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { MDXProvider } from "@mdx-js/react";
import { useRouter } from "next/router";
import { useEffect } from "react";
import Head from "next/head";
import NProgress from 'nprogress';
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
      const routeChangeStart = () => {
        NProgress.start();
      };
      const routeChangeComplete = () => {
        setTimeout(() => {
          prism.highlightAll();
        }, 0);
        NProgress.done()
      };

      const routeChangeError = () => {
        NProgress.done();
      };

      router.events.on('routeChangeStart', routeChangeStart);
      router.events.on('routeChangeError',routeChangeError);
      router.events.on("routeChangeComplete", routeChangeComplete);
      // 组件卸载时取消监听
      return () => {
        router.events.off("routeChangeComplete", routeChangeComplete);
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
