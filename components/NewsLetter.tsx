import React from 'react'
import { IconStone } from './Icons/IconStone'
import Button from './Button'

const NewsLetter = () => {
    return (
        <section className='w-full bg-linear-to-r from-[#00A3A3]/40 to-[#008000]/40 p-[2px] rounded-[16px] sm:rounded-[20px] lg:rounded-[24px] relative overflow-hidden'>
            <div className='bg-white absolute inset-[2px] rounded-[16px] sm:rounded-[20px] lg:rounded-[24px]' />
            <div className='bg-linear-to-r from-[#99FFFF]/60 to-[#C9FFC9]/60 min-h-[220px] sm:min-h-[240px] lg:h-[289px] px-5 py-6 sm:px-8 sm:py-8 lg:pl-[24px] lg:p-[48px] w-full rounded-[16px] sm:rounded-[20px] lg:rounded-[24px] relative overflow-hidden flex flex-col justify-center gap-4 sm:gap-6 lg:gap-[32px]'>
                <div className='flex flex-col max-w-full sm:max-w-[80%] lg:max-w-[60%] gap-2 sm:gap-3 lg:gap-[16px] relative z-10'>
                    <h2 className='font-nyght text-xl sm:text-2xl lg:text-36 relative leading-tight'>
                        Subscribe to Our Newsletter
                    </h2>
                    <p className='font-poppins text-xs sm:text-sm lg:text-16 text-dark-bg/75 font-[300] leading-relaxed'>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.
                    </p>
                </div>
                <IconStone className='absolute top-[-45px] right-[-45px] hidden sm:block pointer-events-none' />
                <div className='flex flex-col sm:flex-row gap-3 sm:gap-[8px] items-stretch sm:items-center relative z-10'>
                    <input
                        className='w-full sm:w-[320px] lg:w-[420px] h-[44px] lg:h-full bg-white font-poppins text-xs sm:text-sm lg:text-16 text-dark-bg/75 rounded-[8px] border border-button-text pl-3 sm:pl-4 lg:pl-24 py-2 sm:py-0 outline-none'
                        placeholder='Enter your email address'
                    />
                    <Button className='font-[600] justify-center sm:justify-start h-[44px] lg:h-auto text-xs sm:text-sm lg:text-16'>
                        Submit
                    </Button>
                </div>
            </div>
        </section>
    )
}

export default NewsLetter
