'use client'

import { PropsWithChildren } from 'react'
import { ModalProps } from './Modal.types'
import { ClosedIcon } from '@/components'
import { motion } from 'framer-motion'
import { ModalContentStyle, ModalFooterStyle, ModalHeaderStyle, ModalStyle } from './Modal.styles'

export const Modal = ({
  isOpen,
  onClose,
  children,
  maxWidth,
}: PropsWithChildren<ModalProps>) => {

  if (!isOpen) {
    return null
  }
  return (
    <ModalStyle>
      <div className='wrapper' style={{ maxWidth: `${maxWidth}px` }}>
        <button className='close-button' onClick={onClose}>
          <ClosedIcon width={22} />
        </button>
        {children}
      </div>
      <motion.div
        variants={{
          hidden: {
            opacity: 0,
          },
          visible: {
            opacity: 1,
            transition: {
              delay: 0.1,
            },
          },
        }}
        className='overlay'
        onClick={onClose}
      />
    </ModalStyle>
  )
}

export const ModalHeader = ({ title }: PropsWithChildren<any>) => {
  return (
    <ModalHeaderStyle>
      <div className='title'>{title}</div>
    </ModalHeaderStyle>
  )
}

export const ModalContent = ({ children }: PropsWithChildren) => {
  return <ModalContentStyle>{children}</ModalContentStyle>
}

export const ModalFooter = ({ children }: PropsWithChildren) => {
  return <ModalFooterStyle>{children}</ModalFooterStyle>
}
