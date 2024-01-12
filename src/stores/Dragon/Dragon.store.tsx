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
import { toast } from 'react-toastify'

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
      toast.error('Não foi possível carregar dragões', {
        position: toast.POSITION.BOTTOM_RIGHT,
      })
    } finally {
      setLoadingDragons(false)
    }
  }

  const fetchDragonById = async (id: string) => {
    try {
      const data = await getDragonById(id)
      setDragon(data)
    } catch (error) {
      toast.error('Erro ao carregar informações', {
        position: toast.POSITION.BOTTOM_RIGHT,
      })
    }
  }

  const handleCreateDragon: DragonContextProps['handleCreateDragon'] = async (
    payload,
  ) => {
    try {
      await createDragon(payload)
      router.push('/dragons')
      toast.success('Criação realizada com sucesso!', {
        position: toast.POSITION.BOTTOM_RIGHT,
      })
    } catch (error) {
      toast.error('Erro ao tentar criar', {
        position: toast.POSITION.BOTTOM_RIGHT,
      })
    }
  }

  const handleUpdateDragon: DragonContextProps['handleUpdateDragon'] = async (
    id,
    payload,
  ) => {
    try {
      await updateDragon(id, payload)
      toast.success('Edição concluída com sucesso!', {
        position: toast.POSITION.BOTTOM_RIGHT,
      })
    } catch (error) {
      toast.error('Erro ao tentar atualizar', {
        position: toast.POSITION.BOTTOM_RIGHT,
      })
    }
  }

  const handleDeleteDragon = async (id: string) => {
    try {
      await deleteDragon(id)
      fetchDragons()
    } catch (error) {
      toast.error('Erro ao tentar deletar', {
        position: toast.POSITION.BOTTOM_RIGHT,
      })
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
