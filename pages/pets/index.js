import { useRouter } from "next/router";
import RouterButton from "../components/RouterButton";
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
    <main>
      <div>
        <h1 className="text-3xl text-center font-bold mb-8">Pokemons</h1>

        <RouterButton />
        <h4  className = "text-center" >
          宝可梦总数为:{counts}
        </h4>
        <div>
          <ul className = "list-none" >
            {realData.map((item, index) => {
              return (
                <li 
                key = {
                  "id_" + index
                } >
                  <Link href = {
                    href + item.name
                  }
                  className = "no-underline hover:underline" > {
                    item.name
                  } </Link>
                </li>
              );
            })}
            <li>...</li>
            <li>还有更多宝可梦可通过宝可梦ID或名字访问</li>
          </ul>
        </div>
      </div>
    </main>
  );
}

export async function getStaticProps() {
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon`);
  const rep = await res.json();
  return {
    props: { data: rep },
    revalidate: 60,
  };
}
