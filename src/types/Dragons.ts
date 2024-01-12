import { z } from 'zod'

export const DragonsTypeSchema = z.object({
  id: z.string(),
  name: z.string(),
  histories: z.string(),
  type: z.string(),
  createdAt: z.date().or(z.string()).optional(),
})

export const CreateDragonTypeSchema = DragonsTypeSchema.pick({
  name: true,
  histories: true,
  type: true,
})

export const UpdateDragonTypeSchema = DragonsTypeSchema.pick({
  name: true,
  histories: true,
  type: true,
}).partial()

export type CreateDragonType = z.infer<typeof CreateDragonTypeSchema>
export type UpdateDragonType = z.infer<typeof UpdateDragonTypeSchema>
export type DragonsType = z.infer<typeof DragonsTypeSchema>
