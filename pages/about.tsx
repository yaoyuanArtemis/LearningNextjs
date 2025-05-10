import RouterButton from "./components/RouterButton";
import Head from "next/head";
export default function About() {
  return (
    <main>
      <Head>
        <title>About</title>
      </Head>
      <h1 style={{ display: "flex", justifyContent: "center" }}>
        Experience and Skills
      </h1>
      <RouterButton />

      <p>
        I am a Web Engineer at the Transportaion Division,
        <u>
          <a href="https://www.alibabagroup.com/">Alibaba</a>
        </u>
        (Tmall&rsquo;s parent company,Stock Code:BABA) and I go by the nickname
        &ldquo;YaoYuan(遥渊)&rdquo; here for convinence in the firms.
      </p>
      <p>
        Previously,I worked as a Full Stack Engineer at the
        DevOps&amp;Automation 1 Department,Instructure and Development
        Center,China Merchants Bank
        <img
          src="https://raw.githubusercontent.com/yaoyuanArtemis/imgages/main/招商银行logo.png"
          style={{ width: "1.5em" }}
        />
        (the biggest Joint-Stock Commercial Bank in China),in Shenzhen China🇨🇳
        from 2021 to 2023.
      </p>
      <p>
        My ongoing devepment project involve web deveopment,with a specific
        focus on pure front-end and full stack using NodeJS.
      </p>
      <p>
        I am commited to some technical stack at present,such as :
        React、NodeJS、Babel、Rust、Java、Python,Besides,I prefer to learn some
        relevant knowledge about AI,which has been making waves not long ago.I
        resolutely suppose that the gegerative AI is the tomorrow that cloud
        skyrocket the productivity of mankind.
      </p>
      <p>
        I am drawn to sports in particular,including
        socccer⚽️、cycling🚵、skating🏂;furthermore,I favour diverse
        geography,macro-economics,history of the world,stocks etc.
      </p>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <img
          src="https://raw.githubusercontent.com/yaoyuanArtemis/imgages/main/gettyimages-1242553868-2048x2048.jpg"
          alt="ArtemisRocket"
          style={{ width: "400px" }}
        />
      </div>
    </main>
  );
}
