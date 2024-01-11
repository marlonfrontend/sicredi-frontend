import { Grid } from '@/components'
import { HeadingProps } from './Heading.types'
import { HeadingStyle } from './Heading.styles'

export const Heading = ({ endContent, ...props }: HeadingProps) => {
  const { title, description } = HeadingStyle()

  return (
    <Grid justify="between">
      <div className={title()}>{props.title}</div>
      {props.description && (
        <div className={description()}>{props.description}</div>
      )}
      {endContent}
    </Grid>
  )
}
