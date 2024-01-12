'use client'
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalFooter,
  Button,
} from '@/components'
import { ModalConfirmProps } from './ModalConfirm.types'

export const ModalConfirm = ({
  isOpen,
  maxWidth,
  onClose,
  onConfirm,
  content,
}: ModalConfirmProps) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} maxWidth={maxWidth}>
      <ModalHeader title="Excluir" />
      <ModalContent>{content}</ModalContent>
      <ModalFooter>
        <Button block size="lg" onClick={onConfirm}>
          Confirmar
        </Button>
        <Button block color="secondary" size="lg" onClick={onClose}>
          Cancelar
        </Button>
      </ModalFooter>
    </Modal>
  )
}
