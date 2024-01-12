import { ChangeEvent } from 'react'

export type InputProps = {
  label?: string
  type?: string
  value?: string
  errors?: string
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void
}
