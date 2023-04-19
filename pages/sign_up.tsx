import Button from "@/components/button"
import Forms from "@/components/forms/forms"
import Nav from "@/components/nav"
import styles from "@/styles/forms.module.scss"
import { Poppins } from "next/font/google"
import Image from "next/image"
import { useState } from "react"
import Head from "next/head"


const poppins800 = Poppins({
  weight: '700',
  subsets: [ "latin" ]
})

const poppins400 = Poppins({
  weight: '400',
  subsets: [ "latin" ]
})

export default function SignUp() {
  const [showForm, setShowForm] = useState(true);
  const [formType, setFormType] = useState<"survey" | "join">("join");

  return (
    <>
      <Head>
        <title>Be the First to Know!</title>
        <meta name="description"
          content="Sign up now to receive exclusive perks and benefits when our product launches" />
      </Head>
      <Nav />
      <div className={ `px-8 pr-8 md:pr-0 lg:pr-8 min-h-screen flex items-center ${styles.sign_up_bg}` }>
        <section className={`h-full w-full ${showForm ? 'hidden' : 'flex'}`}>
          <div className={`${styles.forms_section} flex-[1] md:flex-[0.9] lg:flex-[0.6]`}>
            <div className={`flex flex-col gap-8`}>
               <h1 className={`${poppins800.className} text-2xl md:text-3xl lg:text-6xl`}>
                Show us your interset <br /> or Sign up for early access
              </h1>

               <p className="text-sm md:tex-base lg:text-xl">Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition. </p>
            </div>

            <div className={`flex flex-col md:flex-row gap-4`}>
              <Button 
                font={poppins400.className}
                className={`
                  bg-[--foreground-hex] py-3 px-4 md:px-7 lg:px-10 rounded-[30px] font-thin md:font-normal
                  text-white text-xs lg:text-base
                `}
                text={"Sign Up Now"}
                onClickButton={() => {
                  setShowForm(true);
                  setFormType("join")
                }}
              />
              <Button 
                font={poppins400.className}
                className={`
                  bg-[--foreground-hex] py-3 px-1 md:px-7 lg:px-10 rounded-[30px] font-thin md:font-thin lg:font-normal
                  text-white text-xs lg:text-base
                `}
                text={"Take a Survey"}
                onClickButton={() => {
                  setShowForm(true);
                  setFormType("survey")
                }}
              />
            </div>
          </div>

          <div className={`${styles.image_section} flex-[0.6] lg:flex-[0.4] hidden md:flex`}>
            <Image
              src={"sign_up.svg"}
              alt={"Sign Up"}
              width={450}
              height={450}
            />
          </div>
        </section>

        <section className={ `min-h-[87vh] p-[3rem_0] w-full ${showForm ? 'flex' : 'hidden'}` }>
          <Forms formType={formType}/>
        </section>
      </div>
    </>
  )
}
