import { tv } from 'tailwind-variants'

export const DropdownStyle = tv({
  slots: {
    base: 'relative',
    content:
      'absolute z-20 rounded-md bg-white shadow flex min-w-[150px] flex-col py-2 right-0',
    item: 'w-full cursor-pointer px-4 py-2 text-left hover:bg-gray-100',
  },
})
