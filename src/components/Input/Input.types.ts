import { ChangeEvent } from 'react'

export type InputProps = {
  label?: string
  type?: string
  name?: string
  value?: string
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void
}
