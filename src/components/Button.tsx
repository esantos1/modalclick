import React, { ButtonHTMLAttributes } from 'react'
import { twMerge } from 'tailwind-merge'

const Button: React.FC<ButtonHTMLAttributes<HTMLButtonElement>> = ({ className, ...props }) => {
  return (
    <button
      type="button"
      className={twMerge(
        'py-2 bg-black text-lg font-semibold text-white uppercase rounded hover:bg-gray-800 transition-all',
        className
      )}
      {...props}
    ></button>
  )
}

export default Button
