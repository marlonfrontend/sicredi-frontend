'use client'

import {
  Button,
  Card,
  Dropdown,
  DropdownContent,
  DropdownItem,
  Grid,
  Modal,
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
  const [isModalOpen, setModalOpen] = useState(false)

  const handleOpenModal = () => {
    setModalOpen(true)
  }

  const handleCloseModal = () => {
    setModalOpen(false)
  }

  const handleDelete = (id: string) => {
    if (onDelete) onDelete(id)
    handleCloseModal()
  }

  return (
    <Card>
      <div className="flex items-center justify-between">
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
      </div>

      <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
        <h3 className="mb-5">
          Tem certeza que deseja excluir <strong>{name}</strong>?
        </h3>
        <Grid align="center" gap={3}>
          <Button color="secondary" size="sm" onClick={handleCloseModal}>
            Não
          </Button>
          <Button size="sm" onClick={() => handleDelete(id)}>
            Sim
          </Button>
        </Grid>
      </Modal>
    </Card>
  )
}
