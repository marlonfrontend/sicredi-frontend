import { PropsWithChildren } from 'react'
import { GridProps } from './Grid.types'
import { GridStyle } from './Grid.styles'

export const Grid = ({ children, ...props }: PropsWithChildren<GridProps>) => {
  return <div className={GridStyle({ ...props })}>{children}</div>
}
