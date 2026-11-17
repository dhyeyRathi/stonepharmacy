import React from 'react'
import { ButtonType } from '@/Types/Button'

const Button = ({ className, children, onClick }: ButtonType) => {
    return (
        <button className={`${className} text-button-text font-poppins flex items-center text-16 py-10 px-24 rounded-[12px]
        bg-[linear-gradient(180deg,#3E3D3E_0%,#403E40_79.91%,#5E5D5E_100%)] button-shadow
        cursor-pointer
       border-2
       border-black gap-8
`} onClick={onClick}>
            {children}
        </button>
    )
}

export default Button



export const ButtonVar2 = ({ className, children, onClick }: ButtonType) => {
    return (
        <div className='rounded-xl bg-gradient-to-r from-[#E1E1E1] to-[#ADADAD] p-[1px]'>
            <button type="button" className={`${className} 
            w-full rounded-xl bg-[#FEFEFE] px-[24px] py-[10px] cursor-pointer hover:bg-neutral-50 transition-colors`}
                onClick={onClick}>
                {children}
            </button>
        </div>
    )
}