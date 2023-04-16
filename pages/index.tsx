import Landing from "@/components/home/landing";
import { HomeSlide } from "@/components/home/pages";
import Nav from "@/components/nav";
import styles from "@/styles/landing.module.scss"
import Image from "next/image";

const Home = () => {
  return (
    <div className={ `min-h-screen` }>
      <div className={`${styles.background}`}>
        <Landing isClipped={true}/>
      </div>

      <Nav />
      <Landing />

      <div onWheel={(e) => {console.log("hello", e.deltaY)}} className="min-h-screen">
        <HomeSlide
          imgUrl={"/s.webp"}
          heading={"Scan and Compete"}
          paragraph={"Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition"}
        >
          <div className={`p-16`}>
            <Image
              src={"/s.webp"}
              alt={"Hangover"}
              width={450}
              height={450}
            />
          </div>
        </HomeSlide>
      </div>

      <div onWheel={(e) => {console.log("hello", e.deltaY)}} className="min-h-screen">
        <HomeSlide
          imgUrl={"/s.webp"}
          heading={"Personalize and Revitalize"}
          paragraph={"Organically grow the holistic world view of disruptive innovation via workplace diversity and empowerment."}
        >
          <Image
            src={"/s.webp"}
            alt={"Hangover"}
            width={450}
            height={450}
          />
        </HomeSlide>
      </div>

      <div onWheel={(e) => {console.log("hello", e.deltaY)}} className="min-h-screen">
        <HomeSlide
          imgUrl={"/s.webp"}
          heading={"Post and Retweet"}
          paragraph={"Bring to the table win-win survival strategies to ensure proactive domination. At the end of the day,"}
        >
          <Image
            src={"/s.webp"}
            alt={"Hangover"}
            width={450}
            height={450}
          />
        </HomeSlide>
      </div>

      <div onWheel={(e) => {console.log("hello", e.deltaY)}} className="min-h-screen">
        <HomeSlide
          imgUrl={"/s.webp"}
          heading={"Dedicate and Share"}
          paragraph={"Capitalize on low hanging fruit to identify a ballpark value added activity to beta test. "}
        >
          <Image
            src={"/s.webp"}
            alt={"Hangover"}
            width={450}
            height={450}
          />
        </HomeSlide>
      </div>
    </div>
  )
}

export default Home
