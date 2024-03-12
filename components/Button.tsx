'use client';

import React from 'react'

type ButtonProps = {
    children?: React.ReactNode
    className: string
    onClick?: () => void
    onMouseEnter?: () => void
    onMouseLeave?: () => void
    type: "submit" | "reset" | "button"
}

const Button = ({className, children, onClick, type, onMouseEnter, onMouseLeave}: ButtonProps) => {
  return (
    <button type={type} className={`${className} flex items-center justify-center py-3 font-barlow rounded-md`} onClick={onClick} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
        {children}
    </button>
  )
}

export default Button;