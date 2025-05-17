import { Html, Head, Main, NextScript } from "next/document";
import Footer from "./components/Footer.jsx";
import { useRouter } from "next/router";
import { useEffect } from "react";
export default function Document() {
  
  return (
    <Html lang="en">
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Inter&display=optional"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/prism/1.29.0/themes/prism.min.css"
        />
        <script defer src="https://cdnjs.cloudflare.com/ajax/libs/prism/1.29.0/prism.min.js"></script>
        <script
          async
          src="//busuanzi.ibruce.info/busuanzi/2.3/busuanzi.pure.mini.js"
        ></script>
        <link
          rel="stylesheet"
          href="//cdn.jsdelivr.net/npm/katex/dist/katex.min.css"
        />
        <script
          src="//cdn.jsdelivr.net/combine/npm/katex/dist/katex.min.js,npm/katex/dist/contrib/auto-render.min.js,npm/@xiee/utils/js/render-katex.js"
          defer
        ></script>
        <script
          src="//cdn.jsdelivr.net/npm/@xiee/utils/js/center-img.min.js"
          defer
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
