import { tv } from 'tailwind-variants'

export const ModalStyle = tv({
  slots: {
    base: 'fixed inset-0 z-50 flex items-center justify-center',
    overlay: 'absolute inset-0 bg-black/30 backdrop-blur-sm',
    wrapper: 'w-full relative z-50 rounded-md bg-white',
    closeButton:
      'absolute right-2 top-2 rounded-full bg-gray-50 p-1 text-gray-500 hover:text-gray-700 focus:outline-none',
  },
})
