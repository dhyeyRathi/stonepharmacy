import React from 'react'
import { IconStone } from './Icons/IconStone'
import Button from './Button'

const NewsLetter = () => {
    return (
        <section className='w-full bg-linear-to-r from-[#00A3A3]/40 to-[#008000]/40  p-[2px] rounded-[24px] relative overflow-hiddens' >
            <div className='bg-white absolute inset-[2px] rounded-[24px] ' />
            <div className='bg-linear-to-r from-[#99FFFF]/60 to-[#C9FFC9]/60 h-[289px] pl-[24px] p-[48px] w-full rounded-[24px] relative overflow-hidden
            flex flex-col gap-[32px]'>
                <div className='flex flex-col max-w-[60%] gap-[16px]'>
                    <h2 className='font-nyght text-36 relative '>
                        Subscribe to Our Newsletter
                    </h2>
                    <p className='font-poppins text-16 text-dark-bg/75 font-[300]'>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.
                    </p>
                </div>
                <IconStone className='absolute top-[-45] right-[-45]' />
                <div className='flex gap-[8px] items-center'>
                    <input className='w-[420px] h-full bg-white font-poppins text-16 text-dark-bg/75 rounded-[8px] border-1 border-button-text pl-24'
                        placeholder='Enter your email address' />
                    <Button className='font-[600]'>Submit</Button>
                </div>

            </div>
        </section>
    )
}

export default NewsLetter