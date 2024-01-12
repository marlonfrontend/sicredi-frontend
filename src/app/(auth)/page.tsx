import { AuthForm } from '@/components'

import type { Metadata } from 'next'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Login',
}

const Page = () => {
  return (
    <>
      <Image
        src="/img/logo.svg"
        width={200}
        height={100}
        alt="Sicredi"
        className="mb-5"
      />
      <AuthForm />
    </>
  )
}
export default Page
