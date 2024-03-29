import { client } from './client'
import { DragonsType, UpdateDragonType, CreateDragonType } from '@/types'

export const getDragons = (): Promise<DragonsType[]> => {
  return client.get(`/dragon`)
}

export const getDragonById = (id: string): Promise<DragonsType> => {
  return client.get(`/dragon/${id}`)
}

export const createDragon = (
  payload: CreateDragonType,
): Promise<DragonsType> => {
  return client.post(`/dragon`, payload)
}

export const updateDragon = (
  id: string,
  payload: UpdateDragonType,
): Promise<DragonsType> => {
  return client.put(`/dragon/${id}`, payload)
}

export const deleteDragon = (id: string): Promise<DragonsType> => {
  return client.delete(`/dragon/${id}`)
}
