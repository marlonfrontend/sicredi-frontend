import { PropsWithChildren } from 'react'
import { GridProps, GridItemProps } from './Grid.types'
import { GridStyle, GridItemStyles } from './Grid.styles'

export const Grid = ({ children, ...props }: PropsWithChildren<GridProps>) => {
  return <div className={GridStyle({ ...props })}>{children}</div>
}

export const GridItem = ({
  children,
  ...props
}: PropsWithChildren<GridItemProps>) => {
  return <div className={GridItemStyles({ ...props })}>{children}</div>
}
