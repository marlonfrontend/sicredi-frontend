import { PropsWithChildren } from 'react'
import { GridProps, GridItemProps } from './Grid.types'
import { GridStyle, GridItemStyles } from './Grid.styles'

export const Grid = ({ children, justify, align, direction, gap }: PropsWithChildren<GridProps>) => {
  return <GridStyle $justify={justify} $align={align} $direction={direction} $gap={gap}>{children}</GridStyle>
}

export const GridItem = ({
  children,
  md,
  col,
}: PropsWithChildren<GridItemProps>) => {
  return <GridItemStyles $md={md} $col={col}>{children}</GridItemStyles>
}
