type NumberColumn = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12

export type GridProps = {
  gap?: 1 | 2 | 3 | 4 | 5
  justify?: 'start' | 'center' | 'end' | 'between'
  align?: 'start' | 'center' | 'end'
  direction?: 'column' | 'row'
}

export type GridItemProps = {
  col?: NumberColumn
  md?: NumberColumn
}
