import styles from "@/styles/nav.module.scss";

export default function Nav() {
  return (
    <nav className={ `${styles.nav} flex items-center justify-between px-8` }>
      <div>CANDYD</div>
    </nav>
  )
}
