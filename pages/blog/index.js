import RouterButton from "../components/RouterButton";
import Link from "next/link";
export default function Blog() {
  return (
    <main>
      <h1 style={{ display: "flex", justifyContent: "center" }}>Blogs</h1>
      <RouterButton />

      <ul>
        <li>
          <Link href="/blog/node">Node服务</Link>
        </li>

        <li>
          <Link href={"/blog/browser"}>浏览器&V8</Link>
        </li>
        <li>
          <Link href={"/blog/fe_talk"}>前端杂谈</Link>
        </li>
        <li>
          <Link href={"/blog/react"}>React</Link>
        </li>
      </ul>
    </main>
  );
}
