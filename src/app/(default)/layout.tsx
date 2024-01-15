import { PropsWithChildren } from 'react'
import type { Metadata } from 'next'
import { DefaultLayout } from '@/layouts'
import { Inter } from 'next/font/google'
import { redirect } from 'next/navigation'
import { cookies } from 'next/headers'
import StyledComponentsRegistry from '@/lib/registry'

import '../globals.scss'

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
        <StyledComponentsRegistry>
          <DefaultLayout>{children}</DefaultLayout>
        </StyledComponentsRegistry>
      </body>
    </html>
  )
}

export default RootLayout
