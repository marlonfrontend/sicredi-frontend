import { tv } from 'tailwind-variants'

export const InputStyle = tv({
  slots: {
    base: 'w-full relative',
    label: 'text-sm',
    input:
      'w-full px-3 py-2 text-base leading-5 text-gray-700 transition duration-300 ease-in-out transform border rounded-md focus:outline-none focus:shadow-outline-blue focus:border-primary sm:text-sm sm:leading-5',
    error: 'text-sm text-red-600',
  },
})
