import Landing from "@/components/home/landing";
// import { HomeSlide } from "@/components/home/pages";
import Nav from "@/components/nav";
import styles from "@/styles/landing.module.scss"


const Home = () => {
  return (
    <div className={ `min-h-screen` }>
      <div className={`md:pt-[--nav-height]`}>
        <div className={`z-[-1] ${styles.background}`}>
        </div>

        <Nav />
        <Landing />
      </div>
    </div>
  )
}

export default Home
