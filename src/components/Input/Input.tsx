import { InputProps } from './Input.types'
import { InputStyle } from './Input.styles'
import { forwardRef } from 'react'

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ onChange, value, errors, ...props }, ref) => {
    const { base, input, label, error } = InputStyle()

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
        {errors && <div className={error()}>{errors}</div>}
      </div>
    )
  },
)

Input.displayName = 'Input'
