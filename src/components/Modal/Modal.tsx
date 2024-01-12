'use client'

import { PropsWithChildren } from 'react'
import { ModalProps } from './Modal.types'
import { ClosedIcon } from '@/components'
import { motion } from 'framer-motion'
import { ModalStyle } from './Modal.styles'

export const Modal = ({
  isOpen,
  onClose,
  children,
  maxWidth,
}: PropsWithChildren<ModalProps>) => {
  const { base, overlay, wrapper, closeButton } = ModalStyle()

  if (!isOpen) {
    return null
  }
  return (
    <div className={base()}>
      <div className={wrapper()} style={{ maxWidth: `${maxWidth}px` }}>
        <button className={closeButton()} onClick={onClose}>
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
        className={overlay()}
        onClick={onClose}
      />
    </div>
  )
}

export const ModalHeader = ({ title }: PropsWithChildren<any>) => {
  return (
    <div className="px-5 py-3">
      <h4 className="font-semibold">{title}</h4>
    </div>
  )
}

export const ModalContent = ({ children }: PropsWithChildren) => {
  return <div className="p-5">{children}</div>
}

export const ModalFooter = ({ children }: PropsWithChildren) => {
  return <div className="flex gap-4 border-t p-4">{children}</div>
}
