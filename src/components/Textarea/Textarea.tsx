import { TextareaProps } from './Textarea.types'
import { TextareaStyle } from './Textarea.styles'
import { forwardRef } from 'react'

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ onChange, value, errors, ...props }, ref) => {
    const { base, textarea, label, error } = TextareaStyle()

    return (
      <div className={base()}>
        <label className={label()}>{props.label}</label>
        <textarea
          ref={ref}
          defaultValue={value}
          className={textarea()}
          onChange={onChange}
          {...props}
        />
        {errors && <div className={error()}>{errors}</div>}
      </div>
    )
  },
)

Textarea.displayName = 'Textarea'
