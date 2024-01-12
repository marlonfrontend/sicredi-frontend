'use client'

import { Button, Form, Input } from '@/components'
import { DragonFormStyle } from './DragonForm.styles'

export const DragonForm = ({ onSubmit, initialValues }: any) => {
  return (
    <Form
      classNames={DragonFormStyle()}
      onSubmit={onSubmit}
      initialValues={initialValues}
    >
      <Input label="Nome" name="name" />
      <Input label="Tipo" name="type" />
      <Button type="submit">Salvar</Button>
    </Form>
  )
}
