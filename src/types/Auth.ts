import { z } from 'zod'

export const AuthTypeSchema = z.object({
  email: z
    .string()
    .min(1, { message: 'Campo obrigátorio' })
    .email({ message: 'E-mail inválido' }),
  password: z.string().min(1, { message: 'Campo obrigátorio' }),
})

export type AuthType = z.infer<typeof AuthTypeSchema>
