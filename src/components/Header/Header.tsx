import Image from 'next/image'
import Link from 'next/link'

import { Button, Container, Grid } from '@/components'
import { HeaderStyle } from './Header.styles'
import { useAuth } from '@/stores'

export const Header = () => {
  const { signOut } = useAuth()

  return (
    <header className={HeaderStyle()}>
      <Container>
        <Grid justify="between" align="center">
          <Link href="/">
            <Image
              src="/img/logo.svg"
              priority
              width={120}
              height={80}
              alt="Sicredi"
            />
          </Link>
          <Button color="secondary" onClick={signOut}>
            Sair
          </Button>
        </Grid>
      </Container>
    </header>
  )
}
