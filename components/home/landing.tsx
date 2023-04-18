import Button from "@/components/button";
import styles from "@/styles/landing.module.scss"
import { Poppins } from "next/font/google"
import Image from "next/image";
import Link from "next/link";

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
      <div className={ `text-black ${styles.sections}
        p-12 md:p-6 lg:p-12 md:pl-6 lg:pl-20 pt-28 md:pt-28 lg:pt-32 gap-8
        flex flex-col justify-start md:justify-start items-start` }
      >
        <h1 className={`font-bold leading-[1.2] md:leading-[1.2] text-3xl md:text-4xl lg:text-6xl ${poppins800.className}`}>
          Capture your <br /> Candyd moments
        </h1>

        <p className={`font-medium text-[1rem] md:text-[1rem] lg:text-xl`}>
          Embark on a 10-day campus quest with your friends, completing tasks and following clues to create your own memory lane. <br />
          Sign up for an offbeat and vibrant way of capturing your campus experience! 
        </p>

        <div className={`${ 'text-black' }`}>
          <Link href="/sign_up">
            <Button
              className={`
                ${styles.landing_button}
                ${isClipped ? 'bg-[--background-hex]': 'bg-[--foreground-hex]'}
              `}
              onClickButton={() => {}}
              font={poppins400.className}
              text={"Sign Up"}
            />
          </Link>
        </div>
      </div>

      <div className={ `${styles.image_section} ${styles.sections}
        p-6 md:p-0 pt-12 md:pt-20 lg:pt-10 lg:pl-16 pl-24 justify-center hidden md:flex` }
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
    </section>
  )
}

export default Landing;
