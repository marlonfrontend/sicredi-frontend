'use client'

import { Grid, ArrowLeftIcon } from '@/components'
import { HeadingProps } from './Heading.types'
import { HeadingStyle } from './Heading.styles'
import { useRouter } from 'next/navigation'

export const Heading = ({ backButton, endContent, ...props }: HeadingProps) => {
  const { base, title, description } = HeadingStyle()
  const router = useRouter()

  return (
    <div className={base()}>
      <Grid justify="between">
        <Grid align="center" gap={4}>
          {backButton && (
            <button
              onClick={() => router.back()}
              className="rounded-full border p-2 text-gray-500 transition-all duration-200 hover:border-primary hover:text-primary"
            >
              <ArrowLeftIcon width={20} height={20} />
            </button>
          )}
          <div className={title()}>{props.title}</div>
        </Grid>
        {props.description && (
          <div className={description()}>{props.description}</div>
        )}
        {endContent}
      </Grid>
    </div>
  )
}
