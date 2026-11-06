import React from 'react'
import IconClock from './Icons/IconClock'
import IconPerson from './Icons/IconPerson'
import IconShield from './Icons/IconShield'

const Characterstics = () => {
    return (
        <ul className='w-screen p-16 bg-button-text/10  font-nyght text-20 flex justify-center gap-[120px] ml-[10px] -translate-x-1/6 '>
            <li className='flex gap-16 items-center'><IconClock />Convenient Appointment Booking</li>
            <li className='flex gap-16 items-center'><IconPerson /> Personalized Care</li>
            <li className='flex gap-16 items-center'><IconShield /> Trusted Quality Assurance</li>
        </ul>
    )
}

export default Characterstics