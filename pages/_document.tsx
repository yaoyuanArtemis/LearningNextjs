import { Html, Head, Main, NextScript } from "next/document";
import Footer from "./components/Footer.jsx";
import { useRouter } from "next/router";
import { useEffect } from "react";
export default function Document() {
  
  return (
    <Html lang="en">
      <Head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/prism/1.29.0/themes/prism.min.css"
        />
        <script src="https://cdnjs.cloudflare.com/ajax/libs/prism/1.29.0/prism.min.js"></script>
        <script
          async
          src="//busuanzi.ibruce.info/busuanzi/2.3/busuanzi.pure.mini.js"
        ></script>
      </Head>
      <body>
        <Main />
        <Footer />
        <NextScript />
      </body>
    </Html>
  );
}
