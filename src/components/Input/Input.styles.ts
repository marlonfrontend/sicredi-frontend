import { tv } from 'tailwind-variants'

export const inputStyles = tv({
  slots: {
    base: 'relative',
    label: 'text-sm',
    input:
      'w-full px-3 py-2 text-base leading-5 text-gray-700 transition duration-300 ease-in-out transform border rounded-md focus:outline-none focus:shadow-outline-blue focus:border-primary sm:text-sm sm:leading-5',
  },
})
