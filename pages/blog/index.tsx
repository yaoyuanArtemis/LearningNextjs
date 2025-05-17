import RouterButton from "../components/RouterButton.tsx";
import Link from "next/link";
// import "../../styles/blogs.css"
export default function Blog() {
  return (
    <main>
      <h1 className="text-3xl text-center font-bold mb-8">Blogs</h1>
      <RouterButton />

      <ul className="list-dash pl-6 mb-4">
        <li>
          <a href="/blog/node" className="text-blue-500 hover:text-blue-400 transition-colors">
            Node服务
          </a>
        </li>

        <li>
          <a href={"/blog/browser"} className="text-blue-500 hover:text-blue-400 transition-colors ">
            浏览器&V8
          </a>
        </li>
        <li>
          <a href={"/blog/fe_talk"} className="text-blue-500 hover:text-blue-400 transition-colors ">
            前端杂谈
          </a>
        </li>
        <li>
          <a href={"/blog/react"} className="text-blue-500 hover:text-blue-400 transition-colors">
            React
          </a>
        </li>
      </ul>
    </main>
  );
}
