'use client'

import { PropsWithChildren } from 'react'
import { ThemeProvider as NextThemesProvider } from 'next-themes'

export const AuthLayout = ({ children }: PropsWithChildren) => {
  return (
    <NextThemesProvider attribute="class" defaultTheme="light">
      <main className="h-screen flex flex-col items-center justify-center">
        {children}
      </main>
    </NextThemesProvider>
  )
}
