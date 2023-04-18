import styles from "@/styles/nav.module.scss";
import Link from "next/link";

export default function Nav() {
  return (
    <nav className={ `${styles.nav} flex items-center justify-between px-8` }>
      <Link href="/">
        <div>CANDYD</div>
      </Link>
    </nav>
  )
}
