'use client'

import { Card, Container, Grid, Heading } from '@/components'
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
        <Grid gap={3} col>
          <div>
            <small>Historia</small>
            <div>{dragon?.histories}</div>
          </div>
          <div>
            <small>Tipo</small>
            <div>{dragon?.type}</div>
          </div>
        </Grid>
        {dragon?.createdAt && (
          <small>Criado em: {formatDate(dragon.createdAt)}</small>
        )}
      </Card>
    </Container>
  )
}
export default Page
