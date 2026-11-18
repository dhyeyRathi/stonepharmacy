"use client"
import React from 'react'
import { BlueGradient, PurpleGradient, SkinGradient, WhiteGradient } from '../ui/Gradients'
import Image from 'next/image'
import RedUnderline from '../Icons/RedUnderline'
import Button from '../Button'
import RedCircle from '../Icons/RedCircle'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Characterstics from '../Characterstics'

const Hero = () => {
    const banners = [
        {
            image: "/Images/family.webp",
            searchBar: true,
            multiGrad: true,
            markup: "underline",
            marukupCoords: "",
            mainText: "Feel Better Faster With Expert Care When You Need It",
            subText: "Skip the long waits and get professional medical advice quickly and discreetly. Start your online consultation today and take control of your health.",
            delay: "0s"
        },
        {
            image: "/Images/coughing.webp",
            searchBar: false,
            multiGrad: false,
            markup: "circle",
            marukupCoords: "140px",
            mainText: "Beat The Cough & Flu With Fast, Expert Care",
            subText: "Get personalized treatment and relief quickly with our online consultation — no waiting, just healing.",
            delay: "-12s"
        },
        {
            image: "/Images/couple.webp",
            searchBar: false,
            multiGrad: false,
            markup: "underline",
            marukupCoords: "",
            mainText: "Your Health, Our Priority - Safe Travels Start Here  ",
            subText: "We provide expert advice and tailored care to ensure you stay healthy and protected during your travels.",
            delay: "-8s"
        },
        {
            image: "/Images/women.webp",
            searchBar: false,
            multiGrad: false,
            markup: "circle",
            marukupCoords: "200px",
            mainText: "Achieve Your Weight Loss Goals With Our Support",
            subText: "Start your online consultation today and get personalized weight loss guidance, fast and discreetly.",
            delay: "-4s"
        }
    ]

    return (
        <section className='flex flex-col w-full lg:w-auto relative gap-6 sm:gap-8 lg:gap-[20px] '>
            <div className='relative w-full mx-auto xl:w-[1320px] self-center
             sm:min-h-[420px] lg:h-[467px] overflow-hidden rounded-12 flex'>
                <Swiper
                    className='w-full h-full'
                    slidesPerView={1}
                    spaceBetween={20}
                >
                    <SwiperSlide className='relative h-full'>
                        <div className='h-full w-full relative'>
                            {banners.map((banner, index: number) => (
                                <div
                                    className='animate-hero-fade absolute inset-0'
                                    style={{ animationDelay: banner.delay }}
                                    key={index}
                                >
                                    <div className='w-full h-full min-h-[460px] sm:min-h-[420px] lg:h-[467px] overflow-hidden rounded-12 relative isolate px-4 py-5 sm:px-8 sm:py-8 lg:px-30 lg:py-15 flex flex-col justify-center'>
                                        {banner.multiGrad ? (
                                            <div className='overflow-hidden absolute inset-0 z-[-1] left-[-100px] pointer-events-none'>
                                                <Image
                                                    src={banner.image}
                                                    alt='Hero Background'
                                                    className='w-full xl:w-auto h-full ml-auto object-cover object-right'
                                                    width={1000}
                                                    height={1000}
                                                    priority={index === 0}
                                                />
                                                <WhiteGradient className='left-[-350px] inset-y-0 opacity-2 lg:opacity-98' />
                                                <SkinGradient className='left-[-200px] top-[-300px] z-2 opacity-2 lg:opacity-98' />
                                                <BlueGradient className='left-[-200px] bottom-[-350px] z-2 rotate-10 ' />
                                                <PurpleGradient className='blur-[100px] right-[-300px] top-[-300px] opacity-30' />
                                            </div>
                                        ) : (
                                            <div className='overflow-hidden absolute inset-0 z-[-1] left-[-100px] pointer-events-none'>
                                                <Image
                                                    src={banner.image}
                                                    alt='Hero Background'
                                                    className='w-full xl:w-auto h-full ml-auto object-cover object-right'
                                                    width={1000}
                                                    height={1000}
                                                />
                                                <WhiteGradient className='left-[-350px] top-[-50px] opacity-2 lg:opacity-98' />
                                                <SkinGradient className='left-[-100px] top-[-200px] z-2' />
                                                <PurpleGradient className='blur-[100px] right-[-300px] top-[-300px] opacity-30' />
                                            </div>
                                        )}

                                        <div className='w-full lg:w-[50%] flex flex-col gap-3 sm:gap-4 lg:gap-24 relative z-10 bg-white/80 sm:bg-white/60 lg:bg-transparent backdrop-blur-xs lg:backdrop-blur-none p-4 sm:p-6 lg:p-0 rounded-2xl lg:rounded-none'>
                                            {index === 0 ? <h1 className='font-nyght font-[600] text-xl sm:text-2xl lg:text-36 text-text-primary relative leading-tight'>
                                                {banner.mainText}
                                                {banner.markup === "underline" ? (
                                                    <RedUnderline className="max-w-full" />
                                                ) : (
                                                    <RedCircle
                                                        className='absolute top-[-10px] hidden lg:block pointer-events-none'
                                                        style={{ left: banner.marukupCoords }}
                                                    />
                                                )}
                                            </h1> : <h2 className='font-nyght font-[600] text-xl sm:text-2xl lg:text-36 text-text-primary relative leading-tight'>
                                                {banner.mainText}
                                                {banner.markup === "underline" ? (
                                                    <RedUnderline className="max-w-full" />
                                                ) : (
                                                    <RedCircle
                                                        className='absolute top-[-10px] hidden lg:block pointer-events-none'
                                                        style={{ left: banner.marukupCoords }}
                                                    />
                                                )}
                                            </h2>}
                                            <p className='text-xs sm:text-sm lg:text-18 font-poppins font-[300] text-text-secondary leading-relaxed'>
                                                {banner.subText}
                                            </p>
                                            {banner.searchBar ? (
                                                <div className='flex flex-col gap-2.5 sm:gap-3 lg:gap-24'>
                                                    <div className='flex border border-[#BABABA] bg-background rounded-[16px] overflow-hidden p-1 sm:p-1.5 lg:p-0'>
                                                        <input
                                                            className='w-full py-2 sm:py-2.5 lg:py-10 pr-2 pl-3 sm:pl-4 lg:pl-12 outline-none font-poppins text-xs sm:text-sm lg:text-16 bg-transparent'
                                                            placeholder='Search Conditions (e.g stomach ache)'
                                                        />
                                                        <Button className='font-[600] shrink-0 text-xs sm:text-sm lg:text-16 py-1.5 px-3 sm:px-4 lg:py-10 lg:px-24'>
                                                            Search
                                                        </Button>
                                                    </div>
                                                    <p className='text-xs sm:text-sm lg:text-16'>
                                                        or <a className='link cursor-pointer'>view all conditions</a>
                                                    </p>
                                                </div>
                                            ) : (
                                                <Button className='self-start mt-2 sm:mt-4 lg:mt-12 text-xs sm:text-sm lg:text-16'>
                                                    Book Now
                                                </Button>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </SwiperSlide>
                    {banners.map((banner, index: number) => (
                        <SwiperSlide key={index} className='h-full'>
                            <div className='w-full h-full min-h-[460px] sm:min-h-[420px] lg:h-[467px] overflow-hidden rounded-12 relative isolate px-4 py-5 sm:px-8 sm:py-8 lg:px-30 lg:py-15 flex flex-col justify-center'>
                                {banner.multiGrad ? (
                                    <div className='overflow-hidden absolute inset-0 z-[-1] left-[-100px] pointer-events-none'>
                                        <Image
                                            src={banner.image}
                                            alt='Hero Background'
                                            className='w-full xl:w-auto h-full ml-auto object-cover object-right'
                                            width={1000}
                                            height={1000}
                                        />
                                        <WhiteGradient className='left-[-350px] inset-y-0 opacity-2 lg:opacity-98' />
                                        <SkinGradient className='left-[-200px] top-[-300px] z-2 opacity-2 lg:opacity-98' />
                                        <BlueGradient className='left-[-200px] bottom-[-350px] z-2 rotate-10 ' />
                                        <PurpleGradient className='blur-[100px] right-[-300px] top-[-300px] opacity-30' />
                                    </div>
                                ) : (
                                    <div className='overflow-hidden absolute inset-0 z-[-1] left-[-100px] pointer-events-none'>
                                        <Image
                                            src={banner.image}
                                            alt='Hero Background'
                                            className='w-full xl:w-auto h-full ml-auto object-cover object-right'
                                            width={1000}
                                            height={1000}
                                        />
                                        <WhiteGradient className='left-[-350px] top-[-50px] opacity-2 lg:opacity-98' />
                                        <SkinGradient className='left-[-100px] top-[-200px] z-2' />
                                        <PurpleGradient className='blur-[100px] right-[-300px] top-[-300px] opacity-30' />
                                    </div>
                                )}
                                <div className='w-full lg:w-[50%] flex flex-col gap-3 sm:gap-4 lg:gap-24 relative z-10 bg-white/80 sm:bg-white/60 lg:bg-transparent backdrop-blur-xs lg:backdrop-blur-none p-4 sm:p-6 lg:p-0 rounded-2xl lg:rounded-none'>
                                    <h2 className='font-nyght font-[600] text-xl sm:text-2xl lg:text-36 text-text-primary relative leading-tight'>
                                        {banner.mainText}
                                        {banner.markup === "underline" ? (
                                            <RedUnderline className="max-w-full" />
                                        ) : (
                                            <RedCircle
                                                className='absolute top-[-10px] hidden lg:block pointer-events-none'
                                                style={{ left: banner.marukupCoords }}
                                            />
                                        )}
                                    </h2>
                                    <p className='text-xs sm:text-sm lg:text-18 font-poppins font-[300] text-text-secondary leading-relaxed'>
                                        {banner.subText}
                                    </p>
                                    {banner.searchBar ? (
                                        <div className='flex flex-col gap-2.5 sm:gap-3 lg:gap-24'>
                                            <div className='flex border border-[#BABABA] bg-background rounded-[16px] overflow-hidden p-1 sm:p-1.5 lg:p-0'>
                                                <input
                                                    className='w-full py-2 sm:py-2.5 lg:py-10 pr-2 pl-3 sm:pl-4 lg:pl-12 outline-none font-poppins text-xs sm:text-sm lg:text-16 bg-transparent'
                                                    placeholder='Search Conditions (e.g stomach ache)'
                                                />
                                                <Button className='font-[600] shrink-0 text-xs sm:text-sm lg:text-16 py-1.5 px-3 sm:px-4 lg:py-10 lg:px-24'>
                                                    Search
                                                </Button>
                                            </div>
                                            <p className='text-xs sm:text-sm lg:text-16'>
                                                or <a className='link cursor-pointer'>view all conditions</a>
                                            </p>
                                        </div>
                                    ) : (
                                        <Button className='self-start mt-2 sm:mt-4 lg:mt-12 text-xs sm:text-sm lg:text-16'>
                                            Book Now
                                        </Button>
                                    )}
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>

            <Characterstics />
        </section>
    )
}

export default Hero
