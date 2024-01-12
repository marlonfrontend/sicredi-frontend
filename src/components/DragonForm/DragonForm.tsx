'use client'

import { Button, Grid, GridItem, Input, Textarea } from '@/components'
import { DragonFormStyle } from './DragonForm.styles'
import { DragonFormProps } from './DragonForm.types'
import { Path, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { useEffect } from 'react'
import { DragonsType } from '@/types'

export const DragonForm = <T extends DragonsType>({
  onSubmit,
  initialValues,
  schema,
}: DragonFormProps<T>) => {
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm<T>({
    resolver: zodResolver(schema),
  })

  useEffect(() => {
    reset(initialValues)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [initialValues])

  const { base, actionForm } = DragonFormStyle()

  return (
    <form className={base()} onSubmit={handleSubmit(onSubmit)}>
      <Grid gap={5}>
        <GridItem col={12} md={6}>
          <Input
            label="Nome"
            {...register('name' as Path<T>)}
            errors={errors.name?.message as string}
          />
        </GridItem>
        <GridItem col={12} md={6}>
          <Input
            label="Tipo"
            {...register('type' as Path<T>)}
            errors={errors.type?.message as string}
          />
        </GridItem>
        <GridItem col={12}>
          <Textarea
            label="Historia"
            {...register('histories' as Path<T>)}
            name="histories"
          />
        </GridItem>
      </Grid>
      <div className={actionForm()}>
        <Button type="submit" size="lg">
          Salvar
        </Button>
      </div>
    </form>
  )
}
