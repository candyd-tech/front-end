import Button from "@/components/button";
import styles from "@/styles/landing.module.scss"
import { Poppins } from "next/font/google"
import Image from "next/image";
import Link from "next/link";
import { ArrowBottom } from "../icons";

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
    <section className={ `relative flex flex-col md:flex-row h-full ${styles.section} z-10` }>
      <div className={ `text-black ${styles.sections}
        p-12 md:p-6 lg:p-12 md:pl-6 lg:pl-20 gap-8 h-full
        flex flex-col justify-center md:justify-center items-start` }
      >
        <h1 className={`font-bold leading-[1.2] md:leading-[1.2] text-3xl md:text-4xl lg:text-6xl ${poppins800.className}`}>
          Capture your <br /> Candyd moments!
        </h1>

        <p className={`font-medium text-[1rem] md:text-[1rem] lg:text-xl`}>
          Embark on a 7-day campus quest with your friends, completing tasks and following clues to create your own yearbook. <br />
          Join the waitlist for an offbeat and vibrant way of capturing your campus experience! 
        </p>

        <div className={`${ 'text-black' }`}>
          <Link href="/sign_up">
            <Button
              className={`
                ${styles.landing_button}
                text-[--background-hex] border-[2px] border-[--foreground-hex]
                transition duration-150
                hover:text-[--foreground-hex] hover:border-[--foreground-hex] hover:bg-[--background-hex]
                ${isClipped ? 'bg-[--background-hex]': 'bg-[--foreground-hex]'}
              `}
              onClickButton={() => {}}
              font={poppins400.className}
              text={"Join"}
            />
          </Link>
        </div>
      </div>

      <div className={ `${styles.image_section} ${styles.sections}
        p-6 md:p-0 pt-12 md:pt-20 lg:pt-10 lg:pl-16 pl-24 justify-center items-center hidden md:flex` }
      >
        <div className={`relative top-0 left-0 overflow-hidden w-[20rem] h-[20rem] lg:w-[30rem] lg:h-[30rem]`}>
          <Image
            src={"remember.svg"}
            alt="Remember Image"
            fill style={{
              objectFit: "scale-down"
            }}
          />
        </div>
      </div>

      <div className="w-[3rem] h-[3rem] absolute flex items-center justify-center bottom-8 left-1/2">
        <ArrowBottom />
      </div>
    </section>
  )
}

export default Landing;
