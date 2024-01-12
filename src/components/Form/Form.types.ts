import { HTMLAttributes, ReactNode } from 'react'

export type FormProps<T> = {
  onSubmit: (data: T) => void
  children: ReactNode
  initialValues?: Record<string, any>
  classNames?: string
}
