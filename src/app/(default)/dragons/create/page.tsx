'use client'

import { Card, Container, DragonForm, Heading } from '@/components'
import { useDragon } from '@/stores'

const Page = () => {
  const { handleCreateDragon } = useDragon()

  return (
    <Container>
      <Heading backButton title="Criar dragão" />
      <Card>
        <DragonForm onSubmit={handleCreateDragon} />
      </Card>
    </Container>
  )
}
export default Page
