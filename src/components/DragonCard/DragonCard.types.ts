export type DragonCardProps = {
  id: string
  name: string
  type: string
  createdAt: string | Date

  onDelete?: (id: string) => void
}
