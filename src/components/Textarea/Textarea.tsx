import { TextareaProps } from './Textarea.types'
import { TextareaStyle } from './Textarea.styles'
import { forwardRef } from 'react'

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ onChange, value, errors, ...props }, ref) => {
    return (
      <TextareaStyle>
        <label className="label">{props.label}</label>
        <textarea
          ref={ref}
          defaultValue={value}
          className="textarea"
          onChange={onChange}
          {...props}
        />
        {errors && <div className="error">{errors}</div>}
      </TextareaStyle>
    )
  },
)

Textarea.displayName = 'Textarea'
