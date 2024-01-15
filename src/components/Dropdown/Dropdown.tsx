'use client'

import { PropsWithChildren, useState } from 'react'
import { DropdownProps } from './Dropdown.types'
import { DropdownStyle } from './Dropdown.styles'

export const Dropdown = ({
  children,
  trigger,
}: PropsWithChildren<DropdownProps>) => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleDropdown = () => setIsOpen(!isOpen)

  return (
    <DropdownStyle>
      <div onClick={toggleDropdown}>{trigger}</div>

      {isOpen && <>{children}</>}
    </DropdownStyle>
  )
}

export const DropdownContent = ({ children }: PropsWithChildren) => {
  return <div className="dropdown-content">{children}</div>
}

export const DropdownItem = ({ onClick, children }: PropsWithChildren<any>) => {
  return (
    <button onClick={onClick} className="dropdown-item">
      {children}
    </button>
  )
}
