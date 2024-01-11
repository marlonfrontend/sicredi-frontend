import { tv } from 'tailwind-variants'

export const ButtonStyle = tv({
  base: 'rounded-lg',
  variants: {
    color: {
      primary: 'bg-primary text-white',
      secondary: 'bg-secondary text-white',
    },
    block: {
      true: 'w-full',
    },
    size: {
      sm: 'text-sm py-2 px-3',
      md: 'text-base py-2 px-5',
      lg: 'text-base py-3 px-5',
    },
  },
  defaultVariants: {
    color: 'primary',
    size: 'md',
  },
})
