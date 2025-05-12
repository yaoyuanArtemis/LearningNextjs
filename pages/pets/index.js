import { useRouter } from "next/router";
import RouterButton from "../components/RouterButton";
import styles from "../../styles/Pets.module.css";
import Link from "next/link";
export default function Pets({ data }) {
  const router = useRouter();
  const asPath = router.asPath + "/";
  const realData = data?.results || [];
  const counts = data.count;
  console.log("process.env.NODE_ENV", process.env.NODE_ENV);
  const isLocal = process.env.NODE_ENV === "development";
  const domain = isLocal
    ? "http://localhost:3000"
    : process.env.NEXT_PUBLIC_DOMAIN;
  const href = isLocal ? `${domain}${asPath}` : asPath;
  return (
    <div>
      <h1 style={{ display: "flex", justifyContent: "center" }}>Pokemons</h1>

      <RouterButton />
      <h4 style={{ display: "flex", justifyContent: "center" }}>
        宝可梦总数为:{counts}
      </h4>
      <div>
        <ul>
          {realData.map((item, index) => {
            return (
              <li style={{ marginTop: "5px" }} key={"id_" + index}>
                <Link href={href + item.name}>{item.name}</Link>
              </li>
            );
          })}
          <li>...</li>
          <li>还有更多宝可梦可通过宝可梦ID或名字访问</li>
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
