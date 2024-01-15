import { InputProps } from './Input.types'
import { InputStyle } from './Input.styles'
import { forwardRef } from 'react'

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ onChange, value, errors, ...props }, ref) => {
    return (
      <InputStyle>
        <label className="label">{props.label}</label>
        <input
          ref={ref}
          defaultValue={value}
          className="input"
          onChange={onChange}
          {...props}
        />
        {errors && <div className="error">{errors}</div>}
      </InputStyle>
    )
  },
)

Input.displayName = 'Input'
