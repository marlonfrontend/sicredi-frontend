'use client'

import { PropsWithChildren } from 'react'
import { ThemeProvider as NextThemesProvider } from 'next-themes'
import { AuthProvider } from '@/stores/Auth'

export const AuthLayout = ({ children }: PropsWithChildren) => {
  return (
    <NextThemesProvider attribute="class" defaultTheme="light">
      <AuthProvider>
        <main className="flex h-screen flex-col items-center justify-center">
          {children}
        </main>
      </AuthProvider>
    </NextThemesProvider>
  )
}
