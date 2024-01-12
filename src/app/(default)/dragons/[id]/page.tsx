'use client'

import { Card, Container, Grid, GridItem, Heading } from '@/components'
import { useDragon } from '@/stores'
import { formatDate } from '@/utils/formatters'
import { useParams } from 'next/navigation'
import { useEffect } from 'react'

const Page = () => {
  const { dragon, fetchDragonById } = useDragon()

  const params = useParams() as { id: string }

  useEffect(() => {
    fetchDragonById(params.id)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <Container>
      <Heading backButton title={dragon?.name} />
      <Card>
        <Grid gap={3} direction="column">
          <GridItem>
            <small>Historia</small>
            <div>{dragon?.histories}</div>
          </GridItem>
          <GridItem>
            <small>Tipo</small>
            <div>{dragon?.type}</div>
          </GridItem>
        </Grid>
        {dragon?.createdAt && (
          <small>Criado em: {formatDate(dragon.createdAt)}</small>
        )}
      </Card>
    </Container>
  )
}
export default Page
