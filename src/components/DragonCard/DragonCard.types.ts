import { DragonsType } from '@/types'

export type DragonCardProps = Omit<DragonsType, 'histories'> & {
  onDelete?: (id: string) => void
}
