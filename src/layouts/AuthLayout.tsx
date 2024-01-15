'use client'

import { PropsWithChildren } from 'react'
import { ThemeProvider as NextThemesProvider } from 'next-themes'
import { AuthProvider } from '@/stores/Auth'
import { motion } from 'framer-motion'
import { ToastContainer } from 'react-toastify'

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
          className="auth-layout"
        >
          {children}
        </motion.main>
        <ToastContainer />
      </AuthProvider>
    </NextThemesProvider>
  )
}
