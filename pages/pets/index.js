import { useRouter } from "next/router";
import MyDate from "../components/myDate";
import RouterButton from "../components/RouterButton";
import styles from "../../styles/Pets.module.css";
import Link from "next/link";
export default function Pets({ data }) {
  const currentDomain = process.env.NEXT_PUBLIC_DOMAIN;
  const router = useRouter();
  const asPath = router.asPath + "/";
  const realData = data?.results || [];
  const counts = data.count;
  console.log("currentDomain", currentDomain);
  console.log("asPath", asPath);
  console.log("process.env.NODE_ENV", process.env.NODE_ENV);
  const isLocal = process.env.NODE_ENV === "development";
  const domain = isLocal
    ? "http://localhost:3000"
    : process.env.NEXT_PUBLIC_DOMAIN;
  const href = isLocal ? `${domain}${asPath}` : asPath;
  console.log("href", href);
  return (
    <div>
      <h1>Pokemons</h1>
      <MyDate />
      <RouterButton />
      <h5>Pokemon Total Counts:{counts}</h5>
      <div>
        <ul>
          {realData.map((item, index) => {
            return (
              <li style={{ marginTop: "5px" }} key={"id_" + index}>
                <Link href={href + item.name}>{item.name}</Link>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export async function getStaticProps() {
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon`);
  const rep = await res.json();
  return {
    props: { data: rep },
  };
}
