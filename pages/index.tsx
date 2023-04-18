import Landing from "@/components/home/landing";
import Polaroid from "@/components/home/polaroids";
import { HomeSlide } from "@/components/home/pages";
import Nav from "@/components/nav";
import styles from "@/styles/landing.module.scss"
import ReactFullpage from '@fullpage/react-fullpage';
import homePages from "@/components/home/homeSlides";

const _Home = () => {
  return (
    <div className={ `min-h-screen` }>
      <Nav />
      <div className={`md:pt-[--nav-height] h-screen`}>
        <div className={`z-[-1] ${styles.background}`}> </div>
        <Landing />
      </div>

      <HomeSlide
        heading={"Scan, Snap and Save"}
        paragraph={"Immerse yourself in campus life all over again by completing tasks scattered across key locations. QR codes will guide you as you capture memories and upload them for future reminiscing."}
      >
        <Polaroid
          classes={"relative rotate-[-10deg]"}
          imageUrl="/one/s.jpg"
          alt={"picture of a building"}
          text={"Mess Lawns!!"}
        />
        <Polaroid
          classes={"relative rotate-[12deg] translate-x-[-2rem]"}
          imageUrl="/one/nights.jpg"
          alt={"nights"}
          text={"Nights"}
        />
      </HomeSlide>


      <HomeSlide
        heading={"Surprise your friends "}
        paragraph={`
          Make your friends feel special by adding dedicated moments to their profile as a surprise gesture.
          Store and create memories personalised to your liking. 
        `}
      >
        <Polaroid
          classes={`
            relative rotate-[12deg]
          `}
          imageUrl="/tt.png"
          alt={"TT Table"}
        >
          <p>Post breakfast TT!</p>
          <p>@vivan @mehul</p>
        </Polaroid>

        <Polaroid
          classes={`
            relative rotate-[-20deg] translate-x-[-40px]
          `}
          imageUrl="/two/food.png"
          alt={"TT Table"}
        >
          <p>These were always such a hit or miss!</p>
          <p>@ayush @mehul</p>
        </Polaroid>
      </HomeSlide>


      <HomeSlide
        heading={"Memory Mementos"}
        paragraph={`
          Transform your digital memories into tangible keepsakes that are full of surprises, personalized dedications, and thoughtful uploads. 
          Bring your digital profile to life in creative ways  and preserve your memories in a physical memento, one to treasure forever.  
        `}
      >
        <Polaroid
          classes={`
            relative rotate-[12deg]
          `}
          imageUrl="/tt.png"
          alt={"TT Table"}
        >
          <p>Post breakfast TT!</p>
          <p>@vivan @mehul</p>
        </Polaroid>

        <Polaroid
          classes={`
            relative rotate-[-30deg]
          `}
          imageUrl="/two/food.png"
          alt={"TT Table"}
        >
          <p>These were always such a hit or miss!</p>
          <p>@ayush @mehul</p>
        </Polaroid>
      </HomeSlide>
    </div>
  )
}

// <ReactFullpage></ReactFullpage>
const Home = () => {
  return (
    <div className={ `min-h-screen` }>
      <ReactFullpage
        licenseKey={"gplv3-license"}
        navigation
        credits= {{enabled: true, label: 'Made with fullPage.js', position: 'right' }}
        dragAndMove={"fingersonly"}
        parallax={true}
        render={() =>
        (
          <ReactFullpage.Wrapper>
            {homePages.map(({ key, component }) => (
              <div key={key} className="section">
                {component}
              </div>
            ))}
          </ReactFullpage.Wrapper>
        )
        }
      />
    </div>
  )
}

export default Home
