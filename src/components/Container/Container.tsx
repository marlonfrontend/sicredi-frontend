'use client'

import { PropsWithChildren } from 'react'
import { ContainerStyle } from './Container.styles'

export const Container = ({ children }: PropsWithChildren) => {
  return <ContainerStyle>{children}</ContainerStyle>
}
