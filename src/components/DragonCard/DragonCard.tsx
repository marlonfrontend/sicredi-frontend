'use client'

import {
  Card,
  Grid,
  Dropdown,
  DropdownContent,
  DropdownItem,
  ModalConfirm,
  MoreVerticalIcon,
} from '@/components'
import { DragonCardProps } from './DragonCard.types'
import { formatDate } from '@/utils/formatters'
import { useState } from 'react'
import { useRouter } from 'next/navigation'

export const DragonCard = ({
  id,
  name,
  type,
  onDelete,
  createdAt,
}: DragonCardProps) => {
  const router = useRouter()
  const [isConfirmDelete, setConfirmDelete] = useState(false)

  const handleOpenModal = () => {
    setConfirmDelete(true)
  }

  const handleCloseModal = () => {
    setConfirmDelete(false)
  }

  const handleDelete = (id: string) => {
    if (onDelete) onDelete(id)
    handleCloseModal()
  }

  return (
    <Card>
      <Grid justify="between" align="center">
        <div className="w-1/4">
          <small className="uppercase text-black/40">Nome</small>
          <div>{name}</div>
        </div>
        <div className="w-1/4">
          <small className="uppercase text-black/40">Tipo</small>
          <div>{type}</div>
        </div>
        <div className="w-1/4">
          <small className="uppercase text-black/40">Criado em</small>
          <div>{formatDate(createdAt)}</div>
        </div>
        <Dropdown
          trigger={
            <button className="rounded-full border p-2">
              <MoreVerticalIcon />
            </button>
          }
        >
          <DropdownContent>
            <DropdownItem onClick={() => router.push(`/dragons/${id}`)}>
              Detalhes
            </DropdownItem>
            <DropdownItem onClick={() => router.push(`/dragons/${id}/edit`)}>
              Editar
            </DropdownItem>
            <DropdownItem onClick={handleOpenModal}>Deletar</DropdownItem>
          </DropdownContent>
        </Dropdown>
      </Grid>

      <ModalConfirm
        isOpen={isConfirmDelete}
        onClose={handleCloseModal}
        onConfirm={handleDelete}
        content={
          <>
            Tem certeza que deseja excluir <strong>{name}</strong>?
          </>
        }
      />
    </Card>
  )
}
