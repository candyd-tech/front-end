import Image from "next/image"
import { ReactNode } from "react"
import { Kalam } from "next/font/google"
import styles from "@/styles/polaroid.module.scss"

const kalamLight = Kalam({
  weight: '300',
  subsets: [ "latin" ]
})


interface PolaroidPropsType {
  text?: string
  imageUrl: string
  alt: string
  classes?: string
  children?: ReactNode
}

const Polaroid = ({text, alt, imageUrl, classes, children}: PolaroidPropsType) => {
  return <div className={`
    flex pt-[0.5rem] flex-col bg-gray-400 drop-shadow-2xl ${classes}
    w-[10rem] h-[14rem] md:w-[12rem] md:h-[16rem] lg:w-[18rem] lg:h-[22rem]
    ${styles.polaroid} rounded-sm
  `}>
    <div className={`relative border-black border-[1px] rounded-sm
      left-[0.5rem] w-[9rem] h-[10rem] md:w-[11rem] md:h-[12rem] lg:w-[17rem] lg:h-[18rem]`}
    >
      <Image
        src={imageUrl}
        alt={alt}
        fill style={{
          objectFit: "cover"
        }}
      />
    </div>

    <div className={`flex flex-col text-center text-sm lg:text-base items-center justify-center h-16 ${kalamLight.className}`}>
      {text && <p>{text}</p>}
      {children}
    </div>
  </div>
}

export default Polaroid
