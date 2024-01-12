'use client'

import { PropsWithChildren, useState } from 'react'
import { DropdownProps } from './Dropdown.types'

export const Dropdown = ({
  children,
  trigger,
}: PropsWithChildren<DropdownProps>) => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleDropdown = () => setIsOpen(!isOpen)

  return (
    <div className="relative">
      <div onClick={toggleDropdown}>{trigger}</div>

      {isOpen && (
        <div className="absolute z-20 rounded-md bg-white shadow">
          {children}
        </div>
      )}
    </div>
  )
}

export const DropdownContent = ({ children }: PropsWithChildren) => {
  return <div className="flex min-w-[150px] flex-col py-2">{children}</div>
}

export const DropdownItem = ({ onClick, children }: PropsWithChildren<any>) => {
  return (
    <button
      onClick={onClick}
      className="w-full cursor-pointer px-4 py-2 text-left hover:bg-gray-100"
    >
      {children}
    </button>
  )
}
