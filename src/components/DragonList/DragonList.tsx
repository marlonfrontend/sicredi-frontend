'use client'

import { DragonCard, Grid } from '@/components'
import { useDragon } from '@/stores'
import { useEffect } from 'react'

export const DragonList = () => {
  const { listDragons, fetchDragons } = useDragon()

  useEffect(() => {
    fetchDragons()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <Grid gap={5}>
      {listDragons?.map((item) => (
        <DragonCard
          key={item.id}
          id={item.id}
          name={item.name}
          type={item.type}
          createdAt={item.createdAt}
        />
      ))}
    </Grid>
  )
}
