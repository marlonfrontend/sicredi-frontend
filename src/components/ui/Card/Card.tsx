import { PropsWithChildren } from 'react'
import { cardStyles } from './Card.styles'

export const Card = ({ children }: PropsWithChildren) => {
  const { base } = cardStyles()

  return <div className={base()}>{children}</div>
}
