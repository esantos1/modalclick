import React from 'react'
import Button from './Button'

interface ModalProps {
  setOpen: (open: boolean) => void
}

const Modal = ({ setOpen }: ModalProps) => {
  return (
    // estiliza a parte externa do modal
    <div className="absolute flex justify-center items-center h-screen w-screen bg-stone-900 bg-opacity-55 top-0 p-2">
      {/* dá a borda em gradiente */}
      <div className="relative p-1 bg-gradient-to-r from-sky-500 to-pink-500 rounded overflow-hidden">
        {/* estiliza a parte interna do modal */}
        <div className="relative h-auto min-h-44 w-auto max-w-2xl p-16 bg-white rounded space-y-6">
          <Button
            className="absolute right-2 top-2 bg-transparent hover:bg-gray-300 text-black text-center text-2xl font-bold rounded-full w-12 h-12"
            onClick={(e) => setOpen(false)}
          >
            X
          </Button>

          <h1 className="mb-3 font-extrabold text-3xl">Lorem ipsum!</h1>
          <p className="text-gray-400 text-justify">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. At officia quod ab quo eum
            magnam, dicta asperiores esse possimus mollitia labore assumenda tempore et! Mollitia
            dolor aspernatur impedit excepturi quae?
          </p>
          <div className="w-full flex flex-row flex-grow gap-4">
            <Button className="flex-1 " onClick={(e) => setOpen(false)}>
              Lorem
            </Button>
            <Button
              className="flex-1 bg-pink-500 hover:bg-pink-800"
              onClick={(e) => setOpen(false)}
            >
              Ipsum
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Modal
