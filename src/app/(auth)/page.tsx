import { AuthForm } from '@/components/common'

import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Login',
}

const Page = () => {
  return <AuthForm />
}
export default Page
