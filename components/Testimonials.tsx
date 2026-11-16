"use client"
import { RedSpark, RedUnderlineVar2 } from './Icons/RedUnderline'
import BgGradient from './ui/Gradients'
import Image from 'next/image'
import { GoogleLogo } from './Icons/Google'
import { IconQuotes } from './Icons/IconsQuote'
import { BlueStars } from './Icons/IconStar'
import { ArrowLeft, ArrowRight } from './Icons/IconArrows'
import React, { useCallback, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import type { Swiper as SwiperClass } from 'swiper/types';
import 'swiper/css';
import 'swiper/css/pagination';

const testimonials = [
    {
        quote: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
        name: 'Marina Lewis',
        avatar: '/Images/avatar.png',
    },
    {
        quote: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
        name: 'Marina Lewis',
        avatar: '/Images/avatar.png',
    },
    {
        quote: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
        name: 'Marina Lewis',
        avatar: '/Images/avatar.png',
    },
];

const Testimonials = () => {
    const [swiperInstance, setSwiperInstance] = useState<SwiperClass | null>(null);

    const handlePrev = useCallback(() => {
        swiperInstance?.slidePrev();
    }, [swiperInstance]);

    const handleNext = useCallback(() => {
        swiperInstance?.slideNext();
    }, [swiperInstance]);

    return (
        <section className='flex flex-col gap-6 sm:gap-8 lg:gap-[40px] items-center w-full relative '>
            <h2 className='font-nyght text-xl sm:text-2xl lg:text-36 relative flex items-center justify-center gap-2 text-center leading-tight'>
                <RedSpark className="shrink-0" />
                <span>Trusted by Patients, Honoured by the Industry</span>
                <RedUnderlineVar2 className='absolute bottom-[-25] left-85 hidden lg:block pointer-events-none' />
            </h2>
            <BgGradient className='top-[250px] left-[-300px] w-[1000px] opacity-30 h-[400px] blur-[150px] !rotate-0 bg-gradient z-[-1] pointer-events-none' />

            <div className='flex w-full gap-6 lg:gap-24 flex-col lg:flex-row items-center lg:items-stretch'>

                <Swiper
                    slidesPerView={1}
                    spaceBetween={30}
                    loop={true}
                    className="mySwiper w-full lg:w-1/2"
                    onSwiper={setSwiperInstance}
                >
                    {testimonials.map((testimonial, index) => (
                        <SwiperSlide
                            key={index}
                            className='h-full w-full rounded-[16px] border-2 border-button-text bg-[#FCFBFF]
                            px-5 py-6 sm:px-[32px] sm:py-[32px] lg:px-[34px] lg:py-[48px]
                            !flex flex-col gap-4 sm:gap-6 lg:gap-[32px] justify-between'
                        >
                            <IconQuotes className="shrink-0" />
                            <h3 className='font-poppins text-xs sm:text-sm lg:text-[20px] font-[300] text-dark-bg/75 max-w-full lg:max-w-[90%] leading-relaxed'>
                                {testimonial.quote}
                            </h3>
                            <BlueStars className="shrink-0" />
                            <div className='flex justify-between items-center w-full mt-auto pt-2 flex-wrap gap-3'>
                                <div className='flex gap-3 lg:gap-[14px] items-center'>
                                    <Image
                                        className='w-12 h-12 sm:w-14 sm:h-14 lg:w-20 lg:h-20 rounded-full'
                                        src={testimonial.avatar}
                                        alt='avatar of user'
                                        width={80}
                                        height={80}
                                    />
                                    <h4 className='font-poppins text-sm sm:text-base lg:text-[20px] font-[500] text-[#00A3A3]'>
                                        {testimonial.name}
                                    </h4>
                                </div>
                                <div className='flex items-center gap-2'>
                                    <button
                                        type="button"
                                        onClick={handlePrev}
                                        aria-label="Previous testimonial"
                                        className='rounded-full p-2 lg:px-[10px] lg:py-[10px] border border-[#989898] hover:bg-gray-100 transition-colors cursor-pointer'
                                    >
                                        <ArrowLeft />
                                    </button>
                                    <button
                                        type="button"
                                        onClick={handleNext}
                                        aria-label="Next testimonial"
                                        className='rounded-full p-2 lg:px-[10px] lg:py-[10px] border border-[#989898] hover:bg-gray-100 transition-colors cursor-pointer'
                                    >
                                        <ArrowRight />
                                    </button>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>

                <div className='w-full lg:w-1/2 grid grid-cols-2 grid-rows-3 place-items-center grid-flow-col gap-3 sm:gap-4 lg:gap-24 max-w-[500px] lg:max-w-none'>
                    <Image
                        src={`/Images/griditem1.png`}
                        alt={`grid-item-1`}
                        width={1000}
                        height={1000}
                        className='w-full lg:w-[270px] h-full row-span-2 object-cover rounded-xl'
                    />
                    <div className='relative overflow-hidden rounded-[8px] w-full'>
                        <Image
                            src={`/Images/googleReviewbg.png`}
                            alt={`Google Reviews`}
                            width={1000}
                            height={1000}
                            className='w-full h-auto object-cover'
                        />
                        <BgGradient className='inset-0 left-[-150] w-[300px] top-[-100] h-[400px] rotate-0 blur-[50px] bg-[#B8E3DB] pointer-events-none' />
                        <div className='absolute inset-0 z-[10] pt-[28%] sm:pt-[35%] pl-3 sm:pl-4'>
                            <span className='font-nyght text-xl sm:text-2xl lg:text-[40px] flex gap-2 sm:gap-4 items-center font-[300]'>
                                <GoogleLogo className="w-5 h-5 sm:w-7 sm:h-7 lg:w-auto lg:h-auto shrink-0" /> 4.9
                            </span>
                            <span className='font-nyght text-xs sm:text-sm lg:text-20 font-[300] block text-text-primary'>
                                Google Ratings
                            </span>
                        </div>
                    </div>
                    <div className='relative overflow-hidden rounded-[8px] w-full'>
                        <Image
                            src={`/Images/griditemwomen.png`}
                            alt={`Satisfied Patients`}
                            width={1000}
                            height={1000}
                            className='w-full h-auto object-cover'
                        />
                        <BgGradient className='inset-0 left-[-150] w-[300px] top-[-100] h-[400px] rotate-0 blur-[50px] bg-[#B8E3DB] pointer-events-none' />
                        <div className='absolute inset-0 z-[10] pt-[28%] sm:pt-[35%] pl-3 sm:pl-4'>
                            <span className='font-nyght text-xl sm:text-2xl lg:text-[40px] flex gap-2 sm:gap-4 items-center font-[300]'>
                                20k +
                            </span>
                            <span className='font-nyght text-xs sm:text-sm lg:text-20 font-[300] block text-text-primary'>
                                Satisfied Patients
                            </span>
                        </div>
                    </div>
                    <Image
                        src={`/Images/griditem2.png`}
                        alt={`grid-item-4`}
                        width={1000}
                        height={1000}
                        className='w-full lg:w-[270px] h-full row-span-2 object-cover rounded-xl'
                    />
                </div>
            </div>
        </section>
    )
}

export default Testimonials
