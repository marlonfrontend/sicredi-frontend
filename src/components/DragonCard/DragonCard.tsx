import { Card } from '@/components'
import { DragonCardProps } from './DragonCard.types'
import { formatDate } from '@/utils/formatters'
// import { useRouter } from 'next/navigation'

export const DragonCard = ({ id, name, type, createdAt }: DragonCardProps) => {
  // const router = useRouter()

  // const redirect = (id: string) => {
  //   // router.push(`/dragons/${id}`)
  // }

  return (
    <Card>
      <div className="flex justify-between">
        <div className="w-1/4">
          <small className="uppercase text-black/40">Nome</small>
          <div>{name}</div>
        </div>
        <div className="w-1/4">
          <small className="uppercase text-black/40">Tipo</small>
          <div>{type}</div>
        </div>
        <div className="w-1/4">
          <small className="uppercase text-black/40">Criado em</small>
          <div>{formatDate(createdAt)}</div>
        </div>
        <div className="w-1/4">
          <div className="flex items-center gap-3">
            <a href={`/dragons/${id}`}>Detalhes</a>
            <a href={`/dragons/${id}`}>Editar</a>
            <a>Deletar</a>
          </div>
        </div>
      </div>
    </Card>
  )
}
