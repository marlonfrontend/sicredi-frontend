import { PropsWithChildren } from 'react'
import { ButtonProps } from './Button.types'
import { ButtonStyle } from './Button.styles'

export const Button = ({
  type = 'button',
  children,
  onClick,
  size = 'lg',
  block = false,
  color = 'primary',
  ...props
}: PropsWithChildren<ButtonProps>) => {
  return (
    <ButtonStyle
      onClick={onClick}
      type={type}
      $size={size}
      $block={block}
      $color={color}
      {...props}
    >
      {children}
    </ButtonStyle>
  )
}
