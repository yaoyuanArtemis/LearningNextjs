import Link from "next/link";
import styles from "../../styles/NavFoot.module.css";
export default function Header() {
  return (
    <nav className={styles.navself}>
      <ul className={styles.menu}>
        <li>
          <Link href="/">Home</Link>
        </li>

        <li>
          <Link href={"/about"}>About</Link>
        </li>

        <li>
          <Link href={"/blog"}>Blogs</Link>
        </li>

        <li>
          <Link href={"/pets"}>Pokemons List</Link>
        </li>
      </ul>
      <hr />
    </nav>
  );
}
