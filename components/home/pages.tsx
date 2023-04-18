import { ReactNode } from "react"

interface HomeSlidePropsType {
  imgUrl?: string
  heading: string
  paragraph: string
  children?: ReactNode
}

export const HomeSlide = ({heading, paragraph, children}: HomeSlidePropsType) => {
  return <section className={`flex flex-col md:flex-col lg:flex-row px-8 pt-24 md:pt-20 lg:pt-20 md:px-12 lg:px-20 p-4 min-h-screen`}>
    <div className={`flex-[1] flex justify-center flex-col gap-8`}>
      <h1 className={`text-xl md:text-3xl lg:text-6xl font-medium md:font-bold lg:font-bold`}>{heading}</h1>
      <h2 className={`text-sm md:text-base lg:text-xl font-medium`}>{paragraph}</h2>
    </div>

    <div className={`flex-[1] p-4 flex items-center justify-center`}>
      {children}
    </div>
  </section>
}

