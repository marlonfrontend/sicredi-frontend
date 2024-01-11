import { PropsWithChildren } from 'react'
import { AuthLayout } from '@/layouts'
import { Inter } from 'next/font/google'
import { redirect } from 'next/navigation'
import { cookies } from 'next/headers'

import '../globals.css'

const inter = Inter({ subsets: ['latin'] })

const RootLayout = ({ children }: PropsWithChildren) => {
  const isLogged = cookies().get('token')

  if (isLogged) {
    return redirect('/dragons')
  }
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body className={inter.className}>
        <AuthLayout>{children}</AuthLayout>
      </body>
    </html>
  )
}

export default RootLayout
