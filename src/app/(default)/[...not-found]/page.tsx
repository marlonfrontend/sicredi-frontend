import { Container, Grid } from '@/components'
import Link from 'next/link'

const Page = () => {
  return (
    <Container>
      <Grid direction="column" gap={5} align="center">
        <span className="flex-col text-4xl font-bold text-primary">
          Página não encontrada
        </span>
        <Link href="/dragons" className="inline-block hover:underline">
          Retornar para lista
        </Link>
      </Grid>
    </Container>
  )
}
export default Page
