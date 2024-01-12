import { ChangeEvent } from 'react'

export type TextareaProps = {
  label?: string
  type?: string
  name?: string
  value?: string
  errors?: string
  onChange?: (event: ChangeEvent<HTMLTextAreaElement>) => void
}
