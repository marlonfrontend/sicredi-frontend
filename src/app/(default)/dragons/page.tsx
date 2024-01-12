'use client'
import { Button, DragonList, Container, Heading } from '@/components'
import { useRouter } from 'next/navigation'
import { useDragon } from '@/stores'

const Page = () => {
  const router = useRouter()
  const { listDragons } = useDragon()

  return (
    <Container>
      <Heading
        title={`Resultado (${listDragons?.length})`}
        endContent={
          <Button onClick={() => router.push('/dragons/create')} size="lg">
            Adicionar Dragão
          </Button>
        }
      />
      <DragonList />
    </Container>
  )
}
export default Page
