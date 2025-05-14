import RouterButton from "../components/RouterButton.jsx";
import Link from "next/link";
export default function Blog() {
  return (
    <main>
      <h1 className="text-3xl text-center font-bold mb-8">Blogs</h1>
      <RouterButton />

      <ul className="list-none">
        <li>
          <a href="/blog/node" className="text-inherit no-underline hover:underline">Node服务</a>
        </li>

        <li>
          <a href={"/blog/browser"} className="text-inherit no-underline hover:underline">浏览器&V8</a>
        </li>
        <li>
          <a href={"/blog/fe_talk"} className="text-inherit no-underline hover:underline">前端杂谈</a>
        </li>
        <li>
          <a href={"/blog/react"}className="text-inherit no-underline hover:underline">React</a>
        </li>
      </ul>
    </main>
  );
}
