'use client'

import { DragonCard, Grid, LoadingList } from '@/components'
import { useDragon } from '@/stores'
import { useEffect } from 'react'

export const DragonList = () => {
  const { loadingDragons, listDragons, fetchDragons, deleteDragon } =
    useDragon()

  useEffect(() => {
    fetchDragons()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  if (loadingDragons) return <LoadingList />

  return (
    <Grid gap={5}>
      {listDragons?.map((item) => (
        <DragonCard
          key={item.id}
          id={item.id}
          name={item.name}
          type={item.type}
          createdAt={item.createdAt}
          onDelete={() => deleteDragon(item.id)}
        />
      ))}
    </Grid>
  )
}
