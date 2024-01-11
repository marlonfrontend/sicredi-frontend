import { PropsWithChildren } from 'react'
import { ContainerStyle } from './Container.styles'

export const Container = ({ children }: PropsWithChildren) => {
  return <div className={ContainerStyle()}>{children}</div>
}
