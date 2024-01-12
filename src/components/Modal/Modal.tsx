import { PropsWithChildren } from 'react'
import { ModalProps } from './Modal.types'
import { ClosedIcon } from '..'

export const Modal = ({
  isOpen,
  onClose,
  children,
}: PropsWithChildren<ModalProps>) => {
  if (!isOpen) {
    return null
  }
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative z-50 rounded-md bg-white">
        <div className="flex items-center justify-between border-b px-5 py-2">
          <h4 className="font-semibold">Confirmar</h4>
          <button
            className="rounded-full bg-gray-50 p-1 text-gray-500 hover:text-gray-700 focus:outline-none"
            onClick={onClose}
          >
            <ClosedIcon width={22} />
          </button>
        </div>
        <div className="p-5">{children}</div>
      </div>
    </div>
  )
}