import Head from "next/head";
import MyDate from "./MyDate";
import styles from "../../styles/NavFoot.module.css";
export default function Footer() {
  return (
      <div className={styles.footer}>
        <hr />
        © <a href="https://github.com/yaoyuanArtemis">Yao Yuan</a>{" "}
        {/* <MyDate />  */}
        | <a href="https://github.com/yaoyuanArtemis">Github</a> | <a href="/"> HomePage </a>
        <div className="busuanzi-footer">
          <span id="busuanzi_container_site_pv">
            本站总访问量<span id="busuanzi_value_site_pv"></span>次
          </span>
          <span id="busuanzi_container_site_uv">
            本站访客数<span id="busuanzi_value_site_uv"></span>人次
          </span>
        </div>
      </div>


  );
}
