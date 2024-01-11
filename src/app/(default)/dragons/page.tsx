import { Button, DragonList, Container, Heading } from '@/components'

const Page = () => {
  return (
    <Container>
      <Heading
        title="Resultado (10)"
        endContent={<Button size="lg">Adicionar Dragão</Button>}
      />
      <DragonList />
    </Container>
  )
}
export default Page
