import { PropsWithChildren } from 'react'
import { ButtonProps } from './Button.types'
import { ButtonStyle } from './Button.styles'

export const Button = ({
  type = 'button',
  children,
  onClick,
  ...props
}: PropsWithChildren<ButtonProps>) => {
  return (
    <button onClick={onClick} type={type} className={ButtonStyle({ ...props })}>
      {children}
    </button>
  )
}
