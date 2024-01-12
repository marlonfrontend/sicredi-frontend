'use client'

import { PropsWithChildren, useState, useRef, useEffect } from 'react'
import { Portal } from '@/components'
import { createPortal } from 'react-dom'
import { DropdownProps } from './Dropdown.types'

export const Dropdown = ({
  children,
  trigger,
}: PropsWithChildren<DropdownProps>) => {
  const [isOpen, setIsOpen] = useState(false)
  const triggerRef = useRef<HTMLDivElement | null>(null)

  const toggleDropdown = () => setIsOpen(!isOpen)
  const closeDropdown = () => setIsOpen(false)

  const handleOutsideClick = (event: MouseEvent) => {
    const dropdownNode = triggerRef.current

    if (
      isOpen &&
      dropdownNode &&
      !dropdownNode.contains(event.target as Node)
    ) {
      closeDropdown()
    }
  }

  useEffect(() => {
    if (isOpen) {
      document.addEventListener('click', handleOutsideClick)
      return () => document.removeEventListener('click', handleOutsideClick)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isOpen])

  const triggerRect = triggerRef.current?.getBoundingClientRect() || null

  return (
    <div className="group relative z-[9]">
      <div onClick={toggleDropdown} ref={triggerRef}>
        {trigger}
      </div>

      {isOpen &&
        createPortal(
          <Portal trigger={triggerRect}>
            <div className="rounded-md bg-white shadow">{children}</div>
          </Portal>,
          document.body,
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
