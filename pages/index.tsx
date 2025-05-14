import Alibaba from "../public/alibaba-com-2.svg";
import Head from "next/head";
import Image from 'next/image';
import Header from "./components/Header.jsx";
export default function Home() {

  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <Header />
      <div style={{ height: "100%" }}>
        <main>

              <img
                src={"/images/avata.png"}
                alt="photo.png"
                style={{borderRadius: "30%",float:"right",width:"200px",maxWidth:"50%",height:"auto",}}
              />

          <h1 id="yaoyuan">YaoYuan</h1>
          <h2 id="injustice-anywhere-is-a-threat-to-justice-everywhere">
            Injustice anywhere is a threat to justice everywhere
          </h2>
          <p style={{marginBottom:"-18px"}}>
            I work at <strong>Alibaba</strong> <strong>Group</strong>
            <Alibaba width="3em" height="3em" style={{"verticalAlign": "middle"}}/>
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
            degree advised by{" "}
            <a
              href="https://cs.ahu.edu.cn/2021/1221/c20807a277641/page.htm"
              style={{ color: "black" }}
            >
              Zhang Lei (张磊)
            </a>{" "}
            and{" "}
            <a
              href="https://cs.ahu.edu.cn/2023/0815/c20806a313390/page.htm"
              style={{ color: "black" }}
            >
              Zhang Xinyi(张兴义)
            </a>{" "}
            .
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
