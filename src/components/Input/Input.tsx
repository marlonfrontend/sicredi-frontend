import { InputProps } from './Input.types'
import { inputStyles } from './Input.styles'
import { forwardRef } from 'react'

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ onChange, value, ...props }, ref) => {
    const { base, input, label } = inputStyles()

    return (
      <div className={base()}>
        <label className={label()}>{props.label}</label>
        <input
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

Input.displayName = 'Input'
