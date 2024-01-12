'use client'

import { ArrowLeftIcon } from '@/components'
import { HeadingProps } from './Heading.types'
import { HeadingStyle } from './Heading.styles'
import { useRouter } from 'next/navigation'

export const Heading = ({ backButton, endContent, ...props }: HeadingProps) => {
  const { base, title } = HeadingStyle()
  const router = useRouter()

  return (
    <div className={base()}>
      <div className="flex items-center gap-5">
        {backButton && (
          <button
            onClick={() => router.back()}
            className="rounded-full border p-2 text-gray-500 transition-all duration-200 hover:border-primary hover:text-primary"
          >
            <ArrowLeftIcon width={20} height={20} />
          </button>
        )}
        <div className={title()}>{props.title}</div>
      </div>
      {endContent}
    </div>
  )
}
