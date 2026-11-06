
import React from 'react'
import { SvgType } from '@/Types/Svg'

const ArrowDown = ({ className }: SvgType) => {
    return (
        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" className={`${className} fill-[#3E3D3E]`}>
            <path d="M5.99634 8.0625C5.94716 8.0631 5.89839 8.0534 5.85318 8.03403C5.80798 8.01465 5.76732 7.98603 5.73384 7.95L2.35884 4.575C2.20884 4.425 2.20884 4.1925 2.35884 4.0425C2.50884 3.8925 2.74134 3.8925 2.89134 4.0425L6.00384 7.155L9.10884 4.05C9.25884 3.9 9.49134 3.9 9.64134 4.05C9.79134 4.2 9.79134 4.4325 9.64134 4.5825L6.26634 7.9575C6.19134 8.0325 6.09384 8.07 6.00384 8.07L5.99634 8.0625Z" />
        </svg>

    )
}

export default ArrowDown
