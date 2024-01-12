'use client'

import Cookies from 'js-cookie'
import { createContext, useContext, PropsWithChildren } from 'react'
import { AuthProviderProps, AuthContextProps } from './Auth.types'
import { useRouter } from 'next/navigation'

export const AuthContext = createContext<AuthContextProps>(
  {} as AuthContextProps,
)

export const AuthProvider = ({
  children,
}: PropsWithChildren<AuthProviderProps>) => {
  const router = useRouter()

  const signIn: AuthContextProps['signIn'] = (value) => {
    try {
      if (value.email === 'teste@gmail.com' && value.password === '1234') {
        Cookies.set('token', '1234')
        router.push('/dragons')
      } else {
        throw new Error()
      }
    } catch (error) {
      console.log(error)
    }
  }

  const signOut: AuthContextProps['signOut'] = () => {
    console.log('saiu')
    Cookies.set('token', '')
    router.push('/')
  }

  return (
    <AuthContext.Provider value={{ signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => useContext(AuthContext)
