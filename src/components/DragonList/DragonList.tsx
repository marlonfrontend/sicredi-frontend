'use client'

import { DragonCard, Grid, GridItem, LoadingList } from '@/components'
import { useDragon } from '@/stores'
import { useEffect } from 'react'

export const DragonList = () => {
  const { loadingDragons, listDragons, fetchDragons, handleDeleteDragon } =
    useDragon()

  useEffect(() => {
    fetchDragons()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  if (loadingDragons) return <LoadingList />

  return (
    <Grid gap={5}>
      {listDragons?.map((item) => (
        <GridItem col={12} key={item.id}>
          <DragonCard
            id={item.id}
            name={item.name}
            type={item.type}
            createdAt={item.createdAt}
            onDelete={() => handleDeleteDragon(item.id)}
          />
        </GridItem>
      ))}
    </Grid>
  )
}
