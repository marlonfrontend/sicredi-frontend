import { z } from 'zod'

export type DragonFormProps<T> = {
  initialValues?: T
  schema: z.ZodSchema
  onSubmit: (value: T) => void
}
