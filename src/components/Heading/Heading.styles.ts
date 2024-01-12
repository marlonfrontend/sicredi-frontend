import { tv } from 'tailwind-variants'

export const HeadingStyle = tv({
  slots: {
    base: 'mb-5',
    title: 'text-xl font-semibold',
    description: 'text-sm',
  },
})
