import { DragonsType } from '@/types'

export type DragonContextProps = {
  loadingDragons: boolean
  listDragons?: DragonsType[]
  dragon?: DragonsType

  fetchDragons: () => void
  fetchDragonById: (id: string) => void

  handleCreateDragon: (value: any) => void

  handleUpdateDragon: (value: any) => void

  handleDeleteDragon: (id: string) => void
}

export type DragonProviderProps = {}
