import { PropsWithChildren } from 'react'
import { CardProps } from './Card.types'
import { CardStyle } from './Card.styles'

export const Card = ({ maxWidth, children }: PropsWithChildren<CardProps>) => {
  return (
    <div className={CardStyle()} style={{ maxWidth }}>
      {children}
    </div>
  )
}
