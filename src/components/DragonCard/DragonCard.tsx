'use client'

import {
  Card,
  Grid,
  GridItem,
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
import { DragonCardItemStyle, DropdownTriggerStyle } from './DragonCard.styles'

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
      <Grid justify="space-between" align="center">
        <GridItem col={3}>
          <DragonCardItemStyle>
            <small>Nome</small>
            <div>{name}</div>
          </DragonCardItemStyle>
        </GridItem>
        <GridItem col={3}>
          <DragonCardItemStyle>
            <small>Tipo</small>
            <div>{type}</div>
          </DragonCardItemStyle>
        </GridItem>
        <GridItem col={3}>
          <DragonCardItemStyle>
            <small>Criado em</small>
            <div>
              {createdAt ? <>{formatDate(createdAt)}</> : <>Não informado</>}
            </div>
          </DragonCardItemStyle>
        </GridItem>
        <Dropdown
          trigger={
            <DropdownTriggerStyle>
              <MoreVerticalIcon />
            </DropdownTriggerStyle>
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
        onConfirm={() => handleDelete(id)}
        maxWidth={380}
        content={
          <>
            Tem certeza que deseja excluir <strong>{name}</strong>?
          </>
        }
      />
    </Card>
  )
}
