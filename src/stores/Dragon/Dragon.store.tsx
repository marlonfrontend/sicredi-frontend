'use client'

import { createContext, useContext, PropsWithChildren, useState } from 'react'
import { useRouter } from 'next/navigation'
import { DragonProviderProps, DragonContextProps } from './Dragon.types'
import {
  getDragons,
  getDragonById,
  createDragon,
  updateDragon,
  deleteDragon,
} from '@/services'
import { DragonsType } from '@/types'

export const DragonContext = createContext<DragonContextProps>(
  {} as DragonContextProps,
)

export const DragonProvider = ({
  children,
}: PropsWithChildren<DragonProviderProps>) => {
  const router = useRouter()
  const [loadingDragons, setLoadingDragons] = useState(false)
  const [listDragons, setListDragons] = useState<DragonsType[]>([])
  const [dragon, setDragon] = useState<DragonsType>()

  const fetchDragons = async () => {
    setLoadingDragons(true)
    try {
      const data = await getDragons()
      const sortedDragons = [...data].sort((a, b) =>
        a.name.localeCompare(b.name, 'en', { sensitivity: 'base' }),
      )
      setListDragons(sortedDragons)
    } catch (error) {
      console.log(error)
    } finally {
      setLoadingDragons(false)
    }
  }

  const fetchDragonById = async (id: string) => {
    try {
      const data = await getDragonById(id)
      setDragon(data)
    } catch (error) {
      console.log(error)
    }
  }

  const handleCreateDragon = async (payload: any) => {
    try {
      await createDragon(payload)
      router.push('/dragons')
    } catch (error) {
      console.log(error)
    }
  }

  const handleUpdateDragon = async (payload: any) => {
    try {
      await updateDragon(payload)
    } catch (error) {
      console.log(error)
    }
  }

  const handleDeleteDragon = async (id: string) => {
    try {
      await deleteDragon(id)
      console.log(id, 'deleta aqui')
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <DragonContext.Provider
      value={{
        loadingDragons,
        fetchDragons,
        listDragons,
        fetchDragonById,
        dragon,
        handleCreateDragon,
        handleUpdateDragon,
        handleDeleteDragon,
      }}
    >
      {children}
    </DragonContext.Provider>
  )
}

export const useDragon = () => useContext(DragonContext)
