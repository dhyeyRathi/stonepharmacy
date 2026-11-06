import React from 'react'
import { ButtonType } from '@/Types/Button'

const Button = ({ className, children }: ButtonType) => {
    return (
        <button className={`${className} text-button-text font-poppins flex items-center text-16 py-10 px-24 rounded-[12px]
        bg-[linear-gradient(180deg,#3E3D3E_0%,#403E40_79.91%,#5E5D5E_100%)] button-shadow
        cursor-pointer
       border-2
       border-black gap-8
`}>
            {children}
        </button>
    )
}

export default Button

