'use client'

import styled, { css } from 'styled-components'
import { GridProps, GridItemProps } from './Grid.types'

export const GridStyle = styled.div<{$gap: GridProps['gap'], $justify: GridProps['justify'], $align: GridProps['align'], $direction: GridProps['direction']}>`
  display: flex;
  flex-wrap: wrap;
  margin-left: -0.75rem;

  ${({ $gap }) =>
    $gap &&
    css`
      gap: ${$gap * 0.25}rem;
    `}

  ${({ $justify }) =>
    $justify &&
    css`
      justify-content: ${$justify};
    `}

  ${({ $align }) =>
    $align &&
    css`
      align-items: ${$align};
    `}

  ${({ $direction }) =>
    $direction &&
    css`
      flex-direction: ${$direction};
    `}
`

export const GridItemStyles = styled.div<{$col: GridItemProps['col'], $md: GridItemProps['md']}>`
  width: 100%;
  padding-left: 0.75rem;
  ${({ $col }) =>
    $col &&
    css`
      width: ${($col / 12) * 100}%;
    `}

  ${({ $md }) =>
    $md &&
    css`
      @media (min-width: 768px) {
        width: ${($md / 12) * 100}%;
        flex: 1;
      }
    `}
`
