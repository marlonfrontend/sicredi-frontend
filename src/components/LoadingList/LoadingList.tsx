'use client'

import { Grid } from '@/components'
import { LoadingListStyle } from './Loading.styles'

export const LoadingList = () => {
  return (
    <Grid direction="column" gap={5}>
      {Array.from({ length: 5 }).map(() => (
        <LoadingListStyle key={Math.random().toString()}></LoadingListStyle>
      ))}
    </Grid>
  )
}
