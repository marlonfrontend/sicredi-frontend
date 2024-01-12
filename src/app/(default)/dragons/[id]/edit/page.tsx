'use client'

import { Card, Container, DragonForm, Heading } from '@/components'
import { useParams } from 'next/navigation'
import { useEffect } from 'react'
import { useDragon } from '@/stores'
import { UpdateDragonTypeSchema } from '@/types'

const Page = () => {
  const { dragon, fetchDragonById, handleUpdateDragon } = useDragon()

  const params = useParams() as { id: string }

  useEffect(() => {
    fetchDragonById(params.id)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <Container>
      <Heading backButton title={`Editar ${dragon ? dragon.name : ''}`} />
      <Card>
        <DragonForm
          schema={UpdateDragonTypeSchema}
          onSubmit={(payload) => handleUpdateDragon(params.id, payload)}
          initialValues={dragon}
        />
      </Card>
    </Container>
  )
}
export default Page
