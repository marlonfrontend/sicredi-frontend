'use client'

import styled, { css } from 'styled-components'
import { ButtonProps } from './Button.types'

export const ButtonStyle = styled.button<{$color: ButtonProps['color'], $block: ButtonProps['block'], $size: ButtonProps['size']}>`
  border: none;
  outline: none;
  cursor: pointer;
  border-radius: 0.375rem;

  ${({ $color }) => {
    switch ($color) {
      case 'primary':
        return css`
          background-color: var(--clr-primary);
          color: #ffffff;
        `
      case 'secondary':
        return css`
          background-color: var(--clr-secondary);
          color: #ffffff;
        `
      default:
        return null
    }
  }}

  ${({ $block }) =>
    $block &&
    css`
      width: 100%;
    `}

  ${({ $size }) => {
    switch ($size) {
      case 'sm':
        return css`
          font-size: 0.875rem;
          padding: 0.5rem 0.75rem;
        `
      case 'md':
        return css`
          font-size: 1rem;
          padding: 0.5rem 1.25rem;
        `
      case 'lg':
        return css`
          font-size: 1rem;
          padding: 0.75rem 1.25rem;
        `
      default:
        return null
    }
  }}
`
