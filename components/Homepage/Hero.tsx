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
            marukupCoords: "260px",
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
            subText: "we provide expert advice and tailored care to ensure you stay healthy and protected during your travels. ",
            delay: "-8s"
        },
        {
            image: "/Images/women.webp",
            searchBar: false,
            multiGrad: false,
            markup: "circle",
            marukupCoords: "320px",
            mainText: "Achieve Your Weight Loss Goals With Our Support",
            subText: "Start your online consultation today and get personalized weight loss guidance, fast and discreetly.",
            delay: "-4s"
        }
    ]
    return (
        <section className=' w-full flex flex-col relative gap-[40px] '>
            <div className=' relative w-full h-[467px] overflow-hidden rounded-12 flex'>
                <Swiper className='w-full h-full'
                    slidesPerView={1}
                    spaceBetween={20}>
                    <SwiperSlide className='relative h-full'>
                        <div className='h-full w-full relative'>
                            {banners.map((banner, index: number) => (
                                <div className='animate-hero-fade absolute inset-0' style={{ animationDelay: banner.delay }} key={index}>

                                    <div className='w-full h-[467px] overflow-hidden rounded-12 relative isolate px-30 py-15 '>
                                        {banner.multiGrad ?
                                            <div className='overflow-hidden absolute inset-0 z-[-1] left-[-100px]'>
                                                <Image src={banner.image} alt='Hero Backround' className='w-auto h-full ml-auto' width={1000} height={1000} />
                                                <WhiteGradient className='left-[-350px] inset-y-0 opacity-98' />
                                                <SkinGradient className='left-[-200px] top-[-300px] z-2' />
                                                <BlueGradient className='left-[-200px] bottom-[-350px] z-2 rotate-10' />
                                                <PurpleGradient className=' blur-[100px] right-[-300px] top-[-300px] opacity-30 ' />
                                            </div> :
                                            <div className='overflow-hidden absolute inset-0 z-[-1] left-[-100px]'>
                                                <Image src={banner.image} alt='Hero Backround' className='w-auto h-full ml-auto' width={1000} height={1000} />
                                                <WhiteGradient className='left-[-350px] top-[-50px]' />
                                                <SkinGradient className='left-[-100px] top-[-200px] z-2' />
                                                <PurpleGradient className=' blur-[100px] right-[-300px] top-[-300px] opacity-30' />
                                            </div>}
                                        <div className='w-[50%] flex flex-col gap-24'>
                                            <h1 className='font-nyght font-[600] text-36 text-text-primary'>
                                                {banner.mainText}
                                                {banner.markup === "underline" ? <RedUnderline /> : <RedCircle className={`absolute top-[50px] `}
                                                    style={{ left: banner.marukupCoords }} />}
                                            </h1>
                                            <p className='text-18 font-poppins font-[300] text-text-secondary'>
                                                {banner.subText}
                                            </p>
                                            {banner.searchBar ? <div className='flex flex-col gap-24'>
                                                <div className='flex border-[1px] border-[#BABABA]  bg-background rounded-[16px]'>
                                                    <input className='w-full py-10 pr-[4px] pl-12 outline-none font-poppins text-16'
                                                        placeholder='Search Conditions (e.g stomach ache)' />
                                                    <Button className='font-[600] '> Search</Button>
                                                </div>
                                                <p className='text-16'>or <a className='link cursor-pointer'>view all conditions</a></p>
                                            </div> :
                                                <Button className='self-start mt-12 '>Book Now</Button>}


                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                    </SwiperSlide>
                    {banners.map((banner, index: number) => (
                        <SwiperSlide key={index} className='h-full'>
                            <div className='w-full h-[467px] overflow-hidden rounded-12 relative isolate px-30 py-15 ' >
                                {banner.multiGrad ?
                                    <div className='overflow-hidden absolute inset-0 z-[-1] left-[-100px]'>
                                        <Image src={banner.image} alt='Hero Backround' className='w-auto h-full ml-auto' width={1000} height={1000} />
                                        <WhiteGradient className='left-[-350px] inset-y-0 opacity-98' />
                                        <SkinGradient className='left-[-200px] top-[-300px] z-2' />
                                        <BlueGradient className='left-[-200px] bottom-[-350px] z-2 rotate-10' />
                                        <PurpleGradient className=' blur-[100px] right-[-300px] top-[-300px] opacity-30 ' />
                                    </div> :
                                    <div className='overflow-hidden absolute inset-0 z-[-1] left-[-100px]'>
                                        <Image src={banner.image} alt='Hero Backround' className='w-auto h-full ml-auto' width={1000} height={1000} />
                                        <WhiteGradient className='left-[-350px] top-[-50px]' />
                                        <SkinGradient className='left-[-100px] top-[-200px] z-2' />
                                        <PurpleGradient className=' blur-[100px] right-[-300px] top-[-300px] opacity-30' />
                                    </div>}
                                <div className='w-[50%] flex flex-col gap-24'>
                                    <h1 className='font-nyght font-[600] text-36 text-text-primary'>
                                        {banner.mainText}
                                        {banner.markup === "underline" ? <RedUnderline /> : <RedCircle className={`absolute top-[50px] `}
                                            style={{ left: banner.marukupCoords }} />}
                                    </h1>
                                    <p className='text-18 font-poppins font-[300] text-text-secondary'>
                                        {banner.subText}
                                    </p>
                                    {banner.searchBar ? <div className='flex flex-col gap-24'>
                                        <div className='flex border-[1px] border-[#BABABA]  bg-background rounded-[16px]'>
                                            <input className='w-full py-10 pr-[4px] pl-12 outline-none font-poppins text-16'
                                                placeholder='Search Conditions (e.g stomach ache)' />
                                            <Button className='font-[600] '> Search</Button>
                                        </div>
                                        <p className='text-16'>or <a className='link cursor-pointer'>view all conditions</a></p>
                                    </div> :
                                        <Button className='self-start mt-12 '>Book Now</Button>}


                                </div>
                            </div>
                        </SwiperSlide>

                    ))}
                </Swiper>
            </div>

            <Characterstics />


        </section >
    )
}


export default Hero