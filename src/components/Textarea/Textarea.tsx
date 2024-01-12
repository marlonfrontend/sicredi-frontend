import { TextareaProps } from './Textarea.types'
import { TextareaStyle } from './Textarea.styles'
import { forwardRef } from 'react'

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ onChange, value, ...props }, ref) => {
    const { base, input, label } = TextareaStyle()

    return (
      <div className={base()}>
        <label className={label()}>{props.label}</label>
        <textarea
          ref={ref}
          defaultValue={value}
          className={input()}
          onChange={onChange}
          {...props}
        />
      </div>
    )
  },
)

Textarea.displayName = 'Textarea'
