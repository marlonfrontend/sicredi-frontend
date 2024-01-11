import Image from 'next/image'
import Link from 'next/link'

import { Container, Grid } from '@/components'
import { HeaderStyle } from './Header.styles'

export const Header = () => {
  return (
    <header className={HeaderStyle()}>
      <Container>
        <Grid justify="between">
          <Link href="/">
            <Image src="/img/logo.svg" width={120} height={80} alt="Sicredi" />
          </Link>
          <Link href="/">Sair</Link>
        </Grid>
      </Container>
    </header>
  )
}
