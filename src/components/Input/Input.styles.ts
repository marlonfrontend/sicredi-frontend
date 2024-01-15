'use client'

import styled from 'styled-components'
import { InputProps } from './Input.types'

export const InputStyle = styled.div<InputProps>`
  width: 100%;
  position: relative;

  & .label {
    font-size: 0.875rem;
    margin-bottom: 5px;
    display: block;
  }

  & .input {
    width: 100%;
    padding: 10px 10px;
    font-size: 15px;
    color: #111;
    transition:
      border 0.3s ease-in-out,
      transform 0.3s ease-in-out;
    border: 1px solid #cbd5e0;
    border-radius: 6px;
    outline: none;
    &:focus {
      border-color: var(--clr-primary);
    }
    &.sm {
      font-size: 0.875rem;
      line-height: 1.5;
    }
  }

  & .error {
    font-size: 0.875rem;
    color: #e53e3e;
  }
`
