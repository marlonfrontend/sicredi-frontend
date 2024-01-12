import { PropsWithChildren } from 'react'
import type { Metadata } from 'next'
import { DefaultLayout } from '@/layouts'
import { Inter } from 'next/font/google'
import { redirect } from 'next/navigation'
import { cookies } from 'next/headers'

import '../globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Sicredi App',
}

const RootLayout = ({ children }: PropsWithChildren) => {
  const isLogged = cookies().get('token')?.value

  if (!isLogged) {
    return redirect('/')
  }
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body className={inter.className}>
        <DefaultLayout>{children}</DefaultLayout>
      </body>
    </html>
  )
}

export default RootLayout
