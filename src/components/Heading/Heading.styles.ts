import { tv } from 'tailwind-variants'

export const HeadingStyle = tv({
  slots: {
    base: 'flex justify-between items-center mb-5',
    title: 'text-xl font-semibold',
    description: 'text-sm',
  },
})
