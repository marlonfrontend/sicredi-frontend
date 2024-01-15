'use client'

import { ArrowLeftIcon, Grid } from '@/components'
import { HeadingProps } from './Heading.types'
import { HeadingStyle } from './Heading.styles'
import { useRouter } from 'next/navigation'

export const Heading = ({ backButton, endContent, ...props }: HeadingProps) => {
  const router = useRouter()

  return (
    <HeadingStyle>
      <div className="heading-wrapper">
        {backButton && (
          <button onClick={() => router.back()} className="button">
            <ArrowLeftIcon width={20} height={20} />
          </button>
        )}
        <div className="title">{props.title}</div>
      </div>
      {endContent}
    </HeadingStyle>
  )
}
