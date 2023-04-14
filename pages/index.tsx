import Nav from "@/components/nav";
import styles from "@/styles/landing.module.scss"
import { Poppins } from "next/font/google"
import Image from "next/image";

const poppins800 = Poppins({
  weight: '700',
  subsets: [ "latin" ]
})

const poppins400 = Poppins({
  weight: '600',
  subsets: [ "latin" ]
})

interface LandingPropsType {
  isClipped?: boolean
}

const Landing = ({isClipped}: LandingPropsType) => {
  return (
    <section className={ `flex flex-col md:flex-row h-full ${styles.section} z-10` }>
      <div className={ `${isClipped ? 'text-white' : 'text-black'} ${styles.sections}
        p-12 pt-28 gap-8 flex flex-col justify-start items-start` }
      >
        <h1 className={`font-bold leading-[1.2] md:leading-[1.2] text-3xl md:text-6xl ${poppins800.className}`}>
          Embark on a <br /> nostalgic quest with your friends.
        </h1>

        <p className={`font-semibold text-[1rem] md:text-3xl`}>
          Candyd curates personalised experiences to create memories and capture the moment.
        </p>

        <div className={`${ 'text-black' }`}>
          <button
            className={`${poppins400.className} ${styles.landing_button} ${isClipped ? 'bg-[--background-hex]': 'bg-[--foreground-hex]'}`}
            onClick={() => console.log("sup")}
          >Fill the Forms</button>
        </div>
      </div>

      <div className={ `${styles.image_section} ${styles.sections}
        p-6 md:p-0 pt-12 md:pt-12 md:pl-16` }
      >
        <Image
          src={ isClipped ? "remember.svg" : "remember_color.svg" }
          alt="Remember Image"
          width={450}
          height={450}
        />
      </div>
    </section>

  )
}

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
