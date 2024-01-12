'use client'

import { Card, Container, DragonForm, Heading } from '@/components'
import { useDragon } from '@/stores'

const Page = () => {
  const { createDragon } = useDragon()

  return (
    <Container>
      <Heading backButton title="Criar dragão" />
      <Card>
        <DragonForm onSubmit={createDragon} />
      </Card>
    </Container>
  )
}
export default Page
