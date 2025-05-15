import RouterButton from "../components/RouterButton.jsx";
import Link from "next/link";
// import "../../styles/blogs.css"
export default function Blog() {
  return (
    <main>
      <h1 className="text-3xl text-center font-bold mb-8">Blogs</h1>
      <RouterButton />

      <ul className="list-none">
        <li>
          <a href="/blog/node" className="text-inherit ">
            Node服务
          </a>
        </li>

        <li>
          <a href={"/blog/browser"} className="text-inherit ">
            浏览器&V8
          </a>
        </li>
        <li>
          <a href={"/blog/fe_talk"} className="text-inherit ">
            前端杂谈
          </a>
        </li>
        <li>
          <a href={"/blog/react"} className="text-inherit ">
            React
          </a>
        </li>
      </ul>
    </main>
  );
}
