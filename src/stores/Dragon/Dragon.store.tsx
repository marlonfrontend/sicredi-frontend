'use client'

import { createContext, useContext, PropsWithChildren, useState } from 'react'
import { DragonProviderProps, DragonContextProps } from './Dragon.types'
import { getDragons, getDragonById } from '@/services'
import { DragonsType } from '@/types'

export const DragonContext = createContext<DragonContextProps>(
  {} as DragonContextProps,
)

export const DragonProvider = ({
  children,
}: PropsWithChildren<DragonProviderProps>) => {
  const [listDragons, setListDragons] = useState<DragonsType[]>()
  const [dragon, setDragon] = useState<DragonsType>()

  const fetchDragons = async () => {
    try {
      const data = await getDragons()
      setListDragons(data)
    } catch (error) {
      console.log(error)
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

  const createDragon = () => {
    try {
    } catch (error) {
      console.log(error)
    }
  }

  const updateDragon = (e: any) => {
    try {
      console.log(e, 'e')
    } catch (error) {
      console.log(error)
    }
  }

  const deleteDragon = () => {
    try {
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <DragonContext.Provider
      value={{
        fetchDragons,
        listDragons,
        fetchDragonById,
        dragon,
        createDragon,
        updateDragon,
        deleteDragon,
      }}
    >
      {children}
    </DragonContext.Provider>
  )
}

export const useDragon = () => useContext(DragonContext)