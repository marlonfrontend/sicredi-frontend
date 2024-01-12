'use client'

import { Card, Container, DragonForm, Heading } from '@/components'
import { useDragon } from '@/stores'
import { useParams } from 'next/navigation'
import { useEffect } from 'react'

const Page = () => {
  const { dragon, fetchDragonById, updateDragon } = useDragon()

  const params = useParams() as { id: string }

  useEffect(() => {
    fetchDragonById(params.id)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <Container>
      <Heading backButton title={`Editar ${dragon ? dragon.name : ''}`} />
      <Card>
        <DragonForm onSubmit={updateDragon} initialValues={dragon} />
      </Card>
    </Container>
  )
}
export default Page
