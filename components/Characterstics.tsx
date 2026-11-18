import React from 'react'
import IconClock from './Icons/IconClock'
import IconPerson from './Icons/IconPerson'
import IconShield from './Icons/IconShield'

const Characterstics = () => {
    return (
        <ul className='w-full lg:w-[200vw] py-16 sticky z-[10]  lg:m-0 bg-button-text/10 font-nyght
            text-xs sm:text-sm lg:text-16
            flex flex-col sm:flex-row flex-wrap lg:flex-nowrap items-center justify-center 
            gap-3 sm:gap-4 lg:gap-[120px]
         '>
            <li className='flex gap-2 sm:gap-2.5 lg:gap-16 items-center shrink-0'>
                <IconClock className="shrink-0 w-5 h-5 sm:w-6 sm:h-6 lg:w-auto lg:h-auto" />
                <span className="whitespace-nowrap">Convenient Appointment Booking</span>
            </li>
            <li className='flex gap-2 sm:gap-2.5 lg:gap-16 items-center shrink-0'>
                <IconPerson className="shrink-0 w-5 h-5 sm:w-6 sm:h-6 lg:w-auto lg:h-auto" />
                <span className="whitespace-nowrap">Personalized Care</span>
            </li>
            <li className='flex gap-2 sm:gap-2.5 lg:gap-16 items-center shrink-0'>
                <IconShield className="shrink-0 w-5 h-5 sm:w-6 sm:h-6 lg:w-auto lg:h-auto" />
                <span className="whitespace-nowrap">Trusted Quality Assurance</span>
            </li>
        </ul>
    )
}

export default Characterstics
