import { tv } from 'tailwind-variants'

export const GridStyle = tv({
  base: 'flex flex-wrap',
  variants: {
    gap: {
      1: 'gap-1',
      2: 'gap-2',
      3: 'gap-3',
      4: 'gap-4',
      5: 'gap-5',
    },
    justify: {
      start: 'justify-start',
      center: 'justify-center',
      end: 'justify-start',
      between: 'justify-between',
    },
  },
  defaultVariants: {},
})
