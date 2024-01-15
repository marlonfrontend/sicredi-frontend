'use client'

import styled from 'styled-components'

export const HeadingStyle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.25rem;

  & .title {
    font-size: 1.25rem;
    font-weight: 600;
  }

  & .description {
    font-size: 0.875rem;
  }

  & .button {
    background-color: transparent;
    border-radius: 9999px;
    border: 1px solid #d2d6dc;
    height: 40px;
    display: flex;
    justify-content: center;
    width: 40px;
    align-items: center;
    margin-right: 15px;
    cursor: pointer;
    transition: all 0.2s ease-in-out;

    &:hover {
      border-color: var(--clr-primary);
      color: var(--clr-primary);
    }
  }

  & .heading-wrapper {
    display: flex;
    align-items: center;
  }
`
