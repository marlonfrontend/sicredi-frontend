'use client'

import { PropsWithChildren } from 'react'
import { Header } from '@/components'
import { ThemeProvider as NextThemesProvider } from 'next-themes'
import { AuthProvider, DragonProvider } from '@/stores'

export const DefaultLayout = ({ children }: PropsWithChildren) => {
  return (
    <NextThemesProvider attribute="class" defaultTheme="light">
      <AuthProvider>
        <DragonProvider>
          <Header />
          <main className="py-10">{children}</main>
        </DragonProvider>
      </AuthProvider>
    </NextThemesProvider>
  )
}
