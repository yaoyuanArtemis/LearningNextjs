import Link from "next/link";
export default function Header() {
  return (
    <nav>
      <ul className="menu">
        <li>
          <Link href="/">Home</Link>
        </li>

        <li>
          <Link href={"/about"}>About</Link>
        </li>

        <li>
          <Link href={"/blog"}>Blog</Link>
        </li>

        <li>
          <Link href={"/pets"}>Pokemons List</Link>
        </li>
      </ul>
      <hr />
    </nav>
  );
}
