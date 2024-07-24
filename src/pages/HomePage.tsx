'use client'

import Button from '@/components/Button'
import Modal from '@/components/Modal'
import React from 'react'

const HomePage = () => {
  const [open, setOpen] = React.useState(false)

  return (
    <main className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden">
      <Button className="w-auto max-w-64 px-14" onClick={(e) => setOpen(true)}>
        Show Modal
      </Button>
      {open && <Modal setOpen={setOpen} />}
    </main>
  )
}

export default HomePage
