import { ReactNode } from "react";
import Landing from "./landing";
import { HomeSlide } from "./pages";
import styles from "@/styles/landing.module.scss"
import Polaroid from "./polaroids";
import Nav from "../nav";

interface slideInterface {
  key: string,
  component: ReactNode
}

const homePages: slideInterface[] = [
  {
    key: "landing",
    component: <div className={`md:pt-[--nav-height] h-screen`}>
        <div className={`z-[-1] ${styles.background}`}> </div>
        <Nav />
        <Landing />
      </div>
  },
  {
    key: "slide_scan",
    component: <HomeSlide
        heading={"Scan, Snap and Save"}
        paragraph={"Immerse yourself in campus life all over again by completing tasks scattered across key locations. QR codes will guide you as you capture memories and upload them for future reminiscing."}
      >
        <Polaroid
          classes={"relative rotate-[-10deg]"}
          imageUrl={ "/one/s.jpg" }
          alt={"picture of a building"}
          text={"Mess Laaawnnnss!!"}
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
          Transform your digital memories into tangible keepsakes that are full of surprises, personalized dedications, and thoughtful uploads. 
          Bring your digital profile to life in creative ways  and preserve your memories in a physical memento, one to treasure forever.  
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
            relative rotate-[-30deg]
          `}
          imageUrl="/two/food.png"
          alt={"TT Table"}
        >
          <p>These were always such a hit or miss!</p>
          <p>@ayush @mehul</p>
        </Polaroid>
      </HomeSlide>
    },
]

export default homePages
