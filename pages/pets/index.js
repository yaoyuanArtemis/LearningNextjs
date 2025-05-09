import { useRouter } from "next/router";
import MyDate from "../components/myDate";
import RouterButton from "../components/RouterButton";
import Link from "next/link";
export default function Pets({ data }) {
  const currentDomain = process.env.NEXT_PUBLIC_DOMAIN;
  const router = useRouter();
  const asPath = router.asPath;
  console.log("asPath", asPath);
  console.log("currentDomain", currentDomain);
  const realData = data?.results || [];
  const counts = data.count;
  return (
    <>
      <h1>Pets</h1>
      <MyDate />
      <RouterButton />
      <h5>Pockmon Total Count:{counts}</h5>
      <div>
        <ul>
          {realData.map((item) => {
            return (
              <li>
                <Link href={currentDomain + asPath + "/" + item.name}>
                  {item.name}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
}

export async function getStaticProps() {
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon`).then((res) =>
    res.json()
  );
  return {
    props: { data: res },
  };
}
