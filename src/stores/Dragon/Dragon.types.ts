import { DragonsType } from '@/types'

export type DragonContextProps = {
  loadingDragons: boolean
  listDragons?: DragonsType[]
  dragon?: DragonsType

  fetchDragons: () => void
  fetchDragonById: (id: string) => void

  createDragon: (value: any) => void

  updateDragon: (value: any) => void

  deleteDragon: (value: any) => void
}

export type DragonProviderProps = {}
