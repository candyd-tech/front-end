import { ReactNode } from "react"
import { Poppins } from "next/font/google"

const poppins800 = Poppins({
  weight: '700',
  subsets: [ "latin" ]
})


interface HomeSlidePropsType {
  imgUrl?: string
  heading: string
  paragraph: string
  secondline?: string
  children?: ReactNode
}

export const HomeSlide = ({heading, paragraph, secondline, children}: HomeSlidePropsType) => {
  return <section className={`
    flex flex-col md:flex-col lg:flex-row pt-16 justify-center gap-12 md:gap-4
    md:pt-20 lg:pt-20 md:px-12 lg:px-20 p-4 h-screen
  `}>
    <div className={`flex-initial md:flex-[1] flex justify-center flex-col gap-8`}>
      <h1 className={`${poppins800.className} text-3xl md:text-3xl lg:text-6xl font-bold lg:font-bold`}>{heading}</h1>
      <div className={`flex flex-col gap-2`}>
        <p className={`text-sm md:text-base pr-4 lg:text-xl font-medium`}>{paragraph}</p>
        {secondline && <p className={`text-sm md:text-base pr-4 lg:text-xl font-medium`}>{secondline}</p>}
      </div>
    </div>

    <div className={`flex-initial md:flex-[1] p-0 lg:p-4 flex items-center justify-center`}>
      {children}
    </div>
  </section>
}

