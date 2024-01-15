import { PropsWithChildren } from 'react'
import { AuthLayout } from '@/layouts'
import { Inter } from 'next/font/google'
import { redirect } from 'next/navigation'
import { cookies } from 'next/headers'
import StyledComponentsRegistry from '@/lib/registry'

import '../globals.scss'

const inter = Inter({ subsets: ['latin'] })

const RootLayout = ({ children }: PropsWithChildren) => {
  const isLogged = cookies().get('token')?.value

  if (isLogged) {
    return redirect('/dragons')
  }
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body className={inter.className}>
        <StyledComponentsRegistry>
          <AuthLayout>{children}</AuthLayout>
        </StyledComponentsRegistry>
      </body>
    </html>
  )
}

export default RootLayout
