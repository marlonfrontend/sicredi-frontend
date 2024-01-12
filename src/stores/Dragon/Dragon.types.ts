import { DragonsType } from '@/types'
import { CreateDragonType, UpdateDragonType } from '@/types'

export type DragonContextProps = {
  loadingDragons: boolean
  listDragons?: DragonsType[]
  dragon?: DragonsType

  fetchDragons: () => void
  fetchDragonById: (id: string) => void

  handleCreateDragon: (value: CreateDragonType) => void

  handleUpdateDragon: (id: string, value: UpdateDragonType) => void

  handleDeleteDragon: (id: string) => void
}

export type DragonProviderProps = {}
