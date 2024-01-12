'use client'

import { PropsWithChildren } from 'react'
import { Header } from '@/components'
import { ThemeProvider as NextThemesProvider } from 'next-themes'
import { AuthProvider, DragonProvider } from '@/stores'
import { motion, AnimatePresence } from 'framer-motion'
import { usePathname } from 'next/navigation'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

export const DefaultLayout = ({ children }: PropsWithChildren) => {
  const router = usePathname()

  return (
    <NextThemesProvider attribute="class" defaultTheme="light">
      <AuthProvider>
        <DragonProvider>
          <AnimatePresence>
            <Header />
            <motion.main
              key={router}
              initial="hidden"
              animate="visible"
              variants={{
                hidden: {
                  opacity: 0,
                },
                visible: {
                  opacity: 1,
                  transition: {
                    delay: 0.2,
                  },
                },
              }}
              className="py-10"
            >
              {children}
            </motion.main>
          </AnimatePresence>
          <ToastContainer />
        </DragonProvider>
      </AuthProvider>
    </NextThemesProvider>
  )
}
