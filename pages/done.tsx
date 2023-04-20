import styles from "@/styles/forms.module.scss";
import Head from "next/head";
import { Poppins } from "next/font/google"
import Image from "next/image";
import Link from "next/link";
import Button from "@/components/button";


const poppins800 = Poppins({
  weight: '700',
  subsets: [ "latin" ]
})

const poppins400 = Poppins({
  weight: '400',
  subsets: [ "latin" ]
})



const Done = () => {
  return (
    <>
      <Head>
        <title>Thank you for registering interest!</title>
      </Head>

      <div className={ `px-8 pr-8 md:pr-0 lg:pr-8 min-h-screen flex items-center ${styles.sign_up_bg}` }>
        <section className={`h-full w-full flex`}>
          <div className={`${styles.forms_section} flex-[1] md:flex-[0.9] lg:flex-[0.6]`}>
            <div className={`flex flex-col gap-8`}>
               <h1 className={`${poppins800.className} text-2xl md:text-3xl lg:text-6xl`}>
                Thank you for registering your interest!
              </h1>

               <p className={ `${poppins400.className} text-sm md:tex-base lg:text-xl` }>Exciting times lie ahead. Create memories in a way never thought of before. <br /> Coming Soon!</p>
            </div>

            <div className={`flex flex-col md:flex-row gap-4`}>
              <Link href="/">
                <Button
                  className={`
                    p-[0.75rem_2.5rem] rounded-[30px]
                    text-[--background-hex] border-[2px] border-[--foreground-hex]
                    transition duration-150
                    hover:text-[--foreground-hex] hover:border-[--foreground-hex] hover:bg-[--background-hex]
                    bg-[--foreground-hex]
                  `}
                  onClickButton={() => {}}
                  font={poppins400.className}
                  text={"Back to Home"}
                />
              </Link>
            </div>
          </div>

          <div className={`${styles.image_section} flex-[0.6] lg:flex-[0.4] hidden md:flex`}>
            <div className={`relative`}>
              <Image
                src={"completed.svg"}
                alt={"Sign Up"}
                fill style={{
                  objectFit: 'scale-down'
                }}
              />
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

export default Done;
