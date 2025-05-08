import Link from "next/link";
import MyDate from "./components/myDate";
export default function Home() {
  return (
    <>
      <h1>Home Page</h1>
      <MyDate />
      <ul>
        <li>
          <Link href={"/about"}>About</Link>
        </li>
        <li>
          <Link href={"/pets"}>Pets</Link>
        </li>
      </ul>
    </>
  );
}
