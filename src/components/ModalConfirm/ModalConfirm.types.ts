import { ReactNode } from 'react'

export type ModalConfirmProps = {
  isOpen: boolean
  maxWidth?: number
  content?: ReactNode

  onClose?: () => void
  onConfirm?: () => void
}
