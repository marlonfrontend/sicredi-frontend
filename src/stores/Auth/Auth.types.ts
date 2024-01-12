type SignInProps = {
  email: string
  password: string
}

export type AuthContextProps = {
  token?: string

  signIn: (value: SignInProps) => void
  signOut: () => void
}

export type AuthProviderProps = {}
