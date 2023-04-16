import Image from "next/image"
import { ReactNode } from "react"

interface HomeSlidePropsType {
  imgUrl: string
  heading: string
  paragraph: string
  children?: ReactNode
}

export const HomeSlide = ({imgUrl, heading, paragraph, children}: HomeSlidePropsType) => {
  return <section className={`flex px-20 p-4 min-h-screen`}>
    <div className={`flex-[1] flex justify-center flex-col gap-8`}>
      <h1 className={`text-7xl font-bold`}>{heading}</h1>
      <h2 className={`text-3xl font-semibold`}>{paragraph}</h2>
    </div>

    <div className={`flex-[1] p-4 flex items-center justify-center`}>
      {children}
    </div>
  </section>
}

