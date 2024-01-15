'use client'

import styled from 'styled-components'

export const DropdownStyle = styled.div`
  position: relative;

  & .dropdown-content {
    position: absolute;
    z-index: 20;
    border-radius: 0.375rem;
    background-color: #ffffff;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
    display: flex;
    min-width: 150px;
    flex-direction: column;
    padding: 0.5rem 0;
    right: 0;
  }

  & .dropdown-item {
    width: 100%;
    cursor: pointer;
    padding: 0.5rem 1rem;
    text-align: left;
    font-size: 16px;
    background-color: #fff;
    border: 0;
    &:hover {
      background-color: #f3f4f6;
    }
  }
`
