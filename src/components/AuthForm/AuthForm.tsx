'use client'

import { Card, Input, Button, Form } from '@/components'
import { useAuth } from '@/stores'

export const AuthForm = () => {
  const { signIn } = useAuth()

  return (
    <Card maxWidth={380}>
      <Form onSubmit={signIn}>
        <Input label="email" name="email" />
        <Input label="senha" name="password" type="password" />
        <Button block type="submit">
          Enviar
        </Button>
      </Form>
    </Card>
  )
}
