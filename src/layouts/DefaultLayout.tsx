'use client'

import { PropsWithChildren } from 'react'
import { Header } from '@/components'
import { ThemeProvider as NextThemesProvider } from 'next-themes'
import { DragonProvider } from '@/stores'

export const DefaultLayout = ({ children }: PropsWithChildren) => {
  return (
    <NextThemesProvider attribute="class" defaultTheme="light">
      <DragonProvider>
        <Header />
        <main>{children}</main>
      </DragonProvider>
    </NextThemesProvider>
  )
}
