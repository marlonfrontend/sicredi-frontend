'use client'

import { PropsWithChildren, useState } from 'react'
import { DropdownProps } from './Dropdown.types'
import { DropdownStyle } from './Dropdown.styles'

const { base, content, item } = DropdownStyle()

export const Dropdown = ({
  children,
  trigger,
}: PropsWithChildren<DropdownProps>) => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleDropdown = () => setIsOpen(!isOpen)

  return (
    <div className={base()}>
      <div onClick={toggleDropdown}>{trigger}</div>

      {isOpen && <>{children}</>}
    </div>
  )
}

export const DropdownContent = ({ children }: PropsWithChildren) => {
  return <div className={content()}>{children}</div>
}

export const DropdownItem = ({ onClick, children }: PropsWithChildren<any>) => {
  return (
    <button onClick={onClick} className={item()}>
      {children}
    </button>
  )
}
