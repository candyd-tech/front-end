import Button from "@/components/button"
import Forms from "@/components/forms/forms"
import Nav from "@/components/nav"
import styles from "@/styles/forms.module.scss"
import { Poppins } from "next/font/google"
import Image from "next/image"
import { useState } from "react"


const poppins800 = Poppins({
  weight: '700',
  subsets: [ "latin" ]
})

const poppins400 = Poppins({
  weight: '400',
  subsets: [ "latin" ]
})

export default function SignUp() {
  const [showForm, setShowForm] = useState(false);
  const [formType, setFormType] = useState<"survey" | "join">("survey");

  return (
    <>
      <Nav />
      <div className={ `min-h-screen p-8 ${styles.sign_up_bg}` }>
        <section className={`w-full ${showForm ? 'hidden' : 'flex'}`}>
          <div className={`${styles.forms_section}`}>
            <div className={`flex flex-col gap-8`}>
               <h1 className={`${poppins800.className} text-6xl`}>
                Show us your interset <br /> or Sign up for early access
              </h1>

               <p className="text-xl">Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition. </p>
            </div>

            <div className={`flex flex-row gap-4`}>
              <Button 
                font={poppins400.className}
                className={`bg-[--foreground-hex] py-3 px-10 rounded-[30px] text-white`}
                text={"Sign Up Now"}
                onClickButton={() => {
                  setShowForm(true);
                  setFormType("join")
                }}
              />
              <Button 
                font={poppins400.className}
                className={`bg-[--foreground-hex] py-3 px-10 rounded-[30px] text-white`}
                text={"Take a Survey"}
                onClickButton={() => {
                  setShowForm(true);
                  setFormType("survey")
                }}
              />
            </div>
          </div>

          <div className={`${styles.image_section}`}>
            <Image
              src={"sign_up.svg"}
              alt={"Sign Up"}
              width={450}
              height={450}
            />
          </div>
        </section>

        <section className={ `${showForm ? 'flex' : 'hidden'}` }>
          <Forms formType={formType}/>
        </section>
      </div>
    </>
  )
}