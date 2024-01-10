import { PropsWithChildren } from 'react'
import { buttonStyles } from './Button.styles'

export const Button = ({ children }: PropsWithChildren) => {
  const { base } = buttonStyles()

  return <button className={base()}>{children}</button>
}
