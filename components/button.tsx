import { ReactNode } from "react"

interface ButtonPropsType {
  font?: string
  onClickButton?: () => void
  className: string
  children?: ReactNode
  text?: string
}


const Button = ({
  font,
  className,
  text,
  onClickButton,
  children
}: ButtonPropsType) => {
  return (
    <button
      className={`${font} ${className}`}
      onClick={ onClickButton }
    >{ children ? children : text }</button>
  )
}

export default Button
