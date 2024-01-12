import { tv } from 'tailwind-variants'

export const GridStyle = tv({
  base: 'flex flex-wrap -mx-3',
  variants: {
    gap: {
      1: 'gap-y-1',
      2: 'gap-y-2',
      3: 'gap-y-3',
      4: 'gap-y-4',
      5: 'gap-y-5',
    },
    justify: {
      start: 'justify-start',
      center: 'justify-center',
      end: 'justify-end',
      between: 'justify-between',
    },
    align: {
      start: 'items-start',
      center: 'items-center',
      end: 'items-end',
    },
    direction: {
      column: 'flex-col',
      row: 'flex-row',
    },
  },
  defaultVariants: {
    direction: 'row',
  },
})

export const GridItemStyles = tv({
  base: 'w-full px-3',
  variants: {
    col: {
      1: 'w-1/12',
      2: 'w-2/12',
      3: 'w-3/12',
      4: 'w-4/12',
      5: 'w-5/12',
      6: 'w-6/12',
      7: 'w-7/12',
      8: 'w-8/12',
      9: 'w-9/12',
      10: 'w-10/12',
      11: 'w-11/12',
      12: 'w-full',
    },
    md: {
      1: 'md:w-1/12',
      2: 'md:w-2/12',
      3: 'md:w-3/12',
      4: 'md:w-4/12',
      5: 'md:w-5/12',
      6: 'md:w-6/12',
      7: 'md:w-7/12',
      8: 'md:w-8/12',
      9: 'md:w-9/12',
      10: 'md:w-10/12',
      11: 'md:w-11/12',
      12: 'md:w-full',
    },
  },
})
