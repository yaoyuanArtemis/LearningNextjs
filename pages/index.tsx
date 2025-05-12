import MyDate from "./components/myDate";
import Head from "next/head";
import Header from "./components/Header";
export default function Home() {
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <Header />
      <div style={{ height: "103%" }}>
        <main>
          <p>
            <a href="https://github.com/yaoyuanArtemis">
              <img
                src="https://raw.githubusercontent.com/yaoyuanArtemis/imgages/main/avatar.png"
                style={{
                  maxWidth: "20%",
                  minWidth: "80px",
                  float: "right",
                  borderRadius: "30%",
                  marginRight: "50px",
                }}
                alt="Github  info"
              />
            </a>
          </p>
          <h1 id="yaoyuan">YaoYuan</h1>
          <h2 id="injustice-anywhere-is-a-threat-to-justice-everywhere">
            Injustice anywhere is a threat to justice everywhere
          </h2>
          <p>
            I work at <strong>Alibaba</strong> <strong>Group</strong>
            <img
              src="https://raw.githubusercontent.com/yaoyuanArtemis/imgages/main/alibaba_logo.png"
              style={{ width: "3em" }}
            />{" "}
            as a front-end developer,currently in Hangzhou,China.
          </p>
          <p>
            I am now working at TD, Transportation Division,backend system for
            ticket sales. If you are seeking any form of technology cooperation,
            please feel free to email me at{" "}
            <a href="mailto:yaoyuan.lf@alibaba-inc.com">
              yaoyuan.lf@alibaba-inc.com
            </a>{" "}
            or <a href="mailto:yaoyuan.lf@gmail.com">yaoyuan.lf@gmail.com</a>.
          </p>
          <p>
            I graduated from Computer Talent Class,Department of Computer
            Science, Anhui University (安徽大学计算机英才班) with a bachelor’s
            degree advised by Zhang Lei (张磊).
          </p>

          <h3 id="-educations">📖 Educations</h3>
          <ul>
            <li>
              2017.9 - 2021.6,Undergraduate,Computer Talent Class,Anhui
              University,Hefei,China🇨🇳.
            </li>
            <li>
              2014.9 - 2017.6,Qingyang No.1 Middle School,Qingyang,China🇨🇳.
            </li>
          </ul>
          <h3 id="-workexperience">💻 WorkExperience</h3>
          <ul>
            <li>
              2021.7 - 2023.9,Infrastructure Research and Develpment Center at
              China Merchants Bank(CMB).
            </li>
            <li>2023.9 - 2024.4,AliTrip Transportation Division,Alibaba.</li>
          </ul>
          <h3 id="-publications">📝 Publications</h3>
          <ul>
            <li>
              A Reduced Mixed Representation Based Multi-Objective Evolutionary
              Algorithm for Large-Scale Overlapping Community Detection 2021
              IEEE Congress on Evolutionary Computation (CEC) DOI:
              10.1109/CEC45853.2021.9504894
            </li>
          </ul>
        </main>
      </div>
    </>
  );
}
