import { ChangeEvent } from 'react'

export type TextareaProps = {
  label?: string
  type?: string
  name?: string
  value?: string
  onChange?: (event: ChangeEvent<HTMLTextAreaElement>) => void
}
