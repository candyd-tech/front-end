import Landing from "@/components/home/landing";
import { HomeSlide } from "@/components/home/pages";
import Nav from "@/components/nav";
import styles from "@/styles/landing.module.scss"

// const SITE_DATA
const SCROLLVARIABLE = 5

const Home = () => {
  return (
    <div className={ `min-h-screen` }>
      <div onWheel={
        (e) => {
          e.deltaY > SCROLLVARIABLE &&
            document.getElementById("first-page")?.scrollIntoView({
              behavior: 'smooth'
            });
        }
      } id="landing-page">
        <div className={`${styles.background}`}>
          <Landing isClipped={true}/>
        </div>

        <Nav />
        <Landing />
      </div>

      <div onWheel={
        (e) => {
          console.log("hello", e.deltaY)
          e.deltaY < -1 * SCROLLVARIABLE &&
            document.getElementById("landing-page")?.scrollIntoView({
              behavior: 'smooth'
            })
          e.deltaY > SCROLLVARIABLE &&
            document.getElementById("second-page")?.scrollIntoView({
              behavior: 'smooth'
            });
        }
      } className="min-h-screen" id="first-page">
        <HomeSlide
          imgUrl={"/s.webp"}
          heading={"Scan and Compete"}
          paragraph={"Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition"}
        />
      </div>

      <div onWheel={(e) => {
        console.log("hello", e.deltaY)
        e.deltaY < -1 * SCROLLVARIABLE &&
          document.getElementById("first-page")?.scrollIntoView({
            behavior: 'smooth'
          })
        e.deltaY > SCROLLVARIABLE &&
          document.getElementById("third-page")?.scrollIntoView({
            behavior: 'smooth'
          });
      }} className="min-h-screen" id="second-page">
        <HomeSlide
          imgUrl={"/s.webp"}
          heading={"Personalize and Revitalize"}
          paragraph={"Organically grow the holistic world view of disruptive innovation via workplace diversity and empowerment."}
        />
      </div>

      <div onWheel={
        (e) => {console.log("hello", e.deltaY)
        e.deltaY < -1 * SCROLLVARIABLE &&
          document.getElementById("second-page")?.scrollIntoView({
            behavior: 'smooth'
          })
        e.deltaY > SCROLLVARIABLE &&
          document.getElementById("fourth-page")?.scrollIntoView({
            behavior: 'smooth'
          });
      }} className="min-h-screen" id="third-page">
        <HomeSlide
          imgUrl={"/s.webp"}
          heading={"Post and Retweet"}
          paragraph={"Bring to the table win-win survival strategies to ensure proactive domination. At the end of the day,"}
        />
      </div>

      <div onWheel={
        (e) => {console.log("hello", e.deltaY)
        e.deltaY < -1 * SCROLLVARIABLE &&
          document.getElementById("third-page")?.scrollIntoView({
            behavior: 'smooth'
          })
      }} className="min-h-screen" id="fourth-page">
        <HomeSlide
          imgUrl={"/s.webp"}
          heading={"Dedicate and Share"}
          paragraph={"Capitalize on low hanging fruit to identify a ballpark value added activity to beta test. "}
        />
      </div>
    </div>
  )
}

export default Home
