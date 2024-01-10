import { InputProps } from './Input.types'
import { inputStyles } from './Input.styles'

import { ChangeEvent } from 'react'

export const Input = ({ label, value, onChange }: InputProps) => {
  const { base } = inputStyles()

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.value)
  }
  return (
    <div className={base()}>
      <label>{label}</label>
      <input type="text" value={value} onChange={handleChange} />
    </div>
  )
}
