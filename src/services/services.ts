import { client } from './client'
import { DragonsType } from '@/types'

export const getDragons = (): Promise<DragonsType[]> => {
  return client.get(`/dragon`)
}

export const getDragonById = (id: string): Promise<DragonsType> => {
  return client.get(`/dragon/${id}`)
}

export const createDragon = ({ ...payload }: any): Promise<any> => {
  return client.post(`/dragon`, payload)
}

export const updateDragon = ({ id, ...payload }: any): Promise<any> => {
  return client.put(`/dragon/${id}`, payload)
}

export const deleteDragon = (id: string): Promise<any> => {
  return client.delete(`/dragon/${id}`)
}
