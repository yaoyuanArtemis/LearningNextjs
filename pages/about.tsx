import MyDate from "./components/myDate";
import RouterButton from "./components/RouterButton";
import Head from "next/head";
export default function About() {
  return (
    <main>
      <Head>
        <title>About</title>
      </Head>
      <h1 style={{ display: "flex", justifyContent: "center" }}>About</h1>
      <MyDate />
      <RouterButton />
      <p style={{ marginLeft: 40, marginRight: 40 }}>
        PokeAPI 是一个开源、免费的 RESTful
        API，专为宝可梦爱好者和开发者打造，致力于提供全面且易于访问的宝可梦相关数据。​
        通过
        PokeAPI，你能够轻松获取丰富多样的宝可梦信息。从基础的宝可梦属性，如名称、分类、身高、体重，到复杂的技能、特性、进化链，甚至是宝可梦栖息地、动画细节等内容，都能一站式获取。例如，使用https://pokeapi.co/api/v2/pokemon/接口，可获取宝可梦的列表数据，进一步通过每个宝可梦对应的唯一链接，获取其详细信息；而https://pokeapi.co/api/v2/pokemon-species/接口，则专注于宝可梦物种相关的设定数据。​
        PokeAPI 数据以 JSON
        格式返回，简洁清晰，方便与各类前端、后端技术栈集成，无论是搭建宝可梦图鉴网站，还是开发宝可梦主题的游戏、小程序，都能快速调用数据，大大节省开发时间。并且，该
        API
        社区活跃，持续更新维护，确保数据与宝可梦系列作品的最新内容同步，为项目的长期发展提供有力支持
        。​
      </p>
    </main>
  );
}
