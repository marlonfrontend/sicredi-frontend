'use client'

import { PropsWithChildren, useEffect, useRef } from 'react'
import { PortalProps } from './Portal.types'

export const Portal = ({
  trigger,
  children,
}: PropsWithChildren<PortalProps>) => {
  const portalRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const updatePosition = () => {
      const portal = portalRef.current

      if (portal && trigger) {
        portal.style.left = `${trigger.left}px`
        portal.style.top = `${trigger.bottom}px`
      }
    }

    updatePosition()
    window.addEventListener('resize', updatePosition)

    return () => {
      window.removeEventListener('resize', updatePosition)
    }
  }, [trigger])

  return (
    <div ref={portalRef} className="absolute z-[99]">
      {children}
    </div>
  )
}
