'use client'

import Cookies from 'js-cookie'
import { createContext, useContext, PropsWithChildren } from 'react'
import { AuthProviderProps, AuthContextProps } from './Auth.types'
import { useRouter } from 'next/navigation'
import { toast } from 'react-toastify'

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
      toast.error('email: teste@gmail.com, senha: 1234', {
        position: toast.POSITION.BOTTOM_RIGHT,
      })
    }
  }

  const signOut: AuthContextProps['signOut'] = () => {
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
