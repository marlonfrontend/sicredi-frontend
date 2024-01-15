import { PropsWithChildren } from 'react'
import { CardProps } from './Card.types'
import { CardStyle } from './Card.styles'

export const Card = ({ maxWidth, children }: PropsWithChildren<CardProps>) => {
  return <CardStyle style={{ maxWidth }}>{children}</CardStyle>
}
