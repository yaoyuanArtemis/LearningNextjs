import RouterButton from "../components/RouterButton.tsx";
export default function Blog() {
  return (
    <main>
      <h1 className="text-3xl text-center font-bold mb-8">Blogs</h1>
      <RouterButton />

      <ul className="list-dash">
        <li>
          <a href="/blog/node">
            Node服务
          </a>
        </li>

        <li>
          <a href={"/blog/browser"} >
            浏览器&V8
          </a>
        </li>
        <li>
          <a href={"/blog/fe_talk"}>
            前端杂谈
          </a>
        </li>
        <li>
          <a href={"/blog/react"} >
            React
          </a>
        </li>
      </ul>
    </main>
  );
}
