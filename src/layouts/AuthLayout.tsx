'use client'

import { PropsWithChildren } from 'react'
import { ThemeProvider as NextThemesProvider } from 'next-themes'
import { AuthProvider } from '@/stores/Auth'
import { motion } from 'framer-motion'

export const AuthLayout = ({ children }: PropsWithChildren) => {
  return (
    <NextThemesProvider attribute="class" defaultTheme="light">
      <AuthProvider>
        <motion.main
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {
              opacity: 0,
            },
            visible: {
              opacity: 1,
              transition: {
                delay: 0.3,
              },
            },
          }}
          className="flex h-screen flex-col items-center justify-center"
        >
          {children}
        </motion.main>
      </AuthProvider>
    </NextThemesProvider>
  )
}
