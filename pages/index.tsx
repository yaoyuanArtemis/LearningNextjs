import Link from "next/link";
import MyDate from "./components/myDate";
import Head from "next/head";
export default function Home() {
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <h1>Home Page</h1>
      <MyDate />
      <ul>
        <li>
          <Link href={"/about"}>About</Link>
        </li>
        <li>
          <Link href={"/pets"}>Pokemons List</Link>
        </li>
      </ul>
    </>
  );
}
