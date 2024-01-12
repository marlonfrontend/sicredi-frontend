'use client'

import { Card, Input, Button } from '@/components'
import { AuthFormStyle } from './AuthForm.styles'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { useAuth } from '@/stores'
import { AuthTypeSchema, AuthType } from '@/types'

export const AuthForm = () => {
  const { signIn } = useAuth()
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<AuthType>({
    resolver: zodResolver(AuthTypeSchema),
  })

  return (
    <Card maxWidth={380}>
      <form className={AuthFormStyle()} onSubmit={handleSubmit(signIn)}>
        <Input
          label="E-mail"
          type="email"
          errors={errors.email?.message}
          {...register('email')}
        />
        <Input
          label="Senha"
          type="password"
          errors={errors.password?.message}
          {...register('password')}
        />
        <Button block type="submit">
          Enviar
        </Button>
      </form>
    </Card>
  )
}
