import Head from "next/head";
import MyDate from "./myDate";
import styles from "../../styles/Footer.module.css";
export default function Footer() {
  return (
    <>
      <Head>
        <script
          async
          src="//busuanzi.ibruce.info/busuanzi/2.3/busuanzi.pure.mini.js"
        ></script>
      </Head>
      {/* <div className={styles.placeholder}></div> */}
      <footer className={styles.footer}>
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
        <hr />© <a href="https://github.com/yaoyuanArtemis">Yao Yuan</a>{" "}
        <MyDate /> | <a href="https://github.com/yaoyuanArtemis">Github</a>
        {/* <a href="https://twitter.com/liufeng0194">Discord</a> */}
        <div className="busuanzi-footer">
          <span id="busuanzi_container_site_pv">
            本站总访问量<span id="busuanzi_value_site_pv"></span>次
          </span>
          <span id="busuanzi_container_site_uv">
            本站访客数<span id="busuanzi_value_site_uv"></span>人次
          </span>
        </div>
      </footer>
    </>
  );
}
