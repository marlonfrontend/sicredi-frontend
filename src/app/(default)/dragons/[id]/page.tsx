'use client'

import { Container } from '@/components'
import { useDragon } from '@/stores'
import { useParams } from 'next/navigation'
import { useEffect } from 'react'

const Page = () => {
  const { dragon, fetchDragonById } = useDragon()

  const params = useParams() as { id: string }

  useEffect(() => {
    fetchDragonById(params.id)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <Container>
      <div>listing {params.id}</div>
      {JSON.stringify(dragon)}
    </Container>
  )
}
export default Page
