import { gradientProps } from '@/Types/Gradient'
import React from 'react'

const BgGradient = () => {
    return (
        <div className='z-0 pointer-events-none absolute w-[1200px] h-[680px] inset-x-0 top-[-648px] opacity-[0.2] rotate-20 bg-gradient blur-[150px]'>

        </div>
    )
}

export default BgGradient

const SkinGradient = ({ className }: gradientProps) => {
    return (
        <div className={`${className} z-0 pointer-events-none absolute w-[1000px] h-[680px]  bg-[#EFE9B0]/50 blur-[40px]`}>

        </div>
    )
}

export { SkinGradient }

const BlueGradient = ({ className }: gradientProps) => {
    return (
        <div className={`${className} z-0 pointer-events-none absolute w-[1000px] h-[680px] bg-[#ABEAE8]/30 blur-[40px]`}>

        </div>
    )
}

export { BlueGradient }

const PurpleGradient = ({ className }: gradientProps) => {
    return (
        <div className={`${className} z-0 pointer-events-none absolute w-[1200px] h-[680px] bg-[#BBC0FE] blur-[40px]`}>

        </div>
    )
}

export { PurpleGradient }

const WhiteGradient = ({ className }: gradientProps) => {
    return (
        <div className={`${className} z-0 pointer-events-none absolute w-[1200px] h-[1000px] bg-white blur-[40px]`}>

        </div>
    )
}

export { WhiteGradient }




