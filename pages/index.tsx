import Landing from "@/components/home/landing";
import Nav from "@/components/nav";
import styles from "@/styles/landing.module.scss"

export default function Home() {
  return (
    <div className={ `min-h-screen` }>
      <div className={`${styles.background}`}>
        <Landing isClipped={true}/>
      </div>

      <Nav />
      <Landing />
    </div>
  )
}
