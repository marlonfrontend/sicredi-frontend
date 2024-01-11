'use client'

import Cookies from 'js-cookie'
import { createContext, useContext, PropsWithChildren } from 'react'
import { AuthProviderProps, AuthContextProps } from './Auth.types'

export const AuthContext = createContext<AuthContextProps>(
  {} as AuthContextProps,
)

export const AuthProvider = ({
  children,
}: PropsWithChildren<AuthProviderProps>) => {
  const signIn: AuthContextProps['signIn'] = (value) => {
    try {
      if (value.email === 'teste@gmail.com' && value.password === '1234') {
        Cookies.set('token', '1234')
      } else {
        throw new Error()
      }
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <AuthContext.Provider value={{ signIn }}>{children}</AuthContext.Provider>
  )
}

export const useAuth = () => useContext(AuthContext)
