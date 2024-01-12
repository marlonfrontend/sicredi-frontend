'use client'

import { Card, Container, DragonForm, Heading } from '@/components'
import { useDragon } from '@/stores'
import { CreateDragonTypeSchema } from '@/types'

const Page = () => {
  const { handleCreateDragon } = useDragon()

  return (
    <Container>
      <Heading backButton title="Criar dragão" />
      <Card>
        <DragonForm
          schema={CreateDragonTypeSchema}
          onSubmit={handleCreateDragon}
        />
      </Card>
    </Container>
  )
}
export default Page
