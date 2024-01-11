'use client'

import React, {
  ReactNode,
  FormEvent,
  useState,
  ChangeEvent,
  useEffect,
} from 'react'

type FormProps<T> = {
  onSubmit: (data: T) => void
  children: ReactNode
  initialValues?: Record<string, any>
}

type InputProps = {
  name: string
  value: string
  onChange: (e: ChangeEvent<HTMLInputElement>) => void
}

export const Form = <T extends Record<string, any>>({
  onSubmit,
  children,
  initialValues,
}: FormProps<T>) => {
  const [formData, setFormData] = useState<T>(initialValues as T)

  const handleInputChange = (name: string, value: string) => {
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }))
  }

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    onSubmit(formData)
  }
  useEffect(() => {
    if (initialValues) {
      setFormData(initialValues as T)
    }
  }, [initialValues])

  return (
    <form onSubmit={handleSubmit}>
      {React.Children.map(children, (child) => {
        if (React.isValidElement(child)) {
          const { name } = child.props as InputProps
          return React.cloneElement(child, {
            ...child.props,
            value: formData?.[name],
            onChange: (e: ChangeEvent<HTMLInputElement>) =>
              handleInputChange(name, e.target.value),
            key: name,
          })
        }
        return child
      })}
    </form>
  )
}
