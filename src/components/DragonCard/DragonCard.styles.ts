'use client'

import styled from 'styled-components'

export const DragonCardItemStyle = styled.div`
  text-align: left;
  small {
    text-transform: uppercase;
    margin-bottom: 5px;
    color: #999;
    display: block;
  }
`

export const DropdownTriggerStyle = styled.div`
  border: 1px solid #eee;
  border-radius: 50%;
  height: 40px;
  width: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 200ms ease;
  cursor: pointer;

  &:hover {
    border-color: var(--clr-primary);
    color: var(--clr-primary);
  }
`
