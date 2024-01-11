'use client'

import { Button, Card, Container, Form, Input } from '@/components'
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
      <Card>
        <Form onSubmit={updateDragon} initialValues={dragon}>
          <Input name="name" />
          <Button type="submit">Salvar</Button>
        </Form>
      </Card>
    </Container>
  )
}
export default Page
