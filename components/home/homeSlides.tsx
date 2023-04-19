import { ReactNode } from "react";
import Landing from "./landing";
import { HomeSlide } from "./pages";
import styles from "@/styles/landing.module.scss"
import Polaroid from "./polaroids";
import Nav from "../nav";
import Image from "next/image";
import pstyles from "@/styles/polaroid.module.scss"

interface slideInterface {
  key: string,
  component: ReactNode
}

const homePages: slideInterface[] = [
  {
    key: "landing",
    component: <div className={`pt-[4rem] h-screen`}>
        <div className={`z-[-1] ${styles.background}`}> </div>
        <Nav />
        <Landing />
      </div>
  },
  {
    key: "slide_scan",
    component: <HomeSlide
        heading={"Scan, Snap and Save"}
        paragraph={"Immerse yourself in campus life all over again by completing prompts scattered across key locations via QR codes."}
      >
        <Polaroid
          classes={"relative rotate-[-10deg]"}
          imageUrl={ "/one/s.jpg" }
          alt={"picture of a building"}
          text={"Mess Lawns!!"}
        />
        <Polaroid
          classes={"relative rotate-[12deg] translate-x-[-2rem]"}
          imageUrl={"/one/nights.jpg"}
          alt={"nights"}
          text={"Nights"}
        />
      </HomeSlide>
  },
  {
    key: "slide_surprise",
    component: <HomeSlide
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
          imageUrl="/two/tt.png"
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

    },
  {
    key: "slide_memory",
    component: <HomeSlide
        heading={"Memory Mementos"}
        paragraph={`
          Transform your digital memories into tangible keepsakes that are full of surprises, personalized dedications, and thoughtful uploads. Preserve your memories in a physical memento, one to treasure forever. 
        `}
      >
        <div className={ `${pstyles.polaroid} relative drop-shadow-lg rotate-12 w-[10rem] h-[10rem] md:w-[12rem] md:h-[12rem] lg:w-[18rem] lg:h-[18rem]` }>
          <Image
            src={"/three/chart.jpg"}
            alt={"Momento"}
            fill style={{
              objectFit: "cover"
            }}
          />
        </div>

        <div className={ `${pstyles.polaroid} relative drop-shadow-lg rotate-[-5deg] translate-x-[-2rem] w-[10rem] h-[10rem] md:w-[12rem] md:h-[12rem] lg:w-[18rem] lg:h-[18rem]` }>
          <Image
            src={"/three/mori.jpg"}
            alt={"Momento"}
            fill style={{
              objectFit: "cover"
            }}
          />
        </div>
      </HomeSlide>
    },
]

export default homePages
